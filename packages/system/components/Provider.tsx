import React, { useMemo } from 'react'
import createCache, { Options } from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider, Global, SerializedStyles } from '@emotion/core'
import SystemTypes from '../types'

/**
 * autocomplete hack for webkit
 */
const autocomplete = {
    transition: 'all 604800s ease-in-out 0s',
    transitionProperty: 'background-color, color',
}
const autocompleteSt = {
    'input:-webkit-autofill': autocomplete,
    'input:-webkit-autofill:hover': autocomplete,
    'input:-webkit-autofill:focus': autocomplete,
    'input:-webkit-autofill:active': autocomplete,
    'input::-webkit-internal-input-suggested': {
        /**
         * Chrome bug
         * https://bugs.chromium.org/p/chromium/issues/detail?id=953689
         */
    }
}

interface ProviderProps {
    theme?: SystemTypes.Theme
    global?: SerializedStyles
    cache?: Options
    children?: React.ReactNode
}

export const SystemContext = React.createContext({} as SystemTypes.Theme)

const Provider = <T extends ProviderProps>(props: T) => {

    const { theme, global, children } = props
    const cache = useMemo(() => createCache(props.cache), [])

    const Content = (
        <CacheProvider value={cache}>
            <Global styles={[autocompleteSt, global]} />
            {children}
        </CacheProvider>
    )

    if (theme) {
        return (
            <SystemContext.Provider value={theme}>
                <ThemeProvider theme={theme}>
                    {Content}
                </ThemeProvider>
            </SystemContext.Provider>
        )
    }

    return Content
}

export default Provider