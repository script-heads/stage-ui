import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, RefForwardingComponent } from 'react'
import Icon from '../../content/Icon'
import Block from '../../layout/Block'
import Check from '../../misc/hocs/Check'
import checkboxStyles from './styles'
import Types from './types'

const Checkbox: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const {size='medium', animated, disabled} = props
    const styles = useStyles<Types.Overrides>(props, checkboxStyles, 'Checkbox')

    return (
        <Check
            {...props}
            ref={ref}
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
             * Checkbox use
             */
            type="checkbox"
            children={(checked, focus) => 
                <Block css={styles.check({animated, size, disabled, focus})}>
                    <Icon
                        type={i => i.outline.checkmark}
                        css={styles.icon({animated, size, disabled, checked})}
                    />
                </Block>
            }
        />
    )
}

export default forwardRef(Checkbox)