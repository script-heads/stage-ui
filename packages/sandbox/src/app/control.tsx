import { Button, dialog, Divider, Flexbox, notify, Text, Toggle } from '@stage-ui/core'
import { QuestionMarkCircle, Save } from '@stage-ui/icons'
import React from 'react'

const PlaygroundControl = () => (
  <Flexbox p="s m" my="0.5rem" decoration="surface" alignItems="center">
    <QuestionMarkCircle flex={1} size="1.5rem" color={(c) => c.warning} />
    <Toggle
      defaultValue={{ text: 'No', value: 0 }}
      options={[
        { text: 'No', value: 0 },
        { text: 'Yes', value: 1 },
        { text: 'Maybe', value: 2 },
      ]}
    />
    <Divider vertical mx="0.5rem" h="2.5rem" />
    <Button decoration="plain" mr="0.5rem">
      <Text>Cancel</Text>
    </Button>
    <Button
      color="primary"
      mr="0.5rem"
      onClick={() => {
        notify({
          title: 'Hello',
          message: "I'm notification displayed in right corner of your window",
          timeout: 3000,
        })
      }}
    >
      <Text>Notification</Text>
    </Button>
    <Button
      color="error"
      mr="0.5rem"
      onClick={() => {
        dialog({
          title: 'Hello',
          message: 'Ops, something went wrong',
          buttonText: 'Close',
        })
      }}
    >
      <Text>Dialog</Text>
    </Button>
    <Button color={(c) => c.secondary}>
      <Text>Save</Text>
      <Save />
    </Button>
  </Flexbox>
)

export default PlaygroundControl
