import React, { useMemo } from 'react'
import createCache, { Options } from '@emotion/cache'
import { ThemeProvider, CacheProvider, Global } from '@emotion/react'

interface ProviderProps {
  theme?: Stage.Theme
  global?: Stage.JSS
  cache?: Options
  children?: React.ReactNode
}

export const StageContext = React.createContext({} as Stage.Theme)

const Provider = <T extends ProviderProps>(props: T) => {
  const { theme, global, children } = props

  const cache = useMemo(() => createCache(props.cache!), [])

  const Content = (
    <CacheProvider value={cache}>
      <Global styles={[global, theme && { '.focused': theme.assets.focus }]} />
      {children}
    </CacheProvider>
  )

  if (theme) {
    return (
      <StageContext.Provider value={theme}>
        <ThemeProvider theme={theme}>{Content}</ThemeProvider>
      </StageContext.Provider>
    )
  }

  return Content
}

export default Provider
