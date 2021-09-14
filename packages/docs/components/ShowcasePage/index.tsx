import { Block, Flexbox } from '@stage-ui/core'
import React from 'react'
import { Config, PagesType, PageType } from '../../utils/core'
import Editor from './Editor'
import Types from './Types'

export interface ContentProps {
  data: PageType
  pages: PagesType
  config: Config
  path: string
  onClose: () => void
  theme: Stage.Theme
  themes: Record<string, Stage.Theme>
  setTheme: React.Dispatch<React.SetStateAction<Stage.Theme>>
}

const ShowcasePage = (props: ContentProps) => {
  const { data, config, onClose } = props

  return (
    <Flexbox column alignSelf="stretch">
      <Flexbox column alignItems="center">
        <Flexbox column>
          {data.cases && <Editor cases={data.cases} onBack={onClose} />}
          {data.default && (
            <Block>
              <data.default />
            </Block>
          )}
          {data.ns && (
            <Types nameSpace={data.ns} config={config} shrink={data.cases === undefined} />
          )}
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}

export default ShowcasePage
