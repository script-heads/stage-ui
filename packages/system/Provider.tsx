import React, { useMemo } from 'react'

import createCache, { Options } from '@emotion/cache'
import { CacheProvider, Global, Interpolation, ThemeProvider } from '@emotion/react'

import { cssReset } from './utils/cssReset'

interface ProviderProps {
  theme?: Stage.Theme
  global?: Stage.CSSInterpolation
  cache?: Options
  children?: React.ReactNode
}

export const StageContext = React.createContext({} as Stage.Theme)

const Provider = <T extends ProviderProps>(props: T) => {
  const { theme, global, children } = props

  const cache = useMemo(() => createCache(props.cache!), [])

  const Content = (
    <CacheProvider value={cache}>
      <Global
        styles={[
          cssReset,
          global,
          theme && ({ '#focused': theme.assets.focus } as Interpolation<any>),
        ]}
      />
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
