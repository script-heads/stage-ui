import React from 'react';
import { T3, useFlow } from '@flow-ui/core';

const LabTag = () => {
    const { theme } = useFlow()
    return (
        <T3 
            color={c => c.onPrimary.css()}
            background={theme.color.accent.green.hex()}
            px="0.5rem"
            py="0.125rem"
            css={{ borderRadius: "1rem" }}
            children="lab"
        />
    )
}

export default LabTag