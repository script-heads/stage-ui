import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { Block } from '@stage-ui/core'
import { Checkmark } from '@stage-ui/icons'
import Check from '@stage-ui/core/components/basic/Check'
import additionalClasses from '@stage-ui/core/components/basic/Check/styles'
import { useSystem } from '@stage-ui/system'
import createClasses from './styles'
import Types from './types'

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { size = 'm', disabled } = props
  const { classes, attributes, events } = useSystem<Types.Props, Types.Styles>('Checkbox', props, createClasses, {
    additionalClasses,
  })

  return (
    <Check
      {...attributes}
      {...events}
      {...props}
      classes={classes}
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
