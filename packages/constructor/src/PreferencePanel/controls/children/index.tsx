import { StructureContext } from '@flow-ui/constructor/types'
import { Block, Paragraph, TextField } from '@flow-ui/core'

const ChildrenControls = (props: { context: StructureContext, onUpdate: () => void }) => {
    if (!props.context.focused) {
        return null
    }
    if (typeof props.context.focused.children !== 'string') {
        return null
    }
    return (
        <Block pb="0.5rem">
            <Paragraph
                size={3}
                weight="bold"
                color={c => c.light.hex()}
                children="Content"
            />
            <TextField
                w="100%"
                size="xsmall"
                multiline
                value={props.context.focused.children || ''}
                placeholder={props.context.focused.$}
                onChange={e => {
                    props.context.focused.children = e.target.value
                    props.onUpdate()
                }}
            />
        </Block>
    )
}
export default ChildrenControls