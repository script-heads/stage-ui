import React, { useState } from 'react';
import * as LabScope from '@flow-ui/lab'
import * as CoreScope from '@flow-ui/core'
import { Block } from '@flow-ui/core'
import { transform } from '@babel/standalone'

Object.assign(window, {
    React,
    ...React,
    ...CoreScope,
    ...LabScope
})

// const evalCode = (code: string, scope: object) => {
//   const scopeKeys = Object.keys(scope);
//   const scopeValues = scopeKeys.map(key => scope[key]);
//   const res = new Function('_poly', 'React', ...scopeKeys, code);
//   return res(_poly, React, ...scopeValues);
// };


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
                        backgroundPosition: "0 0, 0 1rem, 1rem -1rem, -1rem 0px"
                    }}
                />
            )}
            {props.children}
        </Block>

    )
}

const CodePreviewView = (props: { dark: boolean, code: string, showGrid: boolean }) => {
    let { code, dark } = props;
    const matchReturn = code.match('return')
    const [render, setRender] = useState<any>(null)

    try {
        setRender(
            eval(
                transform(code, { 
                    presets: ["react"] 
                }).code.split('export default ')[1].slice(0, -1) + '()'
            )
        )
    } catch (error) {}

    if (matchReturn && matchReturn.index) {
        return (
            <Block w="45%" background={c => c.surface.css()}>
                <GridBackground set={props.showGrid} dark={dark}>
                    <Block m="2rem" css={{ position: 'relative', zIndex: 1 }}>
                        {render}
                    </Block>
                </GridBackground>
            </Block>
        );
    }

    return null
}

export default CodePreviewView