import HomePage from './home'
import Architect from '@flow-ui/architect'
import { Config } from '@flow-ui/documaker/core'

const config: Config = {
    name: 'FlowUI',
    git: 'https://github.com/abr-tech/FlowUI',
    pages: {
        order: {
            About: ['Getting started','Theming','Overrides','Props', 'Icons', 'Bundle'],
            Content: [],
            Layout: [],
            Control: [],
            Util: []
        },
        types: [
            'Props',
            'Styles'
        ],
        separatedTypes: [
            'All',
            'AllEvents',
            'Attributes',
            'Core',
            'Colors',
            'Border',
            'Padding',
            'Layout',
            'Self',
            'Flow',
            'Flex',
            'Grid'
        ],
        custom: {
            '/': HomePage,
            '/architect': Architect
        }
    }
}

export default config