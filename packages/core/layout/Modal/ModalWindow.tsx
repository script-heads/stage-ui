import React, { forwardRef } from 'react'

import ModalHeader from './ModalHeader'
import Types from './types'

const ModalWindow = forwardRef(
  (
    props: Types.ModalWindowProps<HTMLDivElement>,
    ref: React.Ref<Types.Ref['window']>,
  ) => {
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
          hideClose={props.hideClose}
          hideHeader={props.hideHeader}
        />
        {props.children}
      </div>
    )
  },
)

export default ModalWindow
