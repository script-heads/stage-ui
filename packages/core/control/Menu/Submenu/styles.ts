import SystemTypes from '@flow-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
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