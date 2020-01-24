import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, RefForwardingComponent } from 'react'
import meterStyles from './styles'
import Types from './types'

const Meter: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const {
        decoration = 'filled',
        shape = 'round',
        size = 'medium',
        percent = 0,
    } = props

    const { attributes } = useContainer(props)
    const styles = useStyles(props, meterStyles, 'Meter')

    return (
        <div ref={ref} {...attributes} css={styles.container({decoration, shape, size})}>
            <div
                css={styles.thumb({shape, size})}
                style={{
                    width: percent + '%'
                }}
            />
        </div>
    )
}

export default forwardRef(Meter)