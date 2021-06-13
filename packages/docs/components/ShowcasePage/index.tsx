import { Block, Flexbox, Header, Text } from '@stage-ui/core'
import { ArrowLeft } from '@stage-ui/icons'
import React from 'react'
import { Config, PagesType, PageType } from '../../utils/core'
import Editor from './Editor'
import Types from './Types'

export interface ContentProps {
  data: PageType
  pages: PagesType
  config: Config
  path: string
  setPath: React.Dispatch<React.SetStateAction<string>>
  theme: Stage.Theme
  themes: Record<string, Stage.Theme>
  setTheme: React.Dispatch<React.SetStateAction<Stage.Theme>>
}

const ShowcasePage = (props: ContentProps) => {
  const { data, config, setPath } = props

  return (
    <Flexbox
      flex={1}
      p={['2rem 4rem 1.5rem 4rem', '2rem 4rem 1.5rem 4rem', '1rem']}
      justifyContent="center"
    >
      <Block
        css={{
          width: '100%',
          maxWidth: '64rem',
          overflow: 'hidden',
        }}
      >
        <Flexbox column alignItems="center">
          {data.title && (
            <Block
              style={{
                width: '100%',
                maxWidth: data.cases === undefined ? '60rem' : '100%',
              }}
            >
              <Flexbox
                alignItems="center"
                textColor="primary"
                onClick={() => setPath('/components')}
              >
                <ArrowLeft mr="xs" />
                <Text>Back</Text>
              </Flexbox>
              <Header my={0} size="xl" weight={800}>
                {data.title}
              </Header>
            </Block>
          )}
          {data.cases && <Editor cases={data.cases} />}
          {data.default && (
            <Block
              style={{
                width: '100%',
                maxWidth: '60rem',
              }}
            >
              <data.default />
            </Block>
          )}
        </Flexbox>
        {data.ns && <Types nameSpace={data.ns} config={config} shrink={data.cases === undefined} />}
      </Block>
    </Flexbox>
  )
}

export default ShowcasePage
