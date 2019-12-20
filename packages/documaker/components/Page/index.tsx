import { Flexbox, Icon, Block, Display, Button } from '@flow-ui/core'
import { PageType } from '../../core'
import { Fragment, useReducer } from 'react'
import CodeEditor from './CodeEditor'
import API from './API'

interface ContentProps {
    currentPage: PageType
    types?: string[], 
    separatedTypes?: string[] 
}

export interface State {
	caseIndex: number
	showGrid: boolean
	fullscreen: boolean
	shared: Object
	currentTheme: string
}

type Reducer = (state: State, action: Partial<State>) => State

const Page = (props: ContentProps) => {

    const [state, dispatch] = useReducer<Reducer>(
		(state, action) => ({...state, ...action}), 
		{
			caseIndex: 0,
			showGrid: localStorage.getItem('case_grid') ? true : false,
			fullscreen: false,
			shared: {},
			currentTheme: localStorage.getItem('theme') || 'light',
		}
    )
    
    const {currentPage: page, types, separatedTypes} = props
    const CustomPageContent = (page && page.default) ? page.default : null

    return (
        <Block px="6rem" flex={1} css={{zIndex:1 }}>
            {page && page.title && (
                <Display
                    size={4}
                    weight="bold"
                    children={page.title}
                />
            )}
            {page && page.cases && page.cases.length > 0 && (
                <Fragment>
                    <Flexbox mt="1rem" mb="0.25rem" alignItems="center">
                        {page.cases.map((c, caseIndex) => (
                            <Button
                                key={caseIndex}
                                size="small"
                                mr={'0.25rem'}
                                decoration={'text'}
                                textColor={c => caseIndex == state.caseIndex 
                                    ? c.primary.css()
                                    : c.hardest.css()}
                                children={c.label}
                                onClick={() => dispatch({ caseIndex })}
                            />
                        ))}
                        <Block flex={1} />
                        <Icon
                            p="0.75rem"
                            pr="0.5rem"
                            size="1.25rem"
                            color={c => state.showGrid
                                ? c.primary.css()
                                : c.onSurface.css()
                            }
                            onClick={() => {
                                localStorage.setItem(
                                    'case_grid', 
                                    !state.showGrid 
                                        ? 'true' 
                                        : 'false'
                                )
                                dispatch({
                                    showGrid: !state.showGrid
                                })
                            }}
                            type={t => t.outline.grid}
                        />
                        <Icon
                            p="0.75rem"
                            pr="0.5rem"
                            size="1.25rem"
                            color={c => c.onSurface.css()}
                            onClick={() => {
                                dispatch({
                                    fullscreen: true
                                })
                            }}
                            type={t => t.outline.expand}
                        />
                    </Flexbox>
                    <CodeEditor
                        caseObject={page}
                        caseIndex={state.caseIndex}
                        showGrid={state.showGrid}
                        fullscreen={state.fullscreen}
                        onExitFullscreen={() => {
                            dispatch({
                                fullscreen: false
                            })
                        }}
                    />
                </Fragment>
            )}
            {page && page.ns && (
                <API
                    name={page.ns}
                    types={types}
                    separatedTypes={separatedTypes}
                />
            )}
            {CustomPageContent && <CustomPageContent />}
        </Block>
    )
}

export default Page