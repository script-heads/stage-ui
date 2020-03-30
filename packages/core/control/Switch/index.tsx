
import { Block } from '@flow-ui/core'
import Check from '@flow-ui/core/misc/hocs/Check'
import { useComponent } from '@flow-ui/system'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Switch: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { size = 'm', disabled } = props

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
            {...attributes}
            {...events.all}
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
            children={checked =>
                <Block css={cs.check({ size, disabled, checked })}>
                    <div css={cs.switch({ size, disabled, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Switch)