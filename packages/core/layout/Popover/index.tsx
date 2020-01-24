import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, RefForwardingComponent } from 'react'
import popoverStyles from './styles'
import Types from './types'

const Popover: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
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