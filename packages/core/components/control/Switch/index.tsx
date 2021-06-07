import { Block } from '@stage-ui/core'
import Check from '@stage-ui/core/components/basic/Check'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Switch: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { size = 'm', disabled } = props
  const { classes, attributes, events, styleProps } = useSystem('Switch', props, styles)

  return (
    <Check
      {...attributes}
      {...events}
      {...props}
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
       * Switch use
       */
      type="checkbox"
      overrides={{ container: styleProps.all }}
    >
      {(checked) => (
        <Block css={classes.check({ size, disabled, checked })}>
          <div css={classes.switch({ size, disabled, checked })} />
        </Block>
      )}
    </Check>
  )
}

export default forwardRef(Switch)
