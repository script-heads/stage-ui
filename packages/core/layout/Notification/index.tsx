import React, { forwardRef } from 'react'
import Block from '../Block';
import Types from './types';
import useStyles from '@flow-ui/core/misc/hooks/useStyles';
import notificationStyles from './styles';

const Notifications = (props: Types.Props, ref: any) => {

    const styles = useStyles<Types.Styles>(props, notificationStyles, 'Notification');

    return (
        <Block ref={ref} surface="minor" onClick={() => props.onClick && props.onClick()} css={styles.container}>
            {props.children}
        </Block>
    )
}

export default forwardRef(Notifications)