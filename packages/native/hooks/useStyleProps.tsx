import useTheme from 'shared/hooks/useTheme'
import NativeTypes from 'shared/types'
import resolvers from 'shared/utils/resolvers'

export type SpacingProp =
  | ((s: NativeTypes.Theme['spacing']) => number)
  | number
  | keyof NativeTypes.Theme['spacing']

export type ColorProp =
  | ((c: NativeTypes.Theme['color']) => string)
  | string
  | keyof Omit<NativeTypes.Theme['color'], 'palette'>

export interface StyleProps {
  flex?: number
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'auto'

  color?: ColorProp
  background?: ColorProp

  h?: number | string
  w?: number | string

  m?: SpacingProp
  mh?: SpacingProp
  mv?: SpacingProp
  mr?: SpacingProp
  mt?: SpacingProp
  ml?: SpacingProp
  mb?: SpacingProp

  p?: SpacingProp
  ph?: SpacingProp
  pv?: SpacingProp
  pr?: SpacingProp
  pt?: SpacingProp
  pl?: SpacingProp
  pb?: SpacingProp
}

function useStyleProps<P extends StyleProps>(
  props: P,
): [Record<keyof typeof resolvers, any>, Exclude<P, keyof StyleProps>] {
  const theme = useTheme()
  const styleProps = {} as Record<string, string | number>
  const selfProps = {} as Exclude<P, keyof StyleProps>
  const propKeys = Object.keys(props) as Array<keyof P>

  propKeys.forEach((propKey) => {
    const resolver = resolvers[propKey as keyof typeof resolvers]
    if (resolver) {
      // @ts-expect-error type it if you can
      styleProps[resolver[0]] = resolver[1](theme)(props[propKey])
      return
    }
    // @ts-expect-error type it if you can
    selfProps[propKey] = props[propKey]
  })

  return [styleProps, selfProps]
}

export default useStyleProps
