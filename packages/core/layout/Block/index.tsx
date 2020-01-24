import { jsx } from '@emotion/core'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import { forwardRef, RefForwardingComponent } from 'react'
import blockStyles from './styles'
import Types from './types'

const Block: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { surface, hoverSurface } = props
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Overrides>(props, blockStyles, 'Block')

    return jsx(
        props.tag || 'div',
        {
            ...attributes,
            ref: ref,
            css: styles.container({ surface, hoverSurface }),
        },
        props.children
    )
}

export default forwardRef(Block)