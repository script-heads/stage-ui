import SystemTypes from '@flow-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    return {
        container: [
            {
                willChange: 'scroll-position',
                position: 'fixed',
                zIndex: 300,
            }
        ]
    }
}
export default styles