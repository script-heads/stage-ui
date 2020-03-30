import colorProp from '@flow-ui/system/utils/colorProp'
import SystemPropsTypes from '../../types'

const resolver: SystemPropsTypes.StyleResolver = (params) => {
    const { propValue, theme } = params
    return colorProp(theme, propValue)?.rgb().string()
}

export default resolver