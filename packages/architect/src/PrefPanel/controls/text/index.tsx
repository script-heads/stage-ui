import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, TextField } from '@flow-ui/core'
import { useState, useEffect } from 'react'

type Props = {
    tools: ArchitectTools
}

let timer: NodeJS.Timeout | null = null

const TextControls = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }
    const [value, setValue] = useState('')

    useEffect(() => {
        if (props.tools.focused) {
            setValue(props.tools.focused.text || '')
        }
    }, [props.tools.focused?.id])

    const handleChange = (value: string) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            if (props.tools.focused) {
                props.tools.focused.text = value
                if (!value) {
                    delete props.tools.focused.text
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
                label="Text"
                multiline
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                    handleChange(e.target.value)
                }}
            />
        </Block>
    )
}
export default TextControls