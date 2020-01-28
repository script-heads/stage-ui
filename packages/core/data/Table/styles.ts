
import Types from './types'
import { StyleObject } from '@flow-ui/whale/types'

// TODO: borderBottomStyle type incorrect
//@ts-ignore
const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    return {
        container: [
            {
                width: '100%',
                backgroundColor: theme.color.surface.css(),
                borderCollapse: 'inherit',
                borderRadius: theme.radius.default,
                background: theme.color.surface.css(),
                boxShadow: theme.assets.shadow.short
            },
            styleProps.all,
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
                        color: theme.color.primary.hex()
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