import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import React, { forwardRef } from 'react'
import panelStyles from './styles'
import Types from './types'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'

const Panel = (props: Types.Props, ref) => {
    const {align = 'top'} = props
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Styles>(props, panelStyles, 'Panel')

    return (
        <div ref={ref} {...attributes} css={styles.container({align})}>
            {props.children}
        </div>
    )
}

export default forwardRef(Panel)