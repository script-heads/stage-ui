import { Flexbox, Text, Viewport } from '@stage-ui/core'
import ReactDOM from 'react-dom'
import { light } from './theme'

declare global {
  namespace Stage {
    interface ColorPalette {
      newRed: ColorShades
    }

    interface CustomPaletteRegistry {
      newYellowColor: Color
    }
  }
}

const App: React.FC = () => {
  return (
    <Flexbox column backgroundColor="gray300">
      <Text color="newRed100">newRed100</Text>

      <Text color="newYellowColor">newYellowColor</Text>

      <Text color="green500">limeA100</Text>
    </Flexbox>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
