import uuidv4 from '@flow-ui/constructor/src/utils/uuidv4'
import { StructureItem, ConstructorContext } from '@flow-ui/constructor/types'
import { Block, Flexbox, Paragraph, Tree, useFlow } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles from './styles'

type SceneStructure = {
    $children?: StructureItem[]
    $empty?: boolean
}

const ComponentCreate = (props: { context: ConstructorContext }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const { context } = props
    const { structure } = context
    
    return (
        <Flexbox css={styles.container} flex={1}>
            <Block surface="minor" css={styles.panel} flex={1}>
                <ScrollView size="small">
                    <Block p="0.25rem 0.5rem" pb="0">
                        
                    </Block>
                </ScrollView>
            </Block>
        </Flexbox>
    )
}
export default ComponentCreate