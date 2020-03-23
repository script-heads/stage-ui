declare module '@flow-ui/whale/types' {
	import React from 'react';
	import QIXColor from 'color';
	import CSS from 'csstype';
	import { Interpolation, SerializedStyles, ObjectInterpolation } from '@emotion/core'; global {
	    namespace Whale {
	        interface Palette<Color> {
	        }
	        interface Overrides {
	        }
	    }
	}
	export type EmotionStyles = Array<Interpolation> | ObjectInterpolation<undefined>;
	export type Breakpointify<T> = T[] | T; namespace WhaleTypes {
	    type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
	    /**
	     * @displayType Color
	     */
	    type ColorProp = ((colors: Theme['color']) => QIXColor | string) | keyof Omit<Theme['color'], 'palette'> | keyof Theme['color']['palette'] | QIXColor | (string & {
	        T?: string;
	    });
	    type Styles<StyleDefinitions> = {
	        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object ? ((variant: Variant<StyleDefinitions[StyleName]>) => EmotionStyles) : EmotionStyles;
	    };
	    type ComponentStyles<StyleDefinitions> = {
	        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object ? (state: StyleDefinitions[StyleName]) => SerializedStyles : SerializedStyles;
	    };
	    type Variant<StyleDefinitions> = (variants: Partial<{
	        [StyleName in keyof StyleDefinitions]: Partial<Record<Extract<StyleDefinitions[StyleName], string>, EmotionStyles>>;
	    }>) => EmotionStyles;
	    type CreateStyles<Overrides, Props = {}, Params = {}> = (props: Props, theme: Theme, params?: Params) => Styles<Overrides>;
	    interface Theme extends ThemeVariables {
	        assets: ThemeAssets;
	        overrides?: Partial<{
	            [Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>;
	        }>;
	        replace: (theme: ReplaceTheme) => Theme;
	    }
	    interface SourceTheme {
	        main: Omit<ThemeVariables<[number, number, number, number?]>, 'breakpoints'> & {
	            breakpoints?: string[];
	        };
	        assets: (main: ThemeVariables) => ThemeAssets;
	        overrides?: (main: ThemeVariables, assets: ThemeAssets) => Partial<{
	            [Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>;
	        }>;
	    }
	    interface ReplaceTheme {
	        main: DeepPartial<ThemeVariables<[number, number, number, number?]>>;
	        assets?: (main: ThemeVariables) => DeepPartial<ThemeAssets>;
	        overrides?: (main: ThemeVariables, assets: ThemeAssets) => Partial<{
	            [Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>;
	        }>;
	    }
	    interface ThemeVariables<Color = QIXColor<[number, number, number, number?]>> {
	        name: string;
	        color: {
	            background: Color;
	            backgroundVariant: Color;
	            surface: Color;
	            surfaceVariant: Color;
	            primary: Color;
	            secondary: Color;
	            onBackground: Color;
	            onSurface: Color;
	            onPrimary: Color;
	            onSecondary: Color;
	            lightest: Color;
	            light: Color;
	            hard: Color;
	            hardest: Color;
	            error: Color;
	            warning: Color;
	            success: Color;
	            info: Color;
	            palette: Whale.Palette<Color>;
	        };
	        breakpoints: string[];
	        radius: Record<Size, string>;
	        spacing: Record<Size, string>;
	    }
	    interface ThemeAssets {
	        global?: EmotionStyles;
	        border: {
	            width: string;
	            style: string;
	            color: string;
	        };
	        shadow: {
	            default: string;
	            short: string;
	            long: string;
	        };
	        focus: EmotionStyles;
	        field: Record<Size, {
	            minHeight: string;
	            padding: string;
	        }>;
	        typography: {
	            header: Record<Size, {
	                fontSize: string;
	                lineHeight: string | number;
	            } & EmotionStyles>;
	            text: Record<Size, {
	                fontSize: string;
	                lineHeight: string | number;
	            } & EmotionStyles>;
	            display: Record<Size, {
	                fontSize: string;
	                lineHeight: string | number;
	            } & EmotionStyles>;
	            paragraph: Record<Size, {
	                fontSize: string;
	                lineHeight: string | number;
	            } & EmotionStyles>;
	        };
	    }
	    /**
	     * All typical component props
	     * @name All
	     */
	    interface AllProps<Container, Styles> extends AttributeProps, AllEventProps<Container>, CoreProps<Styles>, ColorProps, BorderProps, PaddingProps, LayoutProps, MarginProps, FlexProps, GridProps {
	    }
	    /**
	     * DOM events
	     * @name Event
	     */
	    interface AllEventProps<T> extends FormEventProps<T>, FocusEventProps<T>, ImageEventProps<T>, MediaEventProps<T>, MouseEventProps<T>, TouchEventProps<T>, WheelEventProps<T>, PointerEventProps<T>, KeyboardEventProps<T>, SelectionEventProps<T>, AnimationEventProps<T>, ClipboardEventProps<T>, TransitionEventProps<T>, CompositionEventProps<T>, ScrollEventProps<T> {
	    }
	    /**
	     * Component core props
	     * @name Core
	     */
	    interface CoreProps<S = {}> {
	        styles?: Partial<Styles<S>>;
	        animated?: boolean;
	    }
	    /**
	     * Component attribute props
	     * @name Attributes
	     */
	    interface AttributeProps extends React.AriaAttributes {
	        className?: string;
	        id?: string;
	        /**
	         * @displayType CSS
	         */
	        style?: React.CSSProperties;
	        tabIndex?: number;
	        role?: string;
	        draggable?: boolean;
	        attrs?: Object;
	    }
	    /**
	     * Component color styles props
	     * @name Color
	     */
	    interface ColorProps {
	        /**
	         * @displayType Color
	         * @breakpointify
	         */
	        textColor?: Breakpointify<ColorProp>;
	        /**
	         * @displayType Color
	         * @breakpointify
	         */
	        backgroundColor?: Breakpointify<ColorProp>;
	    }
	    /**
	     * Component border styles props
	     * @name Border
	     */
	    interface BorderProps {
	        /**
	         * Border width
	         * @breakpointify
	         */
	        borderWidth?: Breakpointify<CSS.Properties['borderWidth']>;
	        /**
	         * Border style
	         * @breakpointify
	         */
	        borderStyle?: Breakpointify<CSS.Properties['borderStyle']>;
	        /**
	         * Border color
	         * @breakpointify
	         */
	        borderColor?: Breakpointify<ColorProp>;
	        /**
	         * Border radius
	         * @breakpointify
	         */
	        borderRadius?: Breakpointify<CSS.Properties['borderRadius']>;
	    }
	    /**
	     * Component layout styles props
	     * @name Layout
	     */
	    interface LayoutProps {
	        /**
	         * Width alias
	         * @breakpointify
	         */
	        w?: Breakpointify<CSS.Properties['width']>;
	        /**
	         * Heigth alias
	         * @breakpointify
	         */
	        h?: Breakpointify<CSS.Properties['height']>;
	        /**
	         * Specifies the type of positioning method used for an element
	         * (static, relative, fixed, absolute or sticky).
	         * @breakpointify
	         */
	        position?: Breakpointify<CSS.Properties['position']>;
	        /**
	         * Shows or hides an element without changing the layout
	         * of a document.
	         * @breakpointify
	         */
	        visibility?: Breakpointify<CSS.Properties['visibility']>;
	        /**
	         * Sets whether an element is treated as a block or
	         * inline element and the layout used for its children,
	         * such as flow layout, grid or flex.
	         * @breakpointify
	         */
	        display?: Breakpointify<CSS.Properties['display']>;
	        /**
	         * Set the font size
	         * @breakpointify
	         */
	        fontSize?: Breakpointify<CSS.Properties['fontSize']>;
	        /**
	         * @breakpointify
	         */
	        lineHeight?: Breakpointify<CSS.Properties['lineHeight']>;
	        /**
	         * @breakpointify
	         */
	        letterSpacing?: Breakpointify<CSS.Properties['fontSize']>;
	        /**
	         * @breakpointify
	         */
	        textAlign?: Breakpointify<CSS.Properties['textAlign']>;
	    }
	    /**
	     * Component padding styles props
	     * @name Padding
	     */
	    interface PaddingProps {
	        /**
	         * Padding alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        p?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * Padding horizontal alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        px?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * Padding vertical alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        py?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * PaddingRight alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        pr?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * PaddingLeft alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        pl?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * PaddingTop alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        pt?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * PaddingBottom alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        pb?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	    }
	    /**
	     * Component margin styles props
	     * @name Margin
	     */
	    interface MarginProps {
	        /**
	         * Margin alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        m?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * Margin horizontal alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        mx?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * Margin vertical alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        my?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * MarginRight alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        mr?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * MarginLeft alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        ml?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * MarginTop alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        mt?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	        /**
	         * MarginBottom alias
	         * @breakpointify
	         * @displayType Size | string | number
	         */
	        mb?: Breakpointify<Size | (string & {
	            T?: string;
	        }) | number>;
	    }
	    /**
	     * Used for flex attributes
	     * CSS props have string witch kills helps at ide
	     */
	    type FlexSpace = 'space-around' | 'space-between' | 'space-evenly';
	    type FlexSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';
	    type FlexDirection = 'inherit' | 'initial' | 'revert' | 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse';
	    type FlexWrap = 'inherit' | 'initial' | 'revert' | 'unset' | 'nowrap' | 'wrap' | 'wrap-reverse';
	    /**
	     * Used for grid attributes
	     * CSS props have string witch kills helps at ide
	     */
	    type GridSpace = 'space-around' | 'space-between' | 'space-evenly';
	    type GridSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'start' | 'end' | 'stretch';
	    /**
	     * Component flexbox children styles props
	     * @name Flex
	     */
	    interface FlexProps {
	        /**
	         * Sets how a flex item will grow or shrink to fit the
	         * space available in its flex container.
	         * @breakpointify
	         */
	        flex?: Breakpointify<CSS.Properties['flex']>;
	        /**
	         * Sets the initial main size of a flex item. It sets the
	         * size of the content box unless otherwise set with box-sizing.
	         * @breakpointify
	         */
	        flexBasis?: Breakpointify<CSS.Properties['flexBasis']>;
	        /**
	         * Sets the flex grow factor of a flex item main size.
	         * It specifies how much of the remaining space in the
	         * flex container should be assigned to the item
	         * (the flex grow factor).
	         * @breakpointify
	         */
	        flexGrow?: Breakpointify<CSS.Properties['flexGrow']>;
	        /**
	         * Sets the flex shrink factor of a flex item.
	         * If the size of all flex items is lr than
	         * the flex container, items shrink to fit
	         * according to flex-shrink.
	         * @breakpointify
	         */
	        flexShrink?: Breakpointify<CSS.Properties['flexShrink']>;
	        /**
	         * Property overrides a grid or flex item's
	         * align-items value. In Grid, it aligns the
	         * item inside the grid area. In Flexbox,
	         * it aligns the item on the cross axis.
	         * @breakpointify
	         */
	        alignSelf?: Breakpointify<FlexSelf>;
	        /**
	         * Sets the way a box is justified inside its
	         * alignment container along the appropriate axis.
	         * @breakpointify
	         */
	        justifySelf?: Breakpointify<FlexSelf>;
	    }
	    interface GridContainerProps {
	        /**
	         * @breakpointify
	         */
	        gridTemplateColumns?: Breakpointify<CSS.Properties['gridTemplateColumns']>;
	        /**
	         * @breakpointify
	         */
	        gridTemplateRows?: Breakpointify<CSS.Properties['gridTemplateRows']>;
	        /**
	         * @breakpointify
	         */
	        gridTemplateAreas?: Breakpointify<CSS.Properties['gridTemplateAreas']>;
	        /**
	         * @breakpointify
	         */
	        gridColumnGap?: Breakpointify<CSS.Properties['gridColumnGap']>;
	        /**
	         * @breakpointify
	         */
	        gridRowGap?: Breakpointify<CSS.Properties['gridRowGap']>;
	        /**
	         * @breakpointify
	         */
	        gridGap?: Breakpointify<CSS.Properties['gridGap']>;
	        /**
	         * @breakpointify
	         */
	        gridAutoColumns?: Breakpointify<CSS.Properties['gridAutoColumns']>;
	        /**
	         * @breakpointify
	         */
	        gridAutoRows?: Breakpointify<CSS.Properties['gridAutoRows']>;
	        /**
	         * @breakpointify
	         */
	        gridAutoFlow?: Breakpointify<CSS.Properties['gridAutoFlow']>;
	        /**
	         * @breakpointify
	         */
	        alignItems?: Breakpointify<GridSelf>;
	        /**
	         * @displayType inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
	         */
	        alignContent?: Breakpointify<GridSpace | GridSelf>;
	        /**
	         * @displayType inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
	         */
	        justifyContent?: Breakpointify<GridSpace | GridSelf>;
	        /**
	         * @displayType inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
	         */
	        justifyItems?: Breakpointify<GridSpace | GridSelf>;
	    }
	    interface FlexboxContainerProps {
	        /**
	         * @breakpointify
	         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch
	         */
	        alignItems?: Breakpointify<FlexSelf>;
	        /**
	         * @breakpointify
	         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
	         */
	        alignContent?: Breakpointify<FlexSelf | FlexSpace>;
	        /**
	         * @breakpointify
	         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
	         */
	        placeContent?: Breakpointify<FlexSelf | FlexSpace>;
	        /**
	         * @breakpointify
	         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
	         */
	        justifyContent?: Breakpointify<FlexSelf | FlexSpace>;
	        /**
	         * @breakpointify
	         * @displayType inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
	         */
	        justifyItems?: Breakpointify<FlexSelf | FlexSpace>;
	        direction?: Breakpointify<FlexDirection>;
	        wrap?: Breakpointify<FlexWrap>;
	        /**
	         * Short for direction and wrap
	         * @breakpointify
	         */
	        flow?: Breakpointify<CSS.Properties['flexFlow']>;
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
	         * @breakpointify
	         */
	        gridColumnStart?: Breakpointify<CSS.Properties['gridColumnStart']>;
	        /**
	         * Specifies a grid item’s end position within the
	         * grid column by contributing a line, a span, or
	         * nothing (automatic) to its grid placement, thereby
	         * specifying the block-end edge of its grid area.
	         * @breakpointify
	         */
	        gridColumnEnd?: Breakpointify<CSS.Properties['gridColumnEnd']>;
	        /**
	         * Specifies a grid item’s start position within the
	         * grid row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby specifying
	         * the inline-start edge of its grid area.
	         * @breakpointify
	         */
	        gridRowStart?: Breakpointify<CSS.Properties['gridRowStart']>;
	        /**
	         * Specifies a grid item’s end position within the grid
	         * row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby
	         * specifying the inline-end edge of its grid area.
	         * @breakpointify
	         */
	        gridRowEnd?: Breakpointify<CSS.Properties['gridRowEnd']>;
	        /**
	         * Shorthand property for grid-column-start and
	         * grid-column-end specifying a grid item's size
	         * and location within the grid column by contributing
	         * a line, a span, or nothing (automatic) to its grid
	         * placement, thereby specifying the inline-start and
	         * inline-end edge of its grid area.
	         * @breakpointify
	         */
	        gridColumn?: Breakpointify<CSS.Properties['gridColumn']>;
	        /**
	         * Shorthand property for grid-row-start and grid-row-end
	         * specifying a grid item’s size and location within the
	         * grid row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby specifying
	         * the inline-start and inline-end edge of its grid area.
	         * @breakpointify
	         */
	        gridRow?: Breakpointify<CSS.Properties['gridRow']>;
	        /**
	         * Shorthand property for grid-row-start, grid-column-start,
	         * grid-row-end and grid-column-end, specifying a grid item’s
	         * size and location within the grid by contributing a line, a
	         * span, or nothing (automatic) to its grid placement, thereby
	         * specifying the edges of its grid area.
	         * @breakpointify
	         */
	        gridArea?: Breakpointify<CSS.Properties['gridArea']>;
	        /**
	         * Shorthand property sets both the align-self and justify-self
	         * properties. The first value is the align-self property value,
	         * the second the justify-self one. If the second value is not
	         * present, the first value is also used for it.
	         * @breakpointify
	         */
	        placeSelf?: Breakpointify<FlexSelf>;
	    }
	    /**
	     * Clipboard Events
	     * @name ClipboardEvents
	     */
	    interface ClipboardEventProps<T> {
	        onCopy?: React.ClipboardEventHandler<T>;
	        onCopyCapture?: React.ClipboardEventHandler<T>;
	        onCut?: React.ClipboardEventHandler<T>;
	        onCutCapture?: React.ClipboardEventHandler<T>;
	        onPaste?: React.ClipboardEventHandler<T>;
	        onPasteCapture?: React.ClipboardEventHandler<T>;
	    }
	    /**
	     * Composition events
	     * @name CompositionEvents
	     */
	    interface CompositionEventProps<T> {
	        onCompositionEnd?: React.CompositionEventHandler<T>;
	        onCompositionEndCapture?: React.CompositionEventHandler<T>;
	        onCompositionStart?: React.CompositionEventHandler<T>;
	        onCompositionStartCapture?: React.CompositionEventHandler<T>;
	        onCompositionUpdate?: React.CompositionEventHandler<T>;
	        onCompositionUpdateCapture?: React.CompositionEventHandler<T>;
	    }
	    /**
	     * Focus events
	     * @name FocusEvents
	     */
	    interface FocusEventProps<T> {
	        onFocus?: React.FocusEventHandler<T>;
	        onFocusCapture?: React.FocusEventHandler<T>;
	        onBlur?: React.FocusEventHandler<T>;
	        onBlurCapture?: React.FocusEventHandler<T>;
	    }
	    /**
	     * Form events
	     * @name FormEvents
	     */
	    interface FormEventProps<T> {
	        onChange?: React.FormEventHandler<T>;
	        onChangeCapture?: React.FormEventHandler<T>;
	        onBeforeInput?: React.FormEventHandler<T>;
	        onBeforeInputCapture?: React.FormEventHandler<T>;
	        onInput?: React.FormEventHandler<T>;
	        onInputCapture?: React.FormEventHandler<T>;
	        onReset?: React.FormEventHandler<T>;
	        onResetCapture?: React.FormEventHandler<T>;
	        onSubmit?: React.FormEventHandler<T>;
	        onSubmitCapture?: React.FormEventHandler<T>;
	        onInvalid?: React.FormEventHandler<T>;
	        onInvalidCapture?: React.FormEventHandler<T>;
	    }
	    /**
	     * Image events
	     * @name ImageEvents
	     */
	    interface ImageEventProps<T> {
	        onLoad?: React.ReactEventHandler<T>;
	        onLoadCapture?: React.ReactEventHandler<T>;
	        onError?: React.ReactEventHandler<T>;
	        onErrorCapture?: React.ReactEventHandler<T>;
	    }
	    /**
	     * Keyboard events
	     * @name KeyboardEvents
	     */
	    interface KeyboardEventProps<T> {
	        onKeyDown?: React.KeyboardEventHandler<T>;
	        onKeyDownCapture?: React.KeyboardEventHandler<T>;
	        onKeyPress?: React.KeyboardEventHandler<T>;
	        onKeyPressCapture?: React.KeyboardEventHandler<T>;
	        onKeyUp?: React.KeyboardEventHandler<T>;
	        onKeyUpCapture?: React.KeyboardEventHandler<T>;
	        onEnter?: React.KeyboardEventHandler<T>;
	        onEsc?: React.KeyboardEventHandler<T>;
	    }
	    /**
	     * Media events
	     * @name MediaEvents
	     */
	    interface MediaEventProps<T> {
	        onAbort?: React.ReactEventHandler<T>;
	        onAbortCapture?: React.ReactEventHandler<T>;
	        onCanPlay?: React.ReactEventHandler<T>;
	        onCanPlayCapture?: React.ReactEventHandler<T>;
	        onCanPlayThrough?: React.ReactEventHandler<T>;
	        onCanPlayThroughCapture?: React.ReactEventHandler<T>;
	        onDurationChange?: React.ReactEventHandler<T>;
	        onDurationChangeCapture?: React.ReactEventHandler<T>;
	        onEmptied?: React.ReactEventHandler<T>;
	        onEmptiedCapture?: React.ReactEventHandler<T>;
	        onEncrypted?: React.ReactEventHandler<T>;
	        onEncryptedCapture?: React.ReactEventHandler<T>;
	        onEnded?: React.ReactEventHandler<T>;
	        onEndedCapture?: React.ReactEventHandler<T>;
	        onLoadedData?: React.ReactEventHandler<T>;
	        onLoadedDataCapture?: React.ReactEventHandler<T>;
	        onLoadedMetadata?: React.ReactEventHandler<T>;
	        onLoadedMetadataCapture?: React.ReactEventHandler<T>;
	        onLoadStart?: React.ReactEventHandler<T>;
	        onLoadStartCapture?: React.ReactEventHandler<T>;
	        onPause?: React.ReactEventHandler<T>;
	        onPauseCapture?: React.ReactEventHandler<T>;
	        onPlay?: React.ReactEventHandler<T>;
	        onPlayCapture?: React.ReactEventHandler<T>;
	        onPlaying?: React.ReactEventHandler<T>;
	        onPlayingCapture?: React.ReactEventHandler<T>;
	        onProgress?: React.ReactEventHandler<T>;
	        onProgressCapture?: React.ReactEventHandler<T>;
	        onRateChange?: React.ReactEventHandler<T>;
	        onRateChangeCapture?: React.ReactEventHandler<T>;
	        onSeeked?: React.ReactEventHandler<T>;
	        onSeekedCapture?: React.ReactEventHandler<T>;
	        onSeeking?: React.ReactEventHandler<T>;
	        onSeekingCapture?: React.ReactEventHandler<T>;
	        onStalled?: React.ReactEventHandler<T>;
	        onStalledCapture?: React.ReactEventHandler<T>;
	        onSuspend?: React.ReactEventHandler<T>;
	        onSuspendCapture?: React.ReactEventHandler<T>;
	        onTimeUpdate?: React.ReactEventHandler<T>;
	        onTimeUpdateCapture?: React.ReactEventHandler<T>;
	        onVolumeChange?: React.ReactEventHandler<T>;
	        onVolumeChangeCapture?: React.ReactEventHandler<T>;
	        onWaiting?: React.ReactEventHandler<T>;
	        onWaitingCapture?: React.ReactEventHandler<T>;
	    }
	    /**
	     * Mouse event
	     * @name MouseEvents
	     */
	    interface MouseEventProps<T> {
	        onAuxClick?: React.MouseEventHandler<T>;
	        onAuxClickCapture?: React.MouseEventHandler<T>;
	        onClick?: React.MouseEventHandler<T>;
	        onClickCapture?: React.MouseEventHandler<T>;
	        onContextMenu?: React.MouseEventHandler<T>;
	        onContextMenuCapture?: React.MouseEventHandler<T>;
	        onDoubleClick?: React.MouseEventHandler<T>;
	        onDoubleClickCapture?: React.MouseEventHandler<T>;
	        onDrag?: React.DragEventHandler<T>;
	        onDragCapture?: React.DragEventHandler<T>;
	        onDragEnd?: React.DragEventHandler<T>;
	        onDragEndCapture?: React.DragEventHandler<T>;
	        onDragEnter?: React.DragEventHandler<T>;
	        onDragEnterCapture?: React.DragEventHandler<T>;
	        onDragExit?: React.DragEventHandler<T>;
	        onDragExitCapture?: React.DragEventHandler<T>;
	        onDragLeave?: React.DragEventHandler<T>;
	        onDragLeaveCapture?: React.DragEventHandler<T>;
	        onDragOver?: React.DragEventHandler<T>;
	        onDragOverCapture?: React.DragEventHandler<T>;
	        onDragStart?: React.DragEventHandler<T>;
	        onDragStartCapture?: React.DragEventHandler<T>;
	        onDrop?: React.DragEventHandler<T>;
	        onDropCapture?: React.DragEventHandler<T>;
	        onMouseDown?: React.MouseEventHandler<T>;
	        onMouseDownCapture?: React.MouseEventHandler<T>;
	        onMouseEnter?: React.MouseEventHandler<T>;
	        onMouseLeave?: React.MouseEventHandler<T>;
	        onMouseMove?: React.MouseEventHandler<T>;
	        onMouseMoveCapture?: React.MouseEventHandler<T>;
	        onMouseOut?: React.MouseEventHandler<T>;
	        onMouseOutCapture?: React.MouseEventHandler<T>;
	        onMouseOver?: React.MouseEventHandler<T>;
	        onMouseOverCapture?: React.MouseEventHandler<T>;
	        onMouseUp?: React.MouseEventHandler<T>;
	        onMouseUpCapture?: React.MouseEventHandler<T>;
	    }
	    /**
	     * Selection events
	     * @name SelectionEvents
	     */
	    interface SelectionEventProps<T> {
	        onSelect?: React.ReactEventHandler<T>;
	        onSelectCapture?: React.ReactEventHandler<T>;
	    }
	    /**
	     * Touch events
	     * @name TouchEvents
	     */
	    interface TouchEventProps<T> {
	        onTouchCancel?: React.TouchEventHandler<T>;
	        onTouchCancelCapture?: React.TouchEventHandler<T>;
	        onTouchEnd?: React.TouchEventHandler<T>;
	        onTouchEndCapture?: React.TouchEventHandler<T>;
	        onTouchMove?: React.TouchEventHandler<T>;
	        onTouchMoveCapture?: React.TouchEventHandler<T>;
	        onTouchStart?: React.TouchEventHandler<T>;
	        onTouchStartCapture?: React.TouchEventHandler<T>;
	    }
	    /**
	     * Pointer events
	     * @name PointerEvents
	     */
	    interface PointerEventProps<T> {
	        onPointerDown?: React.PointerEventHandler<T>;
	        onPointerDownCapture?: React.PointerEventHandler<T>;
	        onPointerMove?: React.PointerEventHandler<T>;
	        onPointerMoveCapture?: React.PointerEventHandler<T>;
	        onPointerUp?: React.PointerEventHandler<T>;
	        onPointerUpCapture?: React.PointerEventHandler<T>;
	        onPointerCancel?: React.PointerEventHandler<T>;
	        onPointerCancelCapture?: React.PointerEventHandler<T>;
	        onPointerEnter?: React.PointerEventHandler<T>;
	        onPointerLeave?: React.PointerEventHandler<T>;
	        onPointerOver?: React.PointerEventHandler<T>;
	        onPointerOverCapture?: React.PointerEventHandler<T>;
	        onPointerOut?: React.PointerEventHandler<T>;
	        onPointerOutCapture?: React.PointerEventHandler<T>;
	        onGotPointerCapture?: React.PointerEventHandler<T>;
	        onGotPointerCaptureCapture?: React.PointerEventHandler<T>;
	        onLostPointerCapture?: React.PointerEventHandler<T>;
	        onLostPointerCaptureCapture?: React.PointerEventHandler<T>;
	    }
	    /**
	     * Scroll events
	     * @name ScrollEvents
	     */
	    interface ScrollEventProps<T> {
	        onScroll?: React.UIEventHandler<T>;
	        onScrollCapture?: React.UIEventHandler<T>;
	    }
	    /**
	     * Wheel events
	     * @name WheelEvents
	     */
	    interface WheelEventProps<T> {
	        onWheel?: React.WheelEventHandler<T>;
	        onWheelCapture?: React.WheelEventHandler<T>;
	    }
	    /**
	     * Animation events
	     * @name AnimationEvents
	     */
	    interface AnimationEventProps<T> {
	        onAnimationStart?: React.AnimationEventHandler<T>;
	        onAnimationStartCapture?: React.AnimationEventHandler<T>;
	        onAnimationEnd?: React.AnimationEventHandler<T>;
	        onAnimationEndCapture?: React.AnimationEventHandler<T>;
	        onAnimationIteration?: React.AnimationEventHandler<T>;
	        onAnimationIterationCapture?: React.AnimationEventHandler<T>;
	    }
	    /**
	     * Transition events
	     * @name TransitionEvents
	     */
	    interface TransitionEventProps<T> {
	        onTransitionEnd?: React.TransitionEventHandler<T>;
	        onTransitionEndCapture?: React.TransitionEventHandler<T>;
	    }
	} module 'csstype' {
	    interface Properties {
	        display?: 'block' | 'inline' | 'inline-block' | 'inline-table' | 'list-item' | 'none' | 'run-in' | 'table' | 'table-caption' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group' | 'flex' | 'grid';
	        overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit';
	    }
	}
	export type DeepPartial<T> = {
	    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
	};
	export default WhaleTypes;

}
declare module 'components/Provider' {
	import React from 'react';
	import { Options } from '@emotion/cache';
	import { SerializedStyles } from '@emotion/core';
	import WhaleTypes from 'types';
	interface ProviderProps {
	    theme?: WhaleTypes.Theme;
	    global?: SerializedStyles;
	    cache?: Options;
	    children?: React.ReactNode;
	}
	export const WhaleContext: React.Context<WhaleTypes.Theme>; const Provider: <T extends ProviderProps>(props: T) => JSX.Element;
	export default Provider;

}
declare module 'hooks/useTheme' {
	 const _default: () => import("../types").default.Theme;
	export default _default;

}
declare module 'utils/attachProps/types' {
	import CSS from 'csstype';
	import WhaleTypes from 'types'; namespace WhalePropsTypes {
	    type StyleResolverObject = {
	        [key: string]: [string, string, StyleResolver?];
	    };
	    type StyleResolverContext = {
	        padding: [string, string, string, string];
	        margin: [string, string, string, string];
	    };
	    type StyleResolver = (resolverParams: {
	        propValue: any;
	        propName: string;
	        styleName: string;
	        theme: WhaleTypes.Theme;
	        ctx: StyleResolverContext;
	    }) => string | Record<string, string> | void;
	    interface StyleProps extends WhaleTypes.ColorProps, WhaleTypes.BorderProps, WhaleTypes.PaddingProps, WhaleTypes.MarginProps, WhaleTypes.LayoutProps, WhaleTypes.FlexProps, WhaleTypes.GridProps {
	        [key: string]: unknown;
	    }
	    interface InjectedStyles {
	        event: ColorStyles;
	        color: ColorStyles;
	        border: BorderStyles;
	        padding: PaddingStyles;
	        margin: MarginStyles;
	        layout: LayoutStyles;
	        flex: FlexStyles;
	        grid: GridStyles;
	        flow: MarginStyles & FlexStyles & GridStyles;
	        self: PaddingStyles & LayoutStyles & ColorStyles & BorderStyles;
	        all: MarginStyles & FlexStyles & GridStyles & PaddingStyles & LayoutStyles & ColorStyles & BorderStyles;
	    }
	    type InjectedStylesNames = keyof InjectedStyles;
	    type ColorStyles = {
	        background: CSS.Properties['background'];
	        color: CSS.Properties['color'];
	    };
	    type BorderStyles = {
	        borderWidth: CSS.Properties['borderWidth'];
	        borderStyle: CSS.Properties['borderStyle'];
	        borderColor: CSS.Properties['borderColor'];
	        borderRadius: CSS.Properties['borderRadius'];
	    };
	    type PaddingStyles = {
	        padding: CSS.Properties['padding'];
	    };
	    type MarginStyles = {
	        margin: CSS.Properties['margin'];
	    };
	    type LayoutStyles = {
	        display: CSS.Properties['display'];
	        visibility: CSS.Properties['visibility'];
	        width: CSS.Properties['width'];
	        height: CSS.Properties['height'];
	        transition: CSS.Properties['transition'];
	    };
	    type FlexStyles = {
	        flex: CSS.Properties['flex'];
	        flexBasis: CSS.Properties['flexBasis'];
	        flexGrow: CSS.Properties['flexGrow'];
	        flexShrink: CSS.Properties['flexShrink'];
	        alignSelf: WhaleTypes.FlexSelf;
	        justifySelf: WhaleTypes.FlexSelf;
	        placeSelf: WhaleTypes.FlexSelf;
	    };
	    type GridStyles = {
	        gridColumnStart: CSS.Properties['gridColumnStart'];
	        gridColumnEnd: CSS.Properties['gridColumnEnd'];
	        gridRowStart: CSS.Properties['gridRowStart'];
	        gridRowEnd: CSS.Properties['gridRowEnd'];
	        gridColumn: CSS.Properties['gridColumn'];
	        gridRow: CSS.Properties['gridRow'];
	        gridArea: CSS.Properties['gridArea'];
	        placeSelf: CSS.Properties['placeSelf'];
	    };
	}
	export default WhalePropsTypes;

}
declare module 'utils/attachProps/attribute' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import WhaleTypes from 'types';
	import { Options } from 'hooks/useComponent'; const createAttributes: <Styles, Props extends WhaleTypes.AllProps<unknown, Styles>>(props: Props, setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>, options: Options<Styles, Props>) => {
	    attributes: WhaleTypes.AttributeProps;
	    events: {
	        all: any;
	        form: Pick<Props, "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture">;
	        focus: Pick<Props, "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture">;
	        image: Pick<Props, "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture">;
	        media: Pick<Props, "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture">;
	        mouse: Pick<Props, "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture">;
	        touch: Pick<Props, "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture">;
	        wheel: Pick<Props, "onWheel" | "onWheelCapture">;
	        pointer: Pick<Props, "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture">;
	        keyboard: Pick<Props, "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onEnter" | "onEsc">;
	        selection: Pick<Props, "onSelect" | "onSelectCapture">;
	        animation: Pick<Props, "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture">;
	        clipboard: Pick<Props, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture">;
	        transition: Pick<Props, "onTransitionEnd" | "onTransitionEndCapture">;
	        composition: Pick<Props, "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture">;
	        scroll: Pick<Props, "onScroll" | "onScrollCapture">;
	        data: Pick<Props, never>;
	    };
	};
	export default createAttributes;

}
declare module 'utils/attachProps/style/resolvers/event' {
	import WhalePropsTypes from 'utils/attachProps/types'; const resolver: WhalePropsTypes.StyleResolver;
	export default resolver;

}
declare module 'utils/colorProp' {
	import Color from 'color';
	import WhaleTypes from 'types'; const _default: (theme: WhaleTypes.Theme, prop?: "background" | "backgroundVariant" | "surface" | "surfaceVariant" | "primary" | "secondary" | "onBackground" | "onSurface" | "onPrimary" | "onSecondary" | "lightest" | "light" | "hard" | "hardest" | "error" | "warning" | "success" | "info" | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ((colors: {
	    background: Color<[number, number, number, (number | undefined)?]>;
	    backgroundVariant: Color<[number, number, number, (number | undefined)?]>;
	    surface: Color<[number, number, number, (number | undefined)?]>;
	    surfaceVariant: Color<[number, number, number, (number | undefined)?]>;
	    primary: Color<[number, number, number, (number | undefined)?]>;
	    secondary: Color<[number, number, number, (number | undefined)?]>;
	    onBackground: Color<[number, number, number, (number | undefined)?]>;
	    onSurface: Color<[number, number, number, (number | undefined)?]>;
	    onPrimary: Color<[number, number, number, (number | undefined)?]>;
	    onSecondary: Color<[number, number, number, (number | undefined)?]>;
	    lightest: Color<[number, number, number, (number | undefined)?]>;
	    light: Color<[number, number, number, (number | undefined)?]>;
	    hard: Color<[number, number, number, (number | undefined)?]>;
	    hardest: Color<[number, number, number, (number | undefined)?]>;
	    error: Color<[number, number, number, (number | undefined)?]>;
	    warning: Color<[number, number, number, (number | undefined)?]>;
	    success: Color<[number, number, number, (number | undefined)?]>;
	    info: Color<[number, number, number, (number | undefined)?]>;
	    palette: Whale.Palette<Color<[number, number, number, (number | undefined)?]>>;
	}) => string | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}> | ArrayLike<number> | {
	    [key: string]: any;
	}>) | (string & {
	    T?: string | undefined;
	}) | undefined) => any;
	export default _default;

}
declare module 'utils/attachProps/style/resolvers/color' {
	import WhalePropsTypes from 'utils/attachProps/types'; const resolver: WhalePropsTypes.StyleResolver;
	export default resolver;

}
declare module 'utils/attachProps/style/resolvers/paddingMargin' {
	import WhalePropsTypes from 'utils/attachProps/types'; const resolver: WhalePropsTypes.StyleResolver;
	export default resolver;

}
declare module 'utils/mergeObjects' {
	export default function mergeObjects(target?: Object, src?: Object, modify?: (value: any) => any): Object;

}
declare module 'utils/attachProps/style' {
	import WhaleTypes, { EmotionStyles } from '@flow-ui/whale/types'; const createPropStyles: <Props, StyleProps>(props: Props, theme: WhaleTypes.Theme, styleProps: StyleProps) => Record<keyof StyleProps, EmotionStyles>;
	export default createPropStyles;

}
declare module 'utils/attachProps' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import { Options } from 'hooks/useComponent';
	import WhaleTypes from 'types'; const attachProps: <Styles, Props>(props: Props, theme: WhaleTypes.Theme, setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>, options: Options<Styles, Props>) => {
	    attributes: WhaleTypes.AttributeProps;
	    events: {
	        all: any;
	        form: Pick<Props, "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture">;
	        focus: Pick<Props, "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture">;
	        image: Pick<Props, "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture">;
	        media: Pick<Props, "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture">;
	        mouse: Pick<Props, "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture">;
	        touch: Pick<Props, "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture">;
	        wheel: Pick<Props, "onWheel" | "onWheelCapture">;
	        pointer: Pick<Props, "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture">;
	        keyboard: Pick<Props, "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onEnter" | "onEsc">;
	        selection: Pick<Props, "onSelect" | "onSelectCapture">;
	        animation: Pick<Props, "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture">;
	        clipboard: Pick<Props, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture">;
	        transition: Pick<Props, "onTransitionEnd" | "onTransitionEndCapture">;
	        composition: Pick<Props, "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture">;
	        scroll: Pick<Props, "onScroll" | "onScrollCapture">;
	        data: Pick<Props, never>;
	    };
	    propStyles: {};
	};
	export default attachProps;

}
declare module 'utils/createStyles' {
	import WhaleTypes, { EmotionStyles } from 'types'; const createComponentStyles: <Styles, Props extends {
	    styles?: Partial<WhaleTypes.Styles<Styles>> | undefined;
	}>(styles: WhaleTypes.Styles<Styles>, propStyles: Partial<Record<keyof Styles, EmotionStyles>>, styleLabel: string, props: Props, overrideName: string, overrides: Partial<{}> | undefined) => WhaleTypes.ComponentStyles<Styles>;
	export default createComponentStyles;

}
declare module 'hooks/useComponent' {
	import WhaleTypes from 'types';
	import WhalePropsTypes from 'utils/attachProps/types';
	export interface Options<Styles, Props> {
	    props: Props;
	    styles: WhaleTypes.Styles<Styles> | WhaleTypes.CreateStyles<Styles, Props>;
	    styleProps?: Partial<Record<keyof Styles, (keyof WhalePropsTypes.InjectedStyles)[]>>;
	    styleLabel?: string;
	    focus?: {
	        applyDecoration?: boolean;
	        ignoreMouse?: boolean;
	    };
	    theme?: WhaleTypes.Theme;
	} const useComponent: <Styles, Props, Params>(overrideName: string, options: Options<Styles, Props>, params?: Params | undefined) => {
	    cs: WhaleTypes.ComponentStyles<Styles>;
	    attributes: WhaleTypes.AttributeProps;
	    events: {
	        all: any;
	        form: Pick<Props, "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture">;
	        focus: Pick<Props, "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture">;
	        image: Pick<Props, "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture">;
	        media: Pick<Props, "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture">;
	        mouse: Pick<Props, "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture">;
	        touch: Pick<Props, "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture">;
	        wheel: Pick<Props, "onWheel" | "onWheelCapture">;
	        pointer: Pick<Props, "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture">;
	        keyboard: Pick<Props, "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onEnter" | "onEsc">;
	        selection: Pick<Props, "onSelect" | "onSelectCapture">;
	        animation: Pick<Props, "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture">;
	        clipboard: Pick<Props, "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture">;
	        transition: Pick<Props, "onTransitionEnd" | "onTransitionEndCapture">;
	        composition: Pick<Props, "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture">;
	        scroll: Pick<Props, "onScroll" | "onScrollCapture">;
	        data: Pick<Props, never>;
	    };
	    focus: boolean;
	    theme: WhaleTypes.Theme;
	};
	export default useComponent;

}
declare module 'utils/createID' {
	 const _default: () => string;
	export default _default;

}
declare module 'utils/createTheme' {
	import Types from 'types'; const createTheme: (theme: Types.SourceTheme) => Types.Theme;
	export default createTheme;

}
declare module '@flow-ui/whale' {
	export { default as Provider } from 'components/Provider';
	export { default as useTheme } from 'hooks/useTheme';
	export { default as useComponent } from 'hooks/useComponent';
	export { default as colorProp } from 'utils/colorProp';
	export { default as createTheme } from 'utils/createTheme';

}
declare module 'utils/variant' {
	 const _default: <T>(prop: any, variant: { [K in T]?: any; }) => any;
	export default _default;

}
