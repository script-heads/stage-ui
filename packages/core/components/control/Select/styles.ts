import SystemTypes from '@stage-ui/system/types'
import Types from './types'
import fieldStyles from '../../../misc/hocs/Field/styles'

const createClasses: CreateClasses<Types.Styles, Types.Props, Types.StyleParams> = (props, theme, params) => {
  const minHeight = theme.assets.field[props.size || 'm']?.minHeight || theme.assets.field.m.minHeight || '2.5rem'

  return {
    ...fieldStyles<Types.Styles>(props, theme, {
      container: (variant) => [
        variant({
          isOpen: {
            zIndex: 999,
          },
        }),
      ],
      field: (variant) => [
        params?.isOpen && {
          borderColor: theme.color.primary.hex(),
        },
        variant({
          decoration: {
            filled: [
              params?.isOpen && {
                borderColor: 'transparent',
              },
            ],
            none: [
              { padding: 0 },
              params?.isOpen && {
                borderColor: 'transparent',
              },
            ],
            underline: [
              params?.isOpen && {
                borderColor: 'transparent',
              },
            ],
          },
        }),
      ],
    }),
    drop: (variant) => [
      {
        position: 'relative',
        background: theme.color.surface.hex(),
        borderRadius: theme.radius.s,
        boxShadow: theme.assets.shadow.l,
        boxSizing: 'border-box',
        overflow: 'hidden',
        top: '0.25rem',
      },
      variant({
        shape: {
          square: {
            borderRadius: 0,
          },
          round: {
            borderRadius: `calc(${minHeight}/2)`,
          },
        },
        decoration: {
          filled: [
            {
              boxShadow: 'none',
              top: 0,
              borderColor: 'transparent',
            },
          ],
          underline: {
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            background: 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            backgroundColor: theme.color.surface.hex(),
          },
          none: {
            borderTopLeftRadius: theme.radius.s,
            borderTopRightRadius: theme.radius.s,
            borderTopWidth: '1px',
          },
        },
      }),
    ],
    dropItem: (variant) => [
      theme.assets.typography.text.m,
      theme.assets.field,
      {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        ':hover': {
          color: theme.color.primary.hex(),
          backgroundColor: theme.color.primary.alpha(0.1.rgb().string(),
        },
      },
      variant({
        size: theme.assets.typography.text,
      }),
      variant({
        size: theme.assets.field,
      }),
      variant({
        selected: {
          color: theme.color.onPrimary.hex(),
          backgroundColor: theme.color.primary.hex(),
          ':hover': {
            color: theme.color.onPrimary.hex(),
            backgroundColor: theme.color.primary.hex(),
          },
        },
      }),
    ],

    selected: [
      {
        display: 'flex',
        flexWrap: 'wrap',
        margin: `calc(${minHeight} / 10) 0`,
        // marginLeft: 0,
        // marginBottom: `calc(${minHeight} / 5)`,
      },
    ],

    input: (variant) => [
      {
        flex: 1,
        outline: 0,
        padding: 0,
        margin: 0,
        border: 'none',
        backgroundImage: 'none',
        backgroundColor: 'transparent',
        resize: 'vertical',
        boxShadow: 'none',
        color: 'inherit',
        font: 'inherit',
        cursor: 'inherit',
        textOverflow: 'ellipsis',
        '&::placeholder': {
          color: theme.color.light.hex(),
        },
      },
      variant({
        searchMode: {
          color: theme.color.hard.hex(),
        },
        // multiselect: {
        //     width: 'auto',
        //     minWidth: '1rem'
        // }
      }),
    ],
    tag: (variant) => [
      {
        display: 'inline-flex',
        background: props.disabled ? theme.color.lightest.hex() : theme.color.primary.alpha(0.2.rgb().string(),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: props.disabled ? theme.color.light.hex() : theme.color.primary.hex(),
        borderRadius: `calc(${theme.radius.s} / 2)`,
        boxSizing: 'border-box',
        color: props.disabled ? theme.color.light.hex() : theme.color.primary.hex(),
        padding: `0 calc(${minHeight} / 5)`,
        margin: `calc(${minHeight} / 20)`,
        marginRight: 'calc(${minHeight} / 10)',
        marginLeft: 0,
        alignItems: 'center',
      },
      variant({
        shape: {
          square: {
            borderRadius: 0,
          },
          round: {
            borderRadius: `100px`,
          },
        },
        decoration: {
          filled: [
            {
              borderColor: 'transparent',
            },
          ],
          underline: {
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            background: 'transparent',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
          },
          none: {
            background: 'transparent',
          },
        },
      }),
    ],
    tagRemove: (variant) => [
      {
        marginLeft: `calc(${minHeight} / 10)`,
        marginRight: `calc(-${minHeight} / 10)`,
        borderLeft: '1px solid',
        color: props.disabled ? theme.color.light.hex() : theme.color.primary.alpha(0.8.rgb().string(),
        cursor: 'pointer',
        ':hover': {
          color: props.disabled ? theme.color.light.hex() : theme.color.primary.hex(),
        },
      },
    ],
    emptyConteiner: (variant) => [
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `calc(${minHeight} / 5)`,
      },
    ],
    emptyText: (variant) => [
      {
        color: theme.color.light.hex(),
        userSelect: 'none',
      },
      variant({
        size: theme.assets.typography.text,
      }),
    ],
  }
}

export default createClasses
