import { Menu } from '@flow-ui/core'
import React from 'react'

export default () => {
    return (
        <Menu defaultValue={0} direction="row">
            <Menu.Item
                value={0}
                title="Home"
            />
            <Menu.Item
                value={1}
                title="Settings"
            />
        </Menu>
    )
}