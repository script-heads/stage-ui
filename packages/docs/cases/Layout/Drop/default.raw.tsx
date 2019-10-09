import React, {useRef} from 'react';
import { Drop, Button, Popover, Block } from '@flow-ui/core';

export default () => {
    const ref = useRef(null);
    return (
        <Block>
            <Button ref={ref}>Trigger Popup</Button>
            <Drop target={ref} distance={8}>
                <Popover>Hello world!</Popover>
            </Drop>
        </Block>   
    )
}