import ModalTypes from './types';
import React, { Fragment, forwardRef } from 'react';
import ModalHeader from './ModalHeader';

const ModalWindow = forwardRef((props: ModalTypes.ModalWindowProps, ref: any) => {

    return (
        <Fragment>
            <div
                ref={ref}
                css={props.styles.window(props.visible, props.center, props.fullSize)}
                {...props.containerAttr}
            >
                <ModalHeader
                    styles={props.styles}
                    onClosePressed={props.onClosePressed}
                    title={props.title}
                    subtitle={props.subtitle}
                    hideHeader={props.hideHeader}
                />
                {props.children}
            </div>
        </Fragment>
    )
})

export default ModalWindow