import { modal, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

import { light } from './theme'

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

  return null
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
