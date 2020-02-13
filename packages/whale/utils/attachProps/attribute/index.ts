import WhaleTypes from '../../../types'

let isMouseDown = false

const resolver = {
    id: 'attributes',
    className: 'attributes',
    draggable: 'attributes',
    style: 'attributes',
    tabIndex: 'attributes',
    role: 'attributes',
    onCopy: 'clipboardEvents',
    onCopyCapture: 'clipboardEvents',
    onCut: 'clipboardEvents',
    onCutCapture: 'clipboardEvents',
    onPaste: 'clipboardEvents',
    onPasteCapture: 'clipboardEvents',
    onCompositionEnd: 'compositionEvent',
    onCompositionEndCapture: 'compositionEvent',
    onCompositionStart: 'compositionEvent',
    onCompositionStartCapture: 'compositionEvent',
    onCompositionUpdate: 'compositionEvent',
    onCompositionUpdateCapture: 'compositionEvent',
    onFocus: 'focusEvent',
    onFocusCapture: 'focusEvent',
    onBlur: 'focusEvent',
    onBlurCapture: 'focusEvent',
    onChange: 'formEvent',
    onChangeCapture: 'formEvent',
    onBeforeInput: 'formEvent',
    onBeforeInputCapture: 'formEvent',
    onInput: 'formEvent',
    onInputCapture: 'formEvent',
    onReset: 'formEvent',
    onResetCapture: 'formEvent',
    onSubmit: 'formEvent',
    onSubmitCapture: 'formEvent',
    onInvalid: 'formEvent',
    onInvalidCapture: 'formEvent',
    onLoad: 'imageEvent',
    onLoadCapture: 'imageEvent',
    onError: 'imageEvent',
    onErrorCapture: 'imageEvent',
    onKeyDown: 'keyboardEvent',
    onKeyDownCapture: 'keyboardEvent',
    onKeyPress: 'keyboardEvent',
    onKeyPressCapture: 'keyboardEvent',
    onKeyUp: 'keyboardEvent',
    onKeyUpCapture: 'keyboardEvent',
    onAbort: 'mediaEvents',
    onAbortCapture: 'mediaEvents',
    onCanPlay: 'mediaEvents',
    onCanPlayCapture: 'mediaEvents',
    onCanPlayThrough: 'mediaEvents',
    onCanPlayThroughCapture: 'mediaEvents',
    onDurationChange: 'mediaEvents',
    onDurationChangeCapture: 'mediaEvents',
    onEmptied: 'mediaEvents',
    onEmptiedCapture: 'mediaEvents',
    onEncrypted: 'mediaEvents',
    onEncryptedCapture: 'mediaEvents',
    onEnded: 'mediaEvents',
    onEndedCapture: 'mediaEvents',
    onLoadedData: 'mediaEvents',
    onLoadedDataCapture: 'mediaEvents',
    onLoadedMetadata: 'mediaEvents',
    onLoadedMetadataCapture: 'mediaEvents',
    onLoadStart: 'mediaEvents',
    onLoadStartCapture: 'mediaEvents',
    onPause: 'mediaEvents',
    onPauseCapture: 'mediaEvents',
    onPlay: 'mediaEvents',
    onPlayCapture: 'mediaEvents',
    onPlaying: 'mediaEvents',
    onPlayingCapture: 'mediaEvents',
    onProgress: 'mediaEvents',
    onProgressCapture: 'mediaEvents',
    onRateChange: 'mediaEvents',
    onRateChangeCapture: 'mediaEvents',
    onSeeked: 'mediaEvents',
    onSeekedCapture: 'mediaEvents',
    onSeeking: 'mediaEvents',
    onSeekingCapture: 'mediaEvents',
    onStalled: 'mediaEvents',
    onStalledCapture: 'mediaEvents',
    onSuspend: 'mediaEvents',
    onSuspendCapture: 'mediaEvents',
    onTimeUpdate: 'mediaEvents',
    onTimeUpdateCapture: 'mediaEvents',
    onVolumeChange: 'mediaEvents',
    onVolumeChangeCapture: 'mediaEvents',
    onWaiting: 'mediaEvents',
    onWaitingCapture: 'mediaEvents',
    onAuxClick: 'mouseEvents',
    onAuxClickCapture: 'mouseEvents',
    onClick: 'mouseEvents',
    onClickCapture: 'mouseEvents',
    onContextMenu: 'mouseEvents',
    onContextMenuCapture: 'mouseEvents',
    onDoubleClick: 'mouseEvents',
    onDoubleClickCapture: 'mouseEvents',
    onDrag: 'mouseEvents',
    onDragCapture: 'mouseEvents',
    onDragEnd: 'mouseEvents',
    onDragEndCapture: 'mouseEvents',
    onDragEnter: 'mouseEvents',
    onDragEnterCapture: 'mouseEvents',
    onDragExit: 'mouseEvents',
    onDragExitCapture: 'mouseEvents',
    onDragLeave: 'mouseEvents',
    onDragLeaveCapture: 'mouseEvents',
    onDragOver: 'mouseEvents',
    onDragOverCapture: 'mouseEvents',
    onDragStart: 'mouseEvents',
    onDragStartCapture: 'mouseEvents',
    onDrop: 'mouseEvents',
    onDropCapture: 'mouseEvents',
    onMouseDown: 'mouseEvents',
    onMouseDownCapture: 'mouseEvents',
    onMouseEnter: 'mouseEvents',
    onMouseLeave: 'mouseEvents',
    onMouseMove: 'mouseEvents',
    onMouseMoveCapture: 'mouseEvents',
    onMouseOut: 'mouseEvents',
    onMouseOutCapture: 'mouseEvents',
    onMouseOver: 'mouseEvents',
    onMouseOverCapture: 'mouseEvents',
    onMouseUp: 'mouseEvents',
    onMouseUpCapture: 'mouseEvents',
    onSelect: 'selectionEvent',
    onSelectCapture: 'selectionEvent',
    onTouchCancel: 'touchEvent',
    onTouchCancelCapture: 'touchEvent',
    onTouchEnd: 'touchEvent',
    onTouchEndCapture: 'touchEvent',
    onTouchMove: 'touchEvent',
    onTouchMoveCapture: 'touchEvent',
    onTouchStart: 'touchEvent',
    onTouchStartCapture: 'touchEvent',
    onPointerDown: 'pointerEvent',
    onPointerDownCapture: 'pointerEvent',
    onPointerMove: 'pointerEvent',
    onPointerMoveCapture: 'pointerEvent',
    onPointerUp: 'pointerEvent',
    onPointerUpCapture: 'pointerEvent',
    onPointerCancel: 'pointerEvent',
    onPointerCancelCapture: 'pointerEvent',
    onPointerEnter: 'pointerEvent',
    onPointerLeave: 'pointerEvent',
    onPointerOver: 'pointerEvent',
    onPointerOverCapture: 'pointerEvent',
    onPointerOut: 'pointerEvent',
    onPointerOutCapture: 'pointerEvent',
    onGotPointerCapture: 'pointerEvent',
    onGotPointerCaptureCapture: 'pointerEvent',
    onLostPointerCapture: 'pointerEvent',
    onLostPointerCaptureCapture: 'pointerEvent',
    onScroll: 'scrollEvent',
    onScrollCapture: 'scrollEvent',
    onWheel: 'wheelEvent',
    onWheelCapture: 'wheelEvent',
    onAnimationStart: 'animationEvent',
    onAnimationStartCapture: 'animationEvent',
    onAnimationEnd: 'animationEvent',
    onAnimationEndCapture: 'animationEvent',
    onAnimationIteration: 'animationEvent',
    onAnimationIterationCapture: 'animationEvent',
    onTransitionEnd: 'transitionEvent',
    onTransitionEndCapture: 'transitionEvent'
}

const createAttributes = <Styles,Props extends WhaleTypes.AllProps<unknown,Styles>>(
    props: Props, 
    setFocus: React.Dispatch<React.SetStateAction<boolean>>, 
    mouseFocus?: boolean) => {

    const allProps = {
        attributes: {} as WhaleTypes.AttributeProps,
        form: {} as Pick<Props, keyof WhaleTypes.FormEventProps<unknown>>,
        focus: {} as Pick<Props, keyof WhaleTypes.FocusEventProps<unknown>>,
        image: {} as Pick<Props, keyof WhaleTypes.ImageEventProps<unknown>>,
        media: {} as Pick<Props, keyof WhaleTypes.MediaEventsProps<unknown>>,
        mouse: {} as Pick<Props, keyof WhaleTypes.MouseEventsProps<unknown>>,
        touch: {} as Pick<Props, keyof WhaleTypes.TouchEventProps<unknown>>,
        wheel: {} as Pick<Props, keyof WhaleTypes.WheelEventProps<unknown>>,
        pointer: {} as Pick<Props, keyof WhaleTypes.PointerEventProps<unknown>>,
        keyboard: {} as Pick<Props, keyof WhaleTypes.KeyboardEventProps<unknown>>,
        selection: {} as Pick<Props, keyof WhaleTypes.SelectionEventProps<unknown>>,
        animation: {} as Pick<Props, keyof WhaleTypes.AnimationEventProps<unknown>>,
        clipboard: {} as Pick<Props, keyof WhaleTypes.ClipboardEventProps<unknown>>,
        transition: {} as Pick<Props, keyof WhaleTypes.TransitionEventProps<unknown>>,
        composition: {} as Pick<Props, keyof WhaleTypes.CompositionEventProps<unknown>>,
        scroll: {} as Pick<Props, keyof WhaleTypes.ScrollEventProps<unknown>>
    }

    Object.keys(resolver).forEach(propName => {
        allProps[resolver[propName]] = props[propName]
    })
    
    allProps.focus.onFocus = (e) => {
        e.stopPropagation()
        if (mouseFocus || !isMouseDown) {
            setFocus(true)
        }
        props.onFocus && props.onFocus(e)
    }
    
    allProps.focus.onBlur = (e) => {
        e.stopPropagation()
        setFocus(false)
        props.onBlur && props.onBlur(e)
    }

    allProps.keyboard.onKeyDown = (event) => {
        props.onKeyPress && props.onKeyPress(event)
        if (event.key === 'Enter' && props.onEnter) {
            props.onEnter(event)
        }
        if (event.key === 'Esc' && props.onEsc) {
            props.onEsc(event)
        }
        props.onKeyDown && props.onKeyDown(event)
    }
    
    allProps.mouse.onMouseDown = (event) => {
        isMouseDown = true
        props.onMouseDown && props.onMouseDown(event)
    }
    
    allProps.mouse.onMouseUp = (event) => {
        isMouseDown = false
        props.onMouseUp && props.onMouseUp(event)
    }
    
    let {attributes, ...events } = allProps
    
    return { 
        attributes, 
        events: {
            all: {
                ...events.form,
                ...events.focus,
                ...events.image,
                ...events.media,
                ...events.mouse,
                ...events.touch,
                ...events.wheel,
                ...events.pointer,
                ...events.keyboard,
                ...events.selection,
                ...events.animation,
                ...events.clipboard,
                ...events.transition, 
                ...events.composition,
                ...events.scroll
            },
            ...events
        }
    }
}

export default createAttributes