import SystemTypes from '@flow-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    return {
        container: [
            {
                color: theme.color.hard.rgb().string(),
                userSelect: 'none',
            },
        ],
        arrowButton: (variant) => [
            {
                color: theme.color.hardest.rgb().string(),
                ':hover': {
                    color: theme.color.primary.rgb().string()
                }
            },
            variant({
                disabled: {
                    cursor: 'not-allowed',
                    color: theme.color.lightest.rgb().string(),
                    ':hover': {
                        color: theme.color.lightest.rgb().string()
                    }
                }
            })
        ]
    }
}

export default styles