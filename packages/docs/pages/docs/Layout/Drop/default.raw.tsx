import React, { useRef, useState } from 'react'
import { Drop, Button, Popover, Block } from '@stage-ui/core'

export default () => {
    const [state, setState] = useState(false)
    const ref = useRef(null)
    return (
        <Block>
            <Button 
                ref={ref} 
                onClick={() => setState(!state)}
                label="Drop down"
            />
            <Drop visible={state} target={ref} spacing={8}>
                <Popover>Hello world!</Popover>
            </Drop>
        </Block>
    )
}