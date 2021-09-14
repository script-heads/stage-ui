import React from 'react'
import { Block, Paragraph as P, Header, Flexbox } from '@stage-ui/core'
import Syntax from '../../components/ShowcasePage/Content/Syntax'
import syntaxExample from './syntaxExample.raw'

export const title = 'Overrides'
export const sticky = true

export default () => (
  <Flexbox alignItems="center" column m="0 auto">
    <Block backgroundColor="surface" borderRadius="1rem">
      <P color="hardest">
        Often you need to override component styles that depended on its internal state and
        properties. There are two places you can do this: theme and the style props.
      </P>
      <Header>Syntax</Header>
      <P color="hardest">
        For example Menu have two CSS classes for container and item elements. Here you describe
        styles for any of them. This styles applyed with their own styles of component.
      </P>
      <Syntax code={syntaxExample} />
    </Block>
  </Flexbox>
)
