import { light } from './theme'
import { DatePicker, Text, Viewport } from '@stage-ui/core'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App: React.FC = () => {
  const [v, setV] = useState(new Date().toISOString())

  return (
    <>
      <Text color="lightGreenA700">123</Text>
    </>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
