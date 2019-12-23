import React, { useEffect, useState } from 'react'
import { Block, useFlow } from '@flow-ui/core'
import { Split } from '@flow-ui/lab'
import chroma from 'chroma-js'
import monaco from '../../../monaco'
import { PageType } from '../../../core'
import Preview from './Preview'
import ErrorBoundary from './ErrorBoundary'

interface EditorProps {
    page: PageType | null
    caseIndex: number
    showGrid: boolean
    fullscreen: boolean
    onExitFullscreen: () => void
}

const Editor = (props: EditorProps) => {
    const {page, caseIndex, showGrid, fullscreen, onExitFullscreen} = props
    const currentCode = page?.cases?.[caseIndex]?.code || ''
    const [code, setCode] = useState<string>(currentCode)
    const {theme} = useFlow()

    useEffect(() => {
        monaco.create({
            id: 'documaker-code-editor',
            code: currentCode, 
            setCode,
        })
        return monaco.remove
    }, [])

    useEffect(() => {
        monaco.setTheme(
            chroma.contrast('#fff', theme.color.background) > 3
                ? 'vs-dark'
                : 'vs'  
        )
    }, [theme])

    useEffect(() => {
        monaco.setCode(currentCode)
    }, [currentCode])

    useEffect(() => {
        document.body.style.overflow = fullscreen 
            ? 'hidden' 
            : 'auto'
    }, [fullscreen])

    return (
        <Block
            mb="2rem"
            h="24rem"
            borderColor={c=>c.lightest.css()}
            borderWidth="1px"
            borderStyle="solid"
            borderRadius={theme.radius.default}
            backgroundColor={c=>c.background.css()}
            css={[
                {
                    overflow: 'hidden'
                },
                fullscreen && {
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: 0,
                    borderRadius: 0,
                    zIndex: 10,
                    height: '100%',
                }
            ]}
            children={(
                <Split>
                    <Block
                        id="documaker-code-editor"
                        h="100%"
                        w="100%"
                        css={{
                            zIndex: 10,
                            boxShadow: 'none !important',
                        }}
                    />
                    <Block h="100%" flex={1}>
                        <ErrorBoundary>
                            <Preview
                                theme={theme}
                                code={code}
                                showGrid={showGrid} 
                                fullscreen={fullscreen} 
                                onExitFullscreen={onExitFullscreen}
                            />
                        </ErrorBoundary>
                    </Block>
                </Split>
            )}
        />
    )
}

export default Editor