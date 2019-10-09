import React from 'react';
import { Drop, Button, Popover } from '@flow-ui/core';

export default () => {
    return (
        <Drop
            target={(
                <Button>Trigger Popup</Button>
            )}
            children={(
                <Popover>Hello world!</Popover>
            )}
        />
    )
}