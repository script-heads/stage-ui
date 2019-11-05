import React from 'react'
import PluginRender from './pluginRender'

declare const $_WORKDIR_$: string

export interface IConfig {
    title?: string
    giturl?: string
    plugins?: ((props: IPluginProps) => void)[]
}

export interface IPluginProps {
    cases: any
    config: any
    selfContainer: HTMLElement
    render: (Body: React.SFC<{}>) => void
    context: any
}

export interface Case {
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

class Core {
    static instance: Core
    static getInstance() {
        if (!this.instance) {
            this.instance = new Core()
        }
        return this.instance
    }

    protected context: any
    protected configObject: IConfig = {}
    protected generatedPluginsArray: any[] = []
    protected generatedCasesObject: any = {}
    protected userInterface: any
    protected reactContext: any = React.createContext(null)

    constructor() {
        this.context = require['context']($_WORKDIR_$ + '/cases', true, /\.case$/)
        const config = require($_WORKDIR_$ + '/showcase.config')

        if (config && config.default) {
            this.configObject = config.default
        }
    }

    get cases() {
        return this.generatedCasesObject
    }

    get config() {
        return this.configObject as IConfig
    }

    get UI() {
        return this.userInterface
    }

    get getReactContext() {
        return this.reactContext
    }

    public getId(prefix: string, id?: string) {
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

    private initPlugin(plugin: (props: IPluginProps) => void) {
        const pluginId = this.getId('PLUGIN')
        let selfContainer: HTMLElement = document.getElementById(pluginId)!

        if (!selfContainer) {
            selfContainer = document.createElement('div')
            selfContainer.setAttribute('id', pluginId)
            document.body.appendChild(selfContainer)
        }

        const pluginObject = {
            id: pluginId,
            executer: plugin,
            render: (Body: () => JSX.Element) => PluginRender(Body, selfContainer),
            context: this.reactContext
        }

        this.generatedPluginsArray.push(pluginObject)

        plugin({
            cases: this.cases,
            config: this.config,
            selfContainer,
            render: pluginObject.render,
            context: pluginObject.context
        })
    }

    public init(UI: any) {
        /**
         * Generate cases
         */
        this.context.keys().map((currentContext: any) => {
            let objectLink = this.generatedCasesObject

            currentContext.split('/').map((contextItem: any, index: number) => {
                if (!index) return
                if (contextItem.match('.case')) {
                    Object.assign(objectLink, this.context(currentContext), {
                        url: currentContext.split('/').slice(1, -1).join('/')
                    })
                } else {
                    if (!objectLink[contextItem]) {
                        objectLink[contextItem] = {
                            id: this.getId('CASE', contextItem)
                        }
                    }
                    objectLink = objectLink[contextItem]
                }
            })
        })

        /**
         * Initiating plugins
         */
        this.userInterface = UI
        if (this.config.plugins) {
            this.config.plugins.map(plugin => {
                this.initPlugin(plugin)
            })
        }
    }

    public getFirstCase(cases?: any) {
        if (!cases) {
            cases = this.cases
        }

        const keys = Object.keys(cases)
        for (let i = 0; i < keys.length; i++) {
            const group: any = cases[keys[i]]

            if (typeof group === 'object' && !group.cases) {
                const node = this.getFirstCase(group)
                if (node) {
                    return node
                }
            }
            if (group.title || group.cases || group.default) {
                return group
            }
        }
    }

    public getCaseById(id: string | null, cases?: any) {
        if (!id) return null
        if (!cases) {
            cases = this.cases
        }

        const keys = Object.keys(cases)
        for (let i = 0; i < keys.length; i++) {
            const group: any = cases[keys[i]]

            if (typeof group === 'object' && !group.cases) {
                const node = this.getCaseById(id, group)
                if (node) {
                    return node
                }
            }

            if (group && group.id === id) {
                return group
            }
        }
    }

    public getCaseByUrl(url: string | null, cases?: any) {
        if (!url) return null
        if (!cases) {
            cases = this.cases
        }
        if (url[0] === '/') {
            url = url.slice(1)
        }

        const keys = Object.keys(cases)
        for (let i = 0; i < keys.length; i++) {
            const group: any = cases[keys[i]]

            if (typeof group === 'object' && !group.cases) {
                const node = this.getCaseByUrl(url, group)
                if (node) {
                    return node
                }
            }
            if (group && group.url === url) {
                return group
            }
        }
    }
}

export default Core.getInstance()