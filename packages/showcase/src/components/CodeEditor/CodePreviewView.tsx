import * as CoreScope from '@flow-ui/core';
import { Block } from '@flow-ui/core';
import * as LabScope from '@flow-ui/lab';
import React from 'react';
//@ts-ignore
import ts from 'typescript/lib/typescriptServices';

Object.assign(window, {
    React,
    ...React,
    ...CoreScope,
    ...LabScope
})

const GridBackground = (props: { set?: boolean, dark: boolean, children: any }) => {
    const gridColor1 = props.dark ? "#333333" : "#f4f4f4";
    const gridColor2 = props.dark ? "#222222" : "#ffffff";
    const gridBackground = `
        linear-gradient(45deg, ${gridColor1} 25%, transparent 25%),
        linear-gradient(-45deg, ${gridColor1} 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, ${gridColor1} 75%), 
        linear-gradient(-45deg, transparent 75%, ${gridColor1} 75%)
    `;

    return (
        <Block>
            {props.set && (
                <Block
                    css={{
                        position: "absolute",
                        left: 0, right: 0, bottom: 0, top: 0,
                        backgroundColor: gridColor2,
                        backgroundImage: gridBackground,
                        backgroundSize: "2rem 2rem",
                        backgroundPosition: "0 0, 0 1rem, 1rem -1rem, -1rem 0px",
                        borderRadius: "0 8px 8px 0",
                    }}
                />
            )}
            {props.children}
        </Block>

    )
}

class Renderer extends React.Component<{children: any}> {
    componentDidCatch() {
        return false
    }
    render() {
        return this.props.children
    }
}

const CodePreviewView = (props: { dark: boolean, code: string, showGrid: boolean }) => {
    let { code, dark } = props;
    const matchReturn = code.match('return')

    let render: any = null
    
    try {
        render = eval(
            ts.transpile(code,{
                jsx: "react",
                module: "es6",
            }).split('export default ')[1].trim().slice(0, -1) + '()'
        )
    } catch (error) {}

    if (matchReturn && matchReturn.index) {
        return (
            <Block w="45%" background={c => c.surface.css()} css={{ position: 'relative' }}>
                <GridBackground set={props.showGrid} dark={dark}>
                    <Block m="2rem" css={{ position: 'absolute', zIndex: 1, top: 0, left: 0, right: 0, bottom: 0 }}>
                        <Renderer>
                            {render}
                        </Renderer>
                    </Block>
                </GridBackground>
            </Block>
        );
    }

    return null
}

export default CodePreviewView