import { Block, Button, Flexbox, Modal } from '@stage-ui/core'
import ModalTypes from '@stage-ui/core/layout/Modal/types'
import { addElement, removeElement } from '@stage-ui/core/layout/Viewport/MountArea'
import createID from '@stage-ui/system/utils/createID'
import React from 'react'

export default (options: ModalTypes.DialogOptions) => {
  const key = createID()
  let modal: ModalTypes.Ref
  const close = () => {
    modal.close()
  }

  addElement(
    <Modal
      {...options}
      ref={(ref: ModalTypes.Ref) => (modal = ref)}
      title={options.title}
      subtitle={options.subtitle}
      hideHeader={options.hideHeader}
      styles={options.styles}
      size={options.size}
      decoration={options.decoration}
      onOpen={options.onOpen}
      didClose={() => {
        removeElement(key)
        options.didClose?.()
      }}
      children={
        options.render ? (
          options.render(close)
        ) : (
          <Flexbox column>
            <Block>{options.message}</Block>
            <Flexbox flex={1} justifyContent="flex-end" pt="1rem">
              <Button
                children={options.buttonText || 'OK'}
                onClick={() => {
                  modal.close()
                }}
              />
            </Flexbox>
          </Flexbox>
        )
      }
    />,
    key,
  )
  setTimeout(() => modal.open())
}
