import SystemTypes from '@flow-ui/system/types'
import Types from './types'
import applyLayoutDecoration from '@flow-ui/core/misc/utils/applyLayoutDecoration'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    return {
        container: (variant) => [
            applyLayoutDecoration(props, theme),
            {
                position: 'relative',
                display: props.inline ? 'inline-flex' : 'flex',
                flexDirection: props.column ? 'column' : undefined,
            },
        ]
    }
}

export default styles