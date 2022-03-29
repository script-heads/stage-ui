import { Text } from 'react-native'

import lightTheme from '@stage-ui/native/themes/light'
import ThemeContext from '@stage-ui/native/utils/themeContext'

import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
    return (
        <SafeAreaProvider>
        <ThemeContext.Provider value={lightTheme}>
            <Text>1</Text>
        </ThemeContext.Provider>
        </SafeAreaProvider>
    )
}