import SystemPropsTypes from '../../types'

const resolver: SystemPropsTypes.StyleResolver = (params) => {
    const { propName } = params
    if (propName === 'onClick') {
        return {
            cursor: 'pointer',
            userSelect: 'none'
        }
    }
    return void 0
}

export default resolver