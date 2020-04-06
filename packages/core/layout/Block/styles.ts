import SystemTypes from '@stage-ui/system/types'
import Types from './types'
import applyLayoutDecoration from '@stage-ui/core/misc/utils/applyLayoutDecoration'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
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