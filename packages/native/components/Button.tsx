import React, { useEffect, useState } from 'react'

import {
  ActivityIndicator,
  Animated,
  GestureResponderEvent,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native'
import useStyleProps, { StyleProps } from 'hooks/useStyleProps'
import useTheme from 'hooks/useTheme'
import scale from 'utils/scale'

import Flexbox from './Flexbox'
import Text from './Text'

export interface ButtonProps extends StyleProps {
  children?: ((color?: string) => React.ReactNode) | React.ReactNode
  disabled?: boolean
  async?: boolean
  shape?: 'round' | 'rounded' | 'square'
  onPress?: (event: GestureResponderEvent) => void
  onLongPress?: (event: GestureResponderEvent) => void
  onBlur?: () => void
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>
  decoration?: 'secondary' | 'outline' | 'none' | 'default'
  busy?: boolean
  animated?: boolean
  debounce?: number
}

function Button(props: ButtonProps) {
  const theme = useTheme()
  const [busy, setBusy] = useState(false)
  const [debounce, setDebounce] = useState(false)
  const [styleProps, otherProps] = useStyleProps(props)
  const scaleAnimation = new Animated.Value(1)

  const {
    children,
    disabled = false,
    async = false,
    shape = 'rounded',
    onPress,
    style,
    decoration = 'default',
    busy: busyProp,
    animated = false,
    debounce: defaultDebounce = 250,
  } = otherProps

  useEffect(() => {
    if (typeof busyProp !== 'undefined') {
      setBusy(busyProp)
    }
  }, [busyProp])

  let color: string | undefined
  let backgroundColor: string | undefined
  let borderColor: string | undefined
  let borderWidth: number | undefined

  switch (decoration) {
    case 'outline':
      if (disabled) {
        color = theme.color.light.hex()
        borderColor = theme.color.light.hex()
        break
      }
      color = theme.color.primary.hex()
      borderColor = theme.color.primary.hex()
      borderWidth = 2
      break
    case 'secondary':
      if (disabled) {
        color = theme.color.hard.hex()
        borderColor = theme.color.light.hex()
        break
      }
      color = theme.color.onSecondary.hex()
      backgroundColor = theme.color.secondary.hex()
      break
    case 'none':
      color = theme.color.onBackground.hex()
      break
    default:
      if (disabled) {
        color = theme.color.hard.hex()
        backgroundColor = theme.color.light.hex()
        break
      }
      color = theme.color.onPrimary.hex()
      backgroundColor = theme.color.primary.hex()
      break
  }

  const busyContent = busy && (
    <Flexbox centered alignItems="center" h="100%">
      <ActivityIndicator color={color} />
    </Flexbox>
  )

  return (
    <TouchableWithoutFeedback
      hitSlop={{
        top: 10,
        left: 10,
        bottom: 10,
        right: 10,
      }}
      onLongPress={props.onLongPress}
      onBlur={props.onBlur}
      onPress={async (event) => {
        if (disabled || busy || debounce) return

        if (async) {
          setBusy(true)
        } else {
          setDebounce(true)
        }
        await onPress?.(event)

        setTimeout(() => {
          if (async) setBusy(false)
          setDebounce(false)
        }, defaultDebounce)
      }}
      delayPressIn={0}
      delayPressOut={0}
      onPressIn={() => {
        if (disabled || busy) return
        if (animated) {
          Animated.spring(scaleAnimation, {
            toValue: 0.95,
            speed: 250,
            useNativeDriver: true,
          }).start()
        }
      }}
      onPressOut={() => {
        if (disabled || busy) return
        if (animated) {
          Animated.spring(scaleAnimation, {
            toValue: 1,
            damping: 4,
            mass: 0.4,
            useNativeDriver: true,
          }).start()
        }
      }}
    >
      <Animated.View
        style={[
          [
            {
              transform: [{ scale: scaleAnimation }],
            },
            decoration !== 'none' && {
              height: scale(60),
              backgroundColor,
              borderStyle: 'solid',
              borderColor,
              borderWidth,
              padding: scale(10),
            },
            shape === 'rounded' && {
              borderRadius: scale(theme.radius.m),
            },
            shape === 'round' && {
              borderRadius: scale(100),
            },
          ],
          style,
          styleProps,
        ]}
      >
        {busyContent || (
          <>
            {(typeof children === 'string' || typeof children === 'number') && (
              <Flexbox flex={1} centered>
                <Text
                  as={(t) => t.text.m}
                  color={styleProps.color || color}
                  weight="bold"
                >
                  {children}
                </Text>
              </Flexbox>
            )}
            {typeof children === 'function' && children(color)}
            {typeof children !== 'string' &&
              typeof children !== 'number' &&
              typeof children !== 'function' &&
              children}
          </>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default Button
