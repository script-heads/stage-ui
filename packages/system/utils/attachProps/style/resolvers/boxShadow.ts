import SystemPropsTypes from '../../types'

const resolver: SystemPropsTypes.StyleResolver = (params) => {
    const { propValue, theme } = params
    return theme.radius[propValue] || propValue
}

export default resolver