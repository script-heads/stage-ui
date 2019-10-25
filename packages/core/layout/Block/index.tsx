import { jsx } from '@emotion/core'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import { forwardRef } from 'react'
import Types from './types'
import blockStyles from './styles'

const Block = (props: Types.Props, ref) => {
    const {surface, hoverSurface} = props
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Styles>(props, blockStyles, 'Block')

    return jsx(
        props.tag || 'div',
        {
            position: 'relative',
            ...attributes,
            ref: ref,
            css: styles.container({surface, hoverSurface}),
        },
        props.children
    )
}

export default forwardRef(Block)