import { StructureContext } from '@flow-ui/constructor/types'
import { Block, Button, Flexbox, Text, Paragraph, Divider, Range } from '@flow-ui/core'
import { ScrollView, ButtonGroup } from '@flow-ui/lab'
import styles from './styles'
import NameControls from './controls/name'
import ChildrenControls from './controls/children'
import PaddingControls from './controls/padding'
import MarginControls from './controls/margin'

const PreferencePanel = (props: { context: StructureContext, onUpdate: () => void }) => {
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
                    </Block>
                </ScrollView>
            </Block>
        </Flexbox>
    )
}
export default PreferencePanel