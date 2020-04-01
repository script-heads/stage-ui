const KIND_MODULE = 0x2
const KIND_GROUP = 0x20
const KIND_INTERFACE = 0x100
const KIND_PROP = 0x400
const KIND_TYPE_LITERAL = 0x10000
const KIND_TYPE_PARAMETER = 0x200000
const KIND_TYPE_ALIAS = 0x400000

export type OFlags = {
    isExported?: boolean
    isExternal?: boolean
    isOptional?: boolean
}
export type OType = OTypeUnion
    | OTypeStringLiteral
    | OTypeIntrinsic
    | OTypeReference
    | OTypeReflection
    | OTypeAlias
    | OTypeIndexedAccess

export type OTypeUnion = {
    type: 'union'
    types: OTypeIntrinsic[]
}
export type OTypeIntrinsic = {
    type: 'intrinsic'
    name: 'undefined' | 'true' | 'false' | 'boolean' | 'number' | 'string' | 'any' | 'unknown' | 'void'
}
export type OTypeStringLiteral = {
    type: 'stringLiteral'
    value: string
}
export type OTypeReference = {
    type: 'reference'
    id: number
    name: string
}
type OTypeReflection = {
    type: 'reflection'
    declaration: OChild
}
export type OTypeIndexedAccess = {
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
export type OTypeAlias = {
    id: number
    name: string
    type: OType
    kind: 0x400000
    kindString: 'Type alias'
    flags: OFlags
    typeParameter: OTypeParameter[]
}
export type OTypeParameter = {
    id: number
    name: string
    type: OType
    kind: 0x200000
    kindString: 'Type parameter'
    flags: OFlags
}
export type OGroup = {
    title: string
    kind: number
    children: number[]
}
export type OChild = {
    id: number
    name: string
    kind: number
    kindString?: string
    comment?: string | { shortText?: string, tags?: Record<string, string> }
    tags?: Record<string, string>
    flags: OFlags
    type: OType
    groups?: OGroup[]
    children: OChild[]
    extendedTypes?: OChild[]
    inheritedFrom?: OChild
}

/**
 * Abstract class for any Child element
 */
abstract class Abstract {
    $data: OChild
    id: OChild['id']
    name: OChild['name']
    flags: OChild['flags']
    tags: OChild['tags']
    comment: string
    
    constructor(child: OChild, _module?: any) {

        this.$data = child
        this.id = child.id
        this.name = child.name
        this.flags = child.flags
        this.comment = ''
        if (this.$data.comment) {
            if (typeof this.$data.comment === 'string') {
                this.comment = this.$data.comment
            } else {
                this.comment = this.$data.comment.shortText || ''
                this.$data.tags = this.$data.comment.tags
            }
        }
    }

    /**
     * Find any child by its id.
     */
    find(id: number, item = this.$data): OChild | null {
        if (item.id === id) return item
        if (item.children) {
            for (let child of item.children) {
                let res = this.find(id, child)
                if (res) return res
            }
        }
        return null
    }

    /**
     * Helps caching and finding elements
     */
    protected storageReturnHelper<R extends new (...args: any) => any, S>(
        self: S,
        storageId: string,
        kinds: number[],
        Prototype: R,
        filter?: (item: InstanceType<R>) => boolean): InstanceType<R>[] {

        if (self[storageId].length === 0) {
            const groupInterfaces = self['$data'].groups?.find(g => kinds.includes(g.kind))
            if (groupInterfaces) {
                self[storageId] = groupInterfaces.children.map(child =>
                    new Prototype(
                        self['$data'].children.find(c => c.id === child) as OChild,
                        self
                    )
                )
                if (filter) {
                    self[storageId] = self[storageId].filter(filter)
                }
            }
        }

        return self[storageId]
    }
}

/**
 * Just root
 */
class DocType extends Abstract {
    static instance: DocType
    static getInstance() {
        if (!this.instance) {
            this.instance = new DocType()
        }
        return this.instance
    }
    constructor() {
        super(
            require('./definitions/original.json') as OChild
        )
    }

    /**
     * Get module by its name
     */
    findModule(name: string) {
        return this.modules.find(
            child => child.name === name
        ) || null
    }

    static findReferenceById(id: number) {
        const child = DocType.getInstance().$data.children.find(c => c.id === id) as OChild
        if (child) {
            return child
        } else {
            return null
        }
    }
    /**
     * Find reference by its name
     */
    findReferenceByName(childName: string, module: Module) {
        const child = this.$data.children.find(i => i.name === childName)
        if (child) {
            switch (child.kind) {
                case KIND_INTERFACE: return new Interface(child, module)
                case KIND_TYPE_ALIAS: return new Alias(child, module)
                case KIND_INTERFACE: return new Module(child, this)
            }
        }
        return null
    }
    /**
     * List of all modules
     */
    private moduleStorage: Module[] = []
    get modules() {
        return this.storageReturnHelper(this, 'moduleStorage', [KIND_MODULE], Module)
    }
}

/**
 * Class for Modules
 */
export class Module extends Abstract {
    root: DocType

    constructor(child: OChild, _root: DocType) {
        super(child)
        if (child.kind !== KIND_MODULE) {
            console.error(`Doc: child(${child.id}) with kind ${child.kind} is not a Module!`)
            return
        }
        this.root = _root
    }

    /**
     * Get inreface by its name
     */
    findInterface(name: string) {
        return this.interfaces.find(
            child => child.name === name
        ) || null
    }

    /**
     * List of all interfaces
     */
    private interfaceStorage: Interface[] = []
    get interfaces() {
        return this.storageReturnHelper(this, 'interfaceStorage', [KIND_INTERFACE], Interface)
    }
    /**
     * List of all type aliaces
     */
    private aliaseStorage: Alias[] = []
    get aliases() {
        return this.storageReturnHelper(this, 'aliaseStorage', [KIND_TYPE_ALIAS], Alias)
    }
    /**
     * Find reference by its name
     */
    findReferenceByName(childName: string) {
        const child = this.$data.children.find(i => i.name === childName)
        if (child) {
            switch (child.kind) {
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
export class Interface extends Abstract {
    module: Module
    constructor(child: OChild, _module: Module) {
        super(child)
        if (child.kind !== KIND_INTERFACE) {
            console.error(`Doc: child(${child.id}) with kind ${child.kind} is not an Interface!`)
            return
        }
        this.module = _module
    }

    /**
     * Get property by its name
     */
    findProperty(name: string) {
        return this.types.find(
            child => child.name === name
        ) || null
    }

    /**
     * List of all types
     */
    private typeStorage: Property[] = []
    get types() {
        return this.storageReturnHelper(this, 'typeStorage', [KIND_PROP], Property, (item) => {
            if (item.$data.inheritedFrom) {
                return false
            }
            return true
        })
    }
    private extendedTypeStorage: Interface[]
    get extendedTypes() {
        if (this.extendedTypeStorage) {
            return this.extendedTypeStorage
        }
        this.extendedTypeStorage = []
        if (this.$data.extendedTypes) {
            for (const type of this.$data.extendedTypes) {
                const found = this.module.root.find(type.id)
                if (found && found.kind === KIND_INTERFACE) {
                    this.extendedTypeStorage.push(
                        new Interface(found, this.module)
                    )
                }
            }
        }
        return this.extendedTypeStorage
    }
}

/**
 * Class for TypeAliases
 */
export class Alias extends Abstract {
    module: Module
    constructor(child: OChild, _module: Module) {
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
export class Property extends Abstract {
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

    }
    protected get reference() {
        if (this.$data.type.type === 'reference') {
            const reference = DocType.findReferenceById(this.$data.type.id)
            if (reference) {
                return reference.type
            }
        }
    }

    get value() {
        // if (this.$data.type.type === 'reference') {
        //     const reference = DocType.findReferenceById(this.$data.type.id)
        //     if (reference) {
        //         return Object.assign({}, this.$data.type, reference.type)
        //     }
        // }
        if (this.$data.type.type == 'union') {
            this.unionVoidRemove(this.$data.type)
            this.unionOptionalBooleanConvert(this.$data.type)
            return this.$data.type.types
        }
        if (this.$data.type.type == 'intrinsic') {
            return [this.$data.type]
        }
        return null
        // return this.$data.type
    }

    private findIndexedType(objectType: string, indexType: string) {
        /**
         * Searching object at current Module
         */
        for (const i of this.interface.module.$data.children) {
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
    // private resolveTypes() {
    //     if (this.$data.type.type === 'reflection') {
    //         this.$data.type.declaration.children = this.$data.type.declaration.children.map(child => {
    //             /**
    //              * Try finding actual value in current Module
    //              */
    //             if (child.type.type === 'indexedAccess') {
    //                 const prop = this.findIndexedType(child.type.objectType.name, child.type.indexType.value)
    //                 if (prop) {
    //                     child = prop
    //                 }
    //             }
    //             /**
    //              * Replace reference link to actual object
    //              */
    //             if (child.type.type === 'reference') {
    //                 const referenceName = child.type.name.split('.')

    //                 if (referenceName.length === 2) {
    //                     const refModule = DocType.modules.find(m => m.name === referenceName[0])
    //                     if (refModule && refModule.interfaces) {
    //                         const refObject = refModule.findReferenceByName(referenceName[1])
    //                         if (refObject) {
    //                             return refObject
    //                         }
    //                     } else {
    //                         console.warn(`unhandled referenece ${child.type.name}! code 2`)
    //                     }
    //                 } else {
    //                     const refObject = this.interface.module.root.findReferenceByName(
    //                         child.type.name,
    //                         this.interface.module
    //                     )
    //                     if (refObject) {
    //                         return refObject
    //                     }
    //                 }
    //             }

    //             if (child.type.type === 'union') {
    //                 this.unionVoidRemove(child.type)
    //                 this.unionOptionalBooleanConvert(child.type)

    //                 return child.type
    //             }
    //             return child
    //         })
    //     }
    // }

    // get text() {
    //     // this.resolveTypes()
    //     //@ts-ignore
    //     window.a = this
    //     return ''
    // }

}

export default DocType.getInstance()