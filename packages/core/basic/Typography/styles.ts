import colorResolver from '@stage-ui/system/props/color'
import sizeResolver from '@stage-ui/system/props/size'
import breakpointResolver from '@stage-ui/system/props/breakpoint'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.PrivateProps> = (theme, props) => {
  return {
    container: [
      props.ellipsis && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
      },
      breakpointResolver(props.size, theme, (currentValue) =>
        sizeResolver(currentValue || 'm', theme.assets.typography[props.sizesOf], (value) => ({
          fontSize: value,
          lineHeight: 1.5,
        })),
      ),
      breakpointResolver(props.lineHeight, theme, (currentValue) => ({
        lineHeight: currentValue,
      })),
      breakpointResolver(props.decoration, theme, (currentValue) => ({
        textDecoration: currentValue,
      })),
      breakpointResolver(props.weight, theme, (currentValue) => ({
        fontWeight: currentValue,
      })),
      breakpointResolver(props.transform, theme, (currentValue) => ({
        textTransform: currentValue,
      })),
      breakpointResolver(props.align, theme, (currentValue) => ({
        textAlign: currentValue,
      })),
      breakpointResolver(props.color, theme, (currentValue) => ({
        color: colorResolver(currentValue, theme)?.rgb().string(),
      })),
      breakpointResolver(props.backgroundColor, theme, (currentValue) => ({
        background: colorResolver(currentValue, theme)?.rgb().string(),
      })),
    ],
  }
}

export default createClasses
