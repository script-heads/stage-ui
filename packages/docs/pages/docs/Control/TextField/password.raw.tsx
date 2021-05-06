import React, { useState } from 'react'
import { TextField } from '@stage-ui/core'
import { Eye, EyeOff } from '@stage-ui/icons'

export default () => {
    const [type, setType] = useState<any>('password')
    return (
        <TextField
            type={type}
            label={'Password'}
            defaultValue="123456"
            rightChild={type === 'password' ? (
                <Eye
                    size="1.5rem"
                    onClick={() => setType('text')}
                />
            ) : (
                <EyeOff
                    size="1.5rem"
                    onClick={() => setType('password')}
                />
            )}
        />
    )
}