import {
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle,
  Animated,
} from 'react-native'
import { LightTheme } from './themes/light'

declare namespace NativeTypes {
  type Styles = Record<
    string,
    Animated.WithAnimatedValue<StyleProp<ViewStyle | ImageStyle | TextStyle>>
  >
  export type FontStyle = {
    fontSize: number
    lineHeight: number
    fontFamily?: string
    fontWeight?:
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '400'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
    color: string
  }

  export type NativeTheme<T> = {
    assets: {
      effects: {
        shadow: ViewStyle
      }
      typography: {
        text: {
          xs: FontStyle
          s: FontStyle
          m: FontStyle
          l: FontStyle
          xl: FontStyle
        }
        header: {
          xs: FontStyle
          s: FontStyle
          m: FontStyle
          l: FontStyle
          xl: FontStyle
        }
      }
    }
    spacing: {
      xs: number
      s: number
      m: number
      l: number
      xl: number
    }
    radius: {
      xs: number
      s: number
      m: number
      l: number
      xl: number
    }
  } & Omit<T, 'assets' | 'spacing' | 'radius'>

  type Theme = LightTheme
}

export default NativeTypes
