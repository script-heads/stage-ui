import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { light, dark } from '@stage-ui/core/themes'
import { Viewport, Block, Flexbox, ScrollView } from '@stage-ui/core'
import { toPixel } from '@stage-ui/system/utils/size'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import ComponentModal from './modals/ComponentModal'
import core from './utils/core'
import Page404 from './pages/404'
import Components from './pages/Components'
import Index from './pages/Index'
import Icons from './pages/Icons'
import Footer from './components/Footer'

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

const Docs = () => {
  const [currentTheme, setTheme] = useState(initialDocsContext.currentTheme)

  useEffect(() => {
    localStorage.setItem('current_theme', currentTheme.name.toLowerCase())
  }, [currentTheme.name])

  return (
    <DocsContext.Provider value={{ currentTheme, themes: initialDocsContext.themes, setTheme }}>
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
          <ScrollView h="100%" w="100%" barOffset={toPixel('0.25rem')}>
            <Flexbox column alignItems="center" px="xl">
              <Block w="100%" style={{ maxWidth: '64rem', width: '100%' }}>
                <Header />
                <Switch>
                  <Route exact path="/">
                    <Index />
                  </Route>
                  <Route exact path="/components">
                    <Components />
                  </Route>
                  <Route exact path="/components/:name">
                    <Components />
                    <ComponentModal />
                  </Route>
                  <Route exact path="/icons">
                    <Icons />
                  </Route>
                  <Route path="*">
                    <Page404 />
                  </Route>
                </Switch>
              </Block>
            </Flexbox>
            <Footer />
          </ScrollView>
        </Router>
      </Viewport>
    </DocsContext.Provider>
  )
}

ReactDOM.render(<Docs />, document.getElementById('docs'))
