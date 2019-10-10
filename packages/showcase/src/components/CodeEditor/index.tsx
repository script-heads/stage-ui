
import React, { useState, useEffect } from 'react';
import { Flexbox, useFlow, Icon } from '@flow-ui/core';
import CodeEditorView from './CodeEditorView';
import CodePreviewView from './CodePreviewView';
import { Case } from 'core';

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
    const dark = flow.theme.name.toUpperCase().match('DARK') ? true : false;
    
    useEffect(() => {
        try {
            const { code } = props.caseObject!.cases![props.caseIndex]
            setCode(code)
        } catch (error) {}
    }, [props.caseIndex, props.caseObject])

    const fullscreenStyle: any = props.fullscreen ? {
        position: 'fixed',
        left:0,
        right:0,
        top:0,
        bottom:0,
        margin: 0,
        borderRadius: 0,
        zIndex: 10,
        height: '100%',
    } : {}
    return (
        <Flexbox flex={1} mb="2rem" css={{  
            position: "relative",
            height: '24rem',
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: flow.theme.color.lightest.css(),
            borderRadius: flow.theme.radius.default,
            ...fullscreenStyle
        }}>
            <CodeEditorView 
                dark={dark}
                code={code} 
                onChange={setCode}
            />
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
                        position:'fixed',
                        top:'1rem',
                        right:'1rem',
                        zIndex: 9999,
                    }}
                    onClick={props.onExitFullscreen}
                />
            )}
        </Flexbox>
    )
}

export default CodeEditor;