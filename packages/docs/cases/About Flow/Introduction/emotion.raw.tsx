import React from 'react';
import { Block } from "@flow-ui/core";

const ExampleEmotion = () => (
    <Block 
        css={{
            padding: "2rem",
            backgroundColor: "hotpink",
            fontSize: "1rem",
            borderRadius: "0.0625rem",
            "&:hover": {
                color: 'blue'
            }
        }}
    />
)

export default ExampleEmotion;