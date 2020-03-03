import { Block, Flexbox, Header, Paragraph } from '@flow-ui/core'
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
            p={['0 4rem','0 4rem','0 1rem','0 1rem']}
            // w={['auto','auto','auto','100vw']}
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
                                my={0}
                                size="xl"
                                weight={800}
                                children={page.title}
                            />
                            {page.subtitle && (
                                <Paragraph 
                                    weight={500}
                                    children={page.subtitle}
                                />
                            )}
                        </Block>
                    )}
                    
                    {page.cases &&
                        <Editor cases={page.cases} />
                    }
                    {page.default &&
                        <Block
                            style={{
                                width: '100%',
                                maxWidth: '45rem'
                            }}
                            children={
                                <page.default />
                            }
                        />
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