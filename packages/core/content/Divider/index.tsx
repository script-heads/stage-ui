import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import Types from './types'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import dividerStyles from './styles'

const Divider = (props: Types.Props, ref) => {
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Overrides>(props, dividerStyles, 'Divider')

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: styles.container
        }
    )
}

export default forwardRef(Divider)
