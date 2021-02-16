/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block, Flexbox, Paragraph, Text, Tree } from '@stage-ui/core'
import { ArrowIosForward, Copy, Trash2 } from '@stage-ui/core/icons'
import { Fragment } from 'react'
import { TabProps } from '..'
import { context } from '../../..'
import { ArchitectItem } from '../../../types'

type Event = any

const LayersTab = (props: TabProps) => {
    const { theme, styles } = props

    const renderTree = (items: ArchitectItem[]) => {
        return items.map((item, index) => {

            let name = item.component
            if (item.name) {
                name = `${item.name}`
            }
            if (item.text) {
                name += ` (${item.text})`
            } else if (item.props?.label) {
                name += ` (${item.props.label})`
            } else if (item.props?.placeholder) {
                name += ` (${item.props.placeholder})`
            }

            const isFocused = context.tools.focused?.id === item.id

            const splitterAfterSetHover = (state: boolean) => {
                const el = document.getElementById(`split-${item.id}`)
                if (el) {
                    el.style.background = state ? theme.color.primary.alpha(0.5).rgb().string() : ''
                }
            }

            return (
                <Tree
                    decoration="none"
                    leftChild={null}
                    defaultOpen
                    key={item.id}
                    label={(options) => (
                        <Block flex={1}>
                            <Text
                                lineHeight={1}
                                size="xs"
                                children={(
                                    <Block pl={options.lvl * 1 + 'rem'}>
                                        <Flexbox flex={1} alignItems="center">
                                            <ArrowIosForward
                                                mr="0.25rem"
                                                display={options.hasChilds ? undefined : 'none'}
                                                rotate={options.isOpen ? 90 : 0}
                                            />
                                            <span
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    e.preventDefault()
                                                    if (!isFocused) {
                                                        context.tools.focused = item
                                                        context.tools.update()
                                                    }
                                                }}
                                                css={{ flex: 1 }}
                                                children={name}
                                            />
                                            <span id={`ctrl-${item.id}`}>
                                                <Copy
                                                    pr={'0.25rem'}
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                        context.tools.focused = item
                                                        context.tools.duplicate()
                                                    }}
                                                />
                                                <Trash2
                                                    pr={'0.25rem'}
                                                    color={c => c.error}
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
                                                        context.tools.focused = item
                                                        context.tools.remove()
                                                    }}
                                                />
                                            </span>
                                        </Flexbox>
                                    </Block>
                                )}
                                draggable
                                flex={1}
                                css={styles.item(isFocused)}
                                onDragStart={(e) => {
                                    e.stopPropagation()
                                    context.tools.captured = item
                                }}
                                onDragOver={(e: Event) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    context.tools.target = item
                                    e.target.style.backgroundColor = theme.color.primary.alpha(0.5).rgb().string()
                                }}
                                onDragLeave={(e: Event) => {
                                    e.stopPropagation()
                                    e.target.style.background = ''

                                }}
                                onDrop={(e: Event) => {
                                    e.stopPropagation()
                                    e.target.style.background = ''
                                    context.tools.move()
                                }}
                            />
                            {(!item.children || item.children.length === 0) && (
                                <div
                                    id={`split-${item.id}`}
                                    style={{
                                        width: '100%',
                                        height: '8px',
                                        borderTopLeftRadius: '4px',
                                        borderBottomLeftRadius: '4px',
                                        marginTop: '-4px',
                                        marginBottom: '-4px',
                                    }}
                                    onDragOver={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        splitterAfterSetHover(true)
                                    }}
                                    onDragLeave={(e) => {
                                        e.stopPropagation()
                                        splitterAfterSetHover(false)
                                    }}
                                    onDrop={(e) => {
                                        e.stopPropagation()
                                        splitterAfterSetHover(false)
                                        if (item.parent) {
                                            context.tools.target = item.parent
                                            context.tools.targetIndex = index + 1
                                            context.tools.move()
                                        }
                                    }}
                                />
                            )}
                        </Block>
                    )}
                    children={item.children && renderTree(item.children)}
                />
            )
        })
    }

    return (
        <Fragment>
            {
                context.tools.getItems().length === 0 && (
                    <Paragraph
                        align="center"
                        pt="2rem"
                        color={c => c.light}
                        children="Components"
                    />
                )
            }
            {
                renderTree(context.tools.getItems())
            }
        </Fragment>
    )
}

export default LayersTab