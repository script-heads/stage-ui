import { ForwardRefRenderFunction, forwardRef } from 'react'

import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'

import styles from './styles'
import Types from './types'

const Flexbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events, styleProps } = useSystem('Flexbox', props, styles)

  return jsx(
    props.as || 'div',
    {
      ...attributes,
      ...events,
      ref,
      css: [
        classes.container({
          decoration: props.decoration,
        }),
        styleProps.all,
      ],
      className: props.className,
    },
    props.children,
  )
}

export default forwardRef(Flexbox)
