import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const MeterStack: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { children } = props
    const { cs, attributes, events } = useComponent('MeterStack', {
        props,
        styles,
        styleProps: {
            container: ['all']
        }
    })

    return (
        <div {...attributes} {...events.all} css={cs.container}>
            {children.map((child, index) =>
                React.cloneElement(child, {
                    key: index,
                    ...child.props,
                    size: child.props.size || props.size,
                    decoration: child.props.decoration || props.decoration,
                    shape: child.props.shape || props.shape,
                    styles: {
                        container: (
                            child.props.styles?.container
                            ||
                            props.styles?.meterContainer
                        ),
                        thumb: (
                            child.props.styles?.thumb
                            ||
                            props.styles?.meterThumb
                        ),
                    },
                })
            )}
        </div>
    )
}

export default forwardRef(MeterStack)