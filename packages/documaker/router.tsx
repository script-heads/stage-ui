import WhaleTypes from '@flow-ui/whale/types'
import React, { useState, Fragment } from 'react'
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
	const noPages = Object.keys(pages).length === 0
    
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

	return (
		<Fragment>
			{page &&
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
			}
			{CustomPage && !page &&
				<CustomPage
					pages={pages} 
					config={config}
					path={path}
					setPath={historyPush}
					theme={theme}
					themes={themes}
					setTheme={setTheme}
				/>
			}
			{!CustomPage && !page && noPages &&
				<PageEmpty />
			}
			{!CustomPage && !page && !noPages &&
				<Page404 />
			}
		</Fragment>
	) 
}

export default Router