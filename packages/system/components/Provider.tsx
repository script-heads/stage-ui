import React, { useMemo } from 'react'

import createCache, { Options } from '@emotion/cache'
import { CacheProvider, Global, ThemeProvider } from '@emotion/react'

import { light } from '../themes'
import { StageContext } from '../hooks/useTheme'

import type Stage from '../index'

export interface ProviderProps {
  theme: Stage.Theme
  global?: Stage.CSSInterpolation
  cacheOptions?: Options
  children?: React.ReactNode
}

export const cssReset = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const Provider = <T extends ProviderProps>(props: T): React.ReactElement => {
  const { theme = light, global, children, cacheOptions } = props

  const cache = useMemo(() => createCache(cacheOptions || { key: 'stage' }), [])

  return (
    <StageContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <Global
            styles={[
              cssReset,
              global,
              {
                background: theme.color.background.rgb().string(),
                color: theme.color.onBackground.rgb().string(),
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                p: theme.assets.typography.paragraph.m,
                h1: theme.assets.typography.header.l,
                h2: theme.assets.typography.header.m,
                h3: theme.assets.typography.header.s,
                h4: theme.assets.typography.header.xs,
                ...theme.assets.typography.text.m,
                '#focused': theme.assets.focus,
              },
            ]}
          />
          {children}
        </CacheProvider>
      </ThemeProvider>
    </StageContext.Provider>
  )
}

export default Provider
