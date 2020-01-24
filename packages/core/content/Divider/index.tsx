import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Divider: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const { css, attributes } = useComponent('Divider', { props, styles })

    return jsx(
        'div',
        {
            ...attributes,
            ref,
            css: css.container
        }
    )
}

export default forwardRef(Divider)
