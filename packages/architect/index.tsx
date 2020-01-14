import PrefPanel from '@flow-ui/architect/src/PrefPanel'
import RenderPanel from '@flow-ui/architect/src/RenderPanel'
import TreePanel from '@flow-ui/architect/src/TreePanel'
import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import { Split } from '@flow-ui/lab'
import React from 'react'
import createStyles from './styles'
import { useFlow } from '@flow-ui/core'

class Constuctor extends React.Component {
    constructor(props: {}) {
        super(props)
        this.items = require('./demoData').default
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
            if (this.tools.captured) {
                if (this.tools.target) {
                    this.tools.target?.children?.push({
                        ...this.tools.captured, $: {}
                    })
                    this.tools.target = null
                } else {
                    this.items.push({
                        ...this.tools.captured, $: {}
                    })
                }
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
        const ArchitectView = () => {
            const { theme } = useFlow()
            const styles = createStyles(theme)
    
            return (
                <Split css={styles.container} direction="row" areaSize={4} positions={[25, 50, 25]}>
                    <TreePanel tools={this.tools} />
                    <RenderPanel tools={this.tools} />
                    <PrefPanel tools={this.tools} />
                </Split>
            )
        }
        return <ArchitectView />
    }
} 
export default Constuctor