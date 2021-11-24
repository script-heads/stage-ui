import React from 'react'
import { Animated } from 'react-native'
import { LongPressGestureHandler, PanGestureHandler } from 'react-native-gesture-handler'
import ModalTypes from './types'

const Overlay: React.ForwardRefRenderFunction<ModalTypes.OverlayRef, ModalTypes.OverlayProps> = (
  props,
  ref,
) => {
  const { ctx, onHandlerStateChange, onGestureEvent, style, children } = props
  const { animations, dimensions } = ctx

  const gestureHandleRef = React.useRef(null)

  return (
    <LongPressGestureHandler
      onHandlerStateChange={onHandlerStateChange}
      simultaneousHandlers={gestureHandleRef}
      minDurationMs={0}
    >
      <PanGestureHandler
        ref={gestureHandleRef}
        onHandlerStateChange={onHandlerStateChange}
        onGestureEvent={onGestureEvent}
      >
        <Animated.View
          onLayout={({ nativeEvent: { layout } }) => {
            ctx.layouts.overlay = layout
          }}
          style={[
            {
              zIndex: 10,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: dimensions.width,
              height: dimensions.height,
              backgroundColor: 'black',
              opacity: animations.overlayOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
            style,
          ]}
        >
          {children}
        </Animated.View>
      </PanGestureHandler>
    </LongPressGestureHandler>
  )
}

export default React.forwardRef(Overlay)
