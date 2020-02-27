import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const MeterThumb: RefForwardingComponent<HTMLDivElement, Types.PrivateProps> = (props, ref) => {

    const {
        shape = 'round',
        size = 'm',
        value = 0,
    } = props

    const { cs, attributes, events } = useComponent('MeterThumb', {
        props,
        styles,
        styleProps: {
            container: ['all']
        }
    })

    return (
        <div
            {...attributes}
            {...events.all}
            css={cs.container({ shape, size })}
            style={{
                width: value + '%'
            }}
        />
    )
}

export default MeterThumb