
import Types from './types'
import WhaleTypes from '@flow-ui/whale/types'
import applyLayoutDecoration from '@flow-ui/core/misc/utils/applyLayoutDecoration'

// TODO: borderBottomStyle type incorrect
//@ts-ignore
const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    return {
        container: [
            applyLayoutDecoration({ decoration: 'surface', ...props }, theme),
            {
                width: '100%',
                borderCollapse: 'inherit',
                borderSpacing: 0,
            }
        ],
        headCell: (variant) => [
            {
                textAlign: 'left',
                padding: '1.25rem 1rem',
                fontWeight: 500,
            },
            variant({
                sort: {
                    cursor: 'pointer',
                    ':hover': {
                        color: theme.color.primary.rgb().string()
                    }
                }
            })
        ],
        row: [
            {
                '> td': {
                    borderTopWidth: theme.assets.border.width,
                    borderTopStyle: theme.assets.border.style,
                    borderTopColor: theme.assets.border.color,
                }
            }
        ],
        rowCell: [
            {
                padding: '1rem',
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