import React, { useCallback } from 'react'
import createCache from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider, Global } from '@emotion/core'
import Types from '../types'

export const Context = React.createContext({} as Types.Theme)

const Provider = (props) => {

    const {theme, global, children} = props
    const cache = useCallback(() => createCache(props.cache),[])

    return (
        <Context.Provider value={theme}>
            <ThemeProvider theme={theme}>
                <CacheProvider value={cache()}>
                    <Global styles={global}/>
                    {children}
                </CacheProvider>
            </ThemeProvider>
        </Context.Provider>
    )
}

export default Provider