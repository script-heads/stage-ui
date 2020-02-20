import { Menu } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <Menu 
            column 
            p="1rem"
            defaultValue="Video" 
            shape="round"
            backgroundColor={c => c.surface}>
            <Menu.Group title="Menu">
                <Menu.Item
                    value="Video"
                    title="Video"
                    leftChild={<Icon.Video/>}
                />
                <Menu.Item
                    value="Music"
                    title="Music"
                    leftChild={<Icon.Music/>}
                />
                <Menu.Item
                    value="News"
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
                        value="Profile"
                        title="Profile"
                        leftChild={<Icon.Person />}
                    />
                    <Menu.Item
                        value="Quit"
                        title="Quit"
                        leftChild={<Icon.AlertCircle />}
                    />
                </Menu.Submenu>
            </Menu.Group>
        </Menu>
    )
}