import Check from '@stage-ui/core/basic/Check'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Switch: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { size = 'm', tabIndex = 0 } = props
  const { classes, events } = useSystem('Switch', props, styles, { focus: 'tabOnly' })

  return (
    <Check {...props} ref={ref} size={size} name="Switch">
      {(checked) => (
        <div css={classes.check({ checked })}>
          <div
            tabIndex={tabIndex}
            css={classes.switch({ checked })}
            onFocus={events.onFocus}
            onBlur={events.onBlur}
          />
        </div>
      )}
    </Check>
  )
}

export default forwardRef(Switch)
