import React, { forwardRef } from 'react'
import ModalTypes from './types'

const ModalOverlay = forwardRef(
  (props: ModalTypes.ModalOverlayProps, ref: React.Ref<HTMLDivElement>) => {
    const styles = props.getStyles()

    return <div ref={ref} css={styles.classes.overlay(styles.state)} children={props.children} />
  },
)

export default ModalOverlay
