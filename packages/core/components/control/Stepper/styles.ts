import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.Props> = (props, theme) => {
  return {
    container: [
      {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        transition: 'all 0.25s',
      },
    ],
    step: (variant) => [
      {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.5rem',
        height: '2.5rem',
        border: '1px solid',
        color: theme.color.light.string(),
        borderColor: theme.color.lightest.string(),
        backgroundColor: theme.color.surface.string(),
        borderRadius: '100rem',
        userSelect: 'none',
      },
      variant({
        active: {
          color: theme.color.primary.string(),
          borderColor: theme.color.primary.alpha(0.5).string(),
        },
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
      }),
    ],
  }
}

export default createClasses
