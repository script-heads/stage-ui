import React from 'react'

import { Block, Button, Paragraph, ScrollView, useDrop } from '@stage-ui/core'

export default () => {
  const dropToggle = useDrop((close) => (
    <ScrollView
      h="10rem"
      w="18rem"
      size="s"
      mode="always"
      barOffset={4}
      xBarPosition="none"
    >
      <Block p="m">
        <Paragraph pb="s">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book.
        </Paragraph>
        <Button label="Close" onClick={close} />
      </Block>
    </ScrollView>
  ))

  return <Button label="Custom drop toggle" onClick={dropToggle} />
}
