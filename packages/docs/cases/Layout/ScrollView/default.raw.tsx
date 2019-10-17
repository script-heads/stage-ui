import React from 'react';
import { Block } from '@flow-ui/core';
import { ScrollView } from '@flow-ui/lab';

export default () => {
    return (
        <ScrollView mode="scroll">
            <Block 
                style={{
                    height: '100rem',
                    background: 'linear-gradient(45deg, red, yellow)'
                }}
            />
        </ScrollView>
    )
}