import React from 'react'
import { Block, Flexbox, Header, Paragraph as P, Text } from '@stage-ui/core'
import Syntax from '../../components/ShowcasePage/Content/Syntax'
import ViewportCode from './viewport.raw'

export const title = 'Getting started'
export const sticky = true

export default () => (
  <Flexbox alignItems="center" column m="0 auto" w={['53rem', '44.5rem', '35.5rem', '17rem']}>
    <Block backgroundColor="surface" borderRadius="1rem" p="m" my="m">
      <Header size="l" m="0">
        Getting started
      </Header>
      <P color="hardest">Install StageUI</P>
      <Syntax code="npm i @stage-ui/core" />
      <P color="hardest">
        Use{' '}
        <Text weight="bold" color="primary">
          Viewport
        </Text>{' '}
        component at the top level of your application. It provide theme to all Flow components,
        apply some Reset CSS and had another useful configurations.
      </P>
      <Syntax code={ViewportCode} />
    </Block>
  </Flexbox>
)
