import React from 'react';
import { Block } from '@flow-ui/core';
import { ScrollView } from '@flow-ui/lab';

export default () => {
    return (
        <ScrollView mode="scroll">
            <Block 
                p="1rem 2rem"
                style={{
                    color:"white",
                    background: 'linear-gradient(45deg, red, yellow)'
                }}
                children={"ScrollView ".repeat(100)}
            />
        </ScrollView>
    )
}