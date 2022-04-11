import Types from './types'

// @ts-ignore
const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const { size, shape } = props

  const spacing = theme.spacing[size || 'm'] || theme.spacing.m
  const typography =
    theme.assets.typography.text[size || 'm'] || theme.assets.typography.text.m
  const isRow = !(props.direction?.[0] === 'c' || props.column)
  let borderRadius = '0'
  if (shape === 'rounded') {
    borderRadius = theme.radius.s
  }
  if (shape === 'round') {
    borderRadius = '100rem'
  }

  return {
    container: () => [
      {
        ...typography,
        display: 'flex',
        outline: 'none',
        flexDirection: props.direction || (props.column ? 'column' : 'row'),
        ...(isRow
          ? {
              justifyContent: props.align || 'stretch',
            }
          : {
              alignItems: props.align || 'stretch',
            }),
      },
    ],
    item: (state) => [
      {
        display: 'flex',
        cursor: 'pointer',
        userSelect: 'none',
        outline: 'none',
        padding: `calc(${spacing} / 2) ${spacing}`,
        color: theme.color.onBackground.rgb().string(),
        ':before': {
          content: `''`,
          transition: 'all 0.15s',
          position: 'absolute',
          borderRadius,
        },
        ':hover:not([data-flow-disabled]):not([data-flow-active])': [
          state.decoration === 'filled' && {
            color: theme.color.onSurface.rgb().string(),
          },
          state.decoration === 'marker' && {
            color: theme.color.onSurface.rgb().string(),
          },
          state.decoration === 'marker-reverse' && {
            color: theme.color.onSurface.rgb().string(),
          },
          state.decoration === 'color' && {
            color: theme.color.primary.rgb().string(),
          },
        ],
        '&[data-flow-active]': [
          {
            cursor: 'default',
          },
          state.decoration === 'filled' && {
            background: theme.color.primary.rgb().string(),
            color: theme.color.onPrimary.rgb().string(),
            borderRadius,
          },
          state.decoration === 'marker' && {
            position: 'relative',
            paddingLeft: spacing,
            color: theme.color.primary.rgb().string(),
            ':before': {
              width: isRow ? `100%` : `calc(${spacing} / 4)`,
              height: isRow ? `calc(${spacing} / 4)` : `100%`,
              background: theme.color.primary.rgb().string(),
              left: 0,
              bottom: 0,
            },
          },
          state.decoration === 'marker-reverse' && {
            position: 'relative',
            paddingLeft: spacing,
            color: theme.color.primary.rgb().string(),
            ':before': {
              width: isRow ? `100%` : `calc(${spacing} / 4)`,
              height: isRow ? `calc(${spacing} / 4)` : `100%`,
              background: theme.color.primary.rgb().string(),
              right: 0,
              top: 0,
            },
          },
          state.decoration === 'color' && {
            color: theme.color.primary.rgb().string(),
          },
        ],
        '&[data-flow-disabled]': [
          {
            cursor: 'not-allowed !important',
          },
        ],
      },
    ],

    subMenu: () => [
      {
        position: 'relative',
        outline: 'none',
        '&[data-flow-active]': [
          {
            '> [data-flow=menu-item]': [
              {
                color: theme.color.primary.rgb().string(),
                ':hover': {
                  color: theme.color.primary.rgb().string(),
                },
              },
            ],
          },
        ],
        '&[data-flow-open]': {
          '> [data-flow=sub-menu-content]': {
            display: 'block',
          },
          ...(!isRow && {
            ' > div > span > [data-flow=sub-menu-arrow]': {
              transform: 'rotate(180deg)',
            },
          }),
        },
        ...(isRow && {
          '[data-flow=sub-menu-content]': {
            backgroundColor: theme.color.surface.rgb().string(),
            '[data-flow=sub-menu-content]': {
              top: 0,
              transform: 'translateX(100%)',
            },
          },
        }),
      },
    ],

    subMenuArrow: () => [
      {
        height: typography.fontSize,
        width: typography.fontSize,
        transition: 'transform 0.15s',
      },
    ],

    subMenuContent: () => [
      {
        display: 'none',
      },
      isRow && {
        position: 'absolute',
        minWidth: 'max-content',
        '[data-flow=sub-menu-arrow]': {
          transform: 'rotate(-90deg)',
        },
      },
    ],

    group: () => [
      {
        display: 'flex',
        flexDirection: props.direction || (props.column ? 'column' : 'row'),
        alignItems: 'stretch',
      },
    ],

    groupTitle: () => [
      {
        display: 'flex',
        alignItems: 'center',
        padding: `calc(${spacing} / 4) ${spacing}`,
        fontSize: `calc(${typography.fontSize} / 1.25)`,
        color: theme.color.hard.rgb().string(),
      },
    ],

    leftChild: () => [
      {
        display: 'flex',
        alignItems: 'center',
        paddingRight: `calc(${spacing} / 2)`,
        // Icon size
        ' > span': {
          height: 'auto',
          '> svg': {
            height: typography.fontSize,
            width: typography.fontSize,
          },
        },
      },
    ],

    middleChild: () => [
      {
        flex: 1,
      },
    ],

    rightChild: () => [
      {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: `calc(${spacing} / 2)`,
        // Icon size
        ' > span': {
          height: 'auto',
          '> svg': {
            height: typography.fontSize,
            width: typography.fontSize,
          },
        },
      },
    ],
  }
}

export default createClasses
