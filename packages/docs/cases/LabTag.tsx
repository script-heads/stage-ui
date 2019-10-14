import React from 'react';
import { T3 } from '@flow-ui/core';

const LabTag = (
    <T3 
        color={c => c.onPrimary.css()}
        background={"rgb(0, 200, 0)"}
        px="0.5rem"
        py="0.125rem"
        css={{ borderRadius: "1rem" }}
        children="lab"
    />
)

export default LabTag