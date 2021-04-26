import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Block: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

    const { cs, attributes, events } = useComponent('Block', {
        props,
        styles,
        styleProps: { container: ['all'] },
    })

    return jsx(
        props.as || 'div',
        {
            ...attributes,
            ...events.all,
            ref: ref,
            css: cs.container({
                decoration: props.decoration
            }),
            className: props.className,
        },
        props.children
    )
}

export default forwardRef(Block)