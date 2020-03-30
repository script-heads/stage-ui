import { jsx } from '@emotion/core'
import { useComponent } from '@flow-ui/system'
import { forwardRef, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'

const Flexbox: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Flexbox', { 
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

export default forwardRef(Flexbox)