import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import scale from 'shared/utils/scale'
import Flexbox from './Flexbox'
import Button from './Button'
import useStyleProps, { StyleProps } from '../hooks/useStyleProps'
import Image from './Image'

interface CheckBoxProps extends StyleProps {
  value: boolean
  onChange?: (value: boolean) => void
  style?: StyleProp<ViewStyle>
}

function CheckBox(props: CheckBoxProps) {
  const [styleProps, otherProps] = useStyleProps(props)
  const { value, onChange, style } = otherProps

  return (
    <Button style={[styleProps]} decoration="none" w="100%" onPress={() => onChange?.(!value)}>
      <Flexbox
        centered
        w={28}
        h={28}
        background={value ? 'primary' : 'light'}
        style={[{ borderRadius: scale(28) }, style]}
      >
        {/* <Image source={Icons.checkmark} w={16} h={16} tintColor="onPrimary" /> */}
      </Flexbox>
    </Button>
  )
}

export default CheckBox
