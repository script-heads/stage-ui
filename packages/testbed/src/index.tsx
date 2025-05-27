import { light } from './theme'
import { DatePicker, Viewport } from '@stage-ui/core'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const App: React.FC = () => {
  const [v, setV] = useState(new Date().toISOString())

  return (
    <>
      <input type="date" onChange={(e) => setV(e.target.value)}></input>
      <DatePicker value={v} onChange={(d) => setV(d?.toISOString()!)} />
    </>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
