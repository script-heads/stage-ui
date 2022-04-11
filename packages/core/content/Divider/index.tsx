import { forwardRef, ForwardRefRenderFunction } from 'react'

import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const Divider: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events, styleProps } = useSystem(
    'Divider',
    props,
    createClasses,
  )

  return jsx('div', {
    ...attributes,
    ...events,
    ref,
    css: [classes.container, styleProps.all],
  })
}

export default forwardRef(Divider)
