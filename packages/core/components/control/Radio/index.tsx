import { Block } from '@stage-ui/core'
import Check from '@stage-ui/core/components/basic/Check'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import additionalClasses from '@stage-ui/core/components/basic/Check/styles'
import createClasses from './styles'
import Types from './types'

const Radio: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { size = 'm', disabled } = props

  const { classes, attributes, events, styleProps } = useSystem('Radio', props, createClasses)

  return (
    <Check
      {...attributes}
      {...events}
      {...props}
      ref={ref}
      name="Radio"
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
       * Radio use
       */
      type="checkbox"
      overrides={{
        container: styleProps.all,
      }}
    >
      {(checked, focus) => (
        <Block css={classes.check({ size, disabled, focus, checked })}>
          <div css={classes.radio({ size, disabled, focus, checked })} />
        </Block>
      )}
    </Check>
  )
}

export default forwardRef(Radio)
