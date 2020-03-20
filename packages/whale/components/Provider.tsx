import React, { useMemo } from 'react'
import createCache, { Options } from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider, Global, SerializedStyles } from '@emotion/core'
import WhaleTypes from '../types'

const autocompleteHack = {
    /**
     * autocomplete hack for webkit
     */
    'input:-webkit-autofill': {
        'transition': 'background-color 604800s ease-in-out 0s',
    },
    'input:-webkit-autofill:hover': {
        'transition': 'background-color 604800s ease-in-out 0s',
    },
    'input:-webkit-autofill:focus': {
        'transition': 'background-color 604800s ease-in-out 0s',
    },
    'input:-webkit-autofill:active': {
        'transition': 'background-color 604800s ease-in-out 0s',
    },
}

interface ProviderProps {
    theme?: WhaleTypes.Theme
    global?: SerializedStyles
    cache?: Options
    children?: React.ReactNode
}

export const WhaleContext = React.createContext({} as WhaleTypes.Theme)

const Provider = <T extends ProviderProps>(props: T) => {

    const { theme, global, children } = props
    const cache = useMemo(() => createCache(props.cache), [])

    const Content = (
        <CacheProvider value={cache}>
            <Global styles={[autocompleteHack, global]} />
            {children}
        </CacheProvider>
    )

    if (theme) {
        return (
            <WhaleContext.Provider value={theme}>
                <ThemeProvider theme={theme}>
                    {Content}
                </ThemeProvider>
            </WhaleContext.Provider>
        )
    }

    return Content
}

export default Provider