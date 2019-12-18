import React, { ReactElement } from 'react'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

declare const $_WORKDIR_$: string

export interface Config {
    title?: string
    giturl?: string
    types?: string[],
    cutTypes?: string[]
    separateSections?: string[]
    themes?: Record<string,ThemeTypes.Index>
    promo?: (props: {open: () => void}) => ReactElement
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

    protected content: __WebpackModuleApi.RequireContext
    protected configObject: Config = {}
    protected generatedPagesObject: Pages = {}
    protected reactContext: React.Context<any> = React.createContext(null)

    constructor() {
        this.content = require.context($_WORKDIR_$ + '/pages', true, /\.case$/)
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

    get Context() {
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
        this.content.keys().map((path: string) => {
            const dirs = path.split('/').slice(1)
            
            dirs.map((dir, i) => {
                if (dir.match('.case')) {
                    let pagesLink: Object = this.generatedPagesObject
                    const page = this.content(path)
                    const name = page.title || dirs[i-1] || 'Untitled'
                    const section = dirs[i-2]
                    const urlName = name.toLowerCase().replace(' ', '-')
                    const sectionUrlName = section?.toLowerCase().replace(' ', '-')

                    if (section) {
                        if (!pagesLink[section]) {
                            pagesLink[section] = {}
                        }
                        pagesLink = pagesLink[section]
                    }

                    pagesLink[name] = Object.assign({},page,{
                        id: this.getId('PAGE', name),
                        title: name,
                        url: '/' + (section 
                            ? sectionUrlName + '/' + urlName 
                            : urlName
                        )
                    })                    
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