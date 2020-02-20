import { Block, Flexbox, Header } from '@flow-ui/core'
import { PageType } from '../../core'
import Editor from './Editor'
import API from './API'
import React from 'react'

interface ContentProps {
    currentPage: PageType | null
    types?: string[], 
    separatedTypes?: string[] 
}

const Page = (props: ContentProps) => {
    const {currentPage: page, types, separatedTypes} = props

    if (!page) return null

    return (
        <Flexbox
            flex={1}
            justifyContent="center" 
            // p={['1rem 4rem','1rem 4rem','0 1rem','0 1rem']}
            // w={['auto','auto','auto','100vw']}
            css={{
                padding: '1rem 4rem', 
                boxSizing: 'border-box',
                [`@media (max-width: ${window.breakpoints[0]}px)`]: {
                    padding: '0 1rem',
                    width: '100vw',
                }
            }}
            >
            <Block 
                css={{ 
                    width: '100%', 
                    maxWidth: '64rem', 
                    overflow: 'hidden' 
                }}>
                <Flexbox column alignItems="center">
                    {page.title && (
                        <Block style={{ 
                            width: '100%',
                            maxWidth: page.cases === void 0 ? '45rem' : '100%'
                        }}>
                            <Header
                                size="xl"
                                my="1rem"
                                weight={800}
                                children={page.title}
                            />
                        </Block>
                    )}
                    {page.cases &&
                        <Editor cases={page.cases} />
                    }
                    {page.default &&
                        <Block style={{ maxWidth: '45rem' }}>
                            <page.default />
                        </Block>
                    }
                </Flexbox>
                {page.ns && (
                    <Block style={{ 
                        width: '100%',
                        maxWidth: page.cases === void 0 ? '45rem' : '100%'
                     }}>
                        <API
                            name={page.ns}
                            types={types}
                            separatedTypes={separatedTypes}
                        />
                    </Block>
                )}
            </Block>
        </Flexbox>
    )
}

export default Page