import { Block } from '@stage-ui/core'
import Check from '@stage-ui/core/components/basic/Check'
import additionalClasses from '@stage-ui/core/components/basic/Check/styles'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Switch: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { size = 'm', disabled } = props
  const { classes, attributes, events } = useSystem('Switch', props, styles, { additionalClasses })

  return (
    <Check
      {...attributes}
      {...events}
      {...props}
      ref={ref}
      size={size}
      classes={classes}
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
