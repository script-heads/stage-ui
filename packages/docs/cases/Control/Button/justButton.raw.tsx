import React from 'react';
import { Button } from '@flow-ui/core';
  
export default () => {
    return (
        <Button
            children="Just button"
            onClick={() => {
                console.log(1)
            }}
        />
    )
}