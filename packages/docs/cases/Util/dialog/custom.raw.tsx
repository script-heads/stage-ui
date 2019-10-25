import React from 'react';
import { Button, dialog, Meter } from '@flow-ui/core';

export default () => {
    return (
        <Button
            onClick={() => {
                dialog({
                    title: "In progress",
                    customContent: (
                        <Meter loading percent={100} />
                    )
                })
            }}
            children="Show custom dialog"
        />
    )
}