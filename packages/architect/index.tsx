import PrefPanel from '@flow-ui/architect/src/PrefPanel'
import RenderPanel from '@flow-ui/architect/src/RenderPanel'
import TreePanel from '@flow-ui/architect/src/TreePanel'
import AddPanel from '@flow-ui/architect/src/AddPanel'
import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import React, { Fragment } from 'react'
import styles from './styles'
import { useTheme, Flexbox } from '@flow-ui/core'
import components from './components'

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}

class Architect extends React.Component {
    constructor(props: {}) {
        super(props)
        this.init(require('./demoData').default)
    }

    // componentDidMount() {
    //     window.addEventListener('keydown', this.handleKey.bind(this))
    // }
    // componentWillUnmount() {
    //     window.addEventListener('keydown', this.handleKey.bind(this))
    // }

    // /**
    //  * Handling keyboard events
    //  */
    // handleKey(e: KeyboardEvent) {
    //     switch(e.keyCode) {
    //         //Backspace
    //         case 8: 
    //             this.tools.remove()
    //         break
    //     }
    // }

    /**
     * This method will set items
     * but not rerender em.
     */
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
    /**
     * Is component library panel visible
     */
    private componentLibraryOpen: boolean = false
    /**
     * Store with all items
     */
    private items: ArchitectItem[] = []
    /**
     * Removes all recoreds
     * with $.dirty flag
     */
    private clearDirtyRecords() {
        const recursive = (items?: ArchitectItem[]) =>
            items?.filter(item => {
                item.children = recursive(item.children)
                return !item.$.dirty
            })
        this.items = recursive(this.items) as ArchitectItem[]
    }
    public tools: ArchitectTools = {
        components,
        /**
         * Current dragging element
         */
        captured: null,
        /**
         * Current focused element
         */
        focused: null,
        /**
         * Current target element
         * if captured and mouse over
         */
        target: null,
        /**
         * Will return all structure
         */
        getItems: () => this.items,
        move: () => {
            /**
             * Object need for links
             */
            const shared = {
                captured: this.tools.captured,
                target: this.tools.target,
                targetIndex: this.tools.targetIndex || 0,
            }

            this.tools.target = null
            this.tools.targetIndex = 0

            /**
             * Thats for check if parent
             * not dropped in his childs
             */
            const checkSelfDrop = (parent?: ArchitectItem | null) => {
                if (!parent) {
                    return true
                }
                if (parent.id === shared.captured?.id) {
                    return false
                }
                return checkSelfDrop(parent.parent)                            
            }
            if (shared.captured) {
                if (shared.target) {
                    if (!checkSelfDrop(shared.target.parent)) {
                        return
                    }
                    /**
                     * If there is not children prop
                     * then we'll try push to parent of target
                     */
                    if (!shared.target?.children) {
                        if (shared.target?.parent) {
                            /**
                             * Setting index for correct insert position
                             */
                            shared.target.parent.children?.forEach((child, index) => {
                                if (child.id === shared.target?.id) {
                                    shared.targetIndex = index + 1
                                }
                            })
                            /**
                             * Setting new target
                             */
                            shared.target = shared.target.parent
                        }
                    }
                    /**
                     * Do nothing is element dropped
                     * on itself
                     */
                    if (shared.captured.id === shared.target.id) {
                        return
                    }
                }
                /**
                 * Select root as target if
                 * there is no target
                 */
                const target = shared.target?.children || this.items

                /**
                 * Clone element and
                 * them push to target
                 */
                target.splice(shared.targetIndex, 0, {
                    ...shared.captured, 
                    parent: shared.target,
                    $: {}
                })
                
                /**
                 * replace focused element
                 * if exist
                 */
                if (this.tools.focused?.id === shared.captured?.id) {
                    this.tools.focused = target[shared.targetIndex]
                }
                /**
                 * Clear target and
                 * remove dirty record
                 */
                shared.captured.$.dirty = true
                this.clearDirtyRecords()
                this.tools.update()
            }
        },
        duplicate: () => {
            const parent = this.tools.focused?.parent
            if (parent) {
                for (let index in parent.children) {
                    if (this.tools.focused && this.tools.focused?.id === parent.children[index].id) {
                        parent?.children?.splice(parseInt(index) + 1, 0, {
                            ...this.tools.focused,
                            id: uuid(),
                            $: {},
                            children: this.tools.focused.children ? [] : undefined
                        })
                        this.tools.update()
                        break
                    }
                }
            }
        },
        update: () => {
            this.forceUpdate()
            /**
             * We should clear captured after
             * any updates, was causes 
             * issue with leak an old object
             */
            this.tools.captured = null
        },
        remove: () => {
            if (this.tools.focused) {
                this.tools.focused.$.dirty = true
                this.tools.focused = null
                this.clearDirtyRecords()
                this.tools.update()
            }
        },
        componentLibraryShow: () => {
            this.componentLibraryOpen = true
            this.forceUpdate()
        },
        componentLibraryHide: () => {
            this.componentLibraryOpen = false
            this.forceUpdate()
        },
        /**
         * TODO: Some day
         */
        undo: () => void 0,
        redo: () => void 0,
    }

    render() {
        return (
            <ArchitectView 
                tools={this.tools} 
                componentLibraryOpen={this.componentLibraryOpen}
            />
        )
    }
}

/**
 * That is just for hooks
 */
const ArchitectView = (props: { tools: ArchitectTools, componentLibraryOpen: boolean }) => {
    const theme = useTheme()
    const styles = createStyles(theme)

    return (
        <Fragment>
            <Flexbox css={styles.container}>
                <TreePanel tools={props.tools} />
                <RenderPanel tools={props.tools} />
                <PrefPanel tools={props.tools} /> 
            </Flexbox>
            {
                props.componentLibraryOpen && (
                    <AddPanel tools={props.tools} />
                )
            }
        </Fragment>
    )
}

export default Architect