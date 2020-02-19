import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    return {
        container: [
            props.indent && {
                '> [data-flow=menu-item] > span[data-flow-indent]': {
                    marginLeft: props.indent
                }
            }
        ],
    }
}

export default styles