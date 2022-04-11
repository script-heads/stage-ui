import { keyframes } from '@emotion/react'
import colorResolver from '@stage-ui/system/props/color'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const spinAnimation = keyframes({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  })

  return {
    container: [
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        color: colorResolver(props.color, theme)?.rgb().string() || 'inherit',
        fontSize: props.size || '1.125em',
      },
    ],

    children: [
      {
        width: 'fit-content',
        animation: `${spinAnimation} ${props.duration || 1}s linear infinite`,
      },
    ],
  }
}

export default createClasses
