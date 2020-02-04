import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Block: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Block', { 
        props, 
        styles, 
        styleProps: { container: ['all'] }
    })

    return jsx(
        props.tag || 'div',
        {
            ...attributes,
            ...events.all,
            ref: ref,
            className: props.className,
            css: cs.container({
                decoration: props.decoration
            }),
        },
        props.children
    )
}

export default forwardRef(Block)