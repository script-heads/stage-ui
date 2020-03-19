
import { Block } from '@flow-ui/core'
import { Checkmark } from '@flow-ui/core/icons'
import Check from '@flow-ui/core/misc/hocs/Check'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Checkbox: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { size = 'm', animated, disabled } = props

    const { cs, attributes, events } = useComponent('Checkbox', { 
        props, 
        styles, 
        styleProps: { container: ['all']},
        focus: {
            applyDecoration: true
        }
    })

    return (
        <Check
            {...attributes}
            {...events.all}
            {...props}
            styles={cs}
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
                <Block css={cs.check({ animated, size, disabled, focus })}>
                    <Checkmark
                        css={cs.icon({ animated, size, disabled, checked })}
                    />
                </Block>
            }
        />
    )
}

export default forwardRef(Checkbox)