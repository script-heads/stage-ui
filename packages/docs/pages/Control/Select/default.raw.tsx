import React from 'react';
import { Select } from '@flow-ui/core';

export default () => {
    return (
        <Select
            label="Label"
            placeholder="Placeholder"
            options={[
                { text: "One", value: 1 },
                { text: "Two", value: 2 },
                { text: "Three", value: 3 }
            ]}
        />
    )
}