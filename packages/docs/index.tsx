import { Global } from '@emotion/react'
import { Viewport } from '@stage-ui/core'
import * as defaultThemes from '@stage-ui/core/misc/themes/index'
import SystemTypes from '@stage-ui/system/types'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Router from './pages/router'

export { default as Menu } from './components/Menu'
export { default as Sidebar } from './components/Sidebar'

declare global {
    interface Window {
        breakpoints: number[]
    }
}

window.breakpoints = [960, 768]

const Docs = () => {

    const [theme, setTheme] = useState<SystemTypes.Theme>(defaultThemes.dark)

    useEffect(() => {
        localStorage.setItem('current_theme', theme.name.toLowerCase())
    }, [theme])

    return (
        <Viewport theme={theme}>
            <Global
                styles={{
                    'html,body,#docs': {
                        minHeight: '100vh',
                        overscrollBehavior: 'none'
                    }
                }}
            />
            <Router
                theme={theme}
                defaultThemes={defaultThemes}
                setTheme={setTheme}
            />
        </Viewport>
    )
}

ReactDOM.render(
    <Docs />,
    document.getElementById('docs')
)