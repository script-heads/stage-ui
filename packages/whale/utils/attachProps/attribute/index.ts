import WhaleTypes from '../../../types'
import { Options } from '../../../hooks/useComponent'

let isMouseDown = false

const resolver = {
    id: 'attributes',
    className: 'attributes',
    draggable: 'attributes',
    style: 'attributes',
    tabIndex: 'attributes',
    role: 'attributes',
    onCopy: 'clipboard',
    onCopyCapture: 'clipboard',
    onCut: 'clipboard',
    onCutCapture: 'clipboard',
    onPaste: 'clipboard',
    onPasteCapture: 'clipboard',
    onCompositionEnd: 'composition',
    onCompositionEndCapture: 'composition',
    onCompositionStart: 'composition',
    onCompositionStartCapture: 'composition',
    onCompositionUpdate: 'composition',
    onCompositionUpdateCapture: 'composition',
    onFocus: 'focus',
    onFocusCapture: 'focus',
    onBlur: 'focus',
    onBlurCapture: 'focus',
    onChange: 'form',
    onChangeCapture: 'form',
    onBeforeInput: 'form',
    onBeforeInputCapture: 'form',
    onInput: 'form',
    onInputCapture: 'form',
    onReset: 'form',
    onResetCapture: 'form',
    onSubmit: 'form',
    onSubmitCapture: 'form',
    onInvalid: 'form',
    onInvalidCapture: 'form',
    onLoad: 'image',
    onLoadCapture: 'image',
    onError: 'image',
    onErrorCapture: 'image',
    onKeyDown: 'keyboard',
    onKeyDownCapture: 'keyboard',
    onKeyPress: 'keyboard',
    onKeyPressCapture: 'keyboard',
    onKeyUp: 'keyboard',
    onKeyUpCapture: 'keyboard',
    onAbort: 'media',
    onAbortCapture: 'media',
    onCanPlay: 'media',
    onCanPlayCapture: 'media',
    onCanPlayThrough: 'media',
    onCanPlayThroughCapture: 'media',
    onDurationChange: 'media',
    onDurationChangeCapture: 'media',
    onEmptied: 'media',
    onEmptiedCapture: 'media',
    onEncrypted: 'media',
    onEncryptedCapture: 'media',
    onEnded: 'media',
    onEndedCapture: 'media',
    onLoadedData: 'media',
    onLoadedDataCapture: 'media',
    onLoadedMetadata: 'media',
    onLoadedMetadataCapture: 'media',
    onLoadStart: 'media',
    onLoadStartCapture: 'media',
    onPause: 'media',
    onPauseCapture: 'media',
    onPlay: 'media',
    onPlayCapture: 'media',
    onPlaying: 'media',
    onPlayingCapture: 'media',
    onProgress: 'media',
    onProgressCapture: 'media',
    onRateChange: 'media',
    onRateChangeCapture: 'media',
    onSeeked: 'media',
    onSeekedCapture: 'media',
    onSeeking: 'media',
    onSeekingCapture: 'media',
    onStalled: 'media',
    onStalledCapture: 'media',
    onSuspend: 'media',
    onSuspendCapture: 'media',
    onTimeUpdate: 'media',
    onTimeUpdateCapture: 'media',
    onVolumeChange: 'media',
    onVolumeChangeCapture: 'media',
    onWaiting: 'media',
    onWaitingCapture: 'media',
    onAuxClick: 'mouse',
    onAuxClickCapture: 'mouse',
    onClick: 'mouse',
    onClickCapture: 'mouse',
    onContextMenu: 'mouse',
    onContextMenuCapture: 'mouse',
    onDoubleClick: 'mouse',
    onDoubleClickCapture: 'mouse',
    onDrag: 'mouse',
    onDragCapture: 'mouse',
    onDragEnd: 'mouse',
    onDragEndCapture: 'mouse',
    onDragEnter: 'mouse',
    onDragEnterCapture: 'mouse',
    onDragExit: 'mouse',
    onDragExitCapture: 'mouse',
    onDragLeave: 'mouse',
    onDragLeaveCapture: 'mouse',
    onDragOver: 'mouse',
    onDragOverCapture: 'mouse',
    onDragStart: 'mouse',
    onDragStartCapture: 'mouse',
    onDrop: 'mouse',
    onDropCapture: 'mouse',
    onMouseDown: 'mouse',
    onMouseDownCapture: 'mouse',
    onMouseEnter: 'mouse',
    onMouseLeave: 'mouse',
    onMouseMove: 'mouse',
    onMouseMoveCapture: 'mouse',
    onMouseOut: 'mouse',
    onMouseOutCapture: 'mouse',
    onMouseOver: 'mouse',
    onMouseOverCapture: 'mouse',
    onMouseUp: 'mouse',
    onMouseUpCapture: 'mouse',
    onSelect: 'selection',
    onSelectCapture: 'selection',
    onTouchCancel: 'touch',
    onTouchCancelCapture: 'touch',
    onTouchEnd: 'touch',
    onTouchEndCapture: 'touch',
    onTouchMove: 'touch',
    onTouchMoveCapture: 'touch',
    onTouchStart: 'touch',
    onTouchStartCapture: 'touch',
    onPointerDown: 'pointer',
    onPointerDownCapture: 'pointer',
    onPointerMove: 'pointer',
    onPointerMoveCapture: 'pointer',
    onPointerUp: 'pointer',
    onPointerUpCapture: 'pointer',
    onPointerCancel: 'pointer',
    onPointerCancelCapture: 'pointer',
    onPointerEnter: 'pointer',
    onPointerLeave: 'pointer',
    onPointerOver: 'pointer',
    onPointerOverCapture: 'pointer',
    onPointerOut: 'pointer',
    onPointerOutCapture: 'pointer',
    onGotPointerCapture: 'pointer',
    onGotPointerCaptureCapture: 'pointer',
    onLostPointerCapture: 'pointer',
    onLostPointerCaptureCapture: 'pointer',
    onScroll: 'scroll',
    onScrollCapture: 'scroll',
    onWheel: 'wheel',
    onWheelCapture: 'wheel',
    onAnimationStart: 'animation',
    onAnimationStartCapture: 'animation',
    onAnimationEnd: 'animation',
    onAnimationEndCapture: 'animation',
    onAnimationIteration: 'animation',
    onAnimationIterationCapture: 'animation',
    onTransitionEnd: 'transition',
    onTransitionEndCapture: 'transition'
}

const createAttributes = <Styles,Props extends WhaleTypes.AllProps<unknown,Styles>>(
    props: Props, 
    setFocus: React.Dispatch<React.SetStateAction<boolean>>, 
    options?: Options<Styles,Props>) => {

    const allProps = {
        attributes: {} as WhaleTypes.AttributeProps,
        form: {} as Pick<Props, keyof WhaleTypes.FormEventProps<unknown>>,
        focus: {} as Pick<Props, keyof WhaleTypes.FocusEventProps<unknown>>,
        image: {} as Pick<Props, keyof WhaleTypes.ImageEventProps<unknown>>,
        media: {} as Pick<Props, keyof WhaleTypes.MediaEventProps<unknown>>,
        mouse: {} as Pick<Props, keyof WhaleTypes.MouseEventProps<unknown>>,
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
        allProps[resolver[propName]][propName] = props[propName]
    })
    
    allProps.focus.onFocus = (e) => {
        e.stopPropagation()
        if (options?.focusDecoration !== false) {
            if (options?.mouseFocus || !isMouseDown) {
                setFocus(true)
            }
        }
        props.onFocus && props.onFocus(e)
    }
    
    allProps.focus.onBlur = (e) => {
        e.stopPropagation()
        if (options?.focusDecoration !== false) {
            setFocus(false)
        }
        props.onBlur && props.onBlur(e)
    }

    allProps.keyboard.onKeyDown = (e) => {
        props.onKeyPress && props.onKeyPress(e)
        if (e.key === 'Enter' && props.onEnter) {
            props.onEnter(e)
        }
        if (e.key === 'Esc' && props.onEsc) {
            props.onEsc(e)
        }
        props.onKeyDown && props.onKeyDown(e)
    }
    
    allProps.mouse.onMouseDown = (e) => {
        isMouseDown = true
        props.onMouseDown && props.onMouseDown(e)
    }
    
    allProps.mouse.onMouseUp = (e) => {
        isMouseDown = false
        props.onMouseUp && props.onMouseUp(e)
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