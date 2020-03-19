import WhaleTypes from '../../../types'
import { Options } from '../../../hooks/useComponent'

let IS_MOUSE_DOWN = false
let TAB_ACTIVATE = false

window.addEventListener('mousedown', () => {
    IS_MOUSE_DOWN = true
})
window.addEventListener('mouseup', () => {
    IS_MOUSE_DOWN = false
})
window.addEventListener('focus', () => {
    TAB_ACTIVATE = true
})

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

const createAttributes = <Styles, Props extends WhaleTypes.AllProps<unknown, Styles>>(
    props: Props,
    setFocus: React.Dispatch<React.SetStateAction<boolean>>,
    options: Options<Styles, Props>) => {

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

    if (props) {
        Object.keys(props).forEach(propName => {
            if (resolver[propName]) {
                allProps[resolver[propName]][propName] = props[propName]
            }
        })
    }

    /**
     * focus flag handle
     * ignoreMouse - disable focus when moused button down
     * TAB_ACTIVATE - is window just activated
     */
    if (options.focus) {
        allProps.focus.onFocus = (e) => {
            e.stopPropagation()          
            if (!TAB_ACTIVATE) {
                if (!options.focus?.ignoreMouse || !IS_MOUSE_DOWN)  {
                    setFocus(true)
                }
            }
            TAB_ACTIVATE = false

            props.onFocus && props.onFocus(e)
        }
        allProps.focus.onBlur = (e) => {
            e.stopPropagation()
            setFocus(false)
            props.onBlur && props.onBlur(e)
        }
    }

    /**
     * Handle onEnter & onEsc props
     */
    if (props.onEnter !== void 0 || props.onEsc !== void 0) {
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
    }

    return {
        attributes: allProps.attributes,
        events: {
            all: Object.assign({},
                allProps.form,
                allProps.focus,
                allProps.image,
                allProps.media,
                allProps.mouse,
                allProps.touch,
                allProps.wheel,
                allProps.pointer,
                allProps.keyboard,
                allProps.selection,
                allProps.animation,
                allProps.clipboard,
                allProps.transition,
                allProps.composition,
                allProps.scroll,
            ),
            form: allProps.form,
            focus: allProps.focus,
            image: allProps.image,
            media: allProps.media,
            mouse: allProps.mouse,
            touch: allProps.touch,
            wheel: allProps.wheel,
            pointer: allProps.pointer,
            keyboard: allProps.keyboard,
            selection: allProps.selection,
            animation: allProps.animation,
            clipboard: allProps.clipboard,
            transition: allProps.transition,
            composition: allProps.composition,
            scroll: allProps.scroll,
        },
    }
}

export default createAttributes