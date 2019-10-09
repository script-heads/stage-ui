import React from 'react';
import { Menu, Icon } from '@flow-ui/core';

export default () => {
    return (
        <Menu
            defaultValue={0}
            items={[
                {
                    value: 'home',
                    content: 'Home'
                },
                {
                    value: 'icon',
                    content: (
                        <Icon
                            type={i => i.outline.cube}
                        />
                    )
                }
            ]}
        />
    )
}