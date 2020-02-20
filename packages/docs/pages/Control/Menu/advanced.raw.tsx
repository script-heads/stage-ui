import { Menu } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <Menu column defaultValue={0} backgroundColor={c => c.surface}>
            <Menu.Group title="Menu">
                <Menu.Item
                    value={0}
                    title="Video"
                    leftChild={<Icon.Video/>}
                />
                <Menu.Item
                    value={1}
                    title="Music"
                    leftChild={<Icon.Music/>}
                />
                <Menu.Item
                    value={2}
                    title="News"
                    leftChild={<Icon.DoneAll/>}
                />
                <Menu.Submenu 
                    defaultOpen
                    indent="1rem"
                    title="Settings" 
                    leftChild={<Icon.Settings />}
                >
                    <Menu.Item
                        value={2}
                        title="Profile"
                        leftChild={<Icon.Person />}
                    />
                    <Menu.Item
                        value={2}
                        title="Quit"
                        leftChild={<Icon.AlertCircle />}
                    />
                </Menu.Submenu>
            </Menu.Group>
        </Menu>
    )
}