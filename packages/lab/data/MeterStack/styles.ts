
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    return {
        container: [{
            position: 'relative',
            '> div': {
                position: 'absolute',
                top:0,
                left:0,
                right: 0,
                background: 'transparent'
            }
        }],
        meterContainer: () => [],
        meterThumb: () => [],
    }
}

export default styles