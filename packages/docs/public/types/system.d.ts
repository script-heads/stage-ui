declare module "props/color" {
    import Color from 'color';
    export type ColorProp = ((colors: Stage.Theme['color']) => Color | Stage.ColorNames) | Color | Stage.ColorNames;
    type RV<V> = V extends undefined ? undefined : Color;
    function colorProp<V extends ColorProp | undefined>(value: V, theme: Stage.Theme): RV<V>;
    export default colorProp;
}
declare module "utils/isFunction" {
    export default function isFunction<V = Function>(a: any): a is V;
}
declare module "utils/isBrowser" {
    const isBrowser: boolean;
    export default isBrowser;
}
declare module "utils/handleFocus" {
    export type FocusOptions = 'always' | 'tabOnly' | 'never';
    function handleFocus<Element extends HTMLElement>(props: Partial<Record<'onFocus' | 'onBlur', (event: React.FocusEvent<Element>) => void>>, focus: FocusOptions): Record<'onFocus' | 'onBlur', (event: React.FocusEvent<Element>) => void>;
    export default handleFocus;
}
declare module "props/breakpoint" {
    export type BreakpointProp<T> = T[] | T;
    function breakpointProp<P>(value: P | P[], theme: Stage.Theme, resolver: (currentValue: P, theme: Stage.Theme, index: number | null) => Stage.CSSInterpolation): Stage.CSSInterpolation;
    export default breakpointProp;
}
declare module "props/space" {
    export type SpaceProp = Stage.Sizes | (string & {
        T?: string;
    }) | number;
    function spaceProp(value: string | number | undefined, theme: Stage.Theme): string | undefined;
    export default spaceProp;
}
declare module "props/size" {
    export const sizes: string[];
    function sizeProp<T, V>(value: V, spacingResolvers: Record<Stage.Sizes, T>, otherResolver: (value: V) => T): T;
    export default sizeProp;
}
declare module "props/types" {
    import React, { CSSProperties } from 'react';
    import CSS from 'csstype';
    import type { BreakpointProp } from "props/breakpoint";
    import type { ColorProp } from "props/color";
    import type { OverridesProp } from "props/overrides";
    import type { SpaceProp } from "props/space";
    /**
     * All typical component props
     * @name All
     */
    export interface AllProps<Element, ClassSchema extends Stage.ClassesSchemaDefinition = Stage.ClassesSchemaDefinition> extends CoreProps<ClassSchema>, AttributeProps, AllEventProps<Element>, AllStyleProps {
    }
    /**
     * Component core props
     * @name Core
     */
    export interface CoreProps<ClassesSchema extends Stage.ClassesSchemaDefinition = Stage.ClassesSchemaDefinition> {
        /**
         * Override any component style
         * @display Stage.Styles
         * @link /props#overrides
         */
        overrides?: OverridesProp<ClassesSchema>;
        /**
         * Shortcut for fast styles
         * @display Stage.Styles
         * @link /props#styles
         */
        style?: ((theme: Stage.Theme) => BreakpointProp<Stage.CSSInterpolation>) | BreakpointProp<Stage.CSSInterpolation>;
        /**
         * HMTL Attributes for container
         * @display Stage.Styles
         * @link /props#attributes
         */
        attributes?: AttributeProp;
    }
    export type AttributeProp = Record<string, string | number | boolean | CSSProperties | undefined>;
    /**
     * Component attribute props
     * @name Attributes
     */
    export interface AttributeProps {
        /**
         * Set class atrribute on component's container
         */
        className?: string;
        /**
         * Set id atrribute on component's container
         */
        id?: string;
        /**
         * Set style atrribute on component's container
         */
        inlineStyle?: React.CSSProperties;
        /**
         * Set tab-index atrribute on component's container
         */
        tabIndex?: number;
        /**
         * Set role atrribute on component's container
         */
        role?: string;
        /**
         * Set draggable atrribute on component's container
         */
        draggable?: boolean;
    }
    /**
     * All typical component props except events
     * @name AllStyle
     */
    export interface AllStyleProps extends ColorProps, BorderProps, PaddingProps, LayoutProps, MarginProps, FlexProps, GridProps, PositionProps, ShadowProps {
    }
    /**
     * DOM events
     * @name Event
     */
    export interface AllEventProps<T> extends Omit<FormEventProps<T>, 'onChange'>, FocusEventProps<T>, ImageEventProps<T>, MediaEventProps<T>, MouseEventProps<T>, TouchEventProps<T>, WheelEventProps<T>, PointerEventProps<T>, KeyboardEventProps<T>, SelectionEventProps<T>, AnimationEventProps<T>, ClipboardEventProps<T>, TransitionEventProps<T>, CompositionEventProps<T>, ScrollEventProps<T> {
    }
    /**
     * Component color styles props
     * @name Color
     */
    export interface ColorProps {
        /**
         * Set color style
         * @display Stage.Color
         * @link /props#color
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/color
         */
        textColor?: BreakpointProp<ColorProp>;
        /**
         * Set background-color style
         * @display Stage.Color
         * @link /props#color
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/background-color
         */
        backgroundColor?: BreakpointProp<ColorProp>;
    }
    /**
     * Component border styles props
     * @name Border
     */
    export interface BorderProps {
        /**
         * Set border-width style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/border-width
         */
        borderWidth?: BreakpointProp<CSS.Properties['borderWidth']>;
        /**
         * Set border-style style
         * @BreakpointProp
         * @display dashed | dotted | double | groove | hidden | inset | none | outset | ridge | solid
         * @see https://developer.mozilla.org/docs/Web/CSS/border-style
         */
        borderStyle?: BreakpointProp<CSS.Properties['borderStyle']>;
        /**
         * Set border-color style
         * @display Stage.Color
         * @link /props#color
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/border-color
         */
        borderColor?: BreakpointProp<ColorProp>;
        /**
         * Set border-radius style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
         */
        borderRadius?: BreakpointProp<CSS.Properties['borderRadius']>;
    }
    /**
     * Component layout styles props
     * @name Layout
     */
    export interface LayoutProps {
        /**
         * Set width style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/width
         */
        w?: BreakpointProp<CSS.Properties['width']>;
        /**
         * Set height style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/visibility
         */
        h?: BreakpointProp<CSS.Properties['height']>;
        /**
         * Specifies the type of positioning method used for an element
         * (static, relative, fixed, absolute or sticky).
         * @display static | relative | fixed | absolute | sticky
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/position
         */
        position?: BreakpointProp<CSS.Properties['position']>;
        /**
         * Shows or hides an element without changing the layout
         * of a document.
         * @display visible | hidden | collapse
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/visibility
         */
        visibility?: BreakpointProp<CSS.Properties['visibility']>;
        /**
         * Sets whether an element is treated as a block or
         * inline element and the layout used for its children,
         * such as flow layout, grid or flex.
         * @display block | inline | inline-block | inline-table | list-item | none | run-in | table | table-caption | table-cell | table-column-group | table-column | table-footer-group | table-header-group | table-row | table-row-group | flex | grid
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/display
         */
        display?: BreakpointProp<CSS.Properties['display']>;
        /**
         * Set font-size style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/font-size
         */
        fontSize?: BreakpointProp<CSS.Properties['fontSize']>;
        /**
         * Set line-height style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/line-height
         */
        lineHeight?: BreakpointProp<CSS.Properties['lineHeight']>;
        /**
         * Set letter-spacing style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
         */
        letterSpacing?: BreakpointProp<CSS.Properties['letterSpacing']>;
        /**
         * Set text-align style
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/text-align
         */
        textAlign?: BreakpointProp<CSS.Properties['textAlign']>;
    }
    /**
     * Component padding styles props
     * @name Padding
     */
    export interface PaddingProps {
        /**
         * Set padding style
         * @BreakpointProp
         * @display Padding
         * @link /props#margin-padding
         */
        p?: BreakpointProp<SpaceProp>;
        /**
         * Set horizontal padding style
         * @BreakpointProp
         * @display Padding horizontal
         * @link /props#margin-padding
         */
        px?: BreakpointProp<SpaceProp>;
        /**
         * Set vertical padding style
         * @BreakpointProp
         * @display Padding vertical
         * @link /props#margin-padding
         */
        py?: BreakpointProp<SpaceProp>;
        /**
         * Set right padding style
         * @BreakpointProp
         * @display Padding right
         * @link /props#margin-padding
         */
        pr?: BreakpointProp<SpaceProp>;
        /**
         * Set left padding style
         * @BreakpointProp
         * @display Padding left
         * @link /props#margin-padding
         */
        pl?: BreakpointProp<SpaceProp>;
        /**
         * Set top padding style
         * @BreakpointProp
         * @display Padding top
         * @link /props#margin-padding
         */
        pt?: BreakpointProp<SpaceProp>;
        /**
         * Set bottom padding style
         * @BreakpointProp
         * @display Padding bottom
         * @link /props#margin-padding
         */
        pb?: BreakpointProp<SpaceProp>;
    }
    /**
     * Component margin styles props
     * @name Margin
     */
    export interface MarginProps {
        /**
         * Set margin style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        m?: BreakpointProp<SpaceProp>;
        /**
         * Set horizontal margin style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        mx?: BreakpointProp<SpaceProp>;
        /**
         * Set vertical margin style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        my?: BreakpointProp<SpaceProp>;
        /**
         * Set right margin style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        mr?: BreakpointProp<SpaceProp>;
        /**
         * Set left margin style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        ml?: BreakpointProp<SpaceProp>;
        /**
         * Set top margin style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        mt?: BreakpointProp<SpaceProp>;
        /**
         * Set bottom margin style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        mb?: BreakpointProp<SpaceProp>;
    }
    /**
     * Used for flex attributes
     * CSS props have string witch kills helps at ide
     */
    export type FlexSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';
    /**
     * Component flexbox children styles props
     * @name Flex
     */
    export interface FlexProps {
        /**
         * Sets how a flex item will grow or shrink to fit the
         * space available in its flex container.
         * @display number
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/flex
         */
        flex?: BreakpointProp<CSS.Properties['flex']>;
        /**
         * Sets the initial main size of a flex item. It sets the
         * size of the content box unless otherwise set with box-sizing.
         * @display number | string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
         */
        flexBasis?: BreakpointProp<CSS.Properties['flexBasis']>;
        /**
         * Sets the flex grow factor of a flex item main size.
         * It specifies how much of the remaining space in the
         * flex container should be assigned to the item
         * (the flex grow factor).
         * @display number
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
         */
        flexGrow?: BreakpointProp<CSS.Properties['flexGrow']>;
        /**
         * Sets the flex shrink factor of a flex item.
         * If the size of all flex items is lr than
         * the flex container, items shrink to fit
         * according to flex-shrink.
         * @display number
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
         */
        flexShrink?: BreakpointProp<CSS.Properties['flexShrink']>;
        /**
         * Property overrides a grid or flex item's
         * align-items value. In Grid, it aligns the
         * item inside the grid area. In Flexbox,
         * it aligns the item on the cross axis.
         * @display inherit | auto | baseline | center | flex-start | flex-end | stretch
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/align-self
         */
        alignSelf?: BreakpointProp<FlexSelf>;
        /**
         * Sets the way a box is justified inside its
         * alignment container along the appropriate axis.
         * @display inherit | auto | baseline | center | flex-start | flex-end | stretch
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
         */
        justifySelf?: BreakpointProp<FlexSelf>;
    }
    /**
     * Component grid children styles props
     * @name Grid
     */
    export interface GridProps {
        /**
         * Specifies a grid item’s start position within
         * the grid column by contributing a line, a span,
         * or nothing (automatic) to its grid placement.
         * This start position defines the block-start edge
         * of the grid area.
         * @display string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
         */
        gridColumnStart?: BreakpointProp<CSS.Properties['gridColumnStart']>;
        /**
         * Specifies a grid item’s end position within the
         * grid column by contributing a line, a span, or
         * nothing (automatic) to its grid placement, thereby
         * specifying the block-end edge of its grid area.
         * @display string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
         */
        gridColumnEnd?: BreakpointProp<CSS.Properties['gridColumnEnd']>;
        /**
         * Specifies a grid item’s start position within the
         * grid row by contributing a line, a span, or nothing
         * (automatic) to its grid placement, thereby specifying
         * the inline-start edge of its grid area.
         * @display string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
         */
        gridRowStart?: BreakpointProp<CSS.Properties['gridRowStart']>;
        /**
         * Specifies a grid item’s end position within the grid
         * row by contributing a line, a span, or nothing
         * (automatic) to its grid placement, thereby
         * specifying the inline-end edge of its grid area.
         * @display string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
         */
        gridRowEnd?: BreakpointProp<CSS.Properties['gridRowEnd']>;
        /**
         * Shorthand property for grid-column-start and
         * grid-column-end specifying a grid item's size
         * and location within the grid column by contributing
         * a line, a span, or nothing (automatic) to its grid
         * placement, thereby specifying the inline-start and
         * inline-end edge of its grid area.
         * @display string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
         */
        gridColumn?: BreakpointProp<CSS.Properties['gridColumn']>;
        /**
         * Shorthand property for grid-row-start and grid-row-end
         * specifying a grid item’s size and location within the
         * grid row by contributing a line, a span, or nothing
         * (automatic) to its grid placement, thereby specifying
         * the inline-start and inline-end edge of its grid area.
         * @display string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
         */
        gridRow?: BreakpointProp<CSS.Properties['gridRow']>;
        /**
         * Shorthand property for grid-row-start, grid-column-start,
         * grid-row-end and grid-column-end, specifying a grid item’s
         * size and location within the grid by contributing a line, a
         * span, or nothing (automatic) to its grid placement, thereby
         * specifying the edges of its grid area.
         * @display string
         * @BreakpointProp
         * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
         */
        gridArea?: BreakpointProp<CSS.Properties['gridArea']>;
        /**
         * Shorthand property sets both the align-self and justify-self
         * properties. The first value is the align-self property value,
         * the second the justify-self one. If the second value is not
         * present, the first value is also used for it.
         * @display inherit | stretch | center | flex-end | flex-start | baseline | auto
         * @BreakpointProp
         */
        placeSelf?: BreakpointProp<FlexSelf>;
    }
    /**
     * Component position styles props
     * @name Position
     */
    export interface PositionProps {
        /**
         * Set top style
         * @BreakpointProp
         * @display Top
         * @link /props#position-padding
         */
        top?: BreakpointProp<SpaceProp>;
        /**
         * Set top style
         * @BreakpointProp
         * @display Top
         * @link /props#position-padding
         */
        bottom?: BreakpointProp<SpaceProp>;
        /**
         * Set top style
         * @BreakpointProp
         * @display Left
         * @link /props#position-padding
         */
        left?: BreakpointProp<SpaceProp>;
        /**
         * Set top style
         * @BreakpointProp
         * @display Right
         * @link /props#position-padding
         */
        right?: BreakpointProp<SpaceProp>;
        /**
         * Set top style
         * @BreakpointProp
         * @display Top
         * @link /props#position-padding
         */
        t?: BreakpointProp<SpaceProp>;
        /**
         * Set top style
         * @BreakpointProp
         * @display Top
         * @link /props#position-padding
         */
        b?: BreakpointProp<SpaceProp>;
        /**
         * Set top style
         * @BreakpointProp
         * @display Left
         * @link /props#position-padding
         */
        l?: BreakpointProp<SpaceProp>;
        /**
         * Set top style
         * @BreakpointProp
         * @display Right
         * @link /props#position-padding
         */
        r?: BreakpointProp<SpaceProp>;
    }
    /**
     * Component shadow children styles props
     * @name Shadow
     */
    export interface ShadowProps {
        shadow?: BreakpointProp<Stage.Sizes>;
    }
    /**
     * Clipboard Events
     * @name ClipboardEvents
     */
    export interface ClipboardEventProps<T> {
        /**
         * @display function
         */
        onCopy?: React.ClipboardEventHandler<T>;
        /**
         * @display function
         */
        onCopyCapture?: React.ClipboardEventHandler<T>;
        /**
         * @display function
         */
        onCut?: React.ClipboardEventHandler<T>;
        /**
         * @display function
         */
        onCutCapture?: React.ClipboardEventHandler<T>;
        /**
         * @display function
         */
        onPaste?: React.ClipboardEventHandler<T>;
        /**
         * @display function
         */
        onPasteCapture?: React.ClipboardEventHandler<T>;
    }
    /**
     * Composition events
     * @name CompositionEvents
     */
    export interface CompositionEventProps<T> {
        /**
         * @display function
         */
        onCompositionEnd?: React.CompositionEventHandler<T>;
        /**
         * @display function
         */
        onCompositionEndCapture?: React.CompositionEventHandler<T>;
        /**
         * @display function
         */
        onCompositionStart?: React.CompositionEventHandler<T>;
        /**
         * @display function
         */
        onCompositionStartCapture?: React.CompositionEventHandler<T>;
        /**
         * @display function
         */
        onCompositionUpdate?: React.CompositionEventHandler<T>;
        /**
         * @display function
         */
        onCompositionUpdateCapture?: React.CompositionEventHandler<T>;
    }
    /**
     * Focus events
     * @name FocusEvents
     */
    export interface FocusEventProps<T> {
        /**
         * @display function
         */
        onFocus?: React.FocusEventHandler<T>;
        /**
         * @display function
         */
        onFocusCapture?: React.FocusEventHandler<T>;
        /**
         * @display function
         */
        onBlur?: React.FocusEventHandler<T>;
        /**
         * @display function
         */
        onBlurCapture?: React.FocusEventHandler<T>;
    }
    /**
     * Form events
     * @name FormEvents
     */
    export interface FormEventProps<T> {
        /**
         * @display function
         */
        onChange?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onChangeCapture?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onBeforeInput?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onBeforeInputCapture?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onInput?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onInputCapture?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onReset?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onResetCapture?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onSubmit?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onSubmitCapture?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onInvalid?: React.FormEventHandler<T>;
        /**
         * @display function
         */
        onInvalidCapture?: React.FormEventHandler<T>;
    }
    /**
     * Image events
     * @name ImageEvents
     */
    export interface ImageEventProps<T> {
        /**
         * @display function
         */
        onLoad?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onLoadCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onError?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onErrorCapture?: React.ReactEventHandler<T>;
    }
    /**
     * Keyboard events
     * @name KeyboardEvents
     */
    export interface KeyboardEventProps<T> {
        /**
         * @display function
         */
        onKeyDown?: React.KeyboardEventHandler<T>;
        /**
         * @display function
         */
        onKeyDownCapture?: React.KeyboardEventHandler<T>;
        /**
         * @display function
         */
        onKeyPress?: React.KeyboardEventHandler<T>;
        /**
         * @display function
         */
        onKeyPressCapture?: React.KeyboardEventHandler<T>;
        /**
         * @display function
         */
        onKeyUp?: React.KeyboardEventHandler<T>;
        /**
         * @display function
         */
        onKeyUpCapture?: React.KeyboardEventHandler<T>;
        /**
         * @display function
         */
        onEnter?: React.KeyboardEventHandler<T>;
        /**
         * @display function
         */
        onEsc?: React.KeyboardEventHandler<T>;
    }
    /**
     * Media events
     * @name MediaEvents
     */
    export interface MediaEventProps<T> {
        /**
         * @display function
         */
        onAbort?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onAbortCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onCanPlay?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onCanPlayCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onCanPlayThrough?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onCanPlayThroughCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onDurationChange?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onDurationChangeCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onEmptied?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onEmptiedCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onEncrypted?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onEncryptedCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onEnded?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onEndedCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onLoadedData?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onLoadedDataCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onLoadedMetadata?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onLoadedMetadataCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onLoadStart?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onLoadStartCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onPause?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onPauseCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onPlay?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onPlayCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onPlaying?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onPlayingCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onProgress?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onProgressCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onRateChange?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onRateChangeCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onSeeked?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onSeekedCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onSeeking?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onSeekingCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onStalled?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onStalledCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onSuspend?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onSuspendCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onTimeUpdate?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onTimeUpdateCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onVolumeChange?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onVolumeChangeCapture?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onWaiting?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onWaitingCapture?: React.ReactEventHandler<T>;
    }
    /**
     * Mouse event
     * @name MouseEvents
     */
    export interface MouseEventProps<T> {
        /**
         * @display function
         */
        onAuxClick?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onAuxClickCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onClick?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onClickCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onContextMenu?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onContextMenuCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onDoubleClick?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onDoubleClickCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onDrag?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragEnd?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragEndCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragEnter?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragEnterCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragExit?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragExitCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragLeave?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragLeaveCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragOver?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragOverCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragStart?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDragStartCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDrop?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onDropCapture?: React.DragEventHandler<T>;
        /**
         * @display function
         */
        onMouseDown?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseDownCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseEnter?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseLeave?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseMove?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseMoveCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseOut?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseOutCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseOver?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseOverCapture?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseUp?: React.MouseEventHandler<T>;
        /**
         * @display function
         */
        onMouseUpCapture?: React.MouseEventHandler<T>;
    }
    /**
     * Selection events
     * @name SelectionEvents
     */
    export interface SelectionEventProps<T> {
        /**
         * @display function
         */
        onSelect?: React.ReactEventHandler<T>;
        /**
         * @display function
         */
        onSelectCapture?: React.ReactEventHandler<T>;
    }
    /**
     * Touch events
     * @name TouchEvents
     */
    export interface TouchEventProps<T> {
        /**
         * @display function
         */
        onTouchCancel?: React.TouchEventHandler<T>;
        /**
         * @display function
         */
        onTouchCancelCapture?: React.TouchEventHandler<T>;
        /**
         * @display function
         */
        onTouchEnd?: React.TouchEventHandler<T>;
        /**
         * @display function
         */
        onTouchEndCapture?: React.TouchEventHandler<T>;
        /**
         * @display function
         */
        onTouchMove?: React.TouchEventHandler<T>;
        /**
         * @display function
         */
        onTouchMoveCapture?: React.TouchEventHandler<T>;
        /**
         * @display function
         */
        onTouchStart?: React.TouchEventHandler<T>;
        /**
         * @display function
         */
        onTouchStartCapture?: React.TouchEventHandler<T>;
    }
    /**
     * Pointer events
     * @name PointerEvents
     */
    export interface PointerEventProps<T> {
        /**
         * @display function
         */
        onPointerDown?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerDownCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerMove?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerMoveCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerUp?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerUpCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerCancel?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerCancelCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerEnter?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerLeave?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerOver?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerOverCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerOut?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onPointerOutCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onGotPointerCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onGotPointerCaptureCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onLostPointerCapture?: React.PointerEventHandler<T>;
        /**
         * @display function
         */
        onLostPointerCaptureCapture?: React.PointerEventHandler<T>;
    }
    /**
     * Scroll events
     * @name ScrollEvents
     */
    export interface ScrollEventProps<T> {
        /**
         * @display function
         */
        onScroll?: React.UIEventHandler<T>;
        /**
         * @display function
         */
        onScrollCapture?: React.UIEventHandler<T>;
    }
    /**
     * Wheel events
     * @name WheelEvents
     */
    export interface WheelEventProps<T> {
        /**
         * @display function
         */
        onWheel?: React.WheelEventHandler<T>;
        /**
         * @display function
         */
        onWheelCapture?: React.WheelEventHandler<T>;
    }
    /**
     * Animation events
     * @name AnimationEvents
     */
    export interface AnimationEventProps<T> {
        /**
         * @display function
         */
        onAnimationStart?: React.AnimationEventHandler<T>;
        /**
         * @display function
         */
        onAnimationStartCapture?: React.AnimationEventHandler<T>;
        /**
         * @display function
         */
        onAnimationEnd?: React.AnimationEventHandler<T>;
        /**
         * @display function
         */
        onAnimationEndCapture?: React.AnimationEventHandler<T>;
        /**
         * @display function
         */
        onAnimationIteration?: React.AnimationEventHandler<T>;
        /**
         * @display function
         */
        onAnimationIterationCapture?: React.AnimationEventHandler<T>;
    }
    /**
     * Transition events
     * @name TransitionEvents
     */
    export interface TransitionEventProps<T> {
        /**
         * @display function
         */
        onTransitionEnd?: React.TransitionEventHandler<T>;
        /**
         * @display function
         */
        onTransitionEndCapture?: React.TransitionEventHandler<T>;
    }
}
declare module "props/index" {
    import { FocusOptions } from "utils/handleFocus";
    import type { AttributeProp } from "props/types";
    export type ResolvedProps<Props, ClassesSchema extends Stage.ClassesSchemaDefinition, Element> = {
        attributes: ResolvedAttributes;
        events: ResolvedEvents<Props>;
        styleProps: ResolvedStyleProps;
        propOverridesClasses: Stage.OverridesClassesDefinition<ClassesSchema>;
    };
    export type ResolvedStyleProps = {
        all: Stage.CSSInterpolation[];
        container: Stage.CSSInterpolation[];
        content: Stage.CSSInterpolation[];
        style: Stage.CSSInterpolation[];
        margin: Stage.CSSInterpolation[];
        padding: Stage.CSSInterpolation[];
        position: Stage.CSSInterpolation[];
        color: Stage.CSSInterpolation[];
        border: Stage.CSSInterpolation[];
        layout: Stage.CSSInterpolation[];
        flex: Stage.CSSInterpolation[];
        grid: Stage.CSSInterpolation[];
        shadow: Stage.CSSInterpolation[];
    };
    export type ResolvedAttributes = AttributeProp;
    export type ResolvedEvents<Props> = Pick<Props, Stage.FilterStartingWith<keyof Props, 'on'>>;
    function resolveProps<Props extends Partial<Stage.AllProps<Element, ClassesSchema>>, Element extends HTMLElement, ClassesSchema extends Stage.ClassesSchemaDefinition>(props: Props, theme: Stage.Theme, focus: FocusOptions): ResolvedProps<Props, ClassesSchema, Element>;
    export default resolveProps;
}
declare module "props/overrides" {
    import type { ResolvedStyleProps } from "props/index";
    export type OverridesProp<ClassesSchema extends Stage.ClassesSchemaDefinition> = ((theme: Stage.Theme, styleProps: ResolvedStyleProps) => Stage.OverridesClassesDefinition<ClassesSchema>) | Stage.OverridesClassesDefinition<ClassesSchema>;
    function overridesProp<ClassesSchema extends Stage.ClassesSchemaDefinition>(prop: OverridesProp<ClassesSchema> | undefined, theme: Stage.Theme, styleProps: ResolvedStyleProps): Stage.OverridesClassesDefinition<ClassesSchema>;
    export default overridesProp;
}
declare module "utils/createID" {
    const _default: () => string;
    export default _default;
}
declare module "utils/isObject" {
    function isObject(value: any): boolean;
    export default isObject;
}
declare module "utils/mergeObjects" {
    export default function mergeObjects<Target extends Record<string, any>, Source extends Record<string, any>, Resolver extends (value: any) => any>(target: Target, src: Source, resolver?: Resolver): Target & Source;
}
declare module "utils/convertColors" {
    type ColorObject<C = Stage.ColorDefinition> = Record<string, C | Record<string, C>>;
    function convertColors(colors: ColorObject): ColorObject<Stage.Color>;
    export default convertColors;
}
declare module "utils/createTheme" {
    const createTheme: (themeDefinition: Stage.ThemeDefinition) => Stage.Theme;
    export default createTheme;
}
declare module "themes/light" {
    const lightTheme: Stage.Theme;
    export default lightTheme;
}
declare module "themes/dark" {
    const darkTheme: Stage.Theme;
    export default darkTheme;
}
declare module "themes/index" {
    export { default as light } from "themes/light";
    export { default as dark } from "themes/dark";
}
declare module "hooks/useTheme" {
    import React from 'react';
    export const StageContext: React.Context<Stage.Theme>;
    const _default_1: () => Stage.Theme;
    export default _default_1;
}
declare module "components/Provider" {
    import React from 'react';
    import { Options } from '@emotion/cache';
    export interface ProviderProps {
        theme: Stage.Theme;
        global?: Stage.CSSInterpolation;
        cacheOptions?: Options;
        children?: React.ReactNode;
    }
    export const cssReset = "\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video, button {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n";
    const Provider: <T extends ProviderProps>(props: T) => React.ReactElement;
    export default Provider;
}
declare module "hooks/useSystem" {
    import { ResolvedProps } from "props/index";
    export interface Options {
        focus?: 'always' | 'tabOnly' | 'never';
        label?: string;
        theme?: Stage.Theme;
    }
    export type ComponentData<Props, ClassesSchema extends Stage.ClassesSchemaDefinition, Element extends HTMLElement> = ResolvedProps<Props, ClassesSchema, Element> & {
        classes: Stage.Classes<ClassesSchema>;
    };
    function useSystem<Props extends Record<string, any>, ClassesSchema extends Stage.ClassesSchemaDefinition, Element extends HTMLElement>(name: string, props: Props, createClasses: Stage.CreateClasses<ClassesSchema, Props>, options?: Options): ComponentData<Props, ClassesSchema, Element>;
    export default useSystem;
}
declare module "hooks/useBreakpoints" {
    const useBreakpoints: <T>(values: T[]) => T;
    export default useBreakpoints;
}
declare module "hooks/useAppearance" {
    type Appearance = 'dark' | 'light';
    const useAppearance: () => Appearance;
    export default useAppearance;
}
declare module "utils/toFloat" {
    /**
     * Converts any value to Float
     */
    function toFloat(input: string | number): number;
    export default toFloat;
}
declare module "utils/getFontSize" {
    /**
     * Get base fontSize
     */
    function getFontSize(): number;
    export default getFontSize;
}
declare module "utils/isRem" {
    /**
     * Checks if value are rem value
     */
    function isRem(input: string | number): boolean;
    export default isRem;
}
declare module "utils/toPixel" {
    /**
     * Converts any value to number (example response: 16)
     */
    function toPixel(input: string | number): number;
    export default toPixel;
}
declare module "utils/getCurrentBreakpoint" {
    /**
     * Get current breakpoint index
     */
    function getCurrentBreakpoint(theme: Stage.Theme): number;
    export default getCurrentBreakpoint;
}
declare module "utils/isWebKit" {
    const _default_2: boolean;
    export default _default_2;
}
declare module "utils/toPx" {
    /**
     * Converts any value to pixels (example response: 16px)
     */
    function toPx(input: string | number): string;
    export default toPx;
}
declare module "utils/toRem" {
    /**
     * Converts any value to rems (example response: 1rem)
     */
    function toRem(input: string | number): string;
    export default toRem;
}
declare module "utils/createGradient" {
    type GradientOptions = {
        type?: 'linear' | 'radial' | 'conic';
        repeating?: boolean;
        colors: Stage.ColorProp[];
        positions?: (number | string)[];
        angle?: number;
    };
    /**
     * This utility creates gradient for CSS use
     */
    function createGradient(theme: Stage.Theme, gradientOptions: GradientOptions): string;
    export default createGradient;
}
declare module "index" {
    import { CSSInterpolation as CSSI, CSSObject as CSSO } from '@emotion/serialize';
    import { ColorProp as ColorPropType } from "props/color";
    import { OverridesProp as OverridesPropType } from "props/overrides";
    import { SpaceProp as SpacePropType } from "props/space";
    import { BreakpointProp as BreakpointPropType } from "props/breakpoint";
    import ColorType from 'color';
    import CSS from 'csstype';
    import { AllProps as AllPropsType } from "props/types";
    import { ResolvedStyleProps } from "props/index";
    global {
        namespace Stage {
            type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl';
            type CSSInterpolation = CSSI;
            type CSSObject = CSSO;
            type ColorDefinition = string | [number, number, number, number?];
            type Color = ColorType<ColorDefinition>;
            type ColorShades<C = Color> = {
                50: C;
                100: C;
                200: C;
                300: C;
                400: C;
                500: C;
                600: C;
                700: C;
                800: C;
                900: C;
            };
            type ColorAccentsShades<C = Color> = {
                A100: C;
                A200: C;
                A400: C;
                A700: C;
            };
            type ColorMain<C = Color> = {
                primary: C;
                secondary: C;
                surface: C;
                background: C;
                border: C;
                text: C;
                onPrimary: C;
                onSecondary: C;
                onSurface: C;
                onBackground: C;
                error: C;
                warning: C;
                success: C;
                info: C;
                black: C;
                white: C;
                /** @deprecated this field */
                surfaceVariant: C;
                /** @deprecated this field */
                backgroundVariant: C;
                /** @deprecated this field */
                light: C;
                /** @deprecated this field */
                lightest: C;
                /** @deprecated this field */
                hard: C;
                /** @deprecated this field */
                hardest: C;
            };
            type ColorCustom<C = Color> = {
                /** @deprecated this field */
                palette: Record<string, C>;
            };
            type ColorPalette<C = Color> = {
                gray: ColorShades<C>;
                yellow: ColorShades<C> & ColorAccentsShades<C>;
                orange: ColorShades<C> & ColorAccentsShades<C>;
                red: ColorShades<C>;
                rose: ColorShades<C>;
                pink: ColorShades<C>;
                green: ColorShades<C>;
                lightGreen: ColorShades<C> & ColorAccentsShades<C>;
                lime: ColorAccentsShades<C>;
                teal: ColorShades<C>;
                cyan: ColorShades<C> & ColorAccentsShades<C>;
                lightBlue: ColorShades<C> & ColorAccentsShades<C>;
                blue: ColorShades<C> & ColorAccentsShades<C>;
                indigo: ColorShades<C>;
                purple: ColorShades<C>;
            };
            type ColorNames = LiteralUnion<LiteralUnion<keyof ColorMain | `gray${keyof ColorPalette['gray']}` | `yellow${keyof ColorPalette['yellow']}` | `orange${keyof ColorPalette['orange']}` | `red${keyof ColorPalette['red']}` | `rose${keyof ColorPalette['rose']}` | `pink${keyof ColorPalette['pink']}` | `green${keyof ColorPalette['green']}` | `lightGreen${keyof ColorPalette['lightGreen']}` | `lime${keyof ColorPalette['lime']}` | `teal${keyof ColorPalette['teal']}` | `cyan${keyof ColorPalette['cyan']}` | `lightBlue${keyof ColorPalette['lightBlue']}` | `blue${keyof ColorPalette['blue']}` | `indigo${keyof ColorPalette['indigo']}` | `purple${keyof ColorPalette['purple']}`, keyof ColorCustom['palette']>, string>;
            type Colors<C = Color, Definition = false> = ColorMain<C> & ColorPalette<C> & (Definition extends true ? Partial<ColorCustom<C>> : ColorCustom<C>);
            interface ThemeMain<C = Color, Definition = false> {
                name: string;
                color: Colors<C, Definition>;
                breakpoints: string[];
                radius: Record<Sizes, string>;
                spacing: Record<Sizes, string>;
            }
            interface ThemeAssets {
                global?: Stage.CSSInterpolation;
                border: {
                    width: string;
                    style: CSS.Properties['borderStyle'];
                    color: string;
                };
                shadow: Record<Sizes, string>;
                innerShadow: Record<Sizes, string>;
                focus: CSSObject;
                field: Record<Sizes, {
                    indent: string | number;
                    height: string | number;
                }>;
                typography: {
                    header: Record<Sizes, CSSObject>;
                    text: Record<Sizes, CSSObject>;
                    paragraph: Record<Sizes, CSSObject>;
                    article: {
                        header: Record<Sizes, CSSObject>;
                        paragraph: CSSObject;
                    };
                };
            }
            interface ThemeOverrides {
            }
            type ThemeComponentOverrides<Props, ClassesSchema extends ClassesSchemaDefinition> = ((props: Props, styleProps: ResolvedStyleProps) => OverridesClassesDefinition<ClassesSchema>) | OverridesClassesDefinition<ClassesSchema>;
            interface Theme extends ThemeMain {
                assets: ThemeAssets;
                overrides: ThemeOverrides;
                replace: (theme: ReplaceTheme) => Theme;
            }
            interface ThemeDefinition {
                main: ThemeMain<Stage.ColorDefinition, true>;
                assets: ((main: ThemeMain) => ThemeAssets) | ThemeAssets;
                overrides?: ((main: ThemeMain, assets: ThemeAssets) => Stage.ThemeOverrides) | Stage.ThemeOverrides;
            }
            interface ReplaceTheme {
                main?: DeepPartial<ThemeDefinition['main']>;
                assets?: ((main: Stage.ThemeMain) => DeepPartial<Stage.ThemeAssets>) | DeepPartial<Stage.ThemeAssets>;
                overrides?: ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => Stage.ThemeOverrides) | Stage.ThemeOverrides;
            }
            type ClassStateDefinition = Record<string, string | number | boolean | undefined | null> | void;
            type ClassesSchemaDefinition = Record<string, ClassStateDefinition>;
            type CreateClasses<ClassesSchema extends ClassesSchemaDefinition, Props> = (theme: Stage.Theme, props: Props, styleProps: ResolvedStyleProps) => Stage.ClassesDefinition<ClassesSchema>;
            type OverridesClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = Partial<{
                [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void ? Stage.CSSInterpolation : FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>> | Stage.CSSInterpolation;
            }>;
            type ClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = {
                [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void ? Stage.CSSInterpolation : FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>>;
            };
            type FunctionClassDefinition<ClassState extends Exclude<ClassStateDefinition, void>> = (state: ClassState) => Stage.CSSInterpolation;
            type Classes<ClassesSchema extends ClassesSchemaDefinition> = {
                [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void ? Stage.CSSInterpolation : FunctionClass<ClassesSchema[ClassName]>;
            };
            type FunctionClass<ClassSchema extends ClassStateDefinition> = (state: ClassSchema) => Stage.CSSInterpolation;
            type AllProps<Container, ClassSchema extends ClassesSchemaDefinition = ClassesSchemaDefinition> = AllPropsType<Container, ClassSchema>;
            type ColorProp = ColorPropType;
            type OverridesProp<ClassesSchema extends Stage.ClassesSchemaDefinition> = OverridesPropType<ClassesSchema>;
            type SpaceProp = SpacePropType;
            type BreakpointProp<T> = BreakpointPropType<T>;
            type Primitive = null | undefined | string | number | boolean | symbol | bigint;
            type FilterStartingWith<Set, Needle extends string> = Set extends `${Needle}${string}` ? Set : never;
            type DeepPartial<T> = {
                [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
            };
            type LiteralUnion<LiteralType, BaseType extends Primitive> = LiteralType | (BaseType & Record<never, never>);
        }
    }
    module 'csstype' {
        interface Properties {
            display?: 'block' | 'inline' | 'inline-block' | 'inline-table' | 'list-item' | 'none' | 'run-in' | 'table' | 'table-caption' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group' | 'flex' | 'grid';
            overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit';
        }
    }
    export { default as Provider } from "components/Provider";
    export { default as useTheme } from "hooks/useTheme";
    export { default as useSystem } from "hooks/useSystem";
    export { default as useBreakpoints } from "hooks/useBreakpoints";
    export { default as useAppearance } from "hooks/useAppearance";
    export { default as breakpointProp } from "props/breakpoint";
    export { default as colorProp } from "props/color";
    export { default as overridesProp } from "props/overrides";
    export { default as sizeProp } from "props/size";
    export { default as spaceProp } from "props/space";
    export { light as lightTheme } from "themes/index";
    export { dark as darkTheme } from "themes/index";
    export { default as getCurrentBreakpoint } from "utils/getCurrentBreakpoint";
    export { default as createID } from "utils/createID";
    export { default as createTheme } from "utils/createTheme";
    export { default as getFontSize } from "utils/getFontSize";
    export { default as isBrowser } from "utils/isBrowser";
    export { default as isFunction } from "utils/isFunction";
    export { default as isObject } from "utils/isObject";
    export { default as isRem } from "utils/isRem";
    export { default as isWebKit } from "utils/isWebKit";
    export { default as mergeObjects } from "utils/mergeObjects";
    export { default as toFloat } from "utils/toFloat";
    export { default as toPixel } from "utils/toPixel";
    export { default as toPx } from "utils/toPx";
    export { default as toRem } from "utils/toRem";
    export { default as createGradient } from "utils/createGradient";
}
