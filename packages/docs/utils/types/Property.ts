import { OChild, OType, OTypeIntrinsic, OTypeUnion, OTypeReference } from '.'
import Abstract from './Abstract'
import Interface from './Interface'

/**
 * Class for Interfaces
 */
export class Property extends Abstract {
    interface: Interface
    type: OType['type']
    constructor(child: OChild, _interface: Interface) {
        super(child)
        if (child.kind !== this.$kinds.PROP) {
            console.error(`Doc: child(${child.id}) with kind ${child.kind} is not a Property!`)
            return
        }
        this.interface = _interface
        this.type = child.type.type

    }

    /**
     * Possible values of current property
     */
    get value() {
        /**
         * Try finding actual value in current Module
         */
        if (this.$data.type.type === 'indexedAccess') {
            const index = this.findIndexedType(this.$data.type.objectType.name, this.$data.type.indexType.value)
            if (index) {
                this.$data = index
            }
        }
        if (this.$data.type.type === 'reference') {
            if (this.$data.type.id) {
                this.$data.type.getReference = () => {
                    const type = this.$data.type as OTypeReference
                    if (type.id) {
                        return this.interface.module.root.find(type.id)
                    }
                    return null
                }
            }
        }
        // if (this.$data.type.type === 'reflection') {
        //     if (this.$data.type.declaration) {
               
        //     }
        // }
        /**
         * Fix union types
         */
        if (this.$data.type.type == 'union') {
            this.unionVoidRemove(this.$data.type)
            this.unionOptionalBooleanConvert(this.$data.type)
            return this.$data.type
        }
        /**
         * Always return an array
         */
        return this.$data.type
    }

    /**
     * Resolve indexed type
     */
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
        const intrinsic = type.types as OTypeIntrinsic[]
        if (intrinsic && intrinsic[0].name === 'undefined') {
            type.types = type.types.slice(1)
        }
    }
    
    /**
     * Replaces optional boolean (undefined|true|false)
     * into single boolean value
     */
    private unionOptionalBooleanConvert(type: OTypeUnion) {
        const intrinsic = type.types as OTypeIntrinsic[]
        if (intrinsic && intrinsic.length === 2) {
            if (intrinsic[0].name === 'false' && intrinsic[1].name === 'true') {
                type.types = [{
                    type: 'intrinsic',
                    name: 'boolean',
                }]
            }
        }
    }
}

export default Property