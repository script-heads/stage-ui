import ThemeTypes from '@flow-ui/core/misc/themes/types'

declare const WEBPACK_WORKDIR: string

export interface HomePageProps {
    history: {
        push: (url: string) => void
    }
    pages: {[key: string]: string}
}

export interface Config {
    name?: string
    git?: string
    homePage?: (props: HomePageProps) => JSX.Element
    themes?: Record<string,ThemeTypes.Index>
    pages?: {
        order?: Record<string,string[]>
        types?: string[],
        separatedTypes?: string[]
    }
}

export interface PageType {
    id: string
    url: string
    title: string
    ns?: string
    cases?: {
        label: string
        code: string
    }[],
    test?: React.SFC<{}>
    sticky?: boolean
    default?: React.SFC<{}>
}

export type PagesType = Record<string,PageType[]>

class Core {
    static instance: Core
    static getInstance() {
        if (!this.instance) {
            this.instance = new Core()
        }
        return this.instance
    }

    protected rawContent: __WebpackModuleApi.RequireContext
    protected rawConfig: Config = {}
    protected content: PagesType = {}

    constructor() {
        this.rawContent = require.context(WEBPACK_WORKDIR + '/pages', true, /\.case$/)
        this.rawConfig = require(WEBPACK_WORKDIR + '/documaker.config')?.default || {}
    }

    get pages(): PagesType {
        return this.content
    }

    get config(): Config  {
        return this.rawConfig 
    }

    private getId(prefix: string, id?: string) {
        let uniqueId = ''
        if (id) {
            id.split('').forEach(char => {
                uniqueId += char.charCodeAt(0).toString(16)
            })
        }
        if (!uniqueId) {
            uniqueId = Math.trunc(Math.random() * 66666666).toString()
        }
        return prefix + '-' + uniqueId
    }

    private makePage(path: string) {
        const page = this.rawContent(path)
        const dirs = path.split('/').slice(1)
        const dirsCount = dirs.length
        const name = page.title || dirs[dirsCount] || 'Untitled'
        
        return Object.assign(
            {},
            page,
            {
                id: this.getId('PAGE', name),
                title: name,
                url: '/' + name.toLowerCase().replace(' ', '-')
            }
        )
    }

    private searchPage(pages: PagesType, key: string, value: unknown) {
        let result: PageType | null = null
        for (let section in pages) {
            result = pages[section].find(page => page[key] === value) || null
            if (result) return result  
        }
        return result
    }

    private makePages() {
        const order = this.config?.pages?.order
        const pagesByPaths: PagesType = { Index: [] }

        this.rawContent.keys().map((path: string) => {    
            const section = path.split('/').slice(-3)[0] || 'Index'
            const page = this.makePage(path)
            pagesByPaths[section] = pagesByPaths[section] || []
            pagesByPaths[section].push(page)
        })

        if (!order) return pagesByPaths

        const pagesByOrder: PagesType = { Index: [] }

        for (let section in order) {
            pagesByOrder[section] = []
            
            order[section].map(pageTitle => {
                const findedPage = this.searchPage(pagesByPaths, 'title', pageTitle)
                if (findedPage) {
                    pagesByOrder[section].push(findedPage)
                }
            })

            if (pagesByPaths[section]) {
                const otherPages = pagesByPaths[section].filter(page =>
                    !order[section].includes(page.title)
                )
                pagesByOrder[section] = pagesByOrder[section].concat(otherPages)
            }
        }
        
        for (let section in pagesByPaths) {
            if (!pagesByOrder[section]) {
                pagesByOrder[section] = pagesByPaths[section]
            }
        }

        return pagesByOrder
    }
    
    public init() {
        this.content = this.makePages()
    }

    public getFirstPage(): PageType | null {
        for (let section in this.pages) {
            if (this.pages[section].length) {
                return this.pages[section][0]
            }
        }
        return null
    }

    public getPageById(id: string) {
        return this.searchPage(this.pages, 'id', id)
    }

    public getPageByUrl(url: string) {
        return this.searchPage(this.pages, 'url', url)
    }
}

export default Core.getInstance()