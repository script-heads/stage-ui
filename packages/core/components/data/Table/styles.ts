import SystemTypes from '@stage-ui/system/types'
import applyLayoutDecoration from '@stage-ui/core/misc/utils/applyLayoutDecoration'
import Types from './types'

// TODO: borderBottomStyle type incorrect
// @ts-ignore
const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  return {
    container: [
      applyLayoutDecoration({ decoration: 'surface', ...props }, theme),
      {
        width: '100%',
        borderCollapse: 'inherit',
        borderSpacing: 0,
      },
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
            color: theme.color.primary.hex(),
          },
        },
      }),
    ],
    rowCell: [
      {
        padding: '1rem',
        borderTopWidth: theme.assets.border.width,
        borderTopStyle: theme.assets.border.style,
        borderTopColor: theme.assets.border.color,
      },
    ],
    expandContainer: [
      {
        padding: '1rem',
      },
    ],
    footer: [
      {
        padding: '1.25rem 1rem',
        borderTopWidth: theme.assets.border.width,
        borderTopStyle: theme.assets.border.style,
        borderTopColor: theme.assets.border.color,
      },
    ],
  }
}

export default createClasses
