/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block } from '@stage-ui/core'
import { Checkmark } from '@stage-ui/core/icons'
import Check from '@stage-ui/core/misc/hocs/Check'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    const { size = 'm', disabled } = props

    const { classes, attributes, events } = useSystem('Checkbox', props, 
    styles{ 
        , 
        styleProps: { container: ['all']},
        focus: {
            applyDecoration: true
        }
    })

    return (
        <Check
            {...attributes}
            {...events}
            {...props}
            styles={classes}
            ref={ref}
            size={size}
            onFocus={(e) => {
                props.onFocus && props.onFocus(e)
                e.stopPropagation()
            }}
            onBlur={(e) => {
                props.onBlur && props.onBlur(e)
                e.stopPropagation()
            }}
            /**
             * Checkbox use
             */
            type="checkbox"
            children={(checked, focus) =>
                <Block css={classes.check({ size, disabled, focus, checked })}>
                    <Checkmark
                        css={classes.icon({ size, disabled, focus, checked })}
                    />
                </Block>
            }
        />
    )
}

export default forwardRef(Checkbox)