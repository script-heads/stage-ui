import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Block: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { surface, hoverSurface } = props
    
    const { cs, attributes, events } = useComponent('Block', { props, styles })

    return jsx(
        props.tag || 'div',
        {
            ...attributes,
            ...events.all,
            ref: ref,
            css: cs.container({ surface, hoverSurface }),
        },
        props.children
    )
}

export default forwardRef(Block)