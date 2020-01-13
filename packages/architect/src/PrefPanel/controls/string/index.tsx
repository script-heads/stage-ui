import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, TextField } from '@flow-ui/core'

type Props = {
    name: string
    placeholder?: string
    tools: ArchitectTools
}

const StringControls = (props: Props) => {
    if (!props.tools.focused.props) {
        return null
    }

    let { name } = props

    if (name[0] === '$') {
        name = name.slice(1)
    }

    let timer: NodeJS.Timeout | null = null

    const handleChange = (value) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            props.tools.focused.props[props.name] = value
            if (!value) {
                delete props.tools.focused.props[props.name]
            }
            props.tools.update()
        }, 100)
    }

    return (
        <Block pb="0.5rem">
            <TextField
                w="100%"
                size="small"
                placeholder={props.placeholder}
                label={name[0].toUpperCase() + name.slice(1)}
                defaultValue={props.tools.focused.props[props.name] || ''}
                onChange={e => handleChange(e.target.value)}
            />
        </Block>
    )
}
export default StringControls