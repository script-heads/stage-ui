import React from 'react';
import ModalTypes from './types';
import { forwardRef } from 'react';

const ModalOverlay = forwardRef((props: ModalTypes.ModalOverlayProps, ref: any) => {

    return (
        <div
            ref={ref}
            css={props.styles.overlay({visible: props.visible, center: props.center})}
            children={props.children}
        />
    )
});

export default ModalOverlay