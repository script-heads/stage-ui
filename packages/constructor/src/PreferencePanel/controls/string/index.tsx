import { ConstructorContext } from '@flow-ui/constructor/types'
import { Block, Paragraph, TextField } from '@flow-ui/core'

type Props = {
    name: string
    placeholder?: string
    context: ConstructorContext
    onUpdate: () => void
}

const StringControls = (props: Props) => {
    if (!props.context.focused) {
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
            props.context.focused[props.name] = value
            if (!value) {
                delete props.context.focused[props.name]
            }
            props.onUpdate()
        }, 100)
    }

    return (
        <Block pb="0.5rem">
            <TextField
                w="100%"
                size="small"
                placeholder={props.placeholder}
                label={name[0].toUpperCase() + name.slice(1)}
                defaultValue={props.context.focused[props.name] || ''}
                onChange={e => handleChange(e.target.value)}
            />
        </Block>
    )
}
export default StringControls