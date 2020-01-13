import { ConstructorContext, StructureItem } from '@flow-ui/constructor/types'
import { Block, Flexbox, Paragraph, Tree, useFlow } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles from './styles'

const ComponentTree = (props: { context: ConstructorContext }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const { context } = props

    const renderTree = (structure: StructureItem[]) => {
        return structure.map(structureItem => {
            let name = structureItem.$
            if (structureItem.$name) {
                name = `${structureItem.$name}`
            } 
            if (typeof structureItem.children === 'string' && structureItem.children.length <= 10) {
                name += ` (${structureItem.children})`
            } else if (structureItem.label) {
                name += ` (${structureItem.label})`
            }
            const selected = context.focused?.$id === structureItem.$id

            return (
                <Tree
                    defaultOpen
                    key={structureItem.$id}
                    label={(
                        <Block
                            draggable
                            flex={1}
                            css={styles.item(selected)}
                            onDragStart={(e) => {
                                e.stopPropagation()
                                context.captured = structureItem
                            }}
                            onDragOver={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                context.target = structureItem
                            }}
                            onDragLeave={(e) => {
                                e.stopPropagation()
                            }}
                            onDrop={(e) => {
                                e.stopPropagation()
                                context.move()
                            }}
                            onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                if (!selected) {
                                    context.focused = structureItem
                                }
                            }}>
                            <Paragraph lineHeight={1} size={3} weight={500}>{name}</Paragraph>
                            <Paragraph color={c => c.light.hex()} size={4}>{structureItem.$}</Paragraph>
                            {structureItem.$empty && (
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
                    children={structureItem.$children && renderTree(structureItem.$children)}
                />
            )
        })
    }
    
    return (
        <Flexbox css={styles.container} flex={1}>
            <Block css={styles.panel} flex={1}>
                <ScrollView size="small">
                    <Paragraph
                        pl="0.5rem"
                        size={0}
                        weight="bold"
                        color={c => c.light.hex()}
                        children="Structure"
                    />
                    <Block p="0.5rem">
                        <Tree
                            defaultOpen
                            label={(
                                <Block>
                                    <Paragraph lineHeight={1} size={3} weight={500}>Workspace</Paragraph>
                                    <Paragraph color={c => c.light.hex()} size={4}>Root layer</Paragraph>
                                </Block>
                            )}
                            children={renderTree(context.structure)}
                        />
                    </Block>
                </ScrollView>
            </Block>
        </Flexbox>
    )
}
export default ComponentTree