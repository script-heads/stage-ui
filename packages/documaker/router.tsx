import WhaleTypes from '@flow-ui/whale/types'
import React, { useState } from 'react'
import Page from './components/Page'
import Page404 from './components/Page404'
import PageEmpty from './components/PageEmpty'
import core from './core'

interface RouterProps {
    theme: WhaleTypes.Theme
    defaultThemes: Record<string,WhaleTypes.Theme>
    setTheme: React.Dispatch<React.SetStateAction<WhaleTypes.Theme>>
}

core.init()

const Router = (props: RouterProps) => {

    const { config, pages } = core
    const { defaultThemes, theme, setTheme } = props
    const themes = Object.assign(defaultThemes, config.themes)

    const [path, setPath] = useState<string>('/' + window.location.pathname.split('/').filter(i=>i).join('/'))

    const page = core.getPageByUrl(path)
    const CustomPage = config.pages?.custom?.[path] || null
    
    document.title = page?.title 
        ? config.name 
            ? page.title + ' - ' + config.name 
            : page.title
        : config.name || 'Documaker'
	
    window.onpopstate = (e: PopStateEvent) => setPath(e.state.path)

    function historyPush (path: string) {
        history.pushState({ path }, '', path)
        setPath(path)
    }

	if (page) {
		return ( 
			<Page 
                data={page}
                pages={pages}
				config={config}
				path={path}
				setPath={historyPush}
				theme={theme}
				themes={themes}
				setTheme={setTheme}
			/>
		)
	}

	if (CustomPage) {
		return ( 
            <CustomPage
                pages={pages} 
				config={config}
				path={path}
				setPath={historyPush}
				theme={theme}
				themes={themes}
				setTheme={setTheme}
			/>
		)
	}

	if (Object.keys(pages).length === 0) {
		return <PageEmpty />
	}

	return <Page404 />
}

export default Router