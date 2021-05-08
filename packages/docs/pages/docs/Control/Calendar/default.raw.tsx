import React from 'react'
import { Block, Calendar } from '@stage-ui/core'

export default () => {
    return (
        <Block pb="s" decoration="surface" w="18rem">
            <Calendar type="day" />
        </Block>
    )
}