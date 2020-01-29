import React, { useCallback } from 'react'
import createCache, { Options } from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider, Global, SerializedStyles } from '@emotion/core'
import WhaleTypes, {EmotionStyles} from '../types'
import {WhaleContext} from '../utils/updateContext'

interface ProviderProps {
    theme?: WhaleTypes.Theme
    global?: EmotionStyles | SerializedStyles
    cache?: Options
    children?: React.ReactNode,
}

const Provider = <T extends ProviderProps>(props: T) => {

    const {theme, global, children} = props
    const cache = useCallback(() => createCache(props.cache),[])

    const Content = (
        <CacheProvider value={cache()}>
            <Global styles={global}/>
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