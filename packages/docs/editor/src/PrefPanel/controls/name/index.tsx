import { Block, TextField } from '@stage-ui/core'
import { useEffect, useState } from 'react'
import { context } from '../../../..'
import React from 'react'

let timer: NodeJS.Timeout | null = null

const NameControls = () => {
    if (!context.tools.focused) {
        return null
    }
    const [value, setValue] = useState('')

    useEffect(() => {
        if (context.tools.focused) {
            setValue(context.tools.focused.name || '')
        }
    }, [context.tools.focused?.id])

    const handleChange = (value: string) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            if (context.tools.focused) {
                context.tools.focused.name = value
                if (!value) {
                    delete context.tools.focused.name
                }
                context.tools.update()
            }
        }, 100)
    }

    return (
        <Block pb="0.5rem" pt="1rem">
            <TextField
                w="100%"
                size="s"
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