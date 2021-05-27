/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { Checkmark } from '@stage-ui/core/icons'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Block from '../../layout/Block'
import Flexbox from '../../layout/Flexbox'
import styles from './styles'
import Types from './types'

const Stepper: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

    const { data, current = -1, onChange } = props
    const { classes, attributes, events } = useSystem('Stepper', {
        props,
        styles,
        styleProps: { container: ['all'] },
    })

    return (
        <div {...attributes} {...events} css={classes.container}>
            {data.map((step, i) => {
                const state: Types.StyleState = {
                    active: current == i,
                    complete: current > i,
                    pointer: !!onChange,
                }
                const hasMore = i < data.length - 1
                const label = state.complete
                    ? <Checkmark size="1.5rem" />
                    : step.label || i + 1

                return (
                    <React.Fragment key={i}>
                        <div css={classes.step(state)} onClick={() => onChange?.(step, i)}>{label}</div>
                        {hasMore && <div css={classes.separator(state)} />}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default forwardRef(Stepper)