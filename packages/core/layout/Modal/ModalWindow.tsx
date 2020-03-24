import ModalTypes from './types'
import React, { forwardRef } from 'react'
import ModalHeader from './ModalHeader'

const ModalWindow = forwardRef((props: ModalTypes.ModalWindowProps, ref: React.Ref<HTMLDivElement>) => {

    const styles = props.getStyles()

    return (
        <div
            ref={ref}
            css={styles.cs.window(styles.state)}
            {...props.containerAttr}
            {...props.containerEvents.all}
        >
            <ModalHeader
                getStyles={props.getStyles}
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