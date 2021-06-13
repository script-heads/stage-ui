import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import createClasses from './styles'
import Types from './types'

const Divider: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { classes, attributes, events } = useSystem('Divider', props, createClasses)

  return jsx('div', {
    ...attributes,
    ...events,
    ref,
    css: classes.container,
  })
}

export default forwardRef(Divider)
