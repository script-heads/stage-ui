import React from 'react'

declare const $_WORKDIR_$: string

export interface Config {
    title?: string
    giturl?: string
    types?: string[],
    cutTypes?: string[]
    separateSections?: string[]
}

export interface Page {
    id?: string
    url?: string
    title?: string
    subtitle?: string
    ns?: string
    cases?: {
        label: string
        code: string
    }[],
    test?: React.SFC<{}>
    sticky?: boolean
    default?: React.SFC<{}>
}

export type Pages = {
    [k: string]: Page | Pages
}

class Core {
    static instance: Core
    static getInstance() {
        if (!this.instance) {
            this.instance = new Core()
        }
        return this.instance
    }

    protected context: __WebpackModuleApi.RequireContext
    protected configObject: Config = {}
    protected generatedPagesObject: Pages = {}
    protected reactContext: any = React.createContext(null)

    constructor() {
        this.context = require.context($_WORKDIR_$ + '/pages', true, /\.case$/)
        const config = require($_WORKDIR_$ + '/documaker.config')

        if (config && config.default) {
            this.configObject = config.default
        }
    }

    get pages(): Pages {
        return this.generatedPagesObject
    }

    get config(): Config  {
        return this.configObject 
    }

    get getReactContext() {
        return this.reactContext
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

    private searchPage(pages: Object, key: string, value: unknown) {
        let page = null
        for (let innerKey in pages) {
            if (pages[innerKey].id) {
                if (pages[innerKey][key] === value) return pages[innerKey]
            } else {
                page = this.searchPage(pages[innerKey], key, value)
                if (page) return page
            }
        }
        return page
    }

    public init() {
        this.context.keys().map((path: string) => {
            const dirs = path.split('/').slice(1)
            
            dirs.map((dir, i) => {
                if (dir.match('.case')) {
                    let pagesLink: Object = this.generatedPagesObject
                    const page = this.context(path)
                    const name = dirs[i-1] || page.title || 'Untitled'
                    const section = dirs[i-2]

                    if (section) {
                        if (!pagesLink[section]) {
                            pagesLink[section] = {}
                        }
                        pagesLink = pagesLink[section]
                    }

                    pagesLink[name] = Object.assign({
                        id: this.getId('PAGE', name),
                        url: section ? section+'/'+name : name
                    }, page)                    
                }
            })
        })
    }

    public getFirstPage(): Page | null {
        const firstObject = Object.values(this.pages)[0]
        if (!firstObject) return null
        if (firstObject.id) return firstObject
        return Object.values(firstObject)[0]
    }

    public getPageById(id: string) {
        return this.searchPage(this.pages, 'id', id)
    }

    public getPageByUrl(url: string) {
        return this.searchPage(this.pages, 'url', url)
    }
}

export default Core.getInstance()