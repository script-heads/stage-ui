import React, { RefForwardingComponent, forwardRef } from 'react'
import Block from '../Block'
import Types from './types'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import notificationStyles from './styles'

const Notifications: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const styles = useStyles<Types.Overrides>(props, notificationStyles, 'Notification')

    return (
        <Block ref={ref} surface="minor" onClick={() => props.onClick && props.onClick()} css={styles.container}>
            {props.children}
        </Block>
    )
}

export default forwardRef(Notifications)