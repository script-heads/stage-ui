import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Grid: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Grid', {
        props,
        styles,
        styleProps: { container: ['all'] },
    })

    return jsx(
        'div',
        {
            ...attributes,
            ...events.all,
            ref: ref,
            css: cs.container({
                decoration: props.decoration
            })
        },
        props.children
    )
}

export default forwardRef(Grid)