import NativeTypes from 'shared/types'
import scale from './scale'

export default (textStyle: NativeTypes.FontStyle) => {
  const scaledTextStyle: NativeTypes.FontStyle = Object.create(textStyle)

  if (scaledTextStyle.fontSize) {
    scaledTextStyle.fontSize = scale(scaledTextStyle.fontSize, true)
  }

  if (scaledTextStyle.lineHeight) {
    scaledTextStyle.lineHeight = scale(scaledTextStyle.lineHeight, true)
  }

  return scaledTextStyle
}
