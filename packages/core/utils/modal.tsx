import React from 'react'

import { Modal } from '@stage-ui/core'
import ModalTypes from '@stage-ui/core/layout/Modal/types'
import { ViewportShared } from '@stage-ui/core/layout/Viewport/MountArea'
import { createID } from '@stage-ui/system'

export default (render: ModalTypes.DialogOptions | ModalTypes.DialogRenderFn) => {
  const key = createID()
  const options = typeof render === 'object' ? render : null
  let modal: ModalTypes.Ref
  const assignRef = (ref: ModalTypes.Ref) => {
    modal = ref
  }
  const close = () => {
    modal.close()
  }
  ViewportShared.addElement(
    <Modal
      {...options}
      ref={assignRef}
      modalId={key}
      title={options?.title}
      subtitle={options?.subtitle}
      hideHeader={options?.hideHeader || typeof render === 'function'}
      hideClose={options?.hideClose}
      style={options?.style}
      size={options?.size}
      decoration={options?.decoration}
      onOpen={options?.onOpen}
      didClose={() => {
        ViewportShared.removeElement(key)
        options?.didClose?.()
      }}
    >
      {typeof render === 'function' ? render(close) : options?.render(close)}
    </Modal>,
    key,
  )

  /**
   * Don't ask, this hot fix to fix payment window in safari)
   */
  setTimeout(() => {
    if (!modal) {
      return setTimeout(() => {
        if (!modal) {
          return setTimeout(() => {
            return modal.open()
          }, 500)
        }
        return modal.open()
      }, 100)
    }
    return modal.open()
  })
}
