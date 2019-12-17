import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import React, { forwardRef } from 'react'
import popoverStyles from './styles'
import Types from './types'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'

const Popover = (props: Types.Props, ref) => {
    const {align = 'top'} = props
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Overrides>(props, popoverStyles, 'Popover')

    return (
        <div
            {...attributes}
            ref={ref}
            css={styles.container}
        >
            <div css={styles.arrow({align})} />
            {props.children}
        </div>
    )
}

export default forwardRef(Popover)