import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { Block } from '@stage-ui/core'
import { Checkmark } from '@stage-ui/icons'
import Check from '@stage-ui/core/basic/Check'
import { useSystem } from '@stage-ui/system'
import createClasses from './styles'
import Types from './types'

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  props: Types.Props,
  ref,
) => {
  const { size = 'm', disabled } = props
  const { classes, attributes, events, styleProps } = useSystem('Checkbox', props, createClasses)

  return (
    <Check
      {...attributes}
      {...events}
      {...props}
      name="Checkbox"
      ref={ref}
      size={size}
      onFocus={(e) => {
        props.onFocus?.(e)
        e.stopPropagation()
      }}
      onBlur={(e) => {
        props.onBlur?.(e)
        e.stopPropagation()
      }}
      /**
       * Checkbox use
       */
      type="checkbox"
      overrides={{
        container: styleProps.all,
      }}
    >
      {(checked, focus) => (
        <Block css={classes.check({ size, disabled, focus, checked })}>
          <Checkmark css={classes.icon({ size, disabled, focus, checked })} />
        </Block>
      )}
    </Check>
  )
}

export default forwardRef(Checkbox)
