import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Meter: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const {
        decoration = 'filled',
        shape = 'round',
        size = 'm',
        percent = 0,
    } = props

    const { cs, attributes, events } = useComponent('Meter', { props, styles, styleProps: {container: ['all']} })

    return (
        <div ref={ref} {...attributes} {...events.all} css={cs.container({decoration, shape, size})}>
            <div
                css={cs.thumb({shape, size})}
                style={{
                    width: percent + '%'
                }}
            />
        </div>
    )
}

export default forwardRef(Meter)