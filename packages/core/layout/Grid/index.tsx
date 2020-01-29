import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Grid: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Grid', { props, styles, styleProps: {container: ['all']} })

    return jsx(
        'div',
        {
            ...attributes,
            ...events.all,
            ref: ref,
            css: cs.container
        },
        props.children
    )
}

export default forwardRef(Grid)