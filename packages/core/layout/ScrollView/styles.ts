import { colorProp, toRem } from '@stage-ui/system'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const color = colorProp(props.color || theme.color.onBackground, theme)
  const barOffset = toRem(props.barOffset || 0)

  return {
    wrapper: [
      {
        position: 'relative',
        height: '100%',
        width: '100%',
      },
    ],
    container: [
      {
        position: 'relative',
        overflow: 'auto',
        height: '100%',
        maxHeight: 'inherit',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      },
    ],
    content: [
      {
        position: 'relative',
        /**
         * causing issue with
         * crop content
         */
        height: 'fit-content',
        minWidth: '100%',
        minHeight: '100%',
        willChange: 'left, top',
        '> :nth-of-type(n)': {
          margin: '0 !important',
        },
        boxSizing: 'border-box',
      },
    ],
    yBar: (state) => [
      {
        zIndex: 999,
        overflow: 'hidden',
        position: 'absolute',
        top: barOffset,
        right: barOffset,
        width: '0.5rem',
        borderRadius: '5rem',
        backgroundColor: color.alpha(0.1).rgb().string(),
        transition: 'opacity 0.5s',
        willChange: 'opacity',
        opacity: 0,
        ':hover': {
          opacity: 1,
          '> span': { opacity: 0.4 },
        },
      },
      state.active && [{ opacity: 1 }],
      state.size === 'xs' && [
        {
          width: '0.25rem',
        },
      ],
      state.size === 's' && [
        {
          width: '0.375rem',
        },
      ],
      state.size === 'l' && [
        {
          width: '0.625rem',
        },
      ],
      state.size === 'xl' && [
        {
          width: '0.75rem',
        },
      ],
      state.shape === 'square' && [
        {
          borderRadius: 0,
        },
      ],
      state.position === 'none' && {
        display: 'none',
      },
      state.position === 'left' && [
        {
          right: 'auto',
          left: 0,
        },
      ],
    ],
    yThumb: (state) => [
      {
        zIndex: 999,
        display: 'block',
        width: '0.5rem',
        height: '100%',
        borderRadius: '1rem',
        backgroundColor: color.rgb().string(),
        opacity: 0,
        transition: 'opacity 0.5s',
        willChange: 'opacity',
      },
      state.active && [{ opacity: 0.4 }],
      state.size === 'xs' && [
        {
          width: '0.25rem',
        },
      ],
      state.size === 's' && [
        {
          width: '0.375rem',
        },
      ],
      state.size === 'l' && [
        {
          width: '0.625rem',
        },
      ],
      state.size === 'xl' && [
        {
          width: '0.75rem',
        },
      ],
      state.shape === 'square' && [
        {
          borderRadius: 0,
        },
      ],
    ],
    xBar: (state) => [
      {
        zIndex: 999,
        overflow: 'hidden',
        position: 'absolute',
        left: barOffset,
        bottom: barOffset,
        height: '0.5rem',
        width: `calc(100% - ${barOffset})`,
        borderRadius: '1rem',
        backgroundColor: color.alpha(0.1).rgb().string(),
        transition: 'opacity 0.5s',
        willChange: 'opacity',
        opacity: 0,
        ':hover': {
          opacity: 1,
          '> span': { opacity: 0.4 },
        },
      },
      state.size === 'xs' && [
        {
          height: '0.25rem',
        },
      ],
      state.size === 's' && [
        {
          height: '0.5rem',
        },
      ],
      state.size === 'l' && [
        {
          height: '1rem',
        },
      ],
      state.size === 'xl' && [
        {
          height: '1.25rem',
        },
      ],
      state.active && [{ opacity: 1 }],
      state.shape === 'square' && [
        {
          borderRadius: 0,
        },
      ],
      state.position === 'none' && {
        display: 'none',
      },
    ],
    xThumb: (state) => [
      {
        zIndex: 999,
        display: 'block',
        height: '0.5rem',
        width: '100%',
        borderRadius: '1rem',
        backgroundColor: color.rgb().string(),
        opacity: 0,
        transition: 'opacity 0.5s',
        willChange: 'opacity',
      },
      state.size === 'xs' && [
        {
          height: '0.25rem',
        },
      ],
      state.size === 's' && [
        {
          height: '0.5rem',
        },
      ],
      state.size === 'l' && [
        {
          height: '1rem',
        },
      ],
      state.size === 'xl' && [
        {
          height: '1.25rem',
        },
      ],
      state.active && [{ opacity: 0.4 }],
      state.shape === 'square' && [
        {
          borderRadius: 0,
        },
      ],
    ],
  }
}

export default createClasses
