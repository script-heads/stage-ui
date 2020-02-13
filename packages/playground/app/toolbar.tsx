import { Flexbox, Button, TextField, Divider } from '@flow-ui/core'
import React from 'react'
import { Search } from '@flow-ui/core/icons'

const PlaygroundToolbar = () => {
    return (
        <Flexbox p="1rem" mb="0.5rem" decoration="surface">
            <TextField
                leftChild={<Search />}
                placeholder="Search"
            />
            <Divider vertical mx="0.5rem" h="2.5rem" />
            <Button decoration="text">Reload</Button>
        </Flexbox>
    )
}

export default PlaygroundToolbar