import { ColorProp, SpacingProp, StyleProps } from 'hooks/useStyleProps'
import NativeTypes from 'types'
import scale from 'utils/scale'

export function spacingResolver(theme: NativeTypes.Theme) {
  return (prop: SpacingProp): number => {
    if (typeof prop === 'function') {
      return scale(prop(theme.spacing))
    }
    if (typeof prop === 'string') {
      return scale(theme.spacing[prop])
    }
    return scale(prop)
  }
}

export function colorResolver(theme: NativeTypes.Theme) {
  return (prop: ColorProp): string => {
    if (typeof prop === 'function') {
      return prop(theme.color)
    }
    const thatColor =
      theme.color[prop as Exclude<keyof NativeTypes.Theme['color'], 'palette'>]?.hex()
    return thatColor || prop
  }
}

export function identityResolver() {
  return function idetity(prop: string | number) {
    return prop
  }
}

const resolvers: Record<
  keyof StyleProps,
  [string, typeof spacingResolver | typeof colorResolver | typeof identityResolver]
> = {
  flex: ['flex', identityResolver],
  alignSelf: ['alignSelf', identityResolver],

  color: ['color', colorResolver],
  background: ['backgroundColor', colorResolver],

  h: ['height', identityResolver],
  w: ['width', identityResolver],

  m: ['margin', spacingResolver],
  mh: ['marginHorizontal', spacingResolver],
  mv: ['marginVertical', spacingResolver],
  mr: ['marginRight', spacingResolver],
  mt: ['marginTop', spacingResolver],
  ml: ['marginLeft', spacingResolver],
  mb: ['marginBottom', spacingResolver],

  p: ['padding', spacingResolver],
  ph: ['paddingHorizontal', spacingResolver],
  pv: ['paddingVertical', spacingResolver],
  pr: ['paddingRight', spacingResolver],
  pt: ['paddingTop', spacingResolver],
  pl: ['paddingLeft', spacingResolver],
  pb: ['paddingBottom', spacingResolver],
}

export default resolvers
