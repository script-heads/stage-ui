import React from 'react'
import { Text } from '@flow-ui/core'
import Editor from './editor'
import HomePage from './pages/index/index'
import { Config } from './utils/core'
import Value from './components/Page/Types/Value'
import Params from './components/Page/Types/Params'
import StyleType from './components/Page/Types/StyleType'

const config: Config = {
    git: 'https://github.com/abr-tech/FlowUI',
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
                        width: '10rem'
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
                        render: (c) => <Text size="s" children={c.row.comment} />
                    },
                    {
                        key: 'isOptional',
                        title: 'Parameters',
                        width: '8rem',
                        render: (c) => <Params property={c.row} />
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
                        key: 'comment',
                        title: 'Description',
                    },
                    {
                        key: 'values',
                        title: 'States',
                        width: '15rem',
                        render: (c) => <StyleType property={c.row} />
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