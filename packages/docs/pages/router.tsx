/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Block, ScrollView, Text } from '@stage-ui/core'
import ScrollViewTypes from '@stage-ui/core/layout/ScrollView/types'
import React, { useRef, useState } from 'react'
import Menu from '../components/Menu'
import ShowcasePage from '../components/ShowcasePage'
import core from '../utils/core'
import Page404 from './404'

interface RouterProps {
  theme: Stage.Theme
  defaultThemes: Record<string, Stage.Theme>
  setTheme: React.Dispatch<React.SetStateAction<Stage.Theme>>
}

core.init()

const Router = (props: RouterProps) => {
  const { config, pages } = core
  const { defaultThemes, theme, setTheme } = props
  const themes = Object.assign(defaultThemes, config.themes)

  const scrollView = useRef<ScrollViewTypes.Ref>(null)

  const [path, setPath] = useState<string>(
    `/${window.location.pathname
      .split('/')
      .filter((i) => i)
      .join('/')}`,
  )

  const showcasePage = core.getPageByUrl(path)
  const CustomPage = config.pages?.custom?.[path] || null
  const noPages = Object.keys(pages).length === 0

  document.title = showcasePage?.title || config.name || 'StageUI'

  window.onpopstate = (e: PopStateEvent) => setPath(e.state.path)

  function historyPush(currentPath: string) {
    window.history.pushState({ path: currentPath }, '', currentPath)
    setPath(currentPath)
    scrollView.current?.scrollTop()
  }

  return (
    <ScrollView h="100vh" w="100%" ref={scrollView}>
      <Block>
        <Menu
          pages={pages}
          config={config}
          path={path}
          setPath={historyPush}
          theme={theme}
          themes={themes}
          setTheme={setTheme}
        />
        {showcasePage && (
          <ShowcasePage
            data={showcasePage}
            pages={pages}
            config={config}
            path={path}
            setPath={historyPush}
            theme={theme}
            themes={themes}
            setTheme={setTheme}
          />
        )}
        {CustomPage && !showcasePage && (
          <CustomPage
            pages={pages}
            config={config}
            path={path}
            setPath={historyPush}
            theme={theme}
            themes={themes}
            setTheme={setTheme}
          />
        )}
        {!CustomPage && !showcasePage && !noPages && <Page404 />}
        {!CustomPage && !showcasePage && noPages && <Text>Docs has no pages</Text>}
      </Block>
    </ScrollView>
  )
}

export default Router
