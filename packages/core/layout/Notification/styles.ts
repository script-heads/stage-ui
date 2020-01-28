import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    return {
        container: [
            {},
            styleProps.all,
        ]
    }
}

export default styles