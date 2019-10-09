import React from 'react';
import { Button, notify, Block, Meter, H4 } from '@flow-ui/core';

export default () => {
    return (
        <Button
            onClick={() => {
                notify({
                    title: '',
                    message: '',
                    customContent: (
                        <Block p="1rem" w="20rem">
                            <H4 pb="1rem">In progress</H4>
                            <Meter animation percent={100} />
                        </Block>
                    ),
                    timeout: 3000
                })
            }}
            children="Show custom notify"
        />
    )
}