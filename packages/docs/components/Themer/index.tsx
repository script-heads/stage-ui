import { Button, Flexbox, Viewport } from '@flow-ui/core'
import { ColorPalette } from '@flow-ui/core/icons'
import React from 'react'
import original from './src/theme'
import { panel } from './src/ThemeConfigurator'
import PreviewCube from './src/ThemeConfigurator/PreviewCube'

const Themer = () => {
    const [theme, updateTheme] = React.useState(original)

    return (
        <Viewport theme={theme}>
            <Flexbox column alignItems="center">
                <PreviewCube />
                <Button
                    mt="l"
                    size="l"
                    children="Change theme"
                    leftChild={<ColorPalette />}
                    onClick={() => {
                        panel(original, updateTheme)
                    }}
                />
            </Flexbox>
        </Viewport>
    )
}

export default Themer