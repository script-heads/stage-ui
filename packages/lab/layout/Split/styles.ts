import SystemTypes from '@flow-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    return {
        test: {

        },
        container: (variant) => [
            {
                display: 'flex',
                width: '100%',
                height: '100%',
                flex: 1,
                flexDirection: 'row',
            },
            variant({
                vertical: {
                    flexDirection: 'column'
                }
            })
        ],
    }
}

export default styles