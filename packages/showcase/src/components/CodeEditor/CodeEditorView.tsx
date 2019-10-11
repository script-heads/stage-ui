
import React from 'react';
import * as monaco from 'monaco-editor';
import { Block } from '@flow-ui/core'
const CONTAINER_ID = 'showcase-code-editor';

interface CodeEditorViewState {
    dark: boolean
}
interface CodeEditorViewProps {
    dark: boolean
    code: string
    onChange: (value: string) => any
}

let model: monaco.editor.ITextModel

class CodeEditorView extends React.Component<CodeEditorViewProps, CodeEditorViewState> {

    input: boolean = false;
    restoring: boolean = false;
    undoStates: any[] = [];
    redoStates: any[] = [];

    editor: monaco.editor.IStandaloneCodeEditor

    state = {
        dark: true,
        codeValue: ''
    }

    undo() {
        if (this.undoStates.length > 1) {
            this.restoring = true;
            const state = this.undoStates[this.undoStates.length - 2];
            this.editor.setValue(state.code)
            this.editor.restoreViewState(state.state);
            this.redoStates.push(this.undoStates[this.undoStates.length - 1])
            this.undoStates = this.undoStates.slice(0, -1);
        }
    }

    redo() {
        if (this.redoStates.length > 0) {
            this.restoring = true;
            const state = this.redoStates[this.redoStates.length - 1];
            this.editor.setValue(state.code)
            this.editor.restoreViewState(state.state);
            this.undoStates.push(this.redoStates[this.redoStates.length - 1])
            this.redoStates = this.redoStates.slice(0, -1);
        }
    }

    keydown(e: KeyboardEvent) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
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

    constructor(props: CodeEditorViewProps) {
        super(props);
        this.keydown = this.keydown.bind(this)
    }

    async componentDidMount() {

        const domNode = document.createElement("div")!;

        const defineLib = async (name: string) => {
            monaco.languages.typescript.typescriptDefaults.addExtraLib((
                await (
                    await fetch(location.origin + `/showcase/generated/${name}.d.ts`)
                ).text()
            ));
        }

        await defineLib('global')
        await defineLib('react')
        await defineLib('csstype')
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
        });

        let code = this.props.code || '';
        let codeBefore = code;

        if (!model) {
            model = monaco.editor.createModel(
                code, 
                'typescript',
                monaco.Uri.parse(location.origin + '/main.tsx')
            )
            model.onDidChangeContent(event => {
                setTimeout(() => {
                    const code = model.getValue()
                    if (codeBefore === code) {
                        return;
                    }
                    codeBefore = code;
                    if (!this.restoring) {
                        this.redoStates = []
                        this.undoStates.push({
                            state: this.editor.saveViewState(),
                            code
                        })
                    }
                    this.input = true
                    this.restoring = false
                    this.props.onChange(code)
                })
            })
        }

        this.editor = monaco.editor.create(document.getElementById(CONTAINER_ID)!, { 
            model: model, 
            theme: this.props.dark ? 'vs-dark' : 'vs',
            minimap: {
                enabled: false
            },
            lineNumbers: 'off',
            automaticLayout: true,
            fontSize: 14,
            fontWeight: "600",
        });
        this.editor.changeViewZones((changeAccessor) => {
            changeAccessor.addZone({
                afterLineNumber: 0,
                heightInLines: 1,
                domNode
            });
        });

        this.undoStates.push({
            state: this.editor.saveViewState(),
            code: codeBefore
        })

        addEventListener('keydown', this.keydown)
    }
    
    componentWillUnmount() {
        this.editor.dispose()
        removeEventListener('keydown', this.keydown)
    }
    
    shouldComponentUpdate() {
        return false
    }

    UNSAFE_componentWillReceiveProps(nextProps: CodeEditorViewProps) {
        const codeValue = nextProps.code || '';
        if (this.props.code !== codeValue && !this.input) {
            this.undoStates = []
            this.redoStates = []
            model && model.setValue(codeValue)
        }
        if (this.props.dark !== nextProps.dark) {
            this.setState({ 
                dark: nextProps.dark
            })
            monaco.editor.setTheme(nextProps.dark ? 'vs-dark' : 'vs')
        }
        this.input = false
    }

    render() {
        return (
            <Block
                w="55%"
                id={CONTAINER_ID}
                css={{
                    zIndex: 999,
                    boxShadow: "none !important",
                    position: "relative",
                }}
            />
        );
    }
}

export default CodeEditorView;