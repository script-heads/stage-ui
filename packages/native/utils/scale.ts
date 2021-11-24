import { Dimensions } from 'react-native'

const minWidth = 390
const deviceWidth = Dimensions.get('window').width

const scaleValue = minWidth / (deviceWidth > minWidth ? minWidth : deviceWidth)

export default (size: number, round?: boolean) =>
  !round ? size / scaleValue : Math.round(size / scaleValue)
