import homePage from '.'
import themes from './themes'

export default {
    name: 'FlowUI',
    git: 'https://github.com/abr-tech/FlowUI',
    themes,
    homePage,
    pages: {
        order: {
            About: ['Getting started','Theming','Overrides','Props', 'Icons', 'Bundle'],
            Content: [],
            Layout: [],
            Control: [],
            Util: []
        },
        types: ['Props','Overrides'],
        separatedTypes: ['All','Attribute','Event','Self','Flow'],
    }
}