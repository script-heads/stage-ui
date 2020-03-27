const KIND_MODULE = 0x2
const KIND_GROUP = 0x20
const KIND_INTERFACE = 0x100
const KIND_PROP = 0x400
const KIND_TYPE_LITERAL = 0x10000
const KIND_TYPE_PARAMETER = 0x200000
const KIND_TYPE_ALIAS = 0x400000

type OFlags = {
    isExported?: boolean
    isExternal?: boolean
    isOptional?: boolean
}
type OType = OTypeUnion
    | OTypeStringLiteral
    | OTypeIntrinsic
    | OTypeReference
    | OTypeReflection
    | OTypeAlias
    | OTypeIndexedAccess

type OTypeUnion = {
    type: 'union'
    types:  OTypeIntrinsic[]
}
type OTypeIntrinsic = {
    type: 'intrinsic'
    name: 'undefined' | 'true' | 'false' | 'boolean' | 'number' | 'string'
}
type OTypeStringLiteral = {
    type: 'stringLiteral'
    value: string
}
type OTypeReference = {
    type: 'reference'
    id: number
    name: string
}
type OTypeReflection = {
    type: 'reflection'
    declaration: OChild
}
type OTypeIndexedAccess = {
    type: 'indexedAccess'
    objectType: {
        type: 'reference'
        name: string
    }
    indexType: {
        type: 'stringLiteral'
        value: 'disabled'
    }
}
type OTypeAlias = {
    id: number
    name: string
    type: OType
    kind: 0x400000
    kindString: 'Type alias'
    flags: OFlags
    typeParameter: OTypeParameter[]
}
type OTypeParameter = {
    id: number
    name: string
    type: OType
    kind: 0x200000
    kindString: 'Type parameter'
    flags: OFlags
}
type OGroup = {
    title: string
    kind: number
    children: number[]
}
type OChild = {
    id: number
	name: string
    kind: number
    kindString?: string
    comment?: string | { shortText?: string, tags?: Record<string,string> }
    tags?: Record<string, string>
    flags: OFlags
    type: OType
    groups?: OGroup[]
	children: OChild[]
}

/**
 * Abstract class for any Child element
 */
class FabricAbscract {
    _data: OChild
    id: OChild['id']
    name: OChild['name']
    flags: OChild['flags']
    comment: OChild['comment']
    tags: OChild['tags']

    constructor(child: OChild, _module?: any) {
        this._data = child
        this.id = child.id
        this.name = child.name
        this.flags = child.flags
        if (this._data.comment) {
            if (typeof this._data.comment === 'string') {
                this.comment = this._data.comment
            } else {
                this.comment = this._data.comment.shortText
                this._data.tags = this._data.comment.tags
            }
        }
    }
    /**
     * Helps caching and finding elements
     */
    _storageReturnHelper<R extends new (...args: any) => any, S>(
        self: S,
        storageId: string,
        kinds: number[],
        Prototype: R): InstanceType<R>[] {

        if (self[storageId].length === 0) {
            const groupInterfaces = self['_data'].groups?.find(g => kinds.includes(g.kind))
            if (groupInterfaces) {
                self[storageId] = groupInterfaces.children.map(child =>
                    new Prototype(
                        self['_data'].children.find(c => c.id === child) as OChild,
                        self
                    )
                )
            }
        }

        return self[storageId]
    }
}

/**
 * Just root
 */
class DocTypeFabric extends FabricAbscract {
    static instance: DocTypeFabric
    static getInstance() {
        if (!this.instance) {
            this.instance = new DocTypeFabric()
        }
        return this.instance
    }
    constructor() {
        super(
            require('./definitions/original.json') as OChild
        )
    }
    static findChildById(id: number) {
        const child = DocTypeFabric.getInstance()._data.children.find(c => c.id === id) as OChild
        if (child) {
            return child
        } else {
            return null
        }
    }
    /**
     * List of all modules
     */
    private moduleStorage: Module[] = []
    get modules() {
        return this._storageReturnHelper(this, 'moduleStorage', [KIND_MODULE], Module)
    }
}

/**
 * Class for Modules
 */
class Module extends FabricAbscract {
    constructor(child: OChild) {
        super(child)
        if (child.kind !== KIND_MODULE) {
            console.error(`Doc: child(${child.id}) with kind ${child.kind} is not a Module!`)
            return
        }
    }

    /**
     * List of all interfaces
     */
    private interfaceStorage: Interface[] = []
    get interfaces() {
        return this._storageReturnHelper(this, 'interfaceStorage', [KIND_INTERFACE], Interface)
    }
    /**
     * List of all type aliaces
     */
    private aliaseStorage: Prop[] = []
    get aliases() {
        return this._storageReturnHelper(this, 'aliaseStorage', [KIND_TYPE_ALIAS], Alias)
    }
    /**
     * Find reference by its name
     */
    findReferenceByName(childName: string) {
        const child = this._data.children.find(i => i.name === childName)
        if (child) {
            switch(child.kind) {
                case KIND_INTERFACE: return new Interface(child, this)
                case KIND_TYPE_ALIAS: return new Alias(child, this)
            }
        }
        return null
    }
}

/**
 * Class for Interfaces
 */
class Interface extends FabricAbscract {
    module: Module
    constructor(child: OChild,  _module: Module) {
        super(child)
        if (child.kind !== KIND_INTERFACE) {
            console.error(`Doc: child(${child.id}) with kind ${child.kind} is not an Interface!`)
            return
        }
        this.module = _module
    }

    /**
     * List of all props
     */
    private propStorage: Prop[] = []
    get props() {
        return this._storageReturnHelper(this, 'propStorage', [KIND_PROP], Prop)
    }
}

/**
 * Class for TypeAliases
 */
class Alias extends FabricAbscract {
    module: Module
    constructor(child: OChild,  _module: Module) {
        super(child)
        if (child.kind !== KIND_TYPE_ALIAS) {
            console.error(`Doc: child(${child.id}) with kind ${child.kind} is not an Alias!`)
            return
        }
        this.module = _module
    }
}

/**
 * Class for Interfaces
 */
class Prop extends FabricAbscract {
    interface: Interface
    type: OType['type']
    constructor(child: OChild, _interface: Interface) {
        super(child)
        if (child.kind !== KIND_PROP) {
            console.error(`Doc: child(${child.id}) with kind ${child.kind} is not a Property!`)
            return
        }
        this.interface = _interface
        this.type = child.type.type
        if (child.type.type === 'reference') {
            const reference = DocTypeFabric.findChildById(child.type.id)
            if (reference) {
                super(reference)
                this.type = reference.type.type
            }
        }
    }
    private findIndexedType(objectType: string, indexType: string) {
        /**
         * Searching object at current Module
         */
        for (const i of this.interface.module._data.children) {
            if (i.name === objectType) {
                /**
                 * Seaching prop of Interface
                 */
                for (const p of i.children) {
                    if (p.name === indexType) {
                        return p
                    }
                }
            }
        }
        return null
    }
    /**
     * Removes undefined from union array
     */
    private unionVoidRemove(type: OTypeUnion) {
        if (type.types && type.types[0].name === 'undefined') {
            type.types = type.types.slice(1)
        }
    }
    /**
     * Replaces optional boolean (undefined|true|false)
     * into single boolean value
     */
    private unionOptionalBooleanConvert(type: OTypeUnion) {
        if (type.types && type.types.length === 2) {
            if (type.types[0].name === 'false' && type.types[1].name === 'true') {
                type.types = [{
                    type: 'intrinsic',
                    name: 'boolean',
                }]
            }
        }
    }
    get text() {
        if (this._data.type.type === 'reflection') {
            this._data.type.declaration.children.map(child => {
                /**
                 * Try finding actual value in current Module
                 */                
                if (child.type.type === 'indexedAccess') {
                    const prop = this.findIndexedType(child.type.objectType.name, child.type.indexType.value)
                    if (prop) {
                        child = prop
                    }
                }
                /**
                 * Replace reference link to actual object
                 */
                if (child.type.type === 'reference') {
                    const referenceName = child.type.name.split('.')
                    console.log(referenceName)

                    if (referenceName.length === 2) {
                        const refModule = DocType.modules.find(m => m.name === referenceName[0])
                        if (refModule && refModule.interfaces) {
                            const refObject = refModule.findReferenceByName(referenceName[1])
                            if (refObject) {
                                return refObject
                            }
                        } else {
                            console.warn(`unhandled referenece ${child.type.name}! code 2`)
                        }
                    } else {                        
                        console.log(child.type)
                    }
                }
                if (child.type.type === 'union') {
                    this.unionVoidRemove(child.type)
                    this.unionOptionalBooleanConvert(child.type)

                    return child.type
                }
            })
        } else {
            console.log(this._data.type.type)
        }
        return ''
    }

}

const DocType = DocTypeFabric.getInstance()

export default DocType