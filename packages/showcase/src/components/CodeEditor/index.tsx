
import React, { useState, useEffect } from 'react';
import { Flexbox, useFlow } from '@flow-ui/core';
import CodeEditorView from './CodeEditorView';
import CodePreviewView from './CodePreviewView';
import { Case } from 'core';

interface CodeEditorProps {
    caseObject: Case | null
    caseIndex: number
    showGrid: boolean
}

const CodeEditor = (props: CodeEditorProps) => {
    let inCode = ''
    if (props.caseObject) {
        inCode = props.caseObject.cases[props.caseIndex].code
    }
    const [code, setCode] = useState(inCode);
    const flow = useFlow();
    const dark = flow.theme.name.toUpperCase().match('DARK') ? true : false;
    
    useEffect(() => {
        try {
            const { code } = props.caseObject!.cases[props.caseIndex]
            setCode(code)
        } catch (error) {}
    }, [props.caseIndex, props.caseObject])

    return (
        <Flexbox flex={1} mb="2rem" css={{  
            minHeight: '20rem',
            overflow: "hidden",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: flow.theme.color.lightest.css(),
            borderRadius: flow.theme.radius.default
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
        </Flexbox>
    )
}

export default CodeEditor;