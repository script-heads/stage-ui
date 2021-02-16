/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block } from '@stage-ui/core'
import { Checkmark } from '@stage-ui/core/icons'
import Check from '@stage-ui/core/misc/hocs/Check'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Checkbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    const { size = 'm', disabled } = props

    const { cs, attributes, events } = useComponent('Checkbox', { 
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
            styles={cs}
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
             * Checkbox use
             */
            type="checkbox"
            children={(checked, focus) =>
                <Block css={cs.check({ size, disabled, focus })}>
                    <Checkmark
                        css={cs.icon({ size, disabled, checked })}
                    />
                </Block>
            }
        />
    )
}

export default forwardRef(Checkbox)