import React from 'react'
import { Text as NativeText, TextProps as OriginalTextProps } from 'react-native'
import NativeTypes from 'shared/types'
import useStyleProps, { StyleProps } from '../hooks/useStyleProps'
import useTheme from '../hooks/useTheme'
import scale from '../utils/scale'
import scaleText from '../utils/scaleText'

export interface TextProps extends OriginalTextProps, StyleProps {
  as?: (t: NativeTypes.Theme['assets']['typography']) => NativeTypes.FontStyle
  weight?: '700' | 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '800' | '900'
  lineHeight?: number
  lineHeightMultiplier?: number
  numberOfLines?: number
  size?: number
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  verticalAlign?: 'auto' | 'center' | 'top' | 'bottom'
  children?: React.ReactNode
}

function Text(props: TextProps) {
  const [styleProps, selfProps] = useStyleProps(props)
  const theme = useTheme()

  const {
    style,
    as = (t) => t.text.m,
    size,
    lineHeight,
    lineHeightMultiplier,
    weight,
    align,
    verticalAlign,
    numberOfLines,
    ...textProps
  } = selfProps

  return (
    <NativeText
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      style={[
        !!as && scaleText(as(theme.assets.typography)),
        style,
        !!weight && {
          fontWeight: weight,
        },
        !!lineHeight && {
          lineHeight: scale(lineHeight),
        },
        !!lineHeightMultiplier && {
          lineHeight: scale(as(theme.assets.typography).fontSize * lineHeightMultiplier),
        },
        !!size && {
          fontSize: scale(size),
        },
        !!align && {
          textAlign: align,
        },
        !!verticalAlign && {
          textAlignVertical: verticalAlign,
        },
        styleProps,
      ]}
      {...textProps}
    />
  )
}

export default Text
