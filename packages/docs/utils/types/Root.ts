import Abstract from './Abstract'
import { OChild } from '.'
import Interface from './Interface'
import Module from './Module'
import Alias from './Alias'

/**
 * Just root
 */
class Root extends Abstract {
    static instance: Root
    static getInstance() {
        if (!this.instance) {
            this.instance = new Root()
        }
        return this.instance
    }
    constructor() {
        super(
            //@ts-ignore
            require('../../public/definitions/original.json') as OChild
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
        const child = Root.getInstance().$data.children.find(c => c.id === id) as OChild
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
                case this.$kinds.INTERFACE: return new Interface(child, module)
                case this.$kinds.TYPE_ALIAS: return new Alias(child, module)
                case this.$kinds.INTERFACE: return new Module(child, this)
            }
        }
        return null
    }
    /**
     * List of all modules
     */
    private moduleStorage: Module[] = []
    get modules() {
        return this.storageReturnHelper(this, 'moduleStorage', [this.$kinds.MODULE], Module)
    }
}

export default Root