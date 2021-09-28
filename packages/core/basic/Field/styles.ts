import colorResolver from '@stage-ui/system/props/color'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const color = colorResolver(props.color || theme.color.light, theme)

  const {
    size = 'm',
    decoration = 'filled',
    labelType = 'outside',
    shape = 'rounded',
    disabled = false,
  } = props

  return {
    container: {
      position: 'relative',
      display: 'flex',
      minWidth: '1rem',
      flex: 1,
      flexDirection: 'column',
      outline: 'none',
    },

    field: [
      {
        position: 'relative',
        flexShrink: 0,
        flexGrow: 1,
        flexBasis: theme.assets.field[size].height,
        padding: `0 ${theme.assets.field[size].indent}`,
        background: theme.color.surface.string(),
        borderColor: theme.color.light.alpha(0.4).string(),
        borderRadius: theme.radius.m,
        boxShadow: theme.assets.innerShadow.xs,
        borderWidth: '1px',
        borderStyle: 'solid',
        outline: 'none',
        display: 'flex',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        transition: 'border 0.125s',
      },
      theme.assets.typography.text[size],
      shape === 'square' && {
        borderRadius: 0,
      },
      shape === 'round' && {
        borderRadius: theme.radius.s,
      },
      decoration === 'outline' &&
        disabled && {
          background: theme.color.lightest.rgb().string(),
        },
      decoration === 'filled' && [
        {
          borderColor: 'transparent',
          boxShadow: 'none',
        },
        disabled && {
          background: theme.color.lightest.rgb().string(),
        },
      ],
      decoration === 'underline' && {
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        background: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        boxShadow: 'none',
      },
      decoration === 'none' && {
        background: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
      },
      disabled && {
        color: theme.color.light.rgb().string(),
        cursor: 'not-allowed',
      },
    ],

    content: {
      display: 'flex',
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    },

    label: [
      {
        color: theme.color.hard.rgb().string(),
        display: 'flex',
        userSelect: 'none',
        paddingBottom: '0.25rem',
      },
      theme.assets.typography.text.s,
      size === 'xs' && [theme.assets.typography.text.xs],
      size === 's' && [theme.assets.typography.text.xs],
      size === 'l' && [theme.assets.typography.text.m],
      size === 'xl' && [theme.assets.typography.text.l],
      labelType === 'inside' && [
        {
          lineHeight: 0.7,
          fontSize: '0.85rem',
          paddingTop: '0.25rem',
        },
        size === 'xs' && {
          fontSize: '0.5rem',
          lineHeight: 0.2,
        },
        size === 's' && {
          fontSize: '0.625rem',
          lineHeight: 0.6,
          paddingTop: '0.125rem',
        },
        size === 'l' && {
          fontSize: '1rem',
          lineHeight: 0.8,
        },
        size === 'xl' && {
          fontSize: '1.25rem',
          lineHeight: 1,
        },
      ],
    ],

    rightChild: [
      {
        color: color.rgb().string(),
        flexGrow: 0,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        marginLeft: '.375rem',
        overflow: 'hidden',
      },
      size === 'xs' && { marginLeft: '.125rem' },
      size === 's' && { marginLeft: '.25rem' },
      size === 'l' && { marginLeft: '.5rem' },
      size === 'xl' && { marginLeft: '.75rem' },
    ],

    leftChild: [
      {
        color: color.rgb().string(),
        flexGrow: 0,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        marginRight: '.375rem',
        overflow: 'hidden',
      },
      size === 'xs' && { marginRight: '.125rem' },
      size === 's' && { marginRight: '.25rem' },
      size === 'l' && { marginRight: '.5rem' },
      size === 'xl' && { marginRight: '.75rem' },
    ],

    clearButton: [
      {
        cursor: 'pointer',
        backgroundColor: theme.color.onSurface.alpha(0.05).rgb().string(),
        borderRadius: '100rem',
        transition: 'transform 0.25s',
        ':hover': {
          color: theme.color.warning.rgb().string(),
          transform: 'scale(1.2)',
        },
        ':active': {
          transform: 'scale(1.1)',
          opacity: 0.8,
        },
      },
    ],

    hint: [
      {
        paddingTop: '.25rem',
        paddingLeft: props.decoration !== 'underline' ? '.25rem' : '',
        color: color.rgb().string(),
        ...theme.assets.typography.text.m,
      },
      size === 's' && theme.assets.typography.text.s,
      size === 'xs' && theme.assets.typography.text.xs,
    ],
    error: [
      {
        paddingTop: '.25rem',
        paddingLeft: props.decoration !== 'underline' ? '.25rem' : '',
        color: color?.rgb().string() || theme.color.error.rgb().string(),
        ...theme.assets.typography.text.m,
        ' svg': {
          color: theme.color.error.string(),
          marginTop: '-0.125rem',
          marginRight: '0.25rem',
          ...theme.assets.typography.text.m,
        },
      },
      size === 's' && [
        {
          ...theme.assets.typography.text.s,
          ' svg': {
            marginTop: '-0.125rem',
            marginRight: '0.125rem',
            ...theme.assets.typography.text.s,
          },
        },
      ],
      size === 'xs' && [
        {
          ...theme.assets.typography.text.xs,
          ' svg': {
            marginRight: '0.125rem',
            ...theme.assets.typography.text.xs,
          },
        },
      ],
    ],
  }
}

export default createClasses
