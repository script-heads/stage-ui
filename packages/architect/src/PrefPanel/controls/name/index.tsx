import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, TextField } from '@flow-ui/core'

type Props = {
    tools: ArchitectTools
}

const NameControls = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }

    let timer: NodeJS.Timeout | null = null

    const handleChange = (value) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            if (props.tools.focused) {
                props.tools.focused.name = value
                if (!value) {
                    delete props.tools.focused.name
                }
                props.tools.update()
            }
        }, 100)
    }

    return (
        <Block pb="0.5rem">
            <TextField
                w="100%"
                size="small"
                label="Name"
                multiline
                value={props.tools.focused.name || ''}
                placeholder={props.tools.focused.component}
                onChange={e => handleChange(e.target.value)}
            />
        </Block>
    )
}
export default NameControls