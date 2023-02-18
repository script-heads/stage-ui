import React, { useMemo, useState } from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { light, dark } from '@stage-ui/core/themes'
import { Viewport, Block, Flexbox, ScrollView } from '@stage-ui/core'
import { toPixel } from '@stage-ui/system'

import { AsyncPage } from '@/components/AsyncPage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import core from '@/utils/core'
import Index from '@/pages/Index'

const Icons = React.lazy(() => import('@/pages/Icons'))
const Components = React.lazy(() => import('@/pages/Components'))
const ComponentModal = React.lazy(() => import('@/modals/ComponentModal'))
const Colors = React.lazy(() => import('@/pages/Colors'))
const Page404 = React.lazy(() => import('@/pages/404'))

core.init()
const initialDocsContext: {
  currentTheme: Stage.Theme
  themes: Record<'light' | 'dark', Stage.Theme>
  setTheme?: React.Dispatch<React.SetStateAction<Stage.Theme>>
} = {
  currentTheme: light,
  themes: { light, dark },
}
export const DocsContext = React.createContext(initialDocsContext)

function Docs() {
  const [currentTheme, setTheme] = useState(initialDocsContext.currentTheme)

  const nextContext = useMemo(() => {
    localStorage.setItem('current_theme', currentTheme.name.toLowerCase())
    return { currentTheme, themes: initialDocsContext.themes, setTheme }
  }, [currentTheme.name])

  return (
    <DocsContext.Provider value={nextContext}>
      <Viewport
        theme={currentTheme}
        global={[
          {
            'html,body,#docs': {
              minHeight: '100vh',
              background: currentTheme.color.surface.hex(),
              overscrollBehavior: 'none',
              fontFamily: 'LotaGrotesque',
              WebkitFontSmoothing: 'antialiased',
              '::-webkit-scrollbar': {
                display: 'none',
                overflowStyle: 'none',
                scrollbarWidth: 'none',
              },
            },
            '.scroll-decoration': {
              boxShadow: 'none !important',
            },
          },
          `
        @font-face{
          font-family:LotaGrotesque;
          src:url(/assets/fonts/LotaGrotesque-Regular.woff2);
          src:url(/assets/fonts/LotaGrotesque-Regular.woff) format("woff"),
              url(/assets/fonts/LotaGrotesque-Regular.eot?#iefix) format("embedded-opentype"),
              url(/assets/fonts/LotaGrotesque-Regular.ttf) format("truetype");
          font-weight:400;
          font-style:normal
        }
        @font-face{
          font-family:LotaGrotesque;
          src:url(/assets/fonts/LotaGrotesque-SemiBold.woff2);
          src:url(/assets/fonts/LotaGrotesque-SemiBold.woff) format("woff"),
              url(/assets/fonts/LotaGrotesque-SemiBold.eot?#iefix) format("embedded-opentype"),
              url(/assets/fonts/LotaGrotesque-SemiBold.ttf) format("truetype");
          font-weight:600;
          font-style:normal
        }
        @font-face{
          font-family:LotaGrotesque;
          src:url(/assets/fonts/LotaGrotesque-Bold.woff2);
          src:url(/assets/fonts/LotaGrotesque-Bold.woff) format("woff"),
              url(/assets/fonts/LotaGrotesque-Bold.eot?#iefix) format("embedded-opentype"),
              url(/assets/fonts/LotaGrotesque-Bold.ttf) format("truetype");
          font-weight:700;
          font-style:normal;
        }
      `,
        ]}
      >
        <Router>
          <ScrollView
            h="100%"
            w="100%"
            barOffset={toPixel('0.25rem')}
            xBarPosition="none"
          >
            <Flexbox column alignItems="center" px="xl">
              <Block w="100%" style={{ maxWidth: '64rem', width: '100%' }}>
                <Header />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route
                    path="/components"
                    element={<AsyncPage component={Components} />}
                  >
                    <Route
                      path=":name"
                      element={<AsyncPage component={ComponentModal} />}
                    />
                  </Route>
                  <Route path="/icons" element={<AsyncPage component={Icons} />} />
                  <Route path="/colors" element={<AsyncPage component={Colors} />} />
                  <Route path="*" element={<AsyncPage component={Page404} />} />
                </Routes>
                <Footer />
              </Block>
            </Flexbox>
          </ScrollView>
        </Router>
      </Viewport>
    </DocsContext.Provider>
  )
}

ReactDOM.render(<Docs />, document.getElementById('app'))
