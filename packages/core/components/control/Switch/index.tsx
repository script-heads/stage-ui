/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block } from '@stage-ui/core'
import Check from '@stage-ui/core/misc/hocs/Check'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Switch: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

    const { size = 'm', disabled } = props

    const { classes, attributes, events } = useSystem('Switch', { 
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
            {...events}
            {...props}
            size={size}
            styles={classes}
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
                <Block css={classes.check({ size, disabled, checked })}>
                    <div css={classes.switch({ size, disabled, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Switch)