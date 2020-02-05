import React from 'react'
import { Button } from '@flow-ui/core';

const ExampleColor = () => (
    <Button color={c => c.error.css()}>
        Submit
    </Button>
)

export default ExampleColor