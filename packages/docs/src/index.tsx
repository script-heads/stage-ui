import React, { useMemo, useState } from 'react'

import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { light, dark } from '@stage-ui/core/themes'
import { Viewport, Block, Flexbox, ScrollView } from '@stage-ui/core'
import { toPixel } from '@stage-ui/system/utils/size'

import Header from '@/components/Header'
import ComponentModal from '@/modals/ComponentModal'
import core from '@/utils/core'
import Page404 from '@/pages/404'
import Components from '@/pages/Components'
import Index from '@/pages/Index'
import Icons from '@/pages/Icons'
import Colors from '@/pages/Colors'
import Footer from '@/components/Footer'

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
        global={{
          'html,body,#docs': {
            minHeight: '100vh',
            background: currentTheme.color.background.hex(),
            overscrollBehavior: 'none',
          },
        }}
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
                  <Route path="/components" element={<Components />}>
                    <Route path=":name" element={<ComponentModal />} />
                  </Route>
                  <Route path="/icons" element={<Icons />} />
                  <Route path="/colors" element={<Colors />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </Block>
            </Flexbox>
            <Footer />
          </ScrollView>
        </Router>
      </Viewport>
    </DocsContext.Provider>
  )
}

ReactDOM.render(<Docs />, document.getElementById('app'))
