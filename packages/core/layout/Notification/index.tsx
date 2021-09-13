import { Block } from '@stage-ui/core'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Notifications: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  { overrides, ...props },
  ref,
) => {
  const { classes, attributes, events, styleProps } = useSystem('Notification', props, styles)

  return (
    <Block
      decoration="surface"
      css={[classes.container, styleProps.all]}
      attributes={attributes}
      {...props}
      {...events}
      ref={ref}
    />
  )
}

export default forwardRef(Notifications)
