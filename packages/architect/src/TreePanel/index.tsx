import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, Text, Tree, useTheme, Divider, Menu, Icon, Paragraph } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles from './styles'
import { useRef } from 'react'

const ComponentTree = (props: { tools: ArchitectTools }) => {
    const theme = useTheme()
    const styles = createStyles(theme)
    const { tools } = props

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

            const isFocused = tools.focused?.id === item.id

            const splitterBeforeSetHover = (state: boolean) => {
                const el = document.getElementById(`split-b-${item.id}`)
                if (el) {
                    el.style.background = state
                    ? theme.color.primary.alpha(0.2).hex()
                    : 'transparent'
                }
            }

            const splitterAfterSetHover = (state: boolean) => {
                const el = document.getElementById(`split-a-${item.id}`)
                if (el) {
                    el.style.background = state
                        ? theme.color.primary.alpha(0.2).hex()
                        : 'transparent'
                }
            }

            return (
                <Tree
                    defaultOpen
                    key={item.id}
                    label={(
                        <Block flex={1}>
                            {!item.children && index === 0 && (
                                <div
                                    id={`split-b-${item.id}`}
                                    style={{
                                        width: '100%',
                                        height: '8px',
                                        marginTop: '-4px',
                                        marginBottom: '-4px',
                                    }}
                                    onDragOver={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        splitterBeforeSetHover(true)
                                    }}
                                    onDragLeave={(e) => {
                                        e.stopPropagation()
                                        splitterBeforeSetHover(false)
                                    }}
                                    onDrop={(e) => {
                                        e.stopPropagation()
                                        splitterBeforeSetHover(false)
                                        if (item.parent) {
                                            tools.target = item.parent
                                            tools.targetIndex = index
                                            tools.move()
                                        }
                                    }}
                                />
                            )}
                            <Text
                                lineHeight={1}
                                size={2}
                                weight={500}
                                children={name}
                                draggable
                                flex={1}
                                css={styles.item(isFocused)}
                                onDragStart={(e) => {
                                    e.stopPropagation()
                                    tools.captured = item
                                }}
                                onDragOver={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    tools.target = item
                                }}
                                onDragLeave={(e) => {
                                    e.stopPropagation()
                                }}
                                onDrop={(e) => {
                                    e.stopPropagation()
                                    tools.move()
                                }}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    if (!isFocused) {
                                        tools.focused = item
                                        tools.update()
                                    }
                                }}
                            />
                            {!item.children && (
                                <div
                                    id={`split-a-${item.id}`}
                                    style={{
                                        width: '100%',
                                        height: '8px',
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
                                            tools.target = item.parent
                                            tools.targetIndex = index + 1
                                            tools.move()
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
        <Block
            onDragOver={(e) => {
                e.stopPropagation()
                e.preventDefault()
            }}
            onDrop={(e) => {
                e.stopPropagation()
                tools.move()
            }}
            css={styles.container}
            backgroundColor={c => c.surface.css()}
            borderColor={c => c.lightest.css()}>
            <Flexbox justifyContent="space-between" alignItems="center" my=".5rem">
                <Menu
                    px="1rem"
                    size="small"
                    decoration="color"
                    defaultValue="layers"
                    items={[
                        { content: 'Layers', value: 'layers' },
                        { content: 'Pages', value: 'pages', disabled: true }
                    ]}
                />
                <Icon
                    mr="1rem"
                    type={i => i.outline.plus}
                    onClick={() => {
                        tools.componentLibraryShow()
                    }}
                />
            </Flexbox>
            <Divider w="unset" />
            <ScrollView size="xsmall" css={styles.scrollView}>
                <Block css={styles.scrollContainer}>
                    {
                        tools.getItems().length === 0 && (
                            <Paragraph
                                align="center"
                                pt="2rem"
                                size={2}
                                color={c => c.light.hex()}
                                children="Component tree"
                            />
                        )
                    }
                    {
                        renderTree(tools.getItems())
                    }
                </Block>
            </ScrollView>
        </Block>
    )
}
export default ComponentTree