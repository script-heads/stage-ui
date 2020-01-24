
import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import Block from '../../layout/Block'
import Check from '../../misc/hocs/Check'
import styles from './styles'
import Types from './types'

const Switch: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { size = 'medium', animated, disabled } = props

    const { css, attributes } = useComponent('Switch', { props, styles })

    return (
        <Check
            {...props}
            size={size}
            styles={css}
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
             * Switch use
             */
            type="checkbox"
            children={(checked, focus) =>
                <Block css={css.check({ animated, size, disabled, checked })}>
                    <div css={css.switch({ animated, size, disabled, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Switch)