import React, { useRef } from 'react'
import { Drop, Button, Popover, Block } from '@stage-ui/core'

export default () => {
    const ref = useRef(null)
    return (
        <Block>
            <Button ref={ref}>Trigger Popup</Button>
            <Drop target={ref} spacing={8}>
                <Popover>Hello world!</Popover>
            </Drop>
        </Block>
    )
}