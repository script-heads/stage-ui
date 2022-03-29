import NativeTypes from '@stage-ui/native/types'

import scale from '@stage-ui/native/utils/scale'

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
