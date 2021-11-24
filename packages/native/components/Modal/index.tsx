import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  Animated,
  BackHandler,
  Dimensions,
  FlatList,
  FlatListProps,
  KeyboardAvoidingView,
  NativeEventSubscription,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  View,
} from 'react-native'
import {
  LongPressGestureHandlerGestureEvent,
  NativeViewGestureHandler,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler'
import useSafeArea from 'shared/hooks/useSafeArea'
import { spacingResolver } from 'shared/utils/resolvers'
import Card, { bounceOffset } from './Card'
import Overlay from './Overlay'
import ModalTypes from './types'
import useAnimation from './utils/useAnimation'

let PAN_ENABLED = true

export const setModalGestureEnabled = (state: boolean) => {
  PAN_ENABLED = state
}

export let setModalScrollEnabled = (state: boolean) => {}

const Modal: ForwardRefRenderFunction<ModalTypes.Ref, ModalTypes.Props> = (props, ref) => {
  const {
    overlayStyle,
    cardStyle,
    contentStyle,
    headerStyle,
    footerStyle,
    card,
    hideHandler,
    useNativeDriver: useNativeDriverProp,
    height = 0xffff,
    onOpen,
    onOpened,
    onClose,
    onClosed,
    onDragStart,
    onDragEnd,
    scrollable,
    children,
    header,
    footer,
    withSafeArea,
    flatList = !!children && !!scrollable
      ? ({
          data: [children],
          keyExtractor: () => '1',
          renderItem: ({ item }) => item,
        } as FlatListProps<any>)
      : undefined,
  } = props

  const [mounted, setMount] = useState(false)
  const [scrollEnabled, setEnabledScoll] = useState(true)
  const safeArea = useSafeArea('modal')

  const isAndroid = Platform.OS === 'android'

  let CLOSING = useMemo(() => false, [])
  let ALLOW_CLOSE = useMemo(() => false, [])
  let CONTENT_SCROLL_OFFSET = useMemo(() => 0, [])
  let CARD_SNAP_POINT = useMemo(() => 0, [])

  const backButtonRef = useRef<NativeEventSubscription | null>(null)
  const cardPanRef = useRef<PanGestureHandler>(null)
  const gestureHandleRef = useRef(null)
  const flatListRef = useRef<FlatList>(null)

  const contentStyleWithSafeArea = [
    !header && { paddingTop: safeArea.top },
    { paddingRight: safeArea.right, paddingLeft: safeArea.left },
    !footer && { paddingBottom: safeArea.bottom },
    contentStyle,
  ]

  const ctx: ModalTypes.Ctx = useMemo(
    () => ({
      useNativeDriver: useNativeDriverProp !== undefined ? useNativeDriverProp : true,
      dimensions: Dimensions.get('screen'),
      /**
       * All animation objects
       */
      animations: {
        overlayOpacity: undefined,
        cardTranslate: undefined,
      },
      layouts: {
        card: undefined,
        overlay: undefined,
      },
    }),
    [useNativeDriverProp],
  )

  ctx.animations.overlayOpacity = useAnimation(0)
  ctx.animations.cardTranslate = useAnimation(0)

  const duration = 250

  const { useNativeDriver } = ctx

  let mass = 1 - height / (ctx.dimensions.height / 0.8)
  if (mass <= 0.3) mass = 0.3
  if (mass > 0.8) mass = 0.8

  setModalScrollEnabled = (state: boolean) => {
    setEnabledScoll(state)
  }

  function animateOpen(callback?: () => void) {
    Animated.parallel([
      Animated.timing(ctx.animations.overlayOpacity, {
        useNativeDriver,
        duration,
        toValue: 1,
      }),
      Animated.spring(ctx.animations.cardTranslate, {
        useNativeDriver,
        toValue: 1,
        damping: 8,
        mass,
      }),
    ]).start(callback)
  }

  /**
   * Handle modal open
   */
  function close() {
    backButtonRef.current?.remove()

    if (CLOSING) return
    CLOSING = true
    onClose?.()
    Animated.parallel([
      Animated.timing(ctx.animations.overlayOpacity, {
        useNativeDriver,
        duration,
        toValue: 0,
      }),
      Animated.timing(ctx.animations.cardTranslate, {
        useNativeDriver,
        duration,
        toValue: 0,
      }),
    ]).start(() => {
      PAN_ENABLED = true
      CLOSING = false
      ALLOW_CLOSE = false
      CONTENT_SCROLL_OFFSET = 9
      CARD_SNAP_POINT = 0

      ctx.animations.overlayOpacity.setValue(0)
      ctx.animations.cardTranslate.setValue(0)
      setMount(false)
      onClosed?.()
    })
  }

  /**
   * Handle modal open
   */
  function open() {
    setMount(true)
    onOpen?.()
    backButtonRef.current = BackHandler.addEventListener('hardwareBackPress', () => {
      close()
      return true
    })
    animateOpen(() => {
      onOpened?.()
    })
  }

  useImperativeHandle(ref, () => ({
    open,
    close,
  }))

  /**
   * All Scroll Event Handlers
   */
  function onOverlayGestureEvent(event: PanGestureHandlerGestureEvent) {
    const { nativeEvent } = event
    ALLOW_CLOSE = false
    const total = ctx.dimensions.height
    const abs = nativeEvent.absoluteY
    const cardHeight = ctx.layouts.card!.height - (card ? 0 : bounceOffset)

    if (total - abs < cardHeight) {
      const value = (total - abs) / cardHeight
      ctx.animations.cardTranslate.setValue(value)
      if (value < 0.7) {
        ALLOW_CLOSE = true
      }
    }
  }

  function onOverlayHandlerStateChange(event: LongPressGestureHandlerGestureEvent) {
    const {
      nativeEvent: { state },
    } = event
    if (state === State.END) {
      onDragEnd?.()
      if (ALLOW_CLOSE) {
        close()
      } else {
        animateOpen()
      }
    }
    if (state === State.ACTIVE) {
      onDragStart?.()
      ALLOW_CLOSE = true
    }
  }

  function onCardHandlerStateChange(event: PanGestureHandlerStateChangeEvent) {
    if (!PAN_ENABLED) return

    const {
      nativeEvent: { state, absoluteY },
    } = event
    if (state === State.END) {
      onDragEnd?.()
      if (isAndroid) {
        flatListRef.current?.setNativeProps({
          scrollEnabled: true,
        })
      }
      if (ALLOW_CLOSE) {
        close()
      } else {
        animateOpen()
      }
    }
    if (state === State.BEGAN) {
      onDragStart?.()
      CARD_SNAP_POINT = absoluteY
    }
  }

  function onCardGestureEvent(event: PanGestureHandlerGestureEvent) {
    if (!PAN_ENABLED) return
    const { nativeEvent } = event

    if (CONTENT_SCROLL_OFFSET > 0 || !CARD_SNAP_POINT) {
      CARD_SNAP_POINT = nativeEvent.absoluteY
      return
    }

    if (!ctx.layouts.card || !ctx.layouts.card.height) {
      return
    }

    ALLOW_CLOSE = false

    const cardHeight = ctx.layouts.card.height - (card ? 0 : bounceOffset)
    const offset = nativeEvent.absoluteY - CARD_SNAP_POINT
    let value = 1 - offset / cardHeight

    if (value < 0) value = 0
    if (value > 1) value = 1

    ctx.animations.cardTranslate.setValue(value)
    if (value < 0.7) {
      ALLOW_CLOSE = true
    }
    if (value === 1) {
      if (isAndroid) {
        flatListRef.current?.setNativeProps({
          scrollEnabled: true,
        })
      }
    }
  }

  function onFlatlistScrollBeginDrag(event: NativeSyntheticEvent<NativeScrollEvent>) {
    ALLOW_CLOSE = false
    if (isAndroid && CONTENT_SCROLL_OFFSET === 0) {
      flatListRef.current?.setNativeProps({
        scrollEnabled: false,
      })
    }
    flatList?.onScrollBeginDrag?.(event)
  }

  function onFlatlistScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const { nativeEvent } = event

    CONTENT_SCROLL_OFFSET = nativeEvent.contentOffset.y

    if (isAndroid) {
      if ((nativeEvent.velocity?.y || 0) < 0 && nativeEvent.contentOffset.y <= 0) {
        flatListRef.current?.setNativeProps({
          scrollEnabled: false,
        })
        CONTENT_SCROLL_OFFSET = 0
      } else {
        flatListRef.current?.setNativeProps({
          scrollEnabled: true,
        })
      }
    }
    flatList?.onScroll?.(event)
  }

  if (!mounted) {
    return null
  }

  return (
    <View
      style={{
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        justifyContent: 'flex-end',
      }}
    >
      <Overlay
        ctx={ctx}
        style={overlayStyle}
        onHandlerStateChange={onOverlayHandlerStateChange}
        onGestureEvent={onOverlayGestureEvent}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{
          backgroundColor: 'transparent',
          zIndex: 10,
          justifyContent: 'flex-end',
        }}
        pointerEvents="box-none"
      >
        <Card
          ctx={ctx}
          style={overlayStyle}
          card={card}
          height={height}
          showCloseHandler={!hideHandler}
        >
          <PanGestureHandler
            ref={cardPanRef}
            enabled={scrollEnabled && !!flatList}
            simultaneousHandlers={gestureHandleRef}
            onHandlerStateChange={onCardHandlerStateChange}
            onGestureEvent={onCardGestureEvent}
          >
            <View style={{ height: '100%' }}>
              {!!header && (
                <View
                  style={[
                    !!withSafeArea && {
                      marginTop: safeArea.top,
                      marginLeft: safeArea.right,
                      marginRight: safeArea.right,
                    },
                    headerStyle,
                  ]}
                >
                  {header}
                </View>
              )}
              <NativeViewGestureHandler
                ref={gestureHandleRef}
                disallowInterruption
                enabled={scrollEnabled}
              >
                {flatList ? (
                  <FlatList
                    {...flatList}
                    scrollEnabled={scrollEnabled}
                    ref={flatListRef}
                    onScrollBeginDrag={onFlatlistScrollBeginDrag}
                    onScroll={onFlatlistScroll}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="always"
                    style={withSafeArea ? contentStyleWithSafeArea : contentStyle}
                  />
                ) : (
                  <View
                    style={[
                      { height: '100%', width: '100%' },
                      withSafeArea ? contentStyleWithSafeArea : contentStyle,
                    ]}
                  >
                    {children}
                  </View>
                )}
              </NativeViewGestureHandler>
              {!!footer && (
                <View
                  style={[
                    !!withSafeArea && {
                      marginBottom: safeArea.bottom,
                      marginLeft: safeArea.right,
                      marginRight: safeArea.right,
                    },
                    footerStyle,
                  ]}
                >
                  {footer}
                </View>
              )}
            </View>
          </PanGestureHandler>
        </Card>
      </KeyboardAvoidingView>
    </View>
  )
}

export default forwardRef(Modal)
