import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { useSystem } from '@stage-ui/system'

import Flexbox from '../Flexbox'

import styles from './styles'
import Types from './types'

const Popover: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { align = 'top', children } = props

  const { classes, attributes, events, styleProps } = useSystem('Popover', props, styles)

  return (
    <Flexbox
      {...attributes}
      {...events}
      ref={ref}
      css={[classes.container, styleProps.all]}
      {...props}
    >
      <div css={classes.arrow({ align })} />
      {children}
    </Flexbox>
  )
}

export default forwardRef(Popover)
