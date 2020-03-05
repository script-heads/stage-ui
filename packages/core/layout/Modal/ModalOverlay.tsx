import React from 'react'
import ModalTypes from './types'
import { forwardRef } from 'react'

const ModalOverlay = forwardRef((props: ModalTypes.ModalOverlayProps, ref: any) => {

    const styles = props.getStyles()

    return (
        <div
            ref={ref}
            css={styles.cs.overlay(styles.state)}
            children={props.children}
        />
    )
})

export default ModalOverlay