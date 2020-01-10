import { StructureContext } from '@flow-ui/constructor/types'
import { Block, Paragraph, TextField } from '@flow-ui/core'

const NameControls = (props: { context: StructureContext, onUpdate: () => void }) => {
    if (!props.context.focused) {
        return null
    }
    return (
        <Block pb="0.5rem">
            <Paragraph
                size={3}
                weight="bold"
                color={c => c.light.hex()}
                children="Name"
            />
            <TextField
                w="100%"
                size="xsmall"
                value={props.context.focused.$name || ''}
                placeholder={props.context.focused.$}
                onChange={e => {
                    props.context.focused.$name = e.target.value
                    props.onUpdate()
                }}
            />
        </Block>
    )
}
export default NameControls