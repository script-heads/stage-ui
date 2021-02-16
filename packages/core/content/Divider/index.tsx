import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Divider: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const { cs, attributes, events } = useComponent('Divider', { props, styles, styleProps: { container: ['all']} })

    return jsx(
        'div',
        {
            ...attributes,
            ...events.all,
            ref,
            css: cs.container
        }
    )
}

export default forwardRef(Divider)
