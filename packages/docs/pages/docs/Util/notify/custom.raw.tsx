import React from 'react'
import { Button, notify, Block, Meter, Header } from '@stage-ui/core'

export default () => {
    return (
        <Button
            onClick={() => {
                notify({
                    title: '',
                    message: '',
                    render: (close) => (
                        <Block p="1rem" w="20rem">
                            <Header>In progress</Header>
                            <Meter pb="0.5rem" loading value={100} />
                            <Button label="Close" onClick={close} />
                        </Block>
                    ),
                    timeout: 10000
                })
            }}
            children="Show custom notify"
        />
    )
}