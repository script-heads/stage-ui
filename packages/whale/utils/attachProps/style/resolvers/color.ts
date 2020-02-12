import colorProp from '@flow-ui/whale/utils/colorProp'
import WhalePropsTypes from '../../types'

const resolver: WhalePropsTypes.StyleResolver = (params) => {
    const { propValue, theme } = params
    return colorProp(theme, propValue)?.rgb().string()
}

export default resolver