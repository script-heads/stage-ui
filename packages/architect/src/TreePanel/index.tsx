import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, Paragraph, Tree, useFlow } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles from './styles'

const ComponentTree = (props: { tools: ArchitectTools }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const { tools } = props

    const renderTree = (items: ArchitectItem[]) => {
        return items.map(item => {
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
            
            return (
                <Tree
                    defaultOpen
                    key={item.id}
                    label={(
                        <Block
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
                            }}>
                            <Paragraph lineHeight={1} size={2} weight={500}>{name}</Paragraph>
                            <Paragraph color={c => c.light.hex()} size={2}>{item.component}</Paragraph>
                            {item.children?.length === 0 && (
                                <Block
                                    css={{
                                        position: 'absolute',
                                        background: theme.color.accent.orange.hex(),
                                        width: '0.5rem',
                                        height: '0.5rem',
                                        right: '0.25rem',
                                        top: '0.25rem',
                                        borderRadius: '0.5rem',
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
        <Block css={styles.container} flex={1}>
            <Flexbox justifyContent="space-between">
                <Paragraph
                    pl="0.5rem"
                    size={2}
                    color={c => c.light.hex()}
                    children="Layers"
                />
                <Paragraph
                    pl="0.5rem"
                    size={2}
                    color={c => c.light.hex()}
                    children="Page 1"
                />
            </Flexbox>
            <ScrollView size="small">
                <Block p="0.5rem">
                    <Tree
                        defaultOpen
                        label={(
                            <Block css={styles.item(false)} flex={1}>
                                <Paragraph lineHeight={1} size={2} weight={500}>Workspace</Paragraph>
                                <Paragraph color={c => c.light.hex()} size={2}>Root layer</Paragraph>
                            </Block>
                        )}
                        children={renderTree(tools.getItems())}
                    />
                    <Block p="0.5rem">
                        <Tree
                            defaultOpen
                            label={(
                                <Block 
                                    onDragOver={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                    }}
                                    onDrop={(e) => {
                                        e.stopPropagation()
                                        tools.move()
                                    }}
                                    css={styles.item(false)} 
                                    flex={1}
                                >
                                    <Paragraph lineHeight={1} size={2} weight={500}>Workspace</Paragraph>
                                    <Paragraph color={c => c.light.hex()} size={2}>Root layer</Paragraph>
                                </Block>
                            )}
                            children={renderTree(tools.getItems())}
                        />
                    </Block>
                </Block>
            </ScrollView>
        </Block>
    )
}
export default ComponentTree