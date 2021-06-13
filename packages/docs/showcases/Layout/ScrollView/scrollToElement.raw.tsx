import React, { Fragment, useRef } from 'react'
import { Block, Flexbox, Button, ScrollView, Paragraph } from '@stage-ui/core'
import ScrollViewTypes from '@stage-ui/core/components/layout/ScrollView/types'

export default () => {
  const ref = useRef<ScrollViewTypes.Ref>(null)
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <Flexbox column style={{ height: '100%' }}>
      <Flexbox>
        <Button
          label="Scroll to 2"
          onClick={() => {
            ref.current?.scrollToElement('item_2')
          }}
        />
        <Button
          label="Scroll to 10"
          onClick={() => {
            ref.current?.scrollToElement('item_10')
          }}
        />
        <Button
          label="Scroll to 15"
          onClick={() => {
            ref.current?.scrollToElement('item_15')
          }}
        />
      </Flexbox>
      <ScrollView shape="round" ref={ref}>
        {items.map((i) => (
          <Block data-id={`item_${i}`} key={i} decoration="surface" p="m" mb="xs">
            Item {i}
          </Block>
        ))}
      </ScrollView>
    </Flexbox>
  )
}
