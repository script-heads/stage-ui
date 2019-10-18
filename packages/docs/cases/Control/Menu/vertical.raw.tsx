import React from 'react';
import { Menu, Icon } from '@flow-ui/core';

export default () => {
    return (
        <Menu
            direction="column"
            decoration="underline"
            defaultValue={0}
            items={[
                { value: 0, content: 'Apple' },
                { value: 1, content: "Blueberries" },
                { value: 2, content: "Cherries" },
                { value: 3, content: "Grapefruit" },
                { value: 4, content: "Lemon" }
            ]}
        />
    )
}