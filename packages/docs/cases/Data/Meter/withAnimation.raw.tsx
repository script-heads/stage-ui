import React from 'react';
import { Meter } from '@flow-ui/core';

export default () => {
    return (
        <Meter
            animation
            percent={100}
            color={c => c.secondary.css()}
        />
    )
}