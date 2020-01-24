import { Block, Flexbox, Icon, Text, useBrowser, useTheme } from '@flow-ui/core'
import { PageType } from '@flow-ui/documaker/core'
import monaco from '@flow-ui/documaker/monaco'
import { Split } from '@flow-ui/lab'
import chroma from 'chroma-js'
import React, { Fragment, useEffect, useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Preview from './Preview'

interface EditorProps {
    cases: Exclude<PageType['cases'],undefined>
}

const Editor = (props: EditorProps) => {
    const {cases} = props
    const [currentCase, setCurrentCase] = useState<number>(0)
    const [code, setCode] = useState<string>(cases[0].code)
    const [grid, setGrid] = useState<boolean>(false)
    const [fullscreen, setFullscreen] = useState<boolean>(false)
    const theme = useTheme()
    const browser = useBrowser()
    
    useEffect(() => {
        monaco.create({
            id: 'documaker-code-editor',
            code: cases[0].code, 
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
        setCurrentCase(0)
        monaco.setCode(cases[0].code)
    }, [cases])

    useEffect(() => {
        monaco.setCode(cases[currentCase].code)
    }, [currentCase])

    useEffect(() => {
        document.body.style.overflow = fullscreen 
            ? 'hidden' 
            : 'auto'
    }, [fullscreen])

    return (
        <Fragment>
            <Flexbox alignItems="center">
                {cases.length > 1 && cases.map((c, caseIndex) => (
                    <Text
                        key={caseIndex}
                        size={2}
                        mr={'1rem'}
                        weight={600}
                        color={c => caseIndex === currentCase 
                            ? c.primary.css()
                            : c.onBackground.css()}
                        children={c.label}
                        onClick={() => setCurrentCase(caseIndex)}
                        css={{cursor: 'pointer'}}
                    />
                ))}
                <Block flex={1} />
                <Icon
                    p="0.75rem"
                    pr="0.5rem"
                    size="1.25rem"
                    color={c => grid
                        ? c.primary.css()
                        : c.onSurface.css()
                    }
                    onClick={() => {
                        localStorage.setItem(
                            'case_grid', 
                            !grid 
                                ? 'true' 
                                : 'false'
                        )
                        setGrid(!grid)
                    }}
                    type={t => t.outline.grid}
                />
                <Icon
                    p="0.75rem"
                    pr="0.5rem"
                    size="1.25rem"
                    color={c => c.onSurface.css()}
                    onClick={() => setFullscreen(true)}
                    type={t => t.outline.expand}
                />
            </Flexbox>
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
                        borderWidth: '0px',
                        height: '100%',
                        zIndex: 10,
                    }
                ]}>
                <Split direction={browser.width > window.breakpoints[1] ? 'row' : 'column'}>
                    <Block
                        id="documaker-code-editor"
                        h="100%"
                        w="100%"
                        css={{
                            boxShadow: 'none !important',
                        }}
                    />
                    <Block h="100%" flex={1}>
                        <ErrorBoundary>
                            <Preview
                                theme={theme}
                                code={code}
                                grid={grid} 
                                fullscreen={fullscreen} 
                                setFullscreen={setFullscreen}
                            />
                        </ErrorBoundary>
                        {fullscreen && (
                            <Icon
                                shape="oval"
                                background={c => c.lightest.css()}
                                type={t => t.outline.collapse}
                                css={{
                                    position: 'fixed',
                                    top: '1rem',
                                    right: '1rem',
                                    zIndex: 100,
                                }}
                                onClick={() => setFullscreen(false)}
                            />
                        )}
                    </Block>
                </Split>
            </Block>
        </Fragment>
    )
}

export default Editor