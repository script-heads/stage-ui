import React, { useEffect, useState, Fragment } from 'react'
import { Block, useFlow, Flexbox, Text, Icon } from '@flow-ui/core'
import { Split } from '@flow-ui/lab'
import chroma from 'chroma-js'
import monaco from '../../../monaco'
import { PageType } from '../../../core'
import Preview from './Preview'
import ErrorBoundary from './ErrorBoundary'

interface EditorProps {
    cases: Exclude<PageType['cases'],undefined>
}

const Editor = (props: EditorProps) => {
    const {cases} = props
    const [currentCase, setCurrentCase] = useState<number>(0)
    const [code, setCode] = useState<string>('')
    const [grid, setGrid] = useState<boolean>(false)
    const [fullscreen, setFullscreen] = useState<boolean>(false)
    const {theme} = useFlow()
    
    useEffect(() => {
        monaco.create({
            id: 'documaker-code-editor',
            code: cases?.[0]?.code || '', 
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
        monaco.setCode(cases?.[0]?.code || '')
    }, [cases])

    useEffect(() => {
        monaco.setCode(cases?.[currentCase]?.code || '')
    }, [currentCase])

    useEffect(() => {
        document.body.style.overflow = fullscreen 
            ? 'hidden' 
            : 'auto'
    }, [fullscreen])

    return (
        <Fragment>
            <Flexbox mt="1rem" mb="0.25rem" alignItems="center">
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
                        zIndex: 10,
                        height: '100%',
                    }
                ]}>
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
                                grid={grid} 
                                fullscreen={fullscreen} 
                                setFullscreen={setFullscreen}
                            />
                        </ErrorBoundary>
                    </Block>
                </Split>
            </Block>
        </Fragment>
    )
}

export default Editor