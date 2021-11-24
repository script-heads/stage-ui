import React, { ForwardRefRenderFunction, forwardRef, useState } from 'react'
import { Animated, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Flexbox from '../Flexbox'
import scale from '../../utils/scale'
import ModalTypes from './types'

export const bounceOffset = scale(120)

const Card: ForwardRefRenderFunction<ModalTypes.CardRef, ModalTypes.CardProps> = (props, ref) => {
  const { ctx, height: heightProp, card, showCloseHandler, children } = props
  const { animations, dimensions } = ctx

  const [contentHeight, setHeight] = useState(dimensions.height)
  const insets = useSafeAreaInsets()

  let height = heightProp + (card ? 0 : bounceOffset)

  if (height > dimensions.height + (card ? -(scale(100) + insets.top) : 0)) {
    height = dimensions.height + (card ? -(insets.top + scale(100)) : scale(20))
  }

  const cardStyle: Animated.AnimatedProps<ViewStyle> = {
    zIndex: 11,
    bottom: card ? scale(16) : 0,
    left: card ? scale(16) : 0,
    transform: [
      {
        translateY: animations.cardTranslate.interpolate({
          inputRange: [0, 1],
          outputRange: [contentHeight, card ? 0 : bounceOffset],
        }),
      },
    ],
    width: dimensions.width - (card ? scale(32) : 0),
    height,
    paddingBottom: card ? 0 : bounceOffset,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: card ? 20 : 0,
    borderBottomRightRadius: card ? 20 : 0,
  }
  const contentStyle: ViewStyle = {
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: card ? 20 : 0,
    borderBottomRightRadius: card ? 20 : 0,
  }
  const handleContainer: ViewStyle = {
    zIndex: 110,
    top: -12,
    left: (dimensions.width - (card ? scale(32) : 0)) / 2 - 60,
    position: 'absolute',
  }
  const handleStyle: ViewStyle = {
    width: 120,
    height: 4,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  }

  return (
    <Animated.View
      style={cardStyle}
      onLayout={({ nativeEvent: { layout } }) => {
        if (layout) {
          ctx.layouts.card = layout
          setHeight(layout.height)
        }
      }}
    >
      {!!showCloseHandler && (
        <Flexbox alignItems="center" pointerEvents="none" style={handleContainer}>
          <View style={handleStyle} />
        </Flexbox>
      )}
      <View style={contentStyle}>{children}</View>
    </Animated.View>
  )
}

export default forwardRef(Card)
