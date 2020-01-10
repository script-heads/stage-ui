import { StructureContext, ConstructorStructure } from '@flow-ui/constructor/types'
import { Tree, Block, Flexbox, Paragraph, Text, useFlow } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles from './styles'

const ComponentTree = (props: { context: StructureContext, onUpdate: () => void }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)

    const renderTree = (structure: ConstructorStructure[]) => {
        return structure.map(item => {
            let name = item.$
            if (item.$name) {
                name += ` (${item.$name})`
            } else if (item.label) {
                name += ` (${item.label})`
            }
            const selected = props.context.focused?.$id === item.$id

            return (
                <Tree
                    defaultOpen
                    key={item.$id}
                    label={(
                        <Block flex={1} p={'0.125rem 0.25rem'} css={styles.item(selected)} onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            if (!selected) {
                                props.context.focused = item
                                props.onUpdate()
                            }
                        }}>
                            <Paragraph weight="bold">{name}</Paragraph>
                            <Paragraph color={c => c.light.hex()} size={4}>{item.$}</Paragraph>

                        </Block>
                    )}
                    children={item.$children && renderTree(item.$children)}
                />
            )
        })
    }
    
    return (
        <Flexbox css={styles.container} flex={1}>
            <Block surface="minor" css={styles.panel} flex={1}>
                <ScrollView size="small">
                    <Block p="0.25rem 0.5rem" pb="0">
                        <Paragraph
                            size={3}
                            weight="bold"
                            color={c => c.light.hex()}
                            children="Structure"
                        />
                        <Tree 
                            defaultOpen
                            label={(
                                <Block>
                                    <Paragraph weight="bold">Workspace</Paragraph>
                                    <Paragraph color={c => c.light.hex()} size={4}>Root layer</Paragraph>
                                </Block>
                            )}
                            children={renderTree(props.context.structure)}
                        />
                    </Block>
                </ScrollView>
            </Block>
        </Flexbox>
    )
}
export default ComponentTree