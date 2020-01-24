import { StyleObject } from '@flow-ui/whale/types'
import Types from './types'

const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    return {
        container: [
            {},
            styleProps.all,
        ]
    }
}

export default styles