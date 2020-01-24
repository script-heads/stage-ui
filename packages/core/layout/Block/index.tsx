import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/whale'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Block: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { surface, hoverSurface } = props
    
    const { css, attributes } = useComponent('Block', { props, styles })

    return jsx(
        props.tag || 'div',
        {
            ...attributes,
            ref: ref,
            css: css.container({ surface, hoverSurface }),
        },
        props.children
    )
}

export default forwardRef(Block)