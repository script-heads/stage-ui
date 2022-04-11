import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import { Checkmark } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'

import styles from './styles'
import Types from './types'

const Stepper: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { data, current = -1 } = props
  const {
    classes,
    attributes,
    events: { onChange, ...events },
    styleProps,
  } = useSystem('Stepper', props, styles)
  return (
    <div {...attributes} {...events} ref={ref} css={[classes.container, styleProps.all]}>
      {data.map((step, i) => {
        const state: Types.ClassState = {
          active: current === i,
          complete: current > i,
          pointer: !!onChange,
          size: props.size || 'm',
        }
        const hasMore = i < data.length - 1
        const label = state.complete ? <Checkmark size="1.5rem" /> : step.label || i + 1

        return (
          <React.Fragment key={i}>
            <div css={classes.step(state)} onClick={() => onChange?.(step, i)}>
              {props.size !== 'xs' && label}
            </div>
            {hasMore && <div css={classes.separator(state)} />}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default forwardRef(Stepper)
