/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Popover: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    const { align = 'top' } = props

    const { cs, attributes, events } = useComponent('Popover', { props, styles, styleProps: { container: ['all']} })

    return (
        <div {...attributes} {...events.all} ref={ref} css={cs.container}>
            <div css={cs.arrow({ align })} />
            {props.children}
        </div>
    )
}

export default forwardRef(Popover)