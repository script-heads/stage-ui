import React, { useMemo } from 'react'
import createCache, { Options } from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider, Global, SerializedStyles } from '@emotion/core'
import WhaleTypes, {EmotionStyles} from '../types'

interface ProviderProps {
    theme?: WhaleTypes.Theme
    global?: SerializedStyles
    cache?: Options
    children?: React.ReactNode
}

export const WhaleContext = React.createContext({} as WhaleTypes.Theme)

const Provider = <T extends ProviderProps>(props: T) => {
    const {theme, global, children} = props
    const cache = useMemo(() => createCache(props.cache),[])

    const Content = (
        <CacheProvider value={cache}>
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