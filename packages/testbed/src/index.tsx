import { light } from './theme'
import {
  Button,
  DatePicker,
  Modal,
  modal,
  PolymorphicButton,
  TextField,
  Viewport,
} from '@stage-ui/core'
import ReactDOM from 'react-dom'
import { useEffect, useRef, useState } from 'react'

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

  const ref = useRef<HTMLAnchorElement | null>(null)

  return (
    <>
      <button> 1</button>
      <TextField isInputElementDirectFocusable decoration="outline" />
      <button>2</button>

      <PolymorphicButton
        as="a"
        href="https://google.com"
        target="_blank"
        style={(t) => ({ textDecoration: 'none' })}
        ref={ref}
      >
        we woke
      </PolymorphicButton>

      <input></input>
    </>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
