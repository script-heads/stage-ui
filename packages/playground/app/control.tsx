import { Flexbox, Button, Text, Grid, Divider } from '@flow-ui/core'
import React from 'react'
import { QuestionMarkCircle, Save, Trash2, Copy } from '@flow-ui/core/icons'

const PlaygroundControl = () => {
    return (
        <Flexbox p="1rem" mt="0.5rem" decoration="surface" alignItems="center">
            <QuestionMarkCircle
                flex={1}
                size="1.5rem"
                color={c => c.warning}
            />
            <Divider vertical mx="0.5rem" h="2.5rem" />
            <Button decoration="plain" mr="0.5rem">
                <Text>Cancel</Text>
            </Button>
            <Button color={c => c.primary} mr="0.5rem">
                <Text>Clone</Text>
                <Copy />
            </Button>
            <Button color={c => c.error} mr="0.5rem">
                <Text>Delete</Text>
                <Trash2 />
            </Button>
            <Button color={c => c.secondary}>
                <Text>Save</Text>
                <Save />
            </Button>
        </Flexbox>
    )
}

export default PlaygroundControl