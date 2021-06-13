import React from 'react'
import { TextInput, TextInputProps, TextStyle, View } from 'react-native'
import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text'
import Flexbox from 'shared/components/Flexbox'
import useStyleProps, { StyleProps } from 'shared/hooks/useStyleProps'
import useTheme from 'shared/hooks/useTheme'
import scale from 'shared/utils/scale'
import scaleText from 'shared/utils/scaleText'

export interface TextFieldProps
  extends StyleProps,
    Omit<TextInputProps, 'style'> {
  right?: React.ReactNode
  left?: React.ReactNode
  shape?: 'round' | 'rounded' | 'square'
  style?: TextStyle
  disabled?: boolean
  hasError?: boolean
  inputStyle?: TextStyle
  decoration?: 'none' | 'default'
  mask?: TextInputMaskTypeProp
  maskOptions?: TextInputMaskOptionProp
}

function TextField(props: TextFieldProps) {
  const theme = useTheme()
  const [styleProps, selfProps] = useStyleProps(props)

  const {
    shape = 'rounded',
    left,
    right,
    style,
    disabled,
    hasError,
    mask,
    maskOptions,
    decoration = 'default',
    inputStyle,
    multiline,
    numberOfLines = 1,
    ...textInputProps
  } = selfProps

  let color: string | undefined
  let backgroundColor: string | undefined
  let borderColor: string | undefined
  let borderWidth: number | undefined

  switch (decoration) {
    case 'none':
      break
    default:
      if (disabled) {
        color = theme.color.light.hex()
        backgroundColor = theme.color.surface.hex()
        break
      }
      color = theme.color.onSurface.hex()
      backgroundColor = theme.color.surface.hex()
      if (hasError) {
        borderColor = theme.color.error.hex()
        borderWidth = 1
      }
      break
  }

  const inputSharedProps = {
    style: [
      // DO NOT REORDER
      scaleText(theme.assets.typography.text.s),
      {
        flex: 1,
        color,
        margin: 0,
        padding: scale(theme.spacing.m),
        lineHeight: 0,  
        fontSize: scale(44),
      },
      !!left && {
        marginLeft: scale(theme.spacing.m),
      },
      !!right && {
        marginRight: scale(theme.spacing.m),
      },
      inputStyle,
    ],
    placeholderTextColor: theme.color.hard.hex(),
    ...textInputProps,
  }

  return (
    <Flexbox
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          borderStyle: 'solid',
          borderColor: borderColor || theme.color.primary.string(),
          borderWidth: borderWidth || scale(4),
          backgroundColor
        },
        multiline && {
          alignItems: 'flex-start',
          height: scale(24 * numberOfLines),
          paddingTop: theme.spacing.m,
          paddingBottom: theme.spacing.m,
          paddingLeft: theme.spacing.m,
          paddingRight: theme.spacing.m,
        },
        style,
        styleProps,
      ]}
    >
      {left}
      {mask ? (
        <TextInputMask
          type={mask}
          options={maskOptions}
          {...inputSharedProps}
        />
      ) : (
        <TextInput {...inputSharedProps} />
      )}
      {right}
    </Flexbox>
  )
}

export default TextField
