import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'
import applyLayoutDecoration from '@flow-ui/core/misc/utils/applyLayoutDecoration'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    return {
        container: (variant) => [
            applyLayoutDecoration(props, theme),
            {
                position: 'relative',
                overflow: props.overflow
            },
        ]
    }
}

export default styles