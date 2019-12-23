import { Block, Display } from '@flow-ui/core'
import { PageType } from '../../core'
import Editor from './Editor'
import API from './API'

interface ContentProps {
    currentPage: PageType | null
    types?: string[], 
    separatedTypes?: string[] 
}

const Page = (props: ContentProps) => {
    const {currentPage: page, types, separatedTypes} = props

    if (!page) return null
    
    return (
        <Block px="6rem" flex={1} css={{zIndex:1 }}>
            {page.title && (
                <Display
                    size={4}
                    weight="bold"
                    children={page.title}
                />
            )}
            {page.cases &&
                <Editor cases={page.cases}/>
            }
            {page.default && 
                <Block my="2rem">
                    <page.default />
                </Block>
            }
            {page.ns && (
                <API
                    name={page.ns}
                    types={types}
                    separatedTypes={separatedTypes}
                />
            )}
        </Block>
    )
}

export default Page