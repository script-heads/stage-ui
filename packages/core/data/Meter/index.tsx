import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Meter: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const {
        decoration = 'filled',
        shape = 'round',
        size = 'medium',
        percent = 0,
    } = props

    const { css, attributes } = useComponent('Meter', { props, styles })

    return (
        <div ref={ref} {...attributes} css={css.container({decoration, shape, size})}>
            <div
                css={css.thumb({shape, size})}
                style={{
                    width: percent + '%'
                }}
            />
        </div>
    )
}

export default forwardRef(Meter)