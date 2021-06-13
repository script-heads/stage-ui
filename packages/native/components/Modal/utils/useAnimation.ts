import React from 'react'
import { Animated } from 'react-native'

const useAnimation = (value: number) => {
    return React.useRef(new Animated.Value(value)).current
}

export default useAnimation