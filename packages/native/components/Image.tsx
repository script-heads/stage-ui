import React from 'react'
import {
  Image as NativeImage,
  ImageProps as NativeImageProps,
} from 'react-native'
import useStyleProps, {
  ColorProp,
  StyleProps,
} from 'shared/hooks/useStyleProps'
import useTheme from 'shared/hooks/useTheme'
import { colorResolver } from 'shared/utils/resolvers'

interface ImageProps extends NativeImageProps, StyleProps {
  tintColor?: ColorProp
}

function Image(props: ImageProps) {
  const [styleProps, otherProps] = useStyleProps(props)
  const theme = useTheme()
  const { style, tintColor, resizeMode, ...imageProps } = otherProps

  return (
    <NativeImage
      {...imageProps}
      style={[
        !!tintColor && { tintColor: colorResolver(theme)(tintColor) },
        style,
        styleProps,
      ]}
      resizeMode={resizeMode || 'contain'}
    />
  )
}

export default Image
