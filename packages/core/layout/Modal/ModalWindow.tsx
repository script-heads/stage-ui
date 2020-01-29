import ModalTypes from './types'
import React, { forwardRef } from 'react'
import ModalHeader from './ModalHeader'

const ModalWindow = forwardRef((props: ModalTypes.ModalWindowProps, ref: any) => {

    return (
        <div
            ref={ref}
            css={props.styles.window({visible: props.visible, fullSizeCenter: props.center && props.fullSize})}
            {...props.containerAttr}
            {...props.containerEvents.all}
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
    )
})

export default ModalWindow