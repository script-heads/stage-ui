import colorResolver from '@stage-ui/system/props/color'
import sizeResolver from '@stage-ui/system/props/size'
import { CreateClasses } from '@stage-ui/system/hooks/useSystem'
import breakpointResolver from '@stage-ui/system/props/breakpoint'
import Types from './types'

const createClasses: CreateClasses<Types.Styles, Types.PrivateProps> = (theme, props, styleProps) => {
  const color = colorResolver(props.color, theme)
  const backgroundColor = colorResolver(props.backgroundColor, theme)

  return {
    container: [
      props.specificStyles,
      breakpointResolver(props.size, theme, (currentValue) =>
        sizeResolver(
          theme.assets.typography[props.sizesOf],
          (value) => ({
            fontSize: value,
          }),
          currentValue,
        ),
      ),
      {
        fontWeight: props.weight,
        lineHeight: props.lineHeight,
        textDecoration: props.decoration,
        textTransform: props.transform,
        textAlign: props.align,
        color: color?.hex(),
        background: backgroundColor,
      },
      props.ellipsis && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
      },
      styleProps.all,
    ],
  }
}

export default createClasses
