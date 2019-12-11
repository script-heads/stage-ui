import React from 'react';
import { Meter } from '@flow-ui/core';

export default () => {
    return (
        <Meter
            loading
            percent={100}
            color={c => c.secondary.css()}
        />
    )
}