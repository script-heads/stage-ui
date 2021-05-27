/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import styles from './styles'
import Types from './types'

const Popover: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    const { align = 'top' } = props

    const { classes, attributes, events } = useSystem('Popover', { props, styles, styleProps: { container: ['all']} })

    return (
        <div {...attributes} {...events} ref={ref} css={classes.container}>
            <div css={classes.arrow({ align })} />
            {props.children}
        </div>
    )
}

export default forwardRef(Popover)