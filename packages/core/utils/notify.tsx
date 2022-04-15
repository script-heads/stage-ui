import React from 'react'

import { Block, Flexbox, Header, Notification, Paragraph } from '@stage-ui/core'
import { Close } from '@stage-ui/icons'
import NotificationType from '@stage-ui/core/layout/Notification/types'
import { ViewportShared } from '@stage-ui/core/layout/Viewport/MountArea'
import { createID } from '@stage-ui/system'

export default (options: NotificationType.NotifyOptions) => {
  let timer: any
  const key = createID()
  if (options.timeout) {
    timer = setTimeout(() => ViewportShared.removeElement(key), options.timeout)
  }

  const close = () => {
    clearInterval(timer)
    ViewportShared.removeElement(key)
  }

  ViewportShared.addElement(
    <Notification {...options}>
      {options.render ? (
        options.render(close)
      ) : (
        <Flexbox p="1rem" w="20rem">
          <Block flex={1} css={{ overflow: 'hidden' }}>
            <Header m={0} size="s" ellipsis>
              {options.title}
            </Header>
            <Paragraph m={0}>{options.message}</Paragraph>
          </Block>
          <Close
            size="1.25rem"
            m="-0.5rem -0.5rem 0.5rem 0.5rem"
            type="filled"
            alignSelf="flex-start"
            color="light"
            onClick={close}
          />
        </Flexbox>
      )}
    </Notification>,
    key,
    options.placement || 'topRight',
  )
}
