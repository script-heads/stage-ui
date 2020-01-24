import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Popover: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { align = 'top' } = props

    const { css, attributes } = useComponent('Popover', { props, styles })

    return (
        <div {...attributes} ref={ref} css={css.container}>
            <div css={css.arrow({ align })} />
            {props.children}
        </div>
    )
}

export default forwardRef(Popover)