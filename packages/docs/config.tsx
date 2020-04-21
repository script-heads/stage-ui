import React, { Fragment } from 'react'
import { Text, Paragraph } from '@stage-ui/core'
import Editor from './editor'
import HomePage from './pages/index/index'
import { Config } from './utils/core'
import Name from './components/Page/Types/Name'
import Value from './components/Page/Types/Value'
import Description from './components/Page/Types/Description'

const config: Config = {
    name: 'StageUI',
    git: 'https://github.com/stage-org/StageUI',
    pages: {
        order: {
            About: ['Getting started', 'Theming', 'Overrides', 'Props', 'Bundle'],
            Layout: [],
            Content: [],
            Control: [],
            Data: [],
            Icons: [],
            Util: [],
            Lab: []
        },
        types: [
            {
                interface: 'Props',
                columns: [
                    {
                        key: 'name',
                        title: 'Name',
                        width: '10rem',
                        render: (c) => <Name property={c.row} />
                    },
                    {
                        key: 'values',
                        title: 'Type',
                        width: '12rem',
                        render: (c) => <Value property={c.row} />
                    },
                    {
                        key: 'comment',
                        title: 'Description',
                        render: (c) => <Description property={c.row} />
                    },
                    {
                        key: 'tags',
                        title: 'Default',
                        width: '4rem',
                        render: (c) => <Text children={c.row.tags?.default} />
                    }
                ]
            },
            {
                interface: 'Styles',
                columns: [
                    {
                        key: 'name',
                        title: 'Name',
                        width: '10rem'
                    },

                    {
                        key: 'values',
                        title: 'States',
                        width: '12rem',
                        render: (c) => <Value property={c.row} />
                    },
                    {
                        key: 'comment',
                        title: 'Description',
                        render: (c) => <Description property={c.row} />

                    },
                ]
            }
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
            '/': HomePage,
            '/editor': Editor
        }
    }
}

export default config