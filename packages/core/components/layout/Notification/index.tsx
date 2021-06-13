import { Block } from '@stage-ui/core'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Notifications: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  { overrides, ...props },
  ref,
) => {
  const { classes, attributes, events } = useSystem('Notification', props, styles)

  return (
    <Block
      decoration="surface"
      css={classes.container}
      {...props}
      {...attributes}
      {...events}
      ref={ref}
    />
  )
}

export default forwardRef(Notifications)
