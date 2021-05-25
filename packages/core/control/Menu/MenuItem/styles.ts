import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    return {
        container: {
            textDecoration: 'inherit',
            color: 'inherit',
        }
    }
}

export default styles