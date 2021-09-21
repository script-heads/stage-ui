import React, { forwardRef } from 'react'
import ModalHeader from './ModalHeader'
import ModalTypes from './types'

const ModalWindow = forwardRef(
  (props: ModalTypes.ModalWindowProps<HTMLDivElement>, ref: React.Ref<HTMLDivElement>) => {
    const styles = props.getStyles()

    return (
      <div
        ref={ref}
        css={[styles.classes.window(styles.state), styles.styleProps.all]}
        {...props.containerAttr}
        {...props.containerEvents}
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
  },
)

export default ModalWindow
