import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, TextField } from '@flow-ui/core'
import { useEffect, useState } from 'react'

type Props = {
    name: string
    placeholder?: string
    tools: ArchitectTools
}

let timer: NodeJS.Timeout | null = null

const StringControls = (props: Props) => {
    if (!props.tools.focused?.props) {
        return null
    }

    let { name } = props

    if (name[0] === '$') {
        name = name.slice(1)
    }

    const [value, setValue] = useState('')

    useEffect(() => {
        if (props.tools.focused) {
            setValue(props.tools.focused.props[name] || '')
        }
    }, [props.tools.focused?.id])

    const handleChange = (value: string) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            if (props.tools.focused) {
                props.tools.focused.props[props.name] = value
                if (!value) {
                    delete props.tools.focused.props[props.name]
                }
                props.tools.update()
            }
        }, 100)
    }

    return (
        <Block pb="0.5rem">
            <TextField
                w="100%"
                size="s"
                placeholder={props.placeholder}
                label={name[0].toUpperCase() + name.slice(1)}
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                    handleChange(e.target.value)
                }}
            />
        </Block>
    )
}
export default StringControls