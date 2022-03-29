import React, { forwardRef } from 'react'

import ScrollView from '../ScrollView'
import ScrollViewTypes from '../ScrollView/types'

import Types from './types'

function ModalOverlay(
  { getStyles, children }: Types.ModalOverlayProps,
  ref: React.ForwardedRef<ScrollViewTypes.Ref>,
) {
  const styles = getStyles()

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
      {children}
    </ScrollView>
  )
}

export default forwardRef(ModalOverlay)
