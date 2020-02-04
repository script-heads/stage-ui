import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'
import applyLayoutDecoration from '@flow-ui/core/misc/utils/applyLayoutDecoration'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    return {
        container: [
            {
                position: 'relative',
                overflow: props.overflow
            },
            applyLayoutDecoration(props, theme)
        ]
    }
}

export default styles