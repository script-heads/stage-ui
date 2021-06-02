import React, { forwardRef } from 'react'
import ModalHeader from './ModalHeader'
import ModalTypes from './types'

const ModalWindow = forwardRef((props: ModalTypes.ModalWindowProps, ref: React.Ref<HTMLDivElement>) => {
  const styles = props.getStyles()

  return (
    <div ref={ref} css={styles.classes.window(styles.state)} {...props.containerAttr} {...props.containerEvents.all}>
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
