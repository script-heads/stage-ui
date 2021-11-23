import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.PrivateProps> = (theme, props) => ({
  container: (state) => [
    state.decoration === 'finder' && {
      '>div:nth-of-type(even)': {
        background: theme.color.background.rgb().string(),
      },
    },
  ],
  row: (state) => [
    state.decoration === 'finder' && [
      {
        padding: `calc(${theme.spacing.m} / 2)`,
      },
      state.size === 'xs' && {
        padding: `calc(${theme.spacing.xs} / 2)`,
      },
      state.size === 's' && {
        padding: `calc(${theme.spacing.s} / 2)`,
      },
      state.size === 'l' && {
        padding: `calc(${theme.spacing.l} / 2)`,
      },
      state.size === 'xl' && {
        padding: `calc(${theme.spacing.xl} / 2)`,
      },
    ],
  ],

  label: (state) => [
    {
      cursor: 'pointer',
      userSelect: 'none',
      flex: 1,
    },
    state.decoration === 'finder' && {
      fontWeight: 500,
    },
  ],

  arrow: (state) => [
    {
      opacity: 0,
      cursor: 'pointer',
      height: 'auto',
      color: theme.color.gray[500].rgb().string(),
      fontSize: theme.assets.typography.text.m.fontSize,
      paddingRight: `calc(${theme.spacing.m} / 2)`,
      paddingLeft: `calc(${theme.assets.typography.text.m.fontSize} * ${props.lvl * 1})`,
    },
    state.hasChilds && {
      opacity: 1,
    },
    state.size === 'xs' && {
      fontSize: theme.assets.typography.text.xs.fontSize,
      paddingRight: `calc(${theme.spacing.xs} / 2)`,
      paddingLeft: `calc(${theme.assets.typography.text.xs.fontSize} * ${props.lvl * 1})`,
    },
    state.size === 's' && {
      fontSize: theme.assets.typography.text.s.fontSize,
      paddingRight: `calc(${theme.spacing.s} / 2)`,
      paddingLeft: `calc(${theme.assets.typography.text.s.fontSize} * ${props.lvl * 1})`,
    },
    state.size === 'l' && {
      fontSize: theme.assets.typography.text.l.fontSize,
      paddingRight: `calc(${theme.spacing.l} / 2)`,
      paddingLeft: `calc(${theme.assets.typography.text.l.fontSize} * ${props.lvl * 1})`,
    },
    state.size === 'xl' && {
      fontSize: theme.assets.typography.text.xl.fontSize,
      paddingRight: `calc(${theme.spacing.xl} / 2)`,
      paddingLeft: `calc(${theme.assets.typography.text.xl.fontSize} * ${props.lvl * 1})`,
    },
  ],
  child: (state) => [
    {
      display: 'none',
    },
    state.isOpen && [
      {
        display: 'block',
      },
    ],
  ],
})

export default createClasses
