import { light } from './theme'
import { DatePicker, Modal, modal, TextField, Viewport } from '@stage-ui/core'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App: React.FC = () => {
  const handleOpen = () => {
    modal({
      preventEscapeClose: true,
      render: () => {
        return <>123</>
      },
      overlayClose: false,
    })
  }

  return (
    <>
      <button> 1</button>
      <TextField preventFocusHandling />
      <button>2</button>
    </>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
