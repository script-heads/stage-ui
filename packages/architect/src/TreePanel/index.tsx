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

            const splitterAfterSetHover = (state: boolean) => {
                const el = document.getElementById(`split-${item.id}`)
                if (el) {
                    el.style.background = state ? theme.color.primary.alpha(0.5).hex() : ''
                }
            }

            return (
                <Tree
                    defaultOpen
                    key={item.id}
                    label={(
                        <Block flex={1}>
                            <Text
                                lineHeight={1}
                                size={2}
                                weight={500}
                                children={(
                                    <Flexbox flex={1} alignItems="center" justifyContent="space-between">
                                        <span>{name}</span>
                                        <span id={`ctrl-${item.id}`}>
                                            <Icon
                                                pr={'0.25rem'}
                                                type={t => t.outline.copy}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    props.tools.focused = item
                                                    props.tools.duplicate()
                                                }}
                                            />
                                            <Icon
                                                pr={'0.25rem'}
                                                color={c => c.accent.red.hex()}
                                                type={t => t.outline.trash2}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    props.tools.focused = item
                                                    props.tools.remove()
                                                }}
                                            />
                                        </span>
                                    </Flexbox>
                                )}
                                draggable
                                flex={1}
                                css={styles.item(isFocused)}
                                onDragStart={(e) => {
                                    e.stopPropagation()
                                    tools.captured = item
                                }}
                                onDragOver={(e: any) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    tools.target = item
                                    e.target.style.backgroundColor = theme.color.primary.alpha(0.5).hex()
                                }}
                                onDragLeave={(e: any) => {
                                    e.stopPropagation()
                                    e.target.style.background = ''

                                }}
                                onDrop={(e: any) => {
                                    e.stopPropagation()
                                    e.target.style.background = ''
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
                        { 
                            content: (<><Icon mr={'0.25rem'} type={t => t.outline.layers}/>Layers</>),
                            value: 'layers' },
                        { 
                            content: (<><Icon mr={'0.25rem'} type={t => t.outline.browser}/>Pages</>), 
                            value: 'pages', 
                            disabled: true 
                        }
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