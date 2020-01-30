import { Menu } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <Menu
            decoration="filled"
            defaultValue={0}
            items={[
                { 
                    value: 0, 
                    content: 'Home' 
                },
                {
                    value: 1, 
                    content: <Icon.Cube />
                }
            ]}
        />
    )
}