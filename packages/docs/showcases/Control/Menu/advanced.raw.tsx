import { Menu } from '@stage-ui/core'
import { Video, Music, AllDone, Settings, Person, AlertCircle } from '@stage-ui/icons'
import React from 'react'

export default () => {
  return (
    <Menu column defaultValue="Video" backgroundColor="surface">
      <Menu.Group title="Menu">
        <Menu.Item value="Video" title="Video" leftChild={<Video />} as="a" href="/test.html" />
        <Menu.Item value="Music" title="Music" leftChild={<Music />} />
        <Menu.Item value="News" title="News" leftChild={<AllDone />} />
        <Menu.Submenu defaultOpen indent="1rem" title="Settings" leftChild={<Settings />}>
          <Menu.Item value="Profile" title="Profile" leftChild={<Person />} />
          <Menu.Item title="Quit" leftChild={<AlertCircle />} />
        </Menu.Submenu>
      </Menu.Group>
    </Menu>
  )
}
