
import { Block, Icon, useFlow } from '@flow-ui/core';
import { Split } from '@flow-ui/lab';
import chroma from 'chroma-js';
import { Case } from 'core';
import React, { useEffect, useState } from 'react';
import CodeEditorView from './CodeEditorView';
import CodePreviewView from './CodePreviewView';

interface CodeEditorProps {
    caseObject: Case | null
    caseIndex: number
    showGrid: boolean
    fullscreen: boolean
    onExitFullscreen: () => void
}

const CodeEditor = (props: CodeEditorProps) => {
    let inCode = ''
    if (props.caseObject && props.caseObject.cases) {
        inCode = props.caseObject.cases[props.caseIndex].code
    }
    const [code, setCode] = useState(inCode);
    const flow = useFlow();

    const dark = chroma.contrast("#fff", flow.theme.color.background) > 3

    useEffect(() => {
        try {
            const { code } = props.caseObject!.cases![props.caseIndex]
            setCode(code)
        } catch (error) { }
    }, [props.caseIndex, props.caseObject])

    useEffect(() => {
        document.body.style.overflow = props.fullscreen ? 'hidden' : 'auto'
    }, [props.fullscreen])

    const fullscreenStyle: any = props.fullscreen ? {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 0,
        borderRadius: 0,
        zIndex: 10,
        height: '100%',
    } : {}
    return (
        <Block
            mb="2rem"
            css={{
                position: "relative",
                height: '24rem',
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: flow.theme.color.lightest.css(),
                borderRadius: flow.theme.radius.default,
                backgroundColor: flow.theme.color.background.css(),
                ...fullscreenStyle
            }}
            children={(
                <Split>
                    <CodeEditorView
                        dark={dark}
                        code={code}
                        onChange={setCode}
                    />
                    <Block h="100%" flex={1}>
                        <CodePreviewView
                            dark={dark}
                            code={code}
                            showGrid={props.showGrid}
                        />
                        {props.fullscreen && (
                            <Icon
                                shape="oval"
                                background={c => c.lightest.css()}
                                type={t => t.outline.collapse}
                                css={{
                                    position: 'fixed',
                                    top: '1rem',
                                    right: '1rem',
                                    zIndex: 9999,
                                }}
                                onClick={props.onExitFullscreen}
                            />
                        )}
                    </Block>
                </Split>
            )}
        />
    )
}

export default CodeEditor;