/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block, Flexbox, Header, Paragraph, ScrollView } from '@stage-ui/core'
import { PageType, Config, PagesType } from '../../utils/core'
import Editor from './Editor'
import Types from './Types'
import React, { Fragment } from 'react'
import SystemTypes from '@stage-ui/system/types'
import Menu from '../Menu'
import Sidebar from '../Sidebar'

interface ContentProps {
    data: PageType
    pages: PagesType
    config: Config
    path: string
    setPath: React.Dispatch<React.SetStateAction<string>>
    theme: SystemTypes.Theme
    themes: Record<string, SystemTypes.Theme>
    setTheme: React.Dispatch<React.SetStateAction<SystemTypes.Theme>>
}

const Page = (props: ContentProps) => {
    const { data, pages, config, setTheme, themes, theme, setPath } = props

    return (
        <Fragment>
            <Menu
                title={config.name}
                setIndex={() => setPath('/')}
                themes={themes}
                currentTheme={theme}
                setTheme={setTheme}
                git={config.git}
            />
            <Flexbox h="100vh" css={{ boxSizing: 'border-box', overflow: 'hidden' }}>
                <Sidebar
                    currentPage={data}
                    pages={pages}
                    onChange={(pageURL) => setPath(pageURL)}
                />
                <ScrollView h="100vh" w="100%" backgroundColor={c => c.surface}>
                    <Flexbox
                        flex={1}
                        p={['3rem 4rem 1.5rem 4rem', '3rem 4rem 1.5rem 4rem', '1rem']}
                        justifyContent="center"
                    // w={['auto','auto','auto','100vw']}
                    >
                        <Block
                            css={{
                                width: '100%',
                                maxWidth: '64rem',
                                overflow: 'hidden'
                            }}>
                            <Flexbox column alignItems="center">
                                {data.title && (
                                    <Block style={{
                                        width: '100%',
                                        maxWidth: data.cases === void 0 ? '45rem' : '100%'
                                    }}>
                                        <Header
                                            my={0}
                                            size="xl"
                                            weight={800}
                                            children={data.title}
                                        />
                                        {data.subtitle && (
                                            <Paragraph
                                                weight={500}
                                                children={data.subtitle}
                                            />
                                        )}
                                    </Block>
                                )}
                                {data.cases &&
                                    <Editor cases={data.cases} />
                                }
                                {data.default &&
                                    <Block
                                        style={{
                                            width: '100%',
                                            maxWidth: '45rem'
                                        }}
                                        children={
                                            <data.default />
                                        }
                                    />
                                }
                            </Flexbox>
                            {data.ns &&
                                <Types
                                    nameSpace={data.ns}
                                    config={config}
                                    shrink={data.cases === void 0}
                                />
                            }
                        </Block>
                    </Flexbox>
                </ScrollView>
            </Flexbox>
        </Fragment>
    )
}

export default Page