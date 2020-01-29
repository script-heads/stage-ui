import { Block, Display, Flexbox } from '@flow-ui/core'
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
        <Flexbox
            flex={1}
            justifyContent="center" 
            css={{
                padding: '0 4rem', 
                overflow: 'hidden',
                [`@media (max-width: ${window.breakpoints[0]}px)`]: {
                    padding: '0 1rem'
                }
            }}>
            <Block 
                css={{ 
                    width: '100%', 
                    maxWidth: '64rem', 
                    overflow: 'hidden' 
                }}>
                {page.title && (
                    <Display
                        weight="bold"
                        children={page.title}
                    />
                )}
                {page.cases &&
                    <Editor cases={page.cases}/>
                }
                {page.default && 
                    <Block mt="2rem">
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
        </Flexbox>
    )
}

export default Page