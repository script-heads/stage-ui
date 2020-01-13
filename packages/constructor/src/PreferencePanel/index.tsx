import { StructureContext} from '@flow-ui/constructor/types'
import { Block, Flexbox, Paragraph, Text, useFlow } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import ChildrenControls from './controls/children'
import MarginControls from './controls/margin'
import NameControls from './controls/name'
import PaddingControls from './controls/padding'
import SizeConrols from './controls/size'

import createStyles from './styles'

// const setProperty = (context: StructureContext, propertyName: string, value: string | number | boolean) => {
//     context.
// }
// const deleteProperty = (context: StructureContext, propertyName: string) => {

// }

const PreferencePanel = (props: { context: StructureContext, onUpdate: () => void }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    
    return (
        <Flexbox css={styles.container} flex={1}>
            <Block surface="minor" css={styles.panel} flex={1}>
                <ScrollView size="small">
                    <Block p="0.25rem 0.5rem" pb="0">
                        <Paragraph
                            pb="0.5rem"
                            size={3}
                            weight="bold"
                            color={c => c.light.hex()}
                            children="Preferences"
                        />
                        <Text
                            size={3}
                            weight="bold"
                            css={styles.componentName(!!props.context.focused)}
                            children={props.context.focused?.$ || ''}
                        />
                        <NameControls {...props} />
                        <ChildrenControls {...props} />
                        <PaddingControls {...props} />
                        <MarginControls {...props} />
                        <SizeConrols {...props} />

                    </Block>
                </ScrollView>
            </Block>
        </Flexbox>
    )
}
export default PreferencePanel