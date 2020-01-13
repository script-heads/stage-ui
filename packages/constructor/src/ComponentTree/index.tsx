import uuidv4 from '@flow-ui/constructor/src/utils/uuidv4'
import { StructureItem, ConstructorContext } from '@flow-ui/constructor/types'
import { Block, Flexbox, Paragraph, Tree, useFlow } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles from './styles'

type SceneStructure = {
    $children?: StructureItem[]
    $empty?: boolean
}

const ComponentTree = (props: { context: ConstructorContext }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const { context } = props

    const renderTree = (structure: StructureItem[]) => {
        return structure.map(structureEl => {
            let name = structureEl.$
            if (structureEl.$name) {
                name = `${structureEl.$name}`
            } 
            if (typeof structureEl.children === 'string' && structureEl.children.length <= 10) {
                name += ` (${structureEl.children})`
            } else if (structureEl.label) {
                name += ` (${structureEl.label})`
            }
            const selected = context.focused?.$id === structureEl.$id

            return (
                <Tree
                    defaultOpen
                    key={structureEl.$id}
                    label={(
                        <Block
                            draggable
                            flex={1}
                            css={styles.item(selected)}
                            onDragStart={(e) => {
                                e.stopPropagation()
                                context.setCurrent(structureEl)
                            }}
                            onDragOver={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                context.setTarget(structureEl)
                            }}
                            onDragLeave={(e) => {
                                e.stopPropagation()
                            }}
                            onDrop={(e) => {
                                e.stopPropagation()
                                if (context.current && context.target) {
                                    if (Array.isArray(context.target.$children)) {
                                        context.move(context.current.$id, context.target.$id)
                                    }
                                }
                                context.current = null
                                context.target = null
                            }}
                            onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                if (!selected) {
                                    context.setFocused(structureEl)
                                }
                            }}>
                            <Paragraph lineHeight={1} size={3} weight={500}>{name}</Paragraph>
                            <Paragraph color={c => c.light.hex()} size={4}>{structureEl.$}</Paragraph>
                            {structureEl.$empty && (
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
                    children={structureEl.$children && renderTree(structureEl.$children)}
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