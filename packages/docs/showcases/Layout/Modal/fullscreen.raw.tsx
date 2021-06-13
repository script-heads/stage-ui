import { Button, Modal } from '@stage-ui/core'
import React, { Fragment, useRef } from 'react'
import ModalTypes from '@stage-ui/core/components/layout/Modal/types'

export default () => {
  const modal = useRef<ModalTypes.Ref>(null)
  return (
    <>
      <Modal
        decoration="fullscreen"
        title="Hello"
        subtitle="I'm modal panel, please do not close me 🙄"
        ref={modal}
      />
      <Button onClick={() => modal.current?.open()} children="Push" />
    </>
  )
}
