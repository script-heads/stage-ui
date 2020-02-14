
import { Block } from '@flow-ui/core'
import Check from '@flow-ui/core/misc/hocs/Check'
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Radio: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { animated, size = 'm', disabled } = props

    const { cs, attributes, events } = useComponent('Radio', { props, styles, styleProps: { container: ['all']} })

    return (
        <Check
            {...attributes}
            {...events.all}
            {...props}
            ref={ref}
            size={size}
            tabIndex={props.tabIndex || 0}
            onFocus={(e) => {
                props.onFocus && props.onFocus(e)
                e.stopPropagation()
            }}
            onBlur={(e) => {
                props.onBlur && props.onBlur(e)
                e.stopPropagation()
            }}
            /**
             * Radio use
             */
            type="checkbox"
            styles={cs}
            children={(checked) =>
                <Block css={cs.check({ animated, size, disabled })}>
                    <div css={cs.radio({ animated, size, disabled, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Radio)