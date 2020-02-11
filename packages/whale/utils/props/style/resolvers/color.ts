import colorProp from '@flow-ui/whale/utils/colorProp'
import { StyleResolver } from '../types'

const resolver: StyleResolver = (params) => {
    const { propValue, theme } = params
    return colorProp(propValue, theme.color)?.rgb().string()
}

export default resolver