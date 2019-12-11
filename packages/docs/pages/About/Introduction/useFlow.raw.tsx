import React from 'react';
import { Block, useFlow } from "@flow-ui/core";

const ExampleUseFlow = () => {
    const { theme } = useFlow()

    return (
        <Block
            css={{
                borderRadius: theme.radius.default,
                backgroundColor: theme.color.primary.css()
            }}
        />
    )
}

export default ExampleUseFlow;