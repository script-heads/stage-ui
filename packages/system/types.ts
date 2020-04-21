import React from 'react'
import QIXColor from 'color'
import CSS from 'csstype'
import { Interpolation, SerializedStyles, ObjectInterpolation } from '@emotion/core'

declare global {
    namespace System {
        interface Palette<Color> {
            [key: string]: Color
        }
        interface Overrides {
        }
    }
}

export type EmotionStyles = Array<Interpolation> | ObjectInterpolation<undefined>
export type Breakpointify<T> = T[] | T

declare namespace SystemTypes {

    type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
    /**
     * @display Color
     * @link /props#color
     */
    type ColorProp =
        ((colors: Theme['color']) => QIXColor | string)
        | keyof Omit<Theme['color'], 'palette'>
        | keyof Theme['color']['palette']
        | QIXColor
        | (string & { T?: string })

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
            Record<Extract<StyleDefinitions[StyleName], string>, EmotionStyles>
        >
    }>) => EmotionStyles

    type CreateStyles<Overrides, Props = {}, Params = {}> = (
        props: Props,
        theme: Theme,
        params?: Params
    ) => Styles<Overrides>

    interface Theme extends ThemeVariables {
        assets: ThemeAssets
        overrides?: Partial<{ [Component in keyof System.Overrides]: Styles<System.Overrides[Component]> }>
        replace: (theme: ReplaceTheme) => Theme
    }

    interface SourceTheme {
        main: Omit<ThemeVariables<[number, number, number, number?]>, 'breakpoints' | 'color'> & {
            color: Omit<ThemeVariables<[number, number, number, number?]>['color'], 'palette'> & {
                palette?: System.Palette<[number, number, number, number?]>
            }
            breakpoints?: string[]
        }
        assets: (main: ThemeVariables) => ThemeAssets
        overrides?: (main: ThemeVariables, assets: ThemeAssets) =>
            Partial<{ [Component in keyof System.Overrides]: Styles<System.Overrides[Component]> }>
    }

    interface ReplaceTheme {
        main: DeepPartial<ThemeVariables<[number, number, number, number?]>>
        assets?: (main: ThemeVariables) => DeepPartial<ThemeAssets>
        overrides?: (main: ThemeVariables, assets: ThemeAssets) =>
            Partial<{ [Component in keyof System.Overrides]: Styles<System.Overrides[Component]> }>
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

            palette: System.Palette<Color>
        }
        breakpoints: string[],
        radius: Record<Size, string>
        spacing: Record<Size, string>
    }

    interface ThemeAssets {
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
        GridProps { }

    /**
     * DOM events
     * @name Event
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
        ScrollEventProps<T> { }

    /**
     * Component core props
     * @name Core
     */
    interface CoreProps<S = {}> {
        /**
         * Override any component style
         * @display Styles
         * @link /props#styles
         */
        styles?: Partial<Styles<S>>
    }

    /**
     * Component attribute props
     * @name Attributes
     */
    interface AttributeProps extends React.AriaAttributes {
        /**
         * Set class atrribute on component's container 
         */
        className?: string
        /**
         * Set id atrribute on component's container 
         */
        id?: string
        /**
         * Set style atrribute on component's container
         */
        style?: React.CSSProperties
        /**
         * Set tab-index atrribute on component's container 
         */
        tabIndex?: number
        /**
         * Set role atrribute on component's container 
         */
        role?: string
        /**
         * Set draggable atrribute on component's container 
         */
        draggable?: boolean
        /**
         * Set any atrributes on component's container 
         */
        attrs?: Object
    }
    /**
     * Component color styles props
     * @name Color
     */
    interface ColorProps {
        /**
         * Set color style
         * @display Color
         * @link /props#color
         * @breakpointify
         */
        textColor?: Breakpointify<ColorProp>
        /**
         * Set background-color style
         * @display Color
         * @link /props#color
         * @breakpointify
         */
        backgroundColor?: Breakpointify<ColorProp>
    }

    /**
     * Component border styles props
     * @name Border
     */
    interface BorderProps {
        /**
         * Set border-width style
         * @display number | string
         * @breakpointify
         */
        borderWidth?: Breakpointify<CSS.Properties['borderWidth']>
        /**
         * Set border-style style
         * @breakpointify
         * @display dashed | dotted | double | groove | hidden | inset | none | outset | ridge | solid
         */
        borderStyle?: Breakpointify<CSS.Properties['borderStyle']>
        /**
         * Set border-color style
         * @display Color
         * @link /props#color
         * @breakpointify
         */
        borderColor?: Breakpointify<ColorProp>
        /**
         * Set border-radius style  
         * @display number | string
         * @breakpointify
         */
        borderRadius?: Breakpointify<CSS.Properties['borderRadius']>
    }

    /**
     * Component layout styles props
     * @name Layout
     */
    interface LayoutProps {
        /**
         * Set width style
         * @display number | string
         * @breakpointify
         */
        w?: Breakpointify<CSS.Properties['width']>
        /**
         * Set height style
         * @display number | string
         * @breakpointify
         */
        h?: Breakpointify<CSS.Properties['height']>
        /**
         * Specifies the type of positioning method used for an element 
         * (static, relative, fixed, absolute or sticky).
         * @display static | relative | fixed | absolute | sticky
         * @breakpointify
         */
        position?: Breakpointify<CSS.Properties['position']>
        /**
         * Shows or hides an element without changing the layout 
         * of a document.
         * @display visible | hidden | collapse
         * @breakpointify
         */
        visibility?: Breakpointify<CSS.Properties['visibility']>
        /**
         * Sets whether an element is treated as a block or 
         * inline element and the layout used for its children, 
         * such as flow layout, grid or flex.
         * @display block | inline | inline-block | inline-table | list-item | none | run-in | table | table-caption | table-cell | table-column-group | table-column | table-footer-group | table-header-group | table-row | table-row-group | flex | grid
         * @breakpointify
         */
        display?: Breakpointify<CSS.Properties['display']>
        /**
         * Set font-size style
         * @display number | string
         * @breakpointify
         */
        fontSize?: Breakpointify<CSS.Properties['fontSize']>
        /**
         * Set line-height style
         * @display number | string
         * @breakpointify
         */
        lineHeight?: Breakpointify<CSS.Properties['lineHeight']>
        /**
         * Set letter-spacing style
         * @display number | string
         * @breakpointify
         */
        letterSpacing?: Breakpointify<CSS.Properties['letterSpacing']>
        /**
         * Set text-align style
         * @display number | string
         * @breakpointify
         */
        textAlign?: Breakpointify<CSS.Properties['textAlign']>
    }

    /**
     * Component padding styles props
     * @name Padding
     */
    interface PaddingProps {
        /**
         * Set padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        p?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set horizontal padding style 
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        px?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set vertical padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        py?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set right padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pr?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set left padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pl?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set top padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pt?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set bottom padding style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        pb?: Breakpointify<Size | (string & { T?: string }) | number>
    }

    /**
     * Component margin styles props
     * @name Margin
     */
    interface MarginProps {
        /**
         * Set margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        m?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set horizontal margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mx?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set vertical margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        my?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set right margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mr?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set left margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        ml?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set top margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mt?: Breakpointify<Size | (string & { T?: string }) | number>
        /**
         * Set bottom margin style
         * @breakpointify
         * @display Size
         * @link /props#margin-padding
         */
        mb?: Breakpointify<Size | (string & { T?: string }) | number>
    }

    /**
     * Used for flex attributes
     * CSS props have string witch kills helps at ide
     */
    type FlexSpace = 'space-around' | 'space-between' | 'space-evenly'
    type FlexSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch'
    type FlexDirection = 'inherit' | 'initial' | 'revert' | 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse'
    type FlexWrap = 'inherit' | 'initial' | 'revert' | 'unset' | 'nowrap' | 'wrap' | 'wrap-reverse'
    /**
     * Used for grid attributes
     * CSS props have string witch kills helps at ide
     */
    type GridSpace = 'space-around' | 'space-between' | 'space-evenly'
    type GridSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'start' | 'end' | 'stretch'

    /**
     * Component flexbox children styles props
     * @name Flex
     */
    interface FlexProps {
        /**
         * Sets how a flex item will grow or shrink to fit the 
         * space available in its flex container.
         * @display number
         * @breakpointify
         */
        flex?: Breakpointify<CSS.Properties['flex']>
        /**
         * Sets the initial main size of a flex item. It sets the 
         * size of the content box unless otherwise set with box-sizing.
         * @display number | string
         * @breakpointify
         */
        flexBasis?: Breakpointify<CSS.Properties['flexBasis']>
        /**
         * Sets the flex grow factor of a flex item main size. 
         * It specifies how much of the remaining space in the 
         * flex container should be assigned to the item 
         * (the flex grow factor).
         * @display number
         * @breakpointify
         */
        flexGrow?: Breakpointify<CSS.Properties['flexGrow']>
        /**
         * Sets the flex shrink factor of a flex item. 
         * If the size of all flex items is lr than 
         * the flex container, items shrink to fit 
         * according to flex-shrink.
         * @display number
         * @breakpointify
         */
        flexShrink?: Breakpointify<CSS.Properties['flexShrink']>
        /**
         * Property overrides a grid or flex item's 
         * align-items value. In Grid, it aligns the 
         * item inside the grid area. In Flexbox, 
         * it aligns the item on the cross axis.
         * @display inherit | auto | baseline | center | flex-start | flex-end | stretch
         * @breakpointify
         */
        alignSelf?: Breakpointify<FlexSelf>
        /**
         * Sets the way a box is justified inside its 
         * alignment container along the appropriate axis.
         * @display inherit | auto | baseline | center | flex-start | flex-end | stretch
         * @breakpointify
         */
        justifySelf?: Breakpointify<FlexSelf>
    }

    interface GridContainerProps {
        /**
         * @display string
         * @breakpointify
         */
        templateColumns?: Breakpointify<CSS.Properties['gridTemplateColumns']>
        /**
         * @display string
         * @breakpointify
         */
        templateRows?: Breakpointify<CSS.Properties['gridTemplateRows']>
        /**
         * @display string
         * @breakpointify
         */
        templateAreas?: Breakpointify<CSS.Properties['gridTemplateAreas']>
        /**
         * @display string
         * @breakpointify
         */
        columnGap?: Breakpointify<CSS.Properties['gridColumnGap']>
        /**
         * @display string
         * @breakpointify
         */
        rowGap?: Breakpointify<CSS.Properties['gridRowGap']>
        /**
         * @display string
         * @breakpointify
         */
        gap?: Breakpointify<CSS.Properties['gridGap']>
        /**
         * @display string
         * @breakpointify
         */
        autoColumns?: Breakpointify<CSS.Properties['gridAutoColumns']>
        /**
         * @display string
         * @breakpointify
         */
        autoRows?: Breakpointify<CSS.Properties['gridAutoRows']>
        /**
         * @display string
         * @breakpointify
         */
        autoFlow?: Breakpointify<CSS.Properties['gridAutoFlow']>
        /**
         * @display string
         * @breakpointify
         */
        alignItems?: Breakpointify<GridSelf>
        /**
         * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         * @breakpointify
         */
        alignContent?: Breakpointify<GridSpace | GridSelf>
        /**
         * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         * @breakpointify
         */
        justifyContent?: Breakpointify<GridSpace | GridSelf>
        /**
         * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
         * @breakpointify
         */
        justifyItems?: Breakpointify<GridSpace | GridSelf>
        inline?: Breakpointify<boolean>
    }

    interface FlexboxContainerProps {
        /**
         * Sets the align-self value on all direct children as a group. 
         * In Flexbox, it controls the alignment of items on the Cross Axis
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch
         */
        alignItems?: Breakpointify<FlexSelf>
        /**
         * Sets the distribution of space between and around content 
         * items along a flexbox's cross-axis or a grid's block axis
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        alignContent?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * The place-content CSS property is a shorthand for 
         * align-content and justify-content
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        placeContent?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * Defines how the browser distributes space between and around 
         * content items along the main-axis of a flex container, and 
         * the inline axis of a grid container.
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        justifyContent?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * Defines the default justify-self for all items of the box, giving them all 
         * a default way of justifying each box along the appropriate axis
         * @breakpointify
         * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
         */
        justifyItems?: Breakpointify<FlexSelf | FlexSpace>
        /**
         * Sets how flex items are placed in the flex container defining the 
         * main axis and the direction (normal or reversed)
         * @breakpointify
         * @display inherit | initial | revert | unset | column | column-reverse | row | row-reverse
         */
        direction?: Breakpointify<FlexDirection>
        /**
         * Sets flex-direction style to column
         * @display boolean
         * @breakpointify
         */
        column?: Breakpointify<boolean>
        /**
         * Sets display style to inline-flex
         * @display boolean
         * @breakpointify
         */
        inline?: Breakpointify<boolean>
        /**
         * Sets whether flex items are forced onto one line or can wrap onto multiple lines
         * @display inherit | initial | revert | unset | nowrap | wrap | wrap-reverse
         * @breakpointify
         */
        wrap?: Breakpointify<FlexWrap>
        /**
         * Shorthand property for flex-direction and flex-wrap styles
         * @display column | column-reverse | nowrap | row | row-reverse | wrap | wrap-reverse
         * @breakpointify
         */
        flow?: Breakpointify<CSS.Properties['flexFlow']>
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
         * @display string
         * @breakpointify
         */
        gridColumnStart?: Breakpointify<CSS.Properties['gridColumnStart']>
        /**
         * Specifies a grid item’s end position within the 
         * grid column by contributing a line, a span, or 
         * nothing (automatic) to its grid placement, thereby 
         * specifying the block-end edge of its grid area.
         * @display string
         * @breakpointify
         */
        gridColumnEnd?: Breakpointify<CSS.Properties['gridColumnEnd']>
        /**
         * Specifies a grid item’s start position within the 
         * grid row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby specifying 
         * the inline-start edge of its grid area.
         * @display string
         * @breakpointify
         */
        gridRowStart?: Breakpointify<CSS.Properties['gridRowStart']>
        /**
         * Specifies a grid item’s end position within the grid 
         * row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby 
         * specifying the inline-end edge of its grid area.
         * @display string
         * @breakpointify
         */
        gridRowEnd?: Breakpointify<CSS.Properties['gridRowEnd']>
        /**
         * Shorthand property for grid-column-start and 
         * grid-column-end specifying a grid item's size 
         * and location within the grid column by contributing 
         * a line, a span, or nothing (automatic) to its grid 
         * placement, thereby specifying the inline-start and 
         * inline-end edge of its grid area.
         * @display string
         * @breakpointify
         */
        gridColumn?: Breakpointify<CSS.Properties['gridColumn']>
        /**
         * Shorthand property for grid-row-start and grid-row-end 
         * specifying a grid item’s size and location within the 
         * grid row by contributing a line, a span, or nothing 
         * (automatic) to its grid placement, thereby specifying 
         * the inline-start and inline-end edge of its grid area.
         * @display string
         * @breakpointify
         */
        gridRow?: Breakpointify<CSS.Properties['gridRow']>
        /**
         * Shorthand property for grid-row-start, grid-column-start, 
         * grid-row-end and grid-column-end, specifying a grid item’s 
         * size and location within the grid by contributing a line, a 
         * span, or nothing (automatic) to its grid placement, thereby 
         * specifying the edges of its grid area.
         * @display string
         * @breakpointify
         */
        gridArea?: Breakpointify<CSS.Properties['gridArea']>
        /**
         * Shorthand property sets both the align-self and justify-self 
         * properties. The first value is the align-self property value, 
         * the second the justify-self one. If the second value is not 
         * present, the first value is also used for it.
         * @display string
         * @breakpointify
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

export default SystemTypes