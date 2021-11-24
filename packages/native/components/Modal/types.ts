import { Animated, FlatListProps, LayoutRectangle, ScaledSize, ViewStyle } from 'react-native'
import {
  LongPressGestureHandlerGestureEvent,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProperties,
} from 'react-native-gesture-handler'
import { ColorProp, SpacingProp } from 'shared/hooks/useStyleProps'

namespace ModalTypes {
  export type Props = {
    overlayStyle?: ViewStyle
    cardStyle?: ViewStyle
    contentStyle?: ViewStyle
    headerStyle?: ViewStyle
    footerStyle?: ViewStyle
    card?: boolean
    hideHandler?: boolean
    useNativeDriver?: boolean
    onOpen?: () => void
    onOpened?: () => void
    onClose?: () => void
    onClosed?: () => void
    onDragStart?: () => void
    onDragEnd?: () => void
    flatList?: FlatListProps<any>
    scrollable?: boolean
    withSafeArea?: boolean
    height?: number

    children?: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
  }
  export type Ref = {
    open: () => void
    close: () => void
  }

  export type Animation = {
    overlayOpacity: Animated.Value
    cardTranslate: Animated.Value
  }

  export type Ctx = {
    useNativeDriver: boolean
    animations: Animation
    dimensions: ScaledSize
    layouts: {
      overlay?: LayoutRectangle
      card?: LayoutRectangle
    }
  }

  /**
   * Overlay
   */
  export type OverlayRef = {}
  export type OverlayProps = {
    children?: React.ReactNode
    style?: ViewStyle
    ctx: Ctx
    onGestureEvent?: (event: PanGestureHandlerGestureEvent) => void
    onHandlerStateChange?: (event: LongPressGestureHandlerGestureEvent) => void
  }

  /**
   * Card
   */
  export type CardRef = {}
  export interface CardProps extends PanGestureHandlerProperties {
    children?: React.ReactNode
    style?: ViewStyle
    height: number
    card?: boolean
    showCloseHandler: boolean
    ctx: Ctx
  }

  /**
   * Content
   */
  export type ContentRef = {}
  export type ContentProps = {
    children?: React.ReactNode
    style?: ViewStyle
  }
}

export default ModalTypes
