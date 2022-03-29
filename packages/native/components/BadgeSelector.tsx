import React from 'react'

import { Animated, TouchableWithoutFeedback } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useStyleProps from 'hooks/useStyleProps'
import useTheme from 'hooks/useTheme'
import scale from 'utils/scale'

import Flexbox, { FlexboxProps } from './Flexbox'
import Text from './Text'

interface BadgeSelectorProps extends FlexboxProps {
  values: string[]
  value: string
  onChange: (value: string) => void
  leftOffset?: number
  style?: FlexboxProps['style']
  renderItem?: (value: string) => string
}

function BadgeSelector(props: BadgeSelectorProps) {
  const theme = useTheme()
  const scaleAnimation = props.values.map((_) => {
    return new Animated.Value(1)
  })
  const [styleProps] = useStyleProps(props)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styleProps, props.style]}
    >
      {!!props.leftOffset && <Flexbox w={props.leftOffset} />}
      {props.values.map((value, index) => {
        const isCurrent = value === props.value

        return (
          <Flexbox key={value + index} justifyContent="center">
            <TouchableWithoutFeedback
              hitSlop={{ top: 2, left: 2, bottom: 2, right: 2 }}
              onPress={() => {
                if (isCurrent) return
                props.onChange(value)
              }}
              style={{
                maxHeight: scale(44),
              }}
              onPressIn={() => {
                if (isCurrent) return
                Animated.spring(scaleAnimation[index], {
                  toValue: 0.98,
                  speed: 150,
                  useNativeDriver: true,
                }).start()
              }}
              onPressOut={() => {
                if (isCurrent) return
                Animated.spring(scaleAnimation[index], {
                  toValue: 1,
                  damping: 4,
                  mass: 0.2,
                  useNativeDriver: true,
                }).start()
              }}
              {...props}
            >
              <Animated.View
                style={{
                  paddingVertical: scale(theme.spacing.s),
                  paddingHorizontal: scale(theme.spacing.m),
                  marginRight: scale(theme.spacing.s),
                  borderRadius: 100,
                  backgroundColor: isCurrent
                    ? theme.color.primary.hex()
                    : theme.color.lightest.hex(),

                  transform: [{ scale: scaleAnimation[index] }],
                }}
              >
                <Text
                  as={(t) => t.text.m}
                  size={15}
                  color={isCurrent ? theme.color.onPrimary.hex() : theme.color.hard.hex()}
                  children={props.renderItem?.(value) || value}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </Flexbox>
        )
      })}
    </ScrollView>
  )
}

export default BadgeSelector
