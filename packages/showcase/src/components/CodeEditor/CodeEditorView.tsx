
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

class CodeEditorView extends React.Component<CodeEditorViewProps, CodeEditorViewState> {

    editor: monaco.editor.IStandaloneCodeEditor
    model: monaco.editor.ITextModel

    state = {
        dark: true,
        codeValue: ''
    }

    async componentDidMount() {

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

        this.model = monaco.editor.createModel(
            code, 
            'typescript',
            monaco.Uri.parse(location.origin + '/main.tsx')
        )

        this.model.onDidChangeContent(event => {
            this.props.onChange(
                this.model.getValue()
            )
        })

        this.editor = monaco.editor.create(document.getElementById(CONTAINER_ID)!, { 
            model: this.model, 
            theme: this.props.dark ? 'vs-dark' : 'vs',
            minimap: {
                enabled: false
            },
            lineNumbers: 'off',
            automaticLayout: true
        });

        // setTimeout( () => {
        //     this.editor.getAction('editor.action.formatDocument').run()
        // }, 1000)
        // window.editor = this.editor
    }

    UNSAFE_componentWillReceiveProps(nextProps: CodeEditorViewProps) {
        const codeValue = nextProps.code || '';
        if (this.props.code !== codeValue) {
            this.model.setValue(codeValue)
            
        }
        if (this.props.dark !== nextProps.dark) {
            this.setState({ 
                dark: nextProps.dark
            })
            monaco.editor.setTheme(nextProps.dark ? 'vs-dark' : 'vs')
        }
    }

    render() {
        return (
            <Block
                flex={1}
                id={CONTAINER_ID}
                css={{
                    zIndex: 1,
                    boxShadow: "none !important",
                    position: "relative",
                }}
            />
        );
    }
}

export default CodeEditorView;