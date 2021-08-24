import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { Checkmark } from '@stage-ui/icons'
import Check from '@stage-ui/core/basic/Check'
import { useSystem } from '@stage-ui/system'
import createClasses from './styles'
import Types from './types'

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (
  props: Types.Props,
  ref,
) => {
  const { size = 'm', tabIndex = 0 } = props
  const { classes, events } = useSystem('Checkbox', props, createClasses, { focus: 'tabOnly' })

  return (
    <Check {...props} name="Checkbox" ref={ref} size={size}>
      {(checked) => (
        <div
          tabIndex={tabIndex}
          css={classes.check({ checked })}
          onFocus={events.onFocus}
          onBlur={events.onBlur}
        >
          <Checkmark css={classes.icon({ checked })} />
        </div>
      )}
    </Check>
  )
}

export default forwardRef(Checkbox)
