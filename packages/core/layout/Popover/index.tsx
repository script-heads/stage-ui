import { useComponent } from '@stage-ui/system'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Popover: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { align = 'top' } = props

    const { cs, attributes, events } = useComponent('Popover', { props, styles, styleProps: { container: ['all']} })

    return (
        <div {...attributes} {...events.all} ref={ref} css={cs.container}>
            <div css={cs.arrow({ align })} />
            {props.children}
        </div>
    )
}

export default forwardRef(Popover)