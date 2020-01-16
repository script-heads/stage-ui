import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, TextField } from '@flow-ui/core'
import { useState, useEffect } from 'react'

type Props = {
    tools: ArchitectTools
}

let timer: NodeJS.Timeout | null = null

const NameControls = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }
    const [value, setValue] = useState('')

    useEffect(() => {
        if (props.tools.focused) {
            setValue(props.tools.focused.name || '')
        }
    }, [props.tools.focused?.id])

    const handleChange = (value: string) => {
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
        <Block pb="0.5rem" pt="1rem">
            <TextField
                w="100%"
                size="small"
                label="Name"
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                    handleChange(e.target.value)
                }}
            />
        </Block>
    )
}
export default NameControls