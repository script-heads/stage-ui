import React from 'react';
import { Range } from '@flow-ui/core';

export default () => {
    return (
        <Range
            min={0}
            max={100}
            defaultValue={35}
        />
    )
}