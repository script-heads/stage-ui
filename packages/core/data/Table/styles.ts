import containerDecorations from '@stage-ui/core/utils/containerDecorations'

import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => ({
  container: [
    containerDecorations({ decoration: 'surface', ...props }, theme),
    {
      width: '100%',
      borderCollapse: 'inherit',
      borderSpacing: 0,
    },
  ],
  row: (state) => [
    {
      transition: 'background 0.25s',
    },
    state.selected && {
      backgroundColor: `${theme.color.blue[50].hex()} !important`,
    },
    state.selectable && {
      ':hover': {
        backgroundColor: theme.color.gray[100].hex(),
      },
    },
  ],
  headCell: (state) => [
    {
      verticalAlign: 'middle',
      textAlign: 'left',
      padding: '1.25rem 1rem',
      fontWeight: 500,
    },
    state.sort && {
      cursor: 'pointer',
      userSelect: 'none',
      ':hover': {
        color: theme.color.primary.rgb().string(),
      },
    },
  ],
  rowCell: [
    {
      verticalAlign: 'middle',
      padding: '1rem',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: theme.color.border.rgb().string(),
    },
  ],
  rowCellAnchor: [
    {
      cursor: 'move',
      width: '1.25rem',
      height: '0.375rem',
      margin: '0.125rem',
      borderTop: `0.125rem solid ${theme.color.light.rgb().string()}`,
      borderBottom: `0.125rem solid ${theme.color.light.rgb().string()}`,
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
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: theme.color.border.rgb().string(),
    },
  ],
})

export default styles
