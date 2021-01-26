import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Flexbox: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

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