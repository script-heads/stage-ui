import { OChild } from '.'

/**
 * Abstract class for any Child element
 */
abstract class Abstract {
    $data: OChild
    id: OChild['id']
    name: OChild['name']
    flags: OChild['flags']
    tags: OChild['tags'] = {}
    comment: string = ''

    protected $kinds = {
        MODULE: 0x2,
        GROUP: 0x20,
        INTERFACE: 0x100,
        PROP: 0x400,
        CALL_SIGNATURE: 0x1000,
        PARAMETER: 0x8000,
        TYPE_LITERAL: 0x10000,
        TYPE_PARAMETER: 0x200000,
        TYPE_ALIAS: 0x400000,
    }
    
    constructor(child: OChild, _?: unknown) {

        this.$data = child
        this.id = child.id
        this.name = child.name
        this.flags = child.flags
        if (this.$data.comment) {
            if (typeof this.$data.comment === 'string') {
                this.comment = this.$data.comment
            } else {
                this.comment = this.$data.comment.shortText || ''
                this.$data.comment.tags?.map(tag => {
                    this.tags[tag.tag] = tag.text
                })
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
    protected storageReturnHelper<R extends new (...args) => unknown, S>(
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

export default Abstract