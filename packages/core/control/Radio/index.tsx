
import React, { forwardRef, RefForwardingComponent } from 'react'
import Block from '../../layout/Block'
import Check from '../../misc/hocs/Check'
import styles from './styles'
import Types from './types'
import { useComponent } from '@flow-ui/whale'

const Radio: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { animated, size = 'medium', disabled } = props

    const { css, attributes } = useComponent('Radio', { props, styles })

    return (
        <Check
            {...attributes}
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
            styles={css}
            children={(checked) =>
                <Block css={css.check({ animated, size, disabled })}>
                    <div css={css.radio({ animated, size, disabled, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Radio)