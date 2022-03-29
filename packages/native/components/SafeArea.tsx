import React from 'react'

import { View } from 'react-native'
import useSafeArea, { SafeAreaType } from 'hooks/useSafeArea'
import { SpacingProp } from 'hooks/useStyleProps'
import useTheme from 'hooks/useTheme'
import { spacingResolver } from 'utils/resolvers'

interface SafeAreaProps {
  children?: React.ReactNode
  type?: SafeAreaType
  top?: SpacingProp
  right?: SpacingProp
  bottom?: SpacingProp
  left?: SpacingProp
  flex?: number
}
export default function (props: SafeAreaProps) {
  const { children, top, right, bottom, left, type, flex } = props
  const edgeInsets = useSafeArea(type)
  const theme = useTheme()

  return (
    <View
      style={{
        flex: typeof flex === 'number' ? flex : 1,
        marginTop:
          typeof top !== 'undefined' ? spacingResolver(theme)(top) : edgeInsets.top,
        marginRight:
          typeof right !== 'undefined' ? spacingResolver(theme)(right) : edgeInsets.right,
        marginBottom:
          typeof bottom !== 'undefined'
            ? spacingResolver(theme)(bottom)
            : edgeInsets.bottom,
        marginLeft:
          typeof left !== 'undefined' ? spacingResolver(theme)(left) : edgeInsets.left,
      }}
    >
      {children}
    </View>
  )
}
