import Types from './types'

const styles: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props, styleProps) => {
  return {
    container: [
      {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        transition: 'all 0.25s',
        ...theme.assets.typography.text[props.size || 'm'],
      },
      styleProps.all,
    ],
    step: (variant) => [
      {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        color: theme.color.light.string(),
        borderColor: theme.color.lightest.string(),
        backgroundColor: theme.color.surface.string(),
        borderRadius: '100rem',
        userSelect: 'none',
      },
      variant({
        size: {
          xl: {
            width: '3.5rem',
            height: '3.5rem',
            borderWidth: '3px',
          },
          l: {
            width: '3rem',
            height: '3rem',
            borderWidth: '2px',
          },
          m: {
            width: '2.5rem',
            height: '2.5rem',
          },
          s: {
            width: '2rem',
            height: '2rem',
          },
          xs: {
            width: '4.5rem',
            height: '0.25rem',
            border: 'none',
            backgroundColor: theme.color.lightest.string(),
          },
        },
        active: [
          {
            color: theme.color.primary.string(),
            borderColor: theme.color.primary.alpha(0.5).string(),
          },
          variant({
            size: {
              xs: {
                backgroundColor: theme.color.light.string(),
              },
            },
          }),
        ],
        complete: {
          color: theme.color.onPrimary.string(),
          backgroundColor: theme.color.primary.string(),
          borderColor: theme.color.primary.string(),
        },
        pointer: {
          cursor: 'pointer',
        },
      }),
    ],
    separator: (variant) => [
      {
        position: 'relative',
        flex: 1,
        height: '0.125rem',
        background: theme.color.lightest.string(),
      },
      variant({
        active: {
          background: theme.color.light.string(),
        },
        complete: {
          background: theme.color.primary.alpha(0.5).string(),
        },
        size: {
          xl: {
            height: '0.375rem',
          },
          l: {
            height: '0.25rem',
          },
          xs: {
            background: 'none',
            flexBasis: '0.375rem',
            flexGrow: 0,
          },
        },
      }),
    ],
  }
}

export default styles
