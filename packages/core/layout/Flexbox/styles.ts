import containerDecorations from '@stage-ui/core/utils/containerDecorations'
import { breakpointProp } from '@stage-ui/system'

import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (
  theme,
  props,
) => ({
  container: () => [
    containerDecorations(props, theme),
    {
      position: 'relative',
      display: props.inline ? 'inline-flex' : 'flex',
    },
    props.column &&
      breakpointProp(props.column, theme, (currentValue) => ({
        flexDirection: currentValue ? 'column' : undefined,
      })),
    breakpointProp(props.centered, theme, (currentValue) => ({
      alignItems: currentValue ? 'center' : undefined,
      justifyContent: currentValue ? 'center' : undefined,
    })),
    breakpointProp(props.alignItems, theme, (currentValue) => ({
      alignItems: currentValue,
    })),
    breakpointProp(props.alignContent, theme, (currentValue) => ({
      alignContent: currentValue,
    })),
    breakpointProp(props.placeContent, theme, (currentValue) => ({
      placeContent: currentValue,
    })),
    breakpointProp(props.justifyContent, theme, (currentValue) => ({
      justifyContent: currentValue,
    })),
    breakpointProp(props.justifyItems, theme, (currentValue) => ({
      justifyItems: currentValue,
    })),
    breakpointProp(props.direction, theme, (currentValue) => ({
      flexDirection: currentValue,
    })),
    breakpointProp(props.direction, theme, (currentValue) => ({
      flexDirection: currentValue,
    })),
    breakpointProp(props.inline, theme, (currentValue) => ({
      inline: currentValue,
    })),
    breakpointProp(props.wrap, theme, (currentValue) => ({
      flexWrap: currentValue,
    })),
    breakpointProp(props.flow, theme, (currentValue) => ({
      flow: currentValue,
    })),
  ],
})

export default createClasses
