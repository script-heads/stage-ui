import applyLayoutDecoration from '@stage-ui/core/utils/applyLayoutDecoration'
import Types from './types'

// TODO: borderBottomStyle type incorrect
// @ts-ignore
const styles: Stage.CreateClasses<Types.Styles, Types.Props> = (theme, props, styleProps) => {
  return {
    container: [
      applyLayoutDecoration({ decoration: 'surface', ...props }, theme),
      {
        width: '100%',
        borderCollapse: 'inherit',
        borderSpacing: 0,
      },
      styleProps.all,
    ],
    row: (variant) => [
      {
        transition: 'background 0.25s',
      },
      variant({
        dragOver: {
          background: theme.color.primary.alpha(0.25).string(),
        },
      }),
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
          userSelect: 'none',
          ':hover': {
            color: theme.color.primary.rgb().string(),
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
    rowCellAnchor: [
      {
        cursor: 'move',
        width: '1.25rem',
        height: '0.375rem',
        margin: '0.125rem',
        borderTop: `0.125rem solid ${theme.color.light.hex()}`,
        borderBottom: `0.125rem solid ${theme.color.light.hex()}`,
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

export default styles
