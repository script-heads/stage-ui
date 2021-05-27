/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block } from '@stage-ui/core'
import Check from '@stage-ui/core/misc/hocs/Check'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'


const Radio: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    const { size = 'm', disabled } = props

    const { classes, attributes, events } = useSystem('Radio', {
        props,
        styles,
        styleProps: { container: ['all'] },
        focus: {
            applyDecoration: true
        }
    })

    return (
        <Check
            {...attributes}
            {...events}
            {...props}
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
             * Radio use
             */
            type="checkbox"
            styles={classes}
            children={(checked, focus) =>
                <Block css={classes.check({ size, disabled, focus, checked })}>
                    <div css={classes.radio({ size, disabled, focus, checked })} />
                </Block>
            }
        />
    )
}

export default forwardRef(Radio)