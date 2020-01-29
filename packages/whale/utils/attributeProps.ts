import { useState } from 'react'

export default (props, theme, mouseFocus?: boolean, focusDecoration?: boolean) => {

    const [focus, setFocus] = useState(false)
    let isMouseDown = false

    const attributes = {
        id: props.id,
        className: props.className,
        draggable: props.draggable,
        style: {
            ...focus && !focusDecoration && {
                outline: 'none',
                ...theme.assets.focus
            },
            ...props.style
        },
        tabIndex: props.tabIndex,
        role: props.role,
        ...props.attrs && props.attrs
    }

    const clipboardEvents = {
        onCopy: props.onCopy,
        onCopyCapture: props.onCopyCapture,
        onCut: props.onCut,
        onCutCapture: props.onCutCapture,
        onPaste: props.onPaste,
        onPasteCapture: props.onPasteCapture,
    }
    
    const compositionEvents = {
        onCompositionEnd: props.onCompositionEnd,
        onCompositionEndCapture: props.onCompositionEndCapture,
        onCompositionStart: props.onCompositionStart,
        onCompositionStartCapture: props.onCompositionStartCapture,
        onCompositionUpdate: props.onCompositionUpdate,
        onCompositionUpdateCapture: props.onCompositionUpdateCapture,
    }
    
    const focusEvents = {
        onFocus: (event) => {
            event.stopPropagation()
            if (mouseFocus || !isMouseDown) {
                setFocus(true)
            }
            props.onFocus && props.onFocus(event)
        },
        onFocusCapture: props.onFocusCapture,
        onBlur: (event) => {
            event.stopPropagation()
            setFocus(false)
            props.onBlur && props.onBlur(event)
        },
        onBlurCapture: props.onBlurCapture,
    }
    
    const formEvents = {
        onChange: props.onChange,
        onChangeCapture: props.onChangeCapture,
        onBeforeInput: props.onBeforeInput,
        onBeforeInputCapture: props.onBeforeInputCapture,
        onInput: props.onInput,
        onInputCapture: props.onInputCapture,
        onReset: props.onReset,
        onResetCapture: props.onResetCapture,
        onSubmit: props.onSubmit,
        onSubmitCapture: props.onSubmitCapture,
        onInvalid: props.onInvalid,
        onInvalidCapture: props.onInvalidCapture,
    }
    
    const imageEvents = {
        onLoad: props.onLoad,
        onLoadCapture: props.onLoadCapture,
        onError: props.onError,
        onErrorCapture: props.onErrorCapture,
    }
    
    const keyboardEvents = {
        onKeyDown: (event) => {
            props.onKeyPress && props.onKeyPress(event)
            if (event.key === 'Enter' && props.onEnter) {
                props.onEnter(event)
            }
            if (event.key === 'Esc' && props.onEsc) {
                props.onEsc(event)
            }
            props.onKeyDown && props.onKeyDown(event)
        },
        onKeyDownCapture: props.onKeyDownCapture,
        onKeyPress: props.onKeyPress,
        onKeyPressCapture: props.onKeyPressCapture,
        onKeyUp: props.onKeyUp,
        onKeyUpCapture: props.onKeyUpCapture,
    }
    
    const mediaEvents = {
        onAbort: props.onAbort,
        onAbortCapture: props.onAbortCapture,
        onCanPlay: props.onCanPlay,
        onCanPlayCapture: props.onCanPlayCapture,
        onCanPlayThrough: props.onCanPlayThrough,
        onCanPlayThroughCapture: props.onCanPlayThroughCapture,
        onDurationChange: props.onDurationChange,
        onDurationChangeCapture: props.onDurationChangeCapture,
        onEmptied: props.onEmptied,
        onEmptiedCapture: props.onEmptiedCapture,
        onEncrypted: props.onEncrypted,
        onEncryptedCapture: props.onEncryptedCapture,
        onEnded: props.onEnded,
        onEndedCapture: props.onEndedCapture,
        onLoadedData: props.onLoadedData,
        onLoadedDataCapture: props.onLoadedDataCapture,
        onLoadedMetadata: props.onLoadedMetadata,
        onLoadedMetadataCapture: props.onLoadedMetadataCapture,
        onLoadStart: props.onLoadStart,
        onLoadStartCapture: props.onLoadStartCapture,
        onPause: props.onPause,
        onPauseCapture: props.onPauseCapture,
        onPlay: props.onPlay,
        onPlayCapture: props.onPlayCapture,
        onPlaying: props.onPlaying,
        onPlayingCapture: props.onPlayingCapture,
        onProgress: props.onProgress,
        onProgressCapture: props.onProgressCapture,
        onRateChange: props.onRateChange,
        onRateChangeCapture: props.onRateChangeCapture,
        onSeeked: props.onSeeked,
        onSeekedCapture: props.onSeekedCapture,
        onSeeking: props.onSeeking,
        onSeekingCapture: props.onSeekingCapture,
        onStalled: props.onStalled,
        onStalledCapture: props.onStalledCapture,
        onSuspend: props.onSuspend,
        onSuspendCapture: props.onSuspendCapture,
        onTimeUpdate: props.onTimeUpdate,
        onTimeUpdateCapture: props.onTimeUpdateCapture,
        onVolumeChange: props.onVolumeChange,
        onVolumeChangeCapture: props.onVolumeChangeCapture,
        onWaiting: props.onWaiting,
        onWaitingCapture: props.onWaitingCapture,
    }
    
    const mouseEvents = {
        onAuxClick: props.onAuxClick,
        onAuxClickCapture: props.onAuxClickCapture,
        onClick: props.onClick,
        onClickCapture: props.onClickCapture,
        onContextMenu: props.onContextMenu,
        onContextMenuCapture: props.onContextMenuCapture,
        onDoubleClick: props.onDoubleClick,
        onDoubleClickCapture: props.onDoubleClickCapture,
        onDrag: props.onDrag,
        onDragCapture: props.onDragCapture,
        onDragEnd: props.onDragEnd,
        onDragEndCapture: props.onDragEndCapture,
        onDragEnter: props.onDragEnter,
        onDragEnterCapture: props.onDragEnterCapture,
        onDragExit: props.onDragExit,
        onDragExitCapture: props.onDragExitCapture,
        onDragLeave: props.onDragLeave,
        onDragLeaveCapture: props.onDragLeaveCapture,
        onDragOver: props.onDragOver,
        onDragOverCapture: props.onDragOverCapture,
        onDragStart: props.onDragStart,
        onDragStartCapture: props.onDragStartCapture,
        onDrop: props.onDrop,
        onDropCapture: props.onDropCapture,
        onMouseDown: (event) => {
            isMouseDown = true
            props.onMouseDown && props.onMouseDown(event)
        },
        onMouseDownCapture: props.onMouseDownCapture,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseMove: props.onMouseMove,
        onMouseMoveCapture: props.onMouseMoveCapture,
        onMouseOut: props.onMouseOut,
        onMouseOutCapture: props.onMouseOutCapture,
        onMouseOver: props.onMouseOver,
        onMouseOverCapture: props.onMouseOverCapture,
        onMouseUp: (event) => {
            isMouseDown = false
            props.onMouseUp && props.onMouseUp(event)
        },
        onMouseUpCapture: props.onMouseUpCapture,
    }

    const selectionEvents = {
        onSelect: props.onSelect,
        onSelectCapture: props.onSelectCapture,
    }

    const touchEvents = {
        onTouchCancel: props.onTouchCancel,
        onTouchCancelCapture: props.onTouchCancelCapture,
        onTouchEnd: props.onTouchEnd,
        onTouchEndCapture: props.onTouchEndCapture,
        onTouchMove: props.onTouchMove,
        onTouchMoveCapture: props.onTouchMoveCapture,
        onTouchStart: props.onTouchStart,
        onTouchStartCapture: props.onTouchStartCapture,
    }
    
    const pointerEvents = {
        onPointerDown: props.onPointerDown,
        onPointerDownCapture: props.onPointerDownCapture,
        onPointerMove: props.onPointerMove,
        onPointerMoveCapture: props.onPointerMoveCapture,
        onPointerUp: props.onPointerUp,
        onPointerUpCapture: props.onPointerUpCapture,
        onPointerCancel: props.onPointerCancel,
        onPointerCancelCapture: props.onPointerCancelCapture,
        onPointerEnter: props.onPointerEnter,
        // onPointerEnterCapture: props.onPointerEnterCapture,
        onPointerLeave: props.onPointerLeave,
        // onPointerLeaveCapture: props.onPointerLeaveCapture,
        onPointerOver: props.onPointerOver,
        onPointerOverCapture: props.onPointerOverCapture,
        onPointerOut: props.onPointerOut,
        onPointerOutCapture: props.onPointerOutCapture,
        onGotPointerCapture: props.onGotPointerCapture,
        onGotPointerCaptureCapture: props.onGotPointerCaptureCapture,
        onLostPointerCapture: props.onLostPointerCapture,
        onLostPointerCaptureCapture: props.onLostPointerCaptureCapture,
    }
    
    const scrollEvents = {
        onScroll: props.onScroll,
        onScrollCapture: props.onScrollCapture,
    }
    
    const wheelEvents = {
        onWheel: props.onWheel,
        onWheelCapture: props.onWheelCapture,
    }
    
    const animationEvents = {
        onAnimationStart: props.onAnimationStart,
        onAnimationStartCapture: props.onAnimationStartCapture,
        onAnimationEnd: props.onAnimationEnd,
        onAnimationEndCapture: props.onAnimationEndCapture,
        onAnimationIteration: props.onAnimationIteration,
        onAnimationIterationCapture: props.onAnimationIterationCapture,
    }
    
    const transitionEvents = {
        onTransitionEnd: props.onTransitionEnd,
        onTransitionEndCapture: props.onTransitionEndCapture,
    }
    
    return {
        attributes,
        events: {
            all: {
                ...clipboardEvents,
                ...compositionEvents,
                ...focusEvents,
                ...formEvents,
                ...imageEvents,
                ...keyboardEvents,
                ...mediaEvents,
                ...mouseEvents,
                ...selectionEvents,
                ...touchEvents,
                ...pointerEvents,
                ...scrollEvents,
                ...wheelEvents,
                ...animationEvents,
                ...transitionEvents,
            },
            clipboardEvents,
            compositionEvents,
            focusEvents,
            formEvents,
            imageEvents,
            keyboardEvents,
            mediaEvents,
            mouseEvents,
            selectionEvents,
            touchEvents,
            pointerEvents,
            scrollEvents,
            wheelEvents,
            animationEvents,
            transitionEvents,
        },
        focus
    }
}