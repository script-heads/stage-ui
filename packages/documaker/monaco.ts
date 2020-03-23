
import * as monaco from 'monaco-editor'

interface createArgs {
    id: string, 
    code?: string, 
    setCode?: (code: string) => void
}

class Monaco {
    static instance: Monaco
    static getInstance() {
        if (!this.instance) {
            this.instance = new Monaco()
        }
        return this.instance
    }

    protected input: boolean = false
    protected restoring: boolean = false
    protected undoStates: any[] = []
    protected redoStates: any[] = []
    protected model: monaco.editor.ITextModel
    protected code: string
    protected theme = 'vs'

    protected editor: monaco.editor.IStandaloneCodeEditor

    constructor() {
        this.keydown = this.keydown.bind(this)
        this.remove = this.remove.bind(this)
    }

    private keydown(e: KeyboardEvent) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0
        if ((isMac && e.metaKey) || (!isMac && e.ctrlKey)) {
            if (e.keyCode === 90){
                if (e.shiftKey) {
                    this.redo()
                } else {
                    this.undo()
                }
            }
        }
    }

    public async create(agrs: createArgs) {
        const {id, code: defaultCode = '', setCode} = agrs

        const domNode = document.createElement('div')

        const defineLib = async (name: string) => {
            monaco.languages.typescript.typescriptDefaults.addExtraLib((
                await (
                    await fetch(location.origin + `/documaker/definitions/${name}.d.ts`)
                ).text()
            ))
        }

        await defineLib('global')
        await defineLib('react')
        await defineLib('csstype')
        await defineLib('whale')
        await defineLib('core')
        await defineLib('lab')

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.React,
            jsxFactory: 'React.createElement',
            reactNamespace: 'React',
            allowNonTsExtensions: true,
            allowSyntheticDefaultImports: true,
            allowJs: true,
            target: monaco.languages.typescript.ScriptTarget.Latest,
        })

        if (!this.model) {
            this.model = monaco.editor.createModel(
                defaultCode, 
                'typescript',
                monaco.Uri.parse(location.origin + '/main.tsx')
            )            
        }

        this.editor = monaco.editor.create(document.getElementById(id)!, { 
            model: this.model, 
            theme: this.theme,
            minimap: {
                enabled: false
            },
            lineNumbers: 'off',
            automaticLayout: true,
            fontSize: 14,
            fontWeight: '600',
            scrollBeyondLastLine: false,
        })

        this.editor.onDidChangeModelContent(event => {
            setTimeout(() => {
                const code = this.model.getValue()

                if (this.code === code) {
                    return
                }
                this.code = code
                if (!this.restoring) {
                    this.redoStates = []
                    this.undoStates.push({
                        state: this.editor.saveViewState(),
                        code
                    })
                }
                this.input = true
                this.restoring = false
                setCode && setCode(code)
            })
        })

        this.editor.changeViewZones((changeAccessor) => {
            changeAccessor.addZone({
                afterLineNumber: 0,
                heightInLines: 1,
                domNode
            })
        })

        this.undoStates.push({
            state: this.editor.saveViewState(),
            code: defaultCode
        })

        addEventListener('keydown', this.keydown)
    }

    public copyToClipboard() {
        const el = document.createElement('textarea')
        el.value = this.code
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
    }
    
    public waitEditor () {
        return new Promise((resolve, reject) => {
            const check = async () => {
                if (this.editor) return resolve()
                setTimeout(check, 50)
            }
            check()
        })
    }

    public remove () {
        this.editor.dispose()
        removeEventListener('keydown', this.keydown)
    }
    
    public undo() {
        if (this.undoStates.length > 1) {
            this.restoring = true
            const state = this.undoStates[this.undoStates.length - 2]
            this.editor.setValue(state.code)
            this.editor.restoreViewState(state.state)
            this.redoStates.push(this.undoStates[this.undoStates.length - 1])
            this.undoStates = this.undoStates.slice(0, -1)
        }
    }

    public redo() {
        if (this.redoStates.length > 0) {
            this.restoring = true
            const state = this.redoStates[this.redoStates.length - 1]
            this.editor.setValue(state.code)
            this.editor.restoreViewState(state.state)
            this.undoStates.push(this.redoStates[this.redoStates.length - 1])
            this.redoStates = this.redoStates.slice(0, -1)
        }
    }    

    public async setCode(code: string = '') {
        if (!this.model) {
            await this.waitEditor()
        }
        this.undoStates = []
        this.redoStates = []
        this.model.setValue(code)
        this.input = false
    }

    public setTheme(theme: 'vs-dark' | 'vs') {
        this.theme = theme
        monaco.editor && monaco.editor.setTheme(theme)
    }
}

export default Monaco.getInstance()