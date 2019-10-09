import React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import * as LabScope from '@flow-ui/lab'
import * as CoreScope from '@flow-ui/core'
import { Block } from '@flow-ui/core'

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
    if (matchReturn && matchReturn.index) {
        code = code.slice(matchReturn.index)
        let t = 0;
        let cursor = 0;
        let trim1 = -1;
        let trim2 = -1;
        while (cursor < code.length) {
            if (code.charCodeAt(cursor) === 0x28) {
                if (trim1 < 0) {
                    trim1 = cursor
                } else {
                    t++
                }
            }
            if (trim2 < 0 && code.charCodeAt(cursor) === 0x29) {
                if (t) {
                    t--
                } else if (trim2 < 0) {
                    trim2 = cursor
                }
            }
            if (trim1 >= 0 && trim2 >= 0) {
                code = code.slice(trim1 + 1, trim2)
                break;
            }
            cursor++;
        }
        return (
            <Block flex={1}>
                <GridBackground set={props.showGrid} dark={dark}>
                    <Block m="1rem">
                        <LiveProvider
                            code={code}
                            language={"jsx"}
                            scope={{
                                ...(CoreScope || {}),
                                ...(LabScope || {})
                            }}
                            children={(
                                <LivePreview
                                    style={{ 
                                        position: "relative",
                                        height: "100%" 
                                    }}
                                />
                            )}
                        />
                    </Block>
                </GridBackground>
            </Block>
        );
    }

    return null
}

export default CodePreviewView