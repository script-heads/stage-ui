import PrefPanel from '@flow-ui/architect/src/PrefPanel'
import RenderPanel from '@flow-ui/architect/src/RenderPanel'
import TreePanel from '@flow-ui/architect/src/TreePanel'
import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import React from 'react'
import createStyles from './styles'
import { useFlow, Flexbox } from '@flow-ui/core'

class Architect extends React.Component {
    constructor(props: {}) {
        super(props)
        this.init(require('./demoData').default)
    }
    private init(items: Architect) {
        this.items = require('./demoData').default
        // Add parent links
        const recursive = (items: ArchitectItem[]) => {
            items?.forEach(item => {
                if (Array.isArray(item.children)) {
                    for (let child of item.children) {
                        child.parent = item
                    }
                    recursive(item.children)
                }
            })
        }
        recursive(this.items)
    }
    private items: ArchitectItem[] = []
    private clearDirtyRecords() {
        const recursive = (items?: ArchitectItem[]) =>
            items?.filter(item => {
                item.children = recursive(item.children)
                return !item.$.dirty
            })
        this.items = recursive(this.items) as ArchitectItem[]
    }
    public tools: ArchitectTools = {
        captured: null,
        focused: null,
        target: null,
        getItems: () => this.items,
        move: () => {
            const moveTool = {
                captured: this.tools.captured,
                target: this.tools.target,
            }
            const checkSelfDrop = (parent?: ArchitectItem) => {
                if (!parent) {
                    return true
                }
                if (parent.id === moveTool.captured.id) {
                    return false
                }
                return checkSelfDrop(parent.parent)                            
            }
            if (moveTool.captured) {
                if (moveTool.target) {
                    if (moveTool.captured.id === moveTool.target.id) {
                        return
                    }
                    if (!checkSelfDrop(moveTool.target.parent)) {
                        return
                    }
                    if (!moveTool.target?.children) {
                        if (moveTool.target?.parent) {
                            moveTool.target = moveTool.target.parent
                        }
                    }
                }
                if (!moveTool.target) {
                    moveTool.target = void 0
                }
                (moveTool.target?.children || this.items).push({
                    ...this.tools.captured, 
                    parent: moveTool.target,
                    $: {}
                })
                this.tools.target = null
                this.tools.remove()
            }
        },
        update: () => {
            this.forceUpdate()
        },
        remove: () => {
            if (this.tools.captured) {
                this.tools.captured.$.dirty = true
                this.clearDirtyRecords()
                this.tools.update()
            }
        },
        // TODO:
        undo: () => void 0,
        redo: () => void 0,
    }

    render() {
        return (
            <ArchitectView tools={this.tools} />
        )
    }
} 

const ArchitectView = (props: { tools: ArchitectTools}) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)

    return (
        <Flexbox css={styles.container} mt="5rem">
            <TreePanel tools={props.tools} />
            <RenderPanel tools={props.tools} />
            <PrefPanel tools={props.tools} /> 
        </Flexbox>
    )
}

export default Architect