import { Menu } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    return (
        <Menu
            defaultValue={0}
            decoration="marker"
            backgroundColor={c => c.surface}
            data={['Video', 'Music', 'News']}
        />
    )
}