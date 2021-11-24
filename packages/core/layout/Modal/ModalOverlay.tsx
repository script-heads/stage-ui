import React, { forwardRef } from 'react'
import ScrollView from '../ScrollView'
import Types from './types'

const ModalOverlay = forwardRef(
  (props: Types.ModalOverlayProps, ref: React.Ref<Types.Ref['overlay']>) => {
    const styles = props.getStyles()

    return (
      <ScrollView
        h="100vh"
        w="100%"
        barOffset={4}
        ref={ref}
        css={styles.classes.overlay(styles.state)}
        overrides={{
          xBar: () => [{ zIndex: 1000 }],
          yBar: () => [{ zIndex: 1000 }],
        }}
      >
        {props.children}
      </ScrollView>
    )
  },
)

export default ModalOverlay
