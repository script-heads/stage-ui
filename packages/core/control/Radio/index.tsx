import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, RefForwardingComponent } from 'react'
import Block from '../../layout/Block'
import Check from '../../misc/hocs/Check'
import radioStyles from './styles'
import Types from './types'

const Radio: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const {animated, size = 'medium', disabled} = props
    const styles = useStyles(props, radioStyles, 'Radio')

    return (
        <Check
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
            styles={styles}
            children={(checked, focus) => 
                <Block css={styles.check({animated, size, disabled})}>
                    <div css={styles.radio({animated, size, disabled, checked})}/>
                </Block>
            }
        />
    )
}

export default forwardRef(Radio)