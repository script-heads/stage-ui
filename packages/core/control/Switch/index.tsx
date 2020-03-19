
import { Block } from '@flow-ui/core'
import Check from '@flow-ui/core/misc/hocs/Check'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Switch: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { size = 'm', animated, disabled } = props

    const { cs, attributes, events } = useComponent('Switch', { 
        props, 
        styles, 
        styleProps: { container: ['all']},
        focus: {
            applyDecoration: true
        }
    })

    return (
        <Check
            {...props}
            size={size}
            styles={cs}
            onFocus={(e) => {
                props.onFocus && props.onFocus(e)
                e.stopPropagation()
            }}
            onBlur={(e) => {
                props.onBlur && props.onBlur(e)
                e.stopPropagation()
            }}
            /**
             * Switch use
             */
            type="checkbox"
            children={(checked, focus) =>
                <Block css={cs.check({ animated, size, disabled, checked })}>
                    <div css={cs.switch({ animated, size, disabled, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Switch)