import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import createClasses from './styles'
import Types from './types'

const Block: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events } = useSystem('Block', props, createClasses)

  return jsx(
    props.as || 'div',
    {
      ...attributes,
      ...events,
      ref,
      css: classes.container({
        decoration: props.decoration,
      }),
      className: props.className,
    },
    props.children,
  )
}

export default forwardRef(Block)
