import React from 'react';
import { Badge, Block } from '@flow-ui/core';

export default () => {
    return (
        <Badge content={'95%'}>
            <Block 
                h='10rem' 
                w='10rem' 
                surface="minor" 
                hoverSurface='major' 
            />
        </Badge>
    )
}