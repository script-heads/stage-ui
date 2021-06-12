import { Block, Button, Flexbox, Modal } from '@stage-ui/core'
import ModalTypes from '@stage-ui/core/components/layout/Modal/types'
import { addElement, removeElement } from '@stage-ui/core/components/layout/Viewport/MountArea'
import createID from '@stage-ui/system/utils/createID'
import React from 'react'

const dialog = (options: ModalTypes.DialogOptions) => {
  const key = createID()

  let modal: ModalTypes.Ref

  const close = () => {
    modal.close()
  }

  addElement(
    <Modal
      {...options}
      ref={(ref: ModalTypes.Ref) => {
        modal = ref
      }}
      didClose={() => {
        removeElement(key)
        options.didClose?.()
      }}
    >
      {options.render ? (
        options.render(close)
      ) : (
        <Flexbox column>
          <Block>{options.message}</Block>
          <Flexbox flex={1} justifyContent="flex-end" pt="1rem">
            <Button
              onClick={() => {
                modal.close()
              }}
              label={options.buttonText || 'OK'}
            />
          </Flexbox>
        </Flexbox>
      )}
    </Modal>,
    key,
  )
  setTimeout(() => modal.open())
}

export default dialog
