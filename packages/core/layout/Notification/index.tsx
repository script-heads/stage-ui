import React, { forwardRef } from 'react'
import Block from '../Block';
import NotificationTypes from './types';

const Notifications = (props: NotificationTypes.Props, ref: any) => {
    return (
        <Block ref={ref} surface="minor" onClick={() => props.onClick && props.onClick()}>
            {props.children}
        </Block>
    )
}

export default forwardRef(Notifications)