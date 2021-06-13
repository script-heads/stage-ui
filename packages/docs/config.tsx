import React from 'react'
import { Text } from '@stage-ui/core'
import Description from './components/ShowcasePage/Types/Description'
import Name from './components/ShowcasePage/Types/Name'
import Value from './components/ShowcasePage/Types/Value'
import Editor from './editor'
import ShowcaseLayout from './components/ShowcaseLayout'
import LandignPage from './pages/Landign'
import GettingStartedPage from './pages/GettingStarted'
import IconCollectionPage from './pages/IconCollection'
import OverridesPage from './pages/Overrides'
import ThemingPage from './pages/Theming'
import PropsPage from './pages/Props'

import { Config } from './utils/core'

const config: Config = {
  name: 'StageUI',
  git: 'https://github.com/pt-one/StageUI',
  pages: {
    order: {
      Layout: [],
      Content: [],
      Control: [],
      Data: [],
      Utilities: [],
    },
    types: [
      {
        interface: 'Props',
        columns: [
          {
            key: 'name',
            title: 'Name',
            width: '10rem',
            render: (c) => <Name property={c.row} />,
          },
          {
            key: 'values',
            title: 'Type',
            width: '12rem',
            render: (c) => <Value property={c.row} />,
          },
          {
            key: 'comment',
            title: 'Description',
            render: (c) => <Description property={c.row} />,
          },
          {
            key: 'tags',
            title: 'Default',
            width: '4rem',
            render: (c) => <Text>{c.row.tags?.default}</Text>,
          },
        ],
      },
      {
        interface: 'Styles',
        columns: [
          {
            key: 'name',
            title: 'Name',
            width: '10rem',
          },

          {
            key: 'values',
            title: 'States',
            width: '12rem',
            render: (c) => <Value property={c.row} />,
          },
          {
            key: 'comment',
            title: 'Description',
            render: (c) => <Description property={c.row} />,
          },
        ],
      },
    ],
    separatedTypes: [
      'Attributes',
      'Layout',
      'Padding',
      'Margin',
      'Flex',
      'Grid',
      'Color',
      'Border',
      'Event',
    ],
    custom: {
      '/': LandignPage,
      '/getting-started': GettingStartedPage,
      '/overrides': OverridesPage,
      '/props': PropsPage,
      '/theming': ThemingPage,
      '/icons': IconCollectionPage,
      '/components': ShowcaseLayout,
      '/editor': Editor,
    },
  },
}

export default config
