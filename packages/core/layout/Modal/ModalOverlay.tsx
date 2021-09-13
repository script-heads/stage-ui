import React, { forwardRef } from 'react'
import ModalTypes from './types'

const ModalOverlay = forwardRef(
  (props: ModalTypes.ModalOverlayProps, ref: React.Ref<HTMLDivElement>) => {
    const styles = props.getStyles()

    return <div {...props} ref={ref} css={styles.classes.overlay(styles.state)} />
  },
)

export default ModalOverlay
