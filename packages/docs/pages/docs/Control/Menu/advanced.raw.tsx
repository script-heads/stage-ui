import { Menu } from '@stage-ui/core'
import { Video, Music, DoneAll, Settings, Person, AlertCircle } from '@stage-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <Menu
            column
            defaultValue="Video"
            backgroundColor={c => c.surface}>
            <Menu.Group title="Menu">
                <Menu.Item
                    value="Video"
                    title="Video"
                    leftChild={<Video />}
                    as="a"
                    href="/test.html"
                />
                <Menu.Item
                    value="Music"
                    title="Music"
                    leftChild={<Music />}
                />
                <Menu.Item
                    value="News"
                    title="News"
                    leftChild={<DoneAll />}
                />
                <Menu.Submenu
                    defaultOpen
                    indent="1rem"
                    title="Settings"
                    leftChild={<Settings />}
                >
                    <Menu.Item
                        value="Profile"
                        title="Profile"
                        leftChild={<Person />}
                    />
                    <Menu.Item
                        title="Quit"
                        leftChild={<AlertCircle />}
                    />
                </Menu.Submenu>
            </Menu.Group>
        </Menu>
    )
}