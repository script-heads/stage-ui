import React from 'react';
import { Menu, Icon } from '@flow-ui/core';

export default () => {
    return (
        <Menu
            decoration="filled"
            defaultValue={0}
            items={[
                { 
                    value: 0, 
                    content: 'Home' 
                },
                {
                    value: 1, 
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