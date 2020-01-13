import { ConstructorContext } from '@flow-ui/constructor/types'
import { Block, Paragraph, TextField } from '@flow-ui/core'

const ChildrenControls = (props: { context: ConstructorContext }) => {
    if (!props.context.focused) {
        return null
    }
    if (typeof props.context.focused.children !== 'string') {
        return null
    }

    let timer: NodeJS.Timeout | null = null

    const handleChange = (value) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            props.context.focused.children = value
            if (!value) {
                delete props.context.focused.children
            }
            props.context.update()
        }, 100)
    }

    return (
        <Block pb="0.5rem">
            <TextField
                w="100%"
                size="small"
                label="Children text"
                multiline
                defaultValue={props.context.focused.children || ''}
                placeholder={props.context.focused.$}
                onChange={e => handleChange(e.target.value)}
            />
        </Block>
    )
}
export default ChildrenControls