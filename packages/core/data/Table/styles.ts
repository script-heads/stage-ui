
import Types from './types'
import SystemTypes from '@stage-ui/system/types'
import applyLayoutDecoration from '@stage-ui/core/misc/utils/applyLayoutDecoration'

// TODO: borderBottomStyle type incorrect
//@ts-ignore
const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    return {
        container: [
            applyLayoutDecoration({ decoration: 'surface', ...props }, theme),
            {
                width: '100%',
                borderCollapse: 'inherit',
                borderSpacing: 0,
            }
        ],
        row: [],
        headCell: (variant) => [
            {
                textAlign: 'left',
                padding: '1.25rem 1rem',
                fontWeight: 500,
            },
            variant({
                sort: {
                    cursor: 'pointer',
                    userSelect: 'none',
                    ':hover': {
                        color: theme.color.primary.rgb().string()
                    }
                }
            })
        ],
        rowCell: [
            {
                padding: '1rem',
                borderTopWidth: theme.assets.border.width,
                borderTopStyle: theme.assets.border.style,
                borderTopColor: theme.assets.border.color,
            }
        ],
        expandContainer: [
            {
                padding: '1rem',
            }
        ],
        footer: [
            {
                padding: '1.25rem 1rem',
                borderTopWidth: theme.assets.border.width,
                borderTopStyle: theme.assets.border.style,
                borderTopColor: theme.assets.border.color,
            }
        ]
    }
}

export default styles