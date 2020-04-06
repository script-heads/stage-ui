import { useComponent } from '@stage-ui/system'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'
import Thumb from './MeterThumb'

const Meter: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const {
        decoration = 'filled',
        shape = 'round',
        size = 'm',
        value = 0,
    } = props

    const { cs, attributes, events } = useComponent('Meter', {
        props,
        styles,
        styleProps: { container: ['all'] },
        focus: {
            applyDecoration: true
        }
    })

    let childs = props.children as React.ReactElement[]
    if (childs && !Array.isArray(childs)) {
        childs = [childs]
    }

    return (
        <div ref={ref} {...attributes} {...events.all} css={cs.container({ decoration, shape, size })}>
            {
                childs ? childs.map((child, index) =>
                    React.cloneElement(child, {
                        key: index,
                        ...props,
                        styles: {
                            container: props.styles?.thumb
                        },
                        ...child.props,
                    })
                ) : (
                        <Thumb
                            {...props}
                            styles={{
                                container: props.styles?.thumb
                            }}
                            value={value}
                        />
                    )
            }
        </div>
    )
}

const Default = forwardRef(Meter)

export default {
    ...Default,
    Thumb,
} as typeof Default & {
    Thumb: typeof Thumb
}