import React from 'react'

import { StyleProp, ViewStyle } from 'react-native'

import useStyleProps, { StyleProps } from '../hooks/useStyleProps'
import useTheme from '../hooks/useTheme'
import scale from '../utils/scale'

import Button from './Button'
import Flexbox from './Flexbox'

interface Switchrops extends StyleProps {
  value: boolean
  onChange: (value: boolean) => void
  style?: StyleProp<ViewStyle>
}

function Switch(props: Switchrops) {
  const theme = useTheme()
  const [styleProps, otherProps] = useStyleProps(props)

  const { value, onChange, style } = otherProps

  return (
    <Button
      style={[style, styleProps]}
      decoration="none"
      h={24}
      w={40}
      background={value ? theme.color.primary.hex() : theme.color.light.hex()}
      shape="round"
      onPress={() => onChange(!value)}
    >
      <Flexbox flex={1}>
        <Flexbox
          w={20}
          h={20}
          m={2}
          alignSelf={value ? 'flex-end' : 'flex-start'}
          background={theme.color.onPrimary.hex()}
          style={{ borderRadius: scale(10) }}
        />
      </Flexbox>
    </Button>
  )
}

export default Switch
