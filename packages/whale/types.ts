import React from 'react'
import QIXColor from 'color'
import CSS from 'csstype'
import { Interpolation, SerializedStyles, ObjectInterpolation } from '@emotion/core'

declare global {
	namespace Whale {
		interface Palette<Color> {
        }
        interface Overrides {
		}
	}
}

export type EmotionStyles = Array<Interpolation> | ObjectInterpolation<undefined>
export type Breakpointify<T> = T[] | T

declare namespace WhaleTypes {

    type Size = 'xs' | 's' | 'm' | 'l' | 'xl'

    type ColorProp = ((colors: Theme['color']) => QIXColor | string) | string | QIXColor

    type Styles<StyleDefinitions> = {
        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object
            ? ((variant: Variant<StyleDefinitions[StyleName]>) => EmotionStyles)
            : EmotionStyles
    }

    type ComponentStyles<StyleDefinitions> = {
        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object 
            ? (state: StyleDefinitions[StyleName]) => SerializedStyles 
            : SerializedStyles
    }
    
    type Variant<StyleDefinitions> = (variants: Partial<{
        [StyleName in keyof StyleDefinitions]: Partial<
            Record<Extract<StyleDefinitions[StyleName],string>,EmotionStyles>
        >
    }>) => EmotionStyles

    type CreateStyles<Overrides, Props = {}, Params = {}> = (
        props: Props, 
        theme: WhaleTypes.Theme,
        params?: Params 
    ) => WhaleTypes.Styles<Overrides>

    interface Theme extends ThemeVariables {
        assets: ThemeAssets
        overrides?: Partial<{[Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>}>
        replace: (theme: ReplaceTheme) => Theme
    }

    interface SourceTheme {
        main: Omit<ThemeVariables<[number, number, number, number?]>, 'breakpoints'> & {breakpoints?: string[]}
        assets: (main: ThemeVariables) => ThemeAssets
        overrides?: (main: ThemeVariables, assets: ThemeAssets) => 
            Partial<{[Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>}>
    }

    interface ReplaceTheme {
        main: DeepPartial<ThemeVariables<[number, number, number, number?]>>
        assets?: (main: ThemeVariables) => DeepPartial<ThemeAssets>
        overrides?: (main: ThemeVariables, assets: ThemeAssets) => 
            Partial<{[Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>}>
    }
    
    interface ThemeVariables<Color = QIXColor<[number, number, number, number?]>> {
        name: string
        color: {
            background: Color
            backgroundVariant: Color
            surface: Color
            surfaceVariant: Color
            primary: Color
            secondary: Color
    
            onBackground: Color
            onSurface: Color
            onPrimary: Color
            onSecondary: Color

            lightest: Color
            light: Color
            hard: Color
            hardest: Color

            error: Color
            warning: Color
            success: Color
            info: Color

            palette: Whale.Palette<Color>
        }
        radius: {
            default: string
            narrow: string
            wide: string
        },
        breakpoints: string[],
        spacing: Record<Size, string>
    }

    interface ThemeAssets  {
        global?: EmotionStyles
        border: {
            width: string
            style: string
            color: string
        }
        shadow: {
            default: string
            short: string
            long: string
        }
        focus: EmotionStyles
        field: Record<Size, {
            minHeight: string
            padding: string
        }>
        typography: {
            header: Record<Size, {
                fontSize: string
                lineHeight: string | number
            } & EmotionStyles>
            text: Record<Size, {
                fontSize: string
                lineHeight: string | number
            } & EmotionStyles>
            display: Record<Size, {
                fontSize: string
                lineHeight: string | number
            } & EmotionStyles>
            paragraph: Record<Size, {
                fontSize: string
                lineHeight: string | number
            } & EmotionStyles>
        }
    }

    /**
     * All typical component props
     * @name All
     */
    interface AllProps<Container, Styles> extends
        AttributeProps,
        AllEventProps<Container>,
        CoreProps<Styles>, 
        ColorProps,
        BorderProps,
        PaddingProps,
        LayoutProps,
        MarginProps,
        FlexProps,
        GridProps {}

    /**
     * DOM events
     * @name AllEvents
     */
    interface AllEventProps<T> extends
        FormEventProps<T>,
        FocusEventProps<T>,
        ImageEventProps<T>,
        MediaEventProps<T>,
        MouseEventProps<T>,
        TouchEventProps<T>,
        WheelEventProps<T>,
        PointerEventProps<T>,
        KeyboardEventProps<T>,
        SelectionEventProps<T>,
        AnimationEventProps<T>,
        ClipboardEventProps<T>,
        TransitionEventProps<T>,
        CompositionEventProps<T>,
        ScrollEventProps<T> {}

    /**
     * Component core props
     * @name Core
     */
    interface CoreProps<S={}> {
        styles?: Partial<Styles<S>>
        animated?: boolean
    }

    /**
     * Component attribute props
     * @name Attributes
     */
    interface AttributeProps extends React.AriaAttributes {
        className?: string
        id?: string
        style?: React.CSSProperties
        tabIndex?: number
        role?: string
        draggable?: boolean
        attrs?: Object
    }

    /**
     * Component color styles props
     * @name Colors
     */
    interface ColorProps {
        textColor?: Breakpointify<ColorProp>
        backgroundColor?: Breakpointify<ColorProp>
    }

    /**
     * Component border styles props
     * @name Border
     */
    interface BorderProps {
        borderWidth?: Breakpointify<CSS.Properties['borderWidth']>
        borderStyle?: Breakpointify<CSS.Properties['borderStyle']>
        borderColor?: Breakpointify<ColorProp>
        borderRadius?: Breakpointify<CSS.Properties['borderRadius']>
    }

    /**
     * Component layout styles props
     * @name Layout
     */
    interface LayoutProps {
        /**
         * Width alias
         */
        w?: Breakpointify<CSS.Properties['width']>
        /**
         * Heigth alias
         */
        h?: Breakpointify<CSS.Properties['height']>
        /**
         * Shows or hides an element without changing the layout 
         * of a document.
         */
        visibility?: Breakpointify<CSS.Properties['visibility']>
        /**
         * Sets whether an element is treated as a block or 
         * inline element and the layout used for its children, 
         * such as flow layout, grid or flex.
         */
        display?: Breakpointify<CSS.Properties['display']>
    }

    /**
     * Component padding styles props
     * @name Padding
     */
    interface PaddingProps {
        /**
         * Padding alias
         */
        p?: Breakpointify<string | number>
        /**
         * Padding horizontal alias
         */
        px?: Breakpointify<string | number>
        /**
         * Padding vertical alias
         */
        py?: Breakpointify<string | number>
        /**
         * PaddingRight alias
         */
        pr?: Breakpointify<string | number>
        /**
         * PaddingLeft alias
         */
        pl?: Breakpointify<string | number>
        /**
         * PaddingTop alias
         */
        pt?: Breakpointify<string | number>
        /**
         * PaddingBottom alias
         */
        pb?: Breakpointify<string | number>
    }

    /**
     * Component margin styles props
     * @name Margin
     */
    interface MarginProps {
        /**
         * Margin alias
         */
        m?: Breakpointify<string | number>
        /**
         * Margin horizontal alias
         */
        mx?: Breakpointify<string | number>
        /**
         * Margin vertical alias
         */
        my?: Breakpointify<string | number>
        /**
         * MarginRight alias
         */
        mr?: Breakpointify<string | number>
        /**
         * MarginLeft alias
         */
        ml?: Breakpointify<string | number>
        /**
         * MarginTop alias
         */
        mt?: Breakpointify<string | number>
        /**
         * MarginBottom alias
         */
        mb?: Breakpointify<string | number>
        /**
         * Sets how an element is positioned in a document. 
         * The top, right, bottom, and left properties determine 
         * the final location of positioned elements.
         */
    }

    /**
     * Used for flex attributes
     * CSS props have string witch kills helps at ide
     */
    type FlexSpace = 'space-around' | 'space-between' | 'space-evenly'
    type FlexSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch'

    /**
     * Component flexbox children styles props
     * @name Flexbox
     */
    interface FlexProps {
        /**
         * Sets how a flex item will grow or shrink to fit the 
         * space available in its flex container.
         */
        flex?: Breakpointify<CSS.Properties['flex']>
        /**
         * Sets the initial main size of a flex item. It sets the 
         * size of the content box unless otherwise set with box-sizing.
         */
        flexBasis?: Breakpointify<CSS.Properties['flexBasis']>
        /**
         * Sets the flex grow factor of a flex item main size. 
         * It specifies how much of the remaining space in the 
         * flex container should be assigned to the item 
         * (the flex grow factor).
         */
        flexGrow?: Breakpointify<CSS.Properties['flexGrow']>
        /**
         * Sets the flex shrink factor of a flex item. 
         * If the size of all flex items is lr than 
         * the flex container, items shrink to fit 
         * according to flex-shrink.
         */
        flexShrink?: Breakpointify<CSS.Properties['flexShrink']>
        /**
         * Property overrides a grid or flex item's 
         * align-items value. In Grid, it aligns the 
         * item inside the grid area. In Flexbox, 
         * it aligns the item on the cross axis.
         */
        alignSelf?: Breakpointify<FlexSelf>
        /**
         * Sets the way a box is justified inside its 
         * alignment container along the appropriate axis.
         */
        justifySelf?: Breakpointify<FlexSelf>
    }

    /**
     * Component grid children styles props
     * @name Grid
     */
    interface GridProps {
        /**
         * Specifies a grid item’s start position within 
         * the grid column by contributing a line, a span, 
         * or nothing (automatic) to its grid placement. 
         * This start position defines the block-start edge 
         * of the grid area.
         */
        gridColumnStart?: Breakpointify<CSS.Properties['gridColumnStart']>
        /**
         * Specifies a grid item’s end position within the 
         * grid column by contributing a line, a span, or 
         * nothing (automatic) to its grid placement, thereby 
         * specifying the block-end edge of its grid area.
         */
        gridColumnEnd?: Breakpointify<CSS.Properties['gridColumnEnd']>
        /**
         * Specifies a grid item’s start position within the 
         * grid row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby specifying 
         * the inline-start edge of its grid area.
         */
        gridRowStart?: Breakpointify<CSS.Properties['gridRowStart']>
        /**
         * Specifies a grid item’s end position within the grid 
         * row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby 
         * specifying the inline-end edge of its grid area.
         */
        gridRowEnd?: Breakpointify<CSS.Properties['gridRowEnd']>
        /**
         * Shorthand property for grid-column-start and 
         * grid-column-end specifying a grid item's size 
         * and location within the grid column by contributing 
         * a line, a span, or nothing (automatic) to its grid 
         * placement, thereby specifying the inline-start and 
         * inline-end edge of its grid area.
         */
        gridColumn?: Breakpointify<CSS.Properties['gridColumn']>
        /**
         * Shorthand property for grid-row-start and grid-row-end 
         * specifying a grid item’s size and location within the 
         * grid row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby specifying 
         * the inline-start and inline-end edge of its grid area.
         */
        gridRow?: Breakpointify<CSS.Properties['gridRow']>
        /**
         * Shorthand property for grid-row-start, grid-column-start, 
         * grid-row-end and grid-column-end, specifying a grid item’s 
         * size and location within the grid by contributing a line, a 
         * span, or nothing (automatic) to its grid placement, thereby 
         * specifying the edges of its grid area.
         */
        gridArea?: Breakpointify<CSS.Properties['gridArea']>
        /**
         * Shorthand property sets both the align-self and justify-self 
         * properties. The first value is the align-self property value, 
         * the second the justify-self one. If the second value is not 
         * present, the first value is also used for it.
         */
        placeSelf?: Breakpointify<FlexSelf>
    }

    /**
     * Clipboard Events
     * @name ClipboardEvents
     */
    interface ClipboardEventProps<T> {
        onCopy?: React.ClipboardEventHandler<T>
        onCopyCapture?: React.ClipboardEventHandler<T>
        onCut?: React.ClipboardEventHandler<T>
        onCutCapture?: React.ClipboardEventHandler<T>
        onPaste?: React.ClipboardEventHandler<T>
        onPasteCapture?: React.ClipboardEventHandler<T>
    }

    /**
     * Composition events
     * @name CompositionEvents
     */
    interface CompositionEventProps<T> {
        onCompositionEnd?: React.CompositionEventHandler<T>
        onCompositionEndCapture?: React.CompositionEventHandler<T>
        onCompositionStart?: React.CompositionEventHandler<T>
        onCompositionStartCapture?: React.CompositionEventHandler<T>
        onCompositionUpdate?: React.CompositionEventHandler<T>
        onCompositionUpdateCapture?: React.CompositionEventHandler<T>
    }

    /**
     * Focus events
     * @name FocusEvents
     */
    interface FocusEventProps<T> {
        onFocus?: React.FocusEventHandler<T>
        onFocusCapture?: React.FocusEventHandler<T>
        onBlur?: React.FocusEventHandler<T>
        onBlurCapture?: React.FocusEventHandler<T>
    }
    
    /**
     * Form events
     * @name FormEvents
     */
    interface FormEventProps<T> {
        onChange?: React.FormEventHandler<T>
        onChangeCapture?: React.FormEventHandler<T>
        onBeforeInput?: React.FormEventHandler<T>
        onBeforeInputCapture?: React.FormEventHandler<T>
        onInput?: React.FormEventHandler<T>
        onInputCapture?: React.FormEventHandler<T>
        onReset?: React.FormEventHandler<T>
        onResetCapture?: React.FormEventHandler<T>
        onSubmit?: React.FormEventHandler<T>
        onSubmitCapture?: React.FormEventHandler<T>
        onInvalid?: React.FormEventHandler<T>
        onInvalidCapture?: React.FormEventHandler<T>
    }
    
    /**
     * Image events
     * @name ImageEvents
     */
    interface ImageEventProps<T> {
        onLoad?: React.ReactEventHandler<T>
        onLoadCapture?: React.ReactEventHandler<T>
        onError?: React.ReactEventHandler<T> // also a Media Event
        onErrorCapture?: React.ReactEventHandler<T> // also a Media Event
    }
    
    /**
     * Keyboard events
     * @name KeyboardEvents
     */
    interface KeyboardEventProps<T> {
        onKeyDown?: React.KeyboardEventHandler<T>
        onKeyDownCapture?: React.KeyboardEventHandler<T>
        onKeyPress?: React.KeyboardEventHandler<T>
        onKeyPressCapture?: React.KeyboardEventHandler<T>
        onKeyUp?: React.KeyboardEventHandler<T>
        onKeyUpCapture?: React.KeyboardEventHandler<T>
        onEnter?: React.KeyboardEventHandler<T>
        onEsc?: React.KeyboardEventHandler<T>
    }
    
    /**
     * Media events
     * @name MediaEvents
     */
    interface MediaEventProps<T> {
        onAbort?: React.ReactEventHandler<T>
        onAbortCapture?: React.ReactEventHandler<T>
        onCanPlay?: React.ReactEventHandler<T>
        onCanPlayCapture?: React.ReactEventHandler<T>
        onCanPlayThrough?: React.ReactEventHandler<T>
        onCanPlayThroughCapture?: React.ReactEventHandler<T>
        onDurationChange?: React.ReactEventHandler<T>
        onDurationChangeCapture?: React.ReactEventHandler<T>
        onEmptied?: React.ReactEventHandler<T>
        onEmptiedCapture?: React.ReactEventHandler<T>
        onEncrypted?: React.ReactEventHandler<T>
        onEncryptedCapture?: React.ReactEventHandler<T>
        onEnded?: React.ReactEventHandler<T>
        onEndedCapture?: React.ReactEventHandler<T>
        onLoadedData?: React.ReactEventHandler<T>
        onLoadedDataCapture?: React.ReactEventHandler<T>
        onLoadedMetadata?: React.ReactEventHandler<T>
        onLoadedMetadataCapture?: React.ReactEventHandler<T>
        onLoadStart?: React.ReactEventHandler<T>
        onLoadStartCapture?: React.ReactEventHandler<T>
        onPause?: React.ReactEventHandler<T>
        onPauseCapture?: React.ReactEventHandler<T>
        onPlay?: React.ReactEventHandler<T>
        onPlayCapture?: React.ReactEventHandler<T>
        onPlaying?: React.ReactEventHandler<T>
        onPlayingCapture?: React.ReactEventHandler<T>
        onProgress?: React.ReactEventHandler<T>
        onProgressCapture?: React.ReactEventHandler<T>
        onRateChange?: React.ReactEventHandler<T>
        onRateChangeCapture?: React.ReactEventHandler<T>
        onSeeked?: React.ReactEventHandler<T>
        onSeekedCapture?: React.ReactEventHandler<T>
        onSeeking?: React.ReactEventHandler<T>
        onSeekingCapture?: React.ReactEventHandler<T>
        onStalled?: React.ReactEventHandler<T>
        onStalledCapture?: React.ReactEventHandler<T>
        onSuspend?: React.ReactEventHandler<T>
        onSuspendCapture?: React.ReactEventHandler<T>
        onTimeUpdate?: React.ReactEventHandler<T>
        onTimeUpdateCapture?: React.ReactEventHandler<T>
        onVolumeChange?: React.ReactEventHandler<T>
        onVolumeChangeCapture?: React.ReactEventHandler<T>
        onWaiting?: React.ReactEventHandler<T>
        onWaitingCapture?: React.ReactEventHandler<T>
    }
    
    /**
     * Mouse event
     * @name MouseEvents
     */
    interface MouseEventProps<T> {
        onAuxClick?: React.MouseEventHandler<T>
        onAuxClickCapture?: React.MouseEventHandler<T>
        onClick?: React.MouseEventHandler<T>
        onClickCapture?: React.MouseEventHandler<T>
        onContextMenu?: React.MouseEventHandler<T>
        onContextMenuCapture?: React.MouseEventHandler<T>
        onDoubleClick?: React.MouseEventHandler<T>
        onDoubleClickCapture?: React.MouseEventHandler<T>
        onDrag?: React.DragEventHandler<T>
        onDragCapture?: React.DragEventHandler<T>
        onDragEnd?: React.DragEventHandler<T>
        onDragEndCapture?: React.DragEventHandler<T>
        onDragEnter?: React.DragEventHandler<T>
        onDragEnterCapture?: React.DragEventHandler<T>
        onDragExit?: React.DragEventHandler<T>
        onDragExitCapture?: React.DragEventHandler<T>
        onDragLeave?: React.DragEventHandler<T>
        onDragLeaveCapture?: React.DragEventHandler<T>
        onDragOver?: React.DragEventHandler<T>
        onDragOverCapture?: React.DragEventHandler<T>
        onDragStart?: React.DragEventHandler<T>
        onDragStartCapture?: React.DragEventHandler<T>
        onDrop?: React.DragEventHandler<T>
        onDropCapture?: React.DragEventHandler<T>
        onMouseDown?: React.MouseEventHandler<T>
        onMouseDownCapture?: React.MouseEventHandler<T>
        onMouseEnter?: React.MouseEventHandler<T>
        onMouseLeave?: React.MouseEventHandler<T>
        onMouseMove?: React.MouseEventHandler<T>
        onMouseMoveCapture?: React.MouseEventHandler<T>
        onMouseOut?: React.MouseEventHandler<T>
        onMouseOutCapture?: React.MouseEventHandler<T>
        onMouseOver?: React.MouseEventHandler<T>
        onMouseOverCapture?: React.MouseEventHandler<T>
        onMouseUp?: React.MouseEventHandler<T>
        onMouseUpCapture?: React.MouseEventHandler<T>
    }
        
    /**
     * Selection events
     * @name SelectionEvents
     */
    interface SelectionEventProps<T> {
        onSelect?: React.ReactEventHandler<T>
        onSelectCapture?: React.ReactEventHandler<T>
    }
    
    /**
     * Touch events
     * @name TouchEvents
     */
    interface TouchEventProps<T> {
        onTouchCancel?: React.TouchEventHandler<T>
        onTouchCancelCapture?: React.TouchEventHandler<T>
        onTouchEnd?: React.TouchEventHandler<T>
        onTouchEndCapture?: React.TouchEventHandler<T>
        onTouchMove?: React.TouchEventHandler<T>
        onTouchMoveCapture?: React.TouchEventHandler<T>
        onTouchStart?: React.TouchEventHandler<T>
        onTouchStartCapture?: React.TouchEventHandler<T>
    }
        
    /**
     * Pointer events
     * @name PointerEvents
     */
    interface PointerEventProps<T> {
        onPointerDown?: React.PointerEventHandler<T>
        onPointerDownCapture?: React.PointerEventHandler<T>
        onPointerMove?: React.PointerEventHandler<T>
        onPointerMoveCapture?: React.PointerEventHandler<T>
        onPointerUp?: React.PointerEventHandler<T>
        onPointerUpCapture?: React.PointerEventHandler<T>
        onPointerCancel?: React.PointerEventHandler<T>
        onPointerCancelCapture?: React.PointerEventHandler<T>
        onPointerEnter?: React.PointerEventHandler<T>
        // onPointerEnterCapture?: React.PointerEventHandler<T>
        onPointerLeave?: React.PointerEventHandler<T>
        // onPointerLeaveCapture?: React.PointerEventHandler<T>
        onPointerOver?: React.PointerEventHandler<T>
        onPointerOverCapture?: React.PointerEventHandler<T>
        onPointerOut?: React.PointerEventHandler<T>
        onPointerOutCapture?: React.PointerEventHandler<T>
        onGotPointerCapture?: React.PointerEventHandler<T>
        onGotPointerCaptureCapture?: React.PointerEventHandler<T>
        onLostPointerCapture?: React.PointerEventHandler<T>
        onLostPointerCaptureCapture?: React.PointerEventHandler<T>
    }
        
    /**
     * Scroll events
     * @name ScrollEvents
     */
    interface ScrollEventProps<T> {
        onScroll?: React.UIEventHandler<T>
        onScrollCapture?: React.UIEventHandler<T>
    }
        
    /**
     * Wheel events
     * @name WheelEvents
     */
    interface WheelEventProps<T> {
        onWheel?: React.WheelEventHandler<T>
        onWheelCapture?: React.WheelEventHandler<T>
    }
        
    /**
     * Animation events
     * @name AnimationEvents
     */
    interface AnimationEventProps<T> {
        onAnimationStart?: React.AnimationEventHandler<T>
        onAnimationStartCapture?: React.AnimationEventHandler<T>
        onAnimationEnd?: React.AnimationEventHandler<T>
        onAnimationEndCapture?: React.AnimationEventHandler<T>
        onAnimationIteration?: React.AnimationEventHandler<T>
        onAnimationIterationCapture?: React.AnimationEventHandler<T>
    }

    /**
     * Transition events
     * @name TransitionEvents
     */
    interface TransitionEventProps<T> {
        onTransitionEnd?: React.TransitionEventHandler<T>
        onTransitionEndCapture?: React.TransitionEventHandler<T>
    }
}

declare module 'csstype' {
    interface Properties {
        display?: 'block' | 'inline' | 'inline-block' | 'inline-table' | 'list-item' | 'none' | 'run-in' | 'table' | 'table-caption' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group' | 'flex' | 'grid'
        overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit',
    }
}

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepPartial<U>>
            : DeepPartial<T[P]>
}

export default WhaleTypes