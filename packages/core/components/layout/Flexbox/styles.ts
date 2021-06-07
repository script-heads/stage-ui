import applyLayoutDecoration from '@stage-ui/core/utils/applyLayoutDecoration'
import breakpointProps from '@stage-ui/system/props/breakpoint'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props, styleProps) => {
  return {
    container: (variant) => [
      applyLayoutDecoration(props, theme),
      {
        position: 'relative',
        display: props.inline ? 'inline-flex' : 'flex',
      },
      props.column && {
        flexDirection: 'column',
      },
      breakpointProps(props.centered, theme, (currentValue) => ({
        alignItems: currentValue ? 'center' : undefined,
        justifyContent: currentValue ? 'center' : undefined,
      })),
      breakpointProps(props.alignItems, theme, (currentValue) => ({ alignItems: currentValue })),
      breakpointProps(props.alignContent, theme, (currentValue) => ({ alignContent: currentValue })),
      breakpointProps(props.placeContent, theme, (currentValue) => ({ placeContent: currentValue })),
      breakpointProps(props.justifyContent, theme, (currentValue) => ({ justifyContent: currentValue })),
      breakpointProps(props.justifyItems, theme, (currentValue) => ({ justifyItems: currentValue })),
      breakpointProps(props.direction, theme, (currentValue) => ({ flexDirection: currentValue })),
      breakpointProps(props.column, theme, (currentValue) => ({ flexDirection: currentValue ? 'column' : undefined })),
      breakpointProps(props.inline, theme, (currentValue) => ({ inline: currentValue })),
      breakpointProps(props.wrap, theme, (currentValue) => ({ wrap: currentValue })),
      breakpointProps(props.flow, theme, (currentValue) => ({ flow: currentValue })),
      styleProps.all,
    ],
  }
}

export default createClasses
