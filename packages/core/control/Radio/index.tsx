import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Check from '@stage-ui/core/basic/Check'
import { useSystem } from '@stage-ui/system'
import createClasses from './styles'
import Types from './types'

const Radio: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { size = 'm', tabIndex = 0 } = props

  const { classes, events } = useSystem('Radio', props, createClasses, { focus: 'tabOnly' })

  return (
    <Check {...props} ref={ref} name="Radio" size={size}>
      {(checked) => (
        <div
          tabIndex={tabIndex}
          css={classes.check({ checked })}
          onFocus={events.onFocus}
          onBlur={events.onBlur}
        >
          <div css={classes.radio({ checked })} />
        </div>
      )}
    </Check>
  )
}

export default forwardRef(Radio)
