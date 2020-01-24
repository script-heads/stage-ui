import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, RefForwardingComponent } from 'react'
import Block from '../../layout/Block'
import Check from '../../misc/hocs/Check'
import switchStyles from './styles'
import Types from './types'

const Switch: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const {size='medium', animated, disabled} = props
    const styles = useStyles<Types.Overrides>(props, switchStyles, 'Switch')

    return (
        <Check
            {...props}
            size={size}
            styles={styles}
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
                <Block css={styles.check({animated, size, disabled, checked})}>
                    <div css={styles.switch({animated, size, disabled, checked})} />
                </Block>
            }
        />
    )
}

export default forwardRef(Switch)