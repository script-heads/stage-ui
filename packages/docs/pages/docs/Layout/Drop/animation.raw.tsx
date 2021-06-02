import React, { useRef, useState} from 'react'
import { Drop, Button, Popover, Block } from '@stage-ui/core'

export default () => {
    const [state, setState] = useState(false)
    const ref = useRef(null)
    return (
        <Block>
            <Button 
                ref={ref}
                onMouseEnter={() => setState(!state)}
                onMouseLeave={() => setState(!state)}
                label="Hover"
            />
            <Drop 
                visible={state} 
                target={ref} 
                spacing={8}
                animation={{
                    type: 'slide',
                    duration: 250,
                    reverse: true
                }}
            >
                <Popover>Hello world!</Popover>
            </Drop>
        </Block>
    )
}