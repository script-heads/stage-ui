import { forwardRef, ForwardRefRenderFunction } from 'react'

import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const Article: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events, styleProps } = useSystem(
    'Article',
    props,
    createClasses,
  )

  return jsx('article', {
    ...attributes,
    ...events,
    ref,
    css: [classes.container, styleProps.all],
  })
}

export default forwardRef(Article)
