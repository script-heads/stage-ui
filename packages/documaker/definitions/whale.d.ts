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
	    type ColorProp = ((colors: Theme['color']) => QIXColor | string) | string | QIXColor;
	    type Styles<StyleDefinitions> = {
	        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object ? ((variant: Variant<StyleDefinitions[StyleName]>) => EmotionStyles) : EmotionStyles;
	    };
	    type ComponentStyles<StyleDefinitions> = {
	        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object ? (state: StyleDefinitions[StyleName]) => SerializedStyles : SerializedStyles;
	    };
	    type Variant<StyleDefinitions> = (variants: Partial<{
	        [StyleName in keyof StyleDefinitions]: Partial<Record<Extract<StyleDefinitions[StyleName], string>, EmotionStyles>>;
	    }>) => EmotionStyles;
	    type CreateStyles<Overrides, Props = {}, Params = {}> = (props: Props, theme: WhaleTypes.Theme, params?: Params) => WhaleTypes.Styles<Overrides>;
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
	        assets: (theme: Theme) => ThemeAssets;
	        overrides?: Partial<{
	            [Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>;
	        }>;
	    }
	    interface ReplaceTheme {
	        main: DeepPartial<ThemeVariables<[number, number, number, number?]>>;
	        assets?: (theme: Theme) => DeepPartial<ThemeAssets>;
	        overrides?: Partial<{
	            [Component in keyof Whale.Overrides]: Styles<Whale.Overrides[Component]>;
	        }>;
	    }
	    interface ThemeVariables<Color = QIXColor> {
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
	            successful: Color;
	            info: Color;
	            palette: Whale.Palette<Color>;
	        };
	        radius: {
	            default: string;
	            narrow: string;
	            wide: string;
	        };
	        breakpoints: string[];
	        spacing: Record<Size, string>;
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
	    }
	    /**
	     * All typical component props
	     * @name All
	     */
	    interface AllProps<Container, Styles> extends AttributeProps, AllEventProps<Container>, CoreProps<Styles>, ColorProps, BorderProps, PaddingProps, LayoutProps, MarginProps, FlexProps, GridProps {
	    }
	    /**
	     * DOM events
	     * @name AllEvents
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
	        style?: React.CSSProperties;
	        tabIndex?: number;
	        role?: string;
	        draggable?: boolean;
	        attrs?: Object;
	    }
	    /**
	     * Component color styles props
	     * @name Colors
	     */
	    interface ColorProps {
	        textColor?: Breakpointify<ColorProp>;
	        backgroundColor?: Breakpointify<ColorProp>;
	    }
	    /**
	     * Component border styles props
	     * @name Border
	     */
	    interface BorderProps {
	        borderWidth?: Breakpointify<CSS.Properties['borderWidth']>;
	        borderStyle?: Breakpointify<CSS.Properties['borderStyle']>;
	        borderColor?: Breakpointify<ColorProp>;
	        borderRadius?: Breakpointify<CSS.Properties['borderRadius']>;
	    }
	    /**
	     * Component layout styles props
	     * @name Layout
	     */
	    interface LayoutProps {
	        /**
	         * Width alias
	         */
	        w?: Breakpointify<CSS.Properties['width']>;
	        /**
	         * Heigth alias
	         */
	        h?: Breakpointify<CSS.Properties['height']>;
	        /**
	         * Shows or hides an element without changing the layout
	         * of a document.
	         */
	        visibility?: Breakpointify<CSS.Properties['visibility']>;
	        /**
	         * Sets whether an element is treated as a block or
	         * inline element and the layout used for its children,
	         * such as flow layout, grid or flex.
	         */
	        display?: Breakpointify<CSS.Properties['display']>;
	    }
	    /**
	     * Component padding styles props
	     * @name Padding
	     */
	    interface PaddingProps {
	        /**
	         * Padding alias
	         */
	        p?: Breakpointify<CSS.Properties['padding']>;
	        /**
	         * Padding horizontal alias
	         */
	        px?: Breakpointify<CSS.Properties['padding']>;
	        /**
	         * Padding vertical alias
	         */
	        py?: Breakpointify<CSS.Properties['padding']>;
	        /**
	         * PaddingRight alias
	         */
	        pr?: Breakpointify<CSS.Properties['paddingRight']>;
	        /**
	         * PaddingLeft alias
	         */
	        pl?: Breakpointify<CSS.Properties['paddingLeft']>;
	        /**
	         * PaddingTop alias
	         */
	        pt?: Breakpointify<CSS.Properties['paddingTop']>;
	        /**
	         * PaddingBottom alias
	         */
	        pb?: Breakpointify<CSS.Properties['paddingBottom']>;
	    }
	    /**
	     * Component margin styles props
	     * @name Margin
	     */
	    interface MarginProps {
	        /**
	         * Margin alias
	         */
	        m?: Breakpointify<CSS.Properties['margin']>;
	        /**
	         * Margin horizontal alias
	         */
	        mx?: Breakpointify<CSS.Properties['margin']>;
	        /**
	         * Margin vertical alias
	         */
	        my?: Breakpointify<CSS.Properties['margin']>;
	        /**
	         * MarginRight alias
	         */
	        mr?: Breakpointify<CSS.Properties['marginRight']>;
	        /**
	         * MarginLeft alias
	         */
	        ml?: Breakpointify<CSS.Properties['marginLeft']>;
	        /**
	         * MarginTop alias
	         */
	        mt?: Breakpointify<CSS.Properties['marginTop']>;
	        /**
	         * MarginBottom alias
	         */
	        mb?: Breakpointify<CSS.Properties['marginBottom']>;
	    }
	    /**
	     * Used for flex attributes
	     * CSS props have string witch kills helps at ide
	     */
	    type FlexSpace = 'space-around' | 'space-between' | 'space-evenly';
	    type FlexSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch';
	    /**
	     * Component flexbox children styles props
	     * @name Flexbox
	     */
	    interface FlexProps {
	        /**
	         * Sets how a flex item will grow or shrink to fit the
	         * space available in its flex container.
	         */
	        flex?: Breakpointify<CSS.Properties['flex']>;
	        /**
	         * Sets the initial main size of a flex item. It sets the
	         * size of the content box unless otherwise set with box-sizing.
	         */
	        flexBasis?: Breakpointify<CSS.Properties['flexBasis']>;
	        /**
	         * Sets the flex grow factor of a flex item main size.
	         * It specifies how much of the remaining space in the
	         * flex container should be assigned to the item
	         * (the flex grow factor).
	         */
	        flexGrow?: Breakpointify<CSS.Properties['flexGrow']>;
	        /**
	         * Sets the flex shrink factor of a flex item.
	         * If the size of all flex items is lr than
	         * the flex container, items shrink to fit
	         * according to flex-shrink.
	         */
	        flexShrink?: Breakpointify<CSS.Properties['flexShrink']>;
	        /**
	         * Property overrides a grid or flex item's
	         * align-items value. In Grid, it aligns the
	         * item inside the grid area. In Flexbox,
	         * it aligns the item on the cross axis.
	         */
	        alignSelf?: Breakpointify<FlexSelf>;
	        /**
	         * Sets the way a box is justified inside its
	         * alignment container along the appropriate axis.
	         */
	        justifySelf?: Breakpointify<FlexSelf>;
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
	        gridColumnStart?: Breakpointify<CSS.Properties['gridColumnStart']>;
	        /**
	         * Specifies a grid item’s end position within the
	         * grid column by contributing a line, a span, or
	         * nothing (automatic) to its grid placement, thereby
	         * specifying the block-end edge of its grid area.
	         */
	        gridColumnEnd?: Breakpointify<CSS.Properties['gridColumnEnd']>;
	        /**
	         * Specifies a grid item’s start position within the
	         * grid row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby specifying
	         * the inline-start edge of its grid area.
	         */
	        gridRowStart?: Breakpointify<CSS.Properties['gridRowStart']>;
	        /**
	         * Specifies a grid item’s end position within the grid
	         * row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby
	         * specifying the inline-end edge of its grid area.
	         */
	        gridRowEnd?: Breakpointify<CSS.Properties['gridRowEnd']>;
	        /**
	         * Shorthand property for grid-column-start and
	         * grid-column-end specifying a grid item's size
	         * and location within the grid column by contributing
	         * a line, a span, or nothing (automatic) to its grid
	         * placement, thereby specifying the inline-start and
	         * inline-end edge of its grid area.
	         */
	        gridColumn?: Breakpointify<CSS.Properties['gridColumn']>;
	        /**
	         * Shorthand property for grid-row-start and grid-row-end
	         * specifying a grid item’s size and location within the
	         * grid row by contributing a line, a span, or nothing
	         * (automatic) to its grid placement, thereby specifying
	         * the inline-start and inline-end edge of its grid area.
	         */
	        gridRow?: Breakpointify<CSS.Properties['gridRow']>;
	        /**
	         * Shorthand property for grid-row-start, grid-column-start,
	         * grid-row-end and grid-column-end, specifying a grid item’s
	         * size and location within the grid by contributing a line, a
	         * span, or nothing (automatic) to its grid placement, thereby
	         * specifying the edges of its grid area.
	         */
	        gridArea?: Breakpointify<CSS.Properties['gridArea']>;
	        /**
	         * Shorthand property sets both the align-self and justify-self
	         * properties. The first value is the align-self property value,
	         * the second the justify-self one. If the second value is not
	         * present, the first value is also used for it.
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
	import { Options } from 'hooks/useComponent'; const createAttributes: <Styles, Props extends WhaleTypes.AllProps<unknown, Styles>>(props: Props, setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>, options?: Options<Styles, Props> | undefined) => {
	    attributes: WhaleTypes.AttributeProps;
	    events: {
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
	        all: {
	            onScroll?: Props["onScroll"];
	            onScrollCapture?: Props["onScrollCapture"];
	            onCompositionEnd?: Props["onCompositionEnd"];
	            onCompositionEndCapture?: Props["onCompositionEndCapture"];
	            onCompositionStart?: Props["onCompositionStart"];
	            onCompositionStartCapture?: Props["onCompositionStartCapture"];
	            onCompositionUpdate?: Props["onCompositionUpdate"];
	            onCompositionUpdateCapture?: Props["onCompositionUpdateCapture"];
	            onTransitionEnd?: Props["onTransitionEnd"];
	            onTransitionEndCapture?: Props["onTransitionEndCapture"];
	            onCopy?: Props["onCopy"];
	            onCopyCapture?: Props["onCopyCapture"];
	            onCut?: Props["onCut"];
	            onCutCapture?: Props["onCutCapture"];
	            onPaste?: Props["onPaste"];
	            onPasteCapture?: Props["onPasteCapture"];
	            onAnimationStart?: Props["onAnimationStart"];
	            onAnimationStartCapture?: Props["onAnimationStartCapture"];
	            onAnimationEnd?: Props["onAnimationEnd"];
	            onAnimationEndCapture?: Props["onAnimationEndCapture"];
	            onAnimationIteration?: Props["onAnimationIteration"];
	            onAnimationIterationCapture?: Props["onAnimationIterationCapture"];
	            onSelect?: Props["onSelect"];
	            onSelectCapture?: Props["onSelectCapture"];
	            onKeyDown?: Props["onKeyDown"];
	            onKeyDownCapture?: Props["onKeyDownCapture"];
	            onKeyPress?: Props["onKeyPress"];
	            onKeyPressCapture?: Props["onKeyPressCapture"];
	            onKeyUp?: Props["onKeyUp"];
	            onKeyUpCapture?: Props["onKeyUpCapture"];
	            onEnter?: Props["onEnter"];
	            onEsc?: Props["onEsc"];
	            onPointerDown?: Props["onPointerDown"];
	            onPointerDownCapture?: Props["onPointerDownCapture"];
	            onPointerMove?: Props["onPointerMove"];
	            onPointerMoveCapture?: Props["onPointerMoveCapture"];
	            onPointerUp?: Props["onPointerUp"];
	            onPointerUpCapture?: Props["onPointerUpCapture"];
	            onPointerCancel?: Props["onPointerCancel"];
	            onPointerCancelCapture?: Props["onPointerCancelCapture"];
	            onPointerEnter?: Props["onPointerEnter"];
	            onPointerLeave?: Props["onPointerLeave"];
	            onPointerOver?: Props["onPointerOver"];
	            onPointerOverCapture?: Props["onPointerOverCapture"];
	            onPointerOut?: Props["onPointerOut"];
	            onPointerOutCapture?: Props["onPointerOutCapture"];
	            onGotPointerCapture?: Props["onGotPointerCapture"];
	            onGotPointerCaptureCapture?: Props["onGotPointerCaptureCapture"];
	            onLostPointerCapture?: Props["onLostPointerCapture"];
	            onLostPointerCaptureCapture?: Props["onLostPointerCaptureCapture"];
	            onWheel?: Props["onWheel"];
	            onWheelCapture?: Props["onWheelCapture"];
	            onTouchCancel?: Props["onTouchCancel"];
	            onTouchCancelCapture?: Props["onTouchCancelCapture"];
	            onTouchEnd?: Props["onTouchEnd"];
	            onTouchEndCapture?: Props["onTouchEndCapture"];
	            onTouchMove?: Props["onTouchMove"];
	            onTouchMoveCapture?: Props["onTouchMoveCapture"];
	            onTouchStart?: Props["onTouchStart"];
	            onTouchStartCapture?: Props["onTouchStartCapture"];
	            onAuxClick?: Props["onAuxClick"];
	            onAuxClickCapture?: Props["onAuxClickCapture"];
	            onClick?: Props["onClick"];
	            onClickCapture?: Props["onClickCapture"];
	            onContextMenu?: Props["onContextMenu"];
	            onContextMenuCapture?: Props["onContextMenuCapture"];
	            onDoubleClick?: Props["onDoubleClick"];
	            onDoubleClickCapture?: Props["onDoubleClickCapture"];
	            onDrag?: Props["onDrag"];
	            onDragCapture?: Props["onDragCapture"];
	            onDragEnd?: Props["onDragEnd"];
	            onDragEndCapture?: Props["onDragEndCapture"];
	            onDragEnter?: Props["onDragEnter"];
	            onDragEnterCapture?: Props["onDragEnterCapture"];
	            onDragExit?: Props["onDragExit"];
	            onDragExitCapture?: Props["onDragExitCapture"];
	            onDragLeave?: Props["onDragLeave"];
	            onDragLeaveCapture?: Props["onDragLeaveCapture"];
	            onDragOver?: Props["onDragOver"];
	            onDragOverCapture?: Props["onDragOverCapture"];
	            onDragStart?: Props["onDragStart"];
	            onDragStartCapture?: Props["onDragStartCapture"];
	            onDrop?: Props["onDrop"];
	            onDropCapture?: Props["onDropCapture"];
	            onMouseDown?: Props["onMouseDown"];
	            onMouseDownCapture?: Props["onMouseDownCapture"];
	            onMouseEnter?: Props["onMouseEnter"];
	            onMouseLeave?: Props["onMouseLeave"];
	            onMouseMove?: Props["onMouseMove"];
	            onMouseMoveCapture?: Props["onMouseMoveCapture"];
	            onMouseOut?: Props["onMouseOut"];
	            onMouseOutCapture?: Props["onMouseOutCapture"];
	            onMouseOver?: Props["onMouseOver"];
	            onMouseOverCapture?: Props["onMouseOverCapture"];
	            onMouseUp?: Props["onMouseUp"];
	            onMouseUpCapture?: Props["onMouseUpCapture"];
	            onAbort?: Props["onAbort"];
	            onAbortCapture?: Props["onAbortCapture"];
	            onCanPlay?: Props["onCanPlay"];
	            onCanPlayCapture?: Props["onCanPlayCapture"];
	            onCanPlayThrough?: Props["onCanPlayThrough"];
	            onCanPlayThroughCapture?: Props["onCanPlayThroughCapture"];
	            onDurationChange?: Props["onDurationChange"];
	            onDurationChangeCapture?: Props["onDurationChangeCapture"];
	            onEmptied?: Props["onEmptied"];
	            onEmptiedCapture?: Props["onEmptiedCapture"];
	            onEncrypted?: Props["onEncrypted"];
	            onEncryptedCapture?: Props["onEncryptedCapture"];
	            onEnded?: Props["onEnded"];
	            onEndedCapture?: Props["onEndedCapture"];
	            onLoadedData?: Props["onLoadedData"];
	            onLoadedDataCapture?: Props["onLoadedDataCapture"];
	            onLoadedMetadata?: Props["onLoadedMetadata"];
	            onLoadedMetadataCapture?: Props["onLoadedMetadataCapture"];
	            onLoadStart?: Props["onLoadStart"];
	            onLoadStartCapture?: Props["onLoadStartCapture"];
	            onPause?: Props["onPause"];
	            onPauseCapture?: Props["onPauseCapture"];
	            onPlay?: Props["onPlay"];
	            onPlayCapture?: Props["onPlayCapture"];
	            onPlaying?: Props["onPlaying"];
	            onPlayingCapture?: Props["onPlayingCapture"];
	            onProgress?: Props["onProgress"];
	            onProgressCapture?: Props["onProgressCapture"];
	            onRateChange?: Props["onRateChange"];
	            onRateChangeCapture?: Props["onRateChangeCapture"];
	            onSeeked?: Props["onSeeked"];
	            onSeekedCapture?: Props["onSeekedCapture"];
	            onSeeking?: Props["onSeeking"];
	            onSeekingCapture?: Props["onSeekingCapture"];
	            onStalled?: Props["onStalled"];
	            onStalledCapture?: Props["onStalledCapture"];
	            onSuspend?: Props["onSuspend"];
	            onSuspendCapture?: Props["onSuspendCapture"];
	            onTimeUpdate?: Props["onTimeUpdate"];
	            onTimeUpdateCapture?: Props["onTimeUpdateCapture"];
	            onVolumeChange?: Props["onVolumeChange"];
	            onVolumeChangeCapture?: Props["onVolumeChangeCapture"];
	            onWaiting?: Props["onWaiting"];
	            onWaitingCapture?: Props["onWaitingCapture"];
	            onLoad?: Props["onLoad"];
	            onLoadCapture?: Props["onLoadCapture"];
	            onError?: Props["onError"];
	            onErrorCapture?: Props["onErrorCapture"];
	            onFocus?: Props["onFocus"];
	            onFocusCapture?: Props["onFocusCapture"];
	            onBlur?: Props["onBlur"];
	            onBlurCapture?: Props["onBlurCapture"];
	            onChange?: Props["onChange"];
	            onChangeCapture?: Props["onChangeCapture"];
	            onBeforeInput?: Props["onBeforeInput"];
	            onBeforeInputCapture?: Props["onBeforeInputCapture"];
	            onInput?: Props["onInput"];
	            onInputCapture?: Props["onInputCapture"];
	            onReset?: Props["onReset"];
	            onResetCapture?: Props["onResetCapture"];
	            onSubmit?: Props["onSubmit"];
	            onSubmitCapture?: Props["onSubmitCapture"];
	            onInvalid?: Props["onInvalid"];
	            onInvalidCapture?: Props["onInvalidCapture"];
	        };
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
	import WhaleTypes from 'types'; const _default: (theme: WhaleTypes.Theme, prop?: string | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    background: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    backgroundVariant: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    surface: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    surfaceVariant: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    primary: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    secondary: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    onBackground: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    onSurface: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    onPrimary: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    onSecondary: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    lightest: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    light: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    hard: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    hardest: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    error: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    warning: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    successful: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    info: Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>;
	    palette: Whale.Palette<Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	    }>>;
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
	}>) | undefined) => Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	}> | undefined;
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
declare module 'utils/attachProps/style' {
	import WhaleTypes, { EmotionStyles } from '@flow-ui/whale/types'; const createPropStyles: <Props, StyleProps>(props: Props, theme: WhaleTypes.Theme, styleProps: StyleProps) => Record<keyof StyleProps, EmotionStyles>;
	export default createPropStyles;

}
declare module 'utils/attachProps' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import WhaleTypes from 'types';
	import { Options } from 'hooks/useComponent'; const attachProps: <Styles, Props>(props: Props, theme: WhaleTypes.Theme, setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>, options: Options<Styles, Props>) => {
	    attributes: WhaleTypes.AttributeProps;
	    events: {
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
	        all: {
	            onScroll?: Props["onScroll"];
	            onScrollCapture?: Props["onScrollCapture"];
	            onCompositionEnd?: Props["onCompositionEnd"];
	            onCompositionEndCapture?: Props["onCompositionEndCapture"];
	            onCompositionStart?: Props["onCompositionStart"];
	            onCompositionStartCapture?: Props["onCompositionStartCapture"];
	            onCompositionUpdate?: Props["onCompositionUpdate"];
	            onCompositionUpdateCapture?: Props["onCompositionUpdateCapture"];
	            onTransitionEnd?: Props["onTransitionEnd"];
	            onTransitionEndCapture?: Props["onTransitionEndCapture"];
	            onCopy?: Props["onCopy"];
	            onCopyCapture?: Props["onCopyCapture"];
	            onCut?: Props["onCut"];
	            onCutCapture?: Props["onCutCapture"];
	            onPaste?: Props["onPaste"];
	            onPasteCapture?: Props["onPasteCapture"];
	            onAnimationStart?: Props["onAnimationStart"];
	            onAnimationStartCapture?: Props["onAnimationStartCapture"];
	            onAnimationEnd?: Props["onAnimationEnd"];
	            onAnimationEndCapture?: Props["onAnimationEndCapture"];
	            onAnimationIteration?: Props["onAnimationIteration"];
	            onAnimationIterationCapture?: Props["onAnimationIterationCapture"];
	            onSelect?: Props["onSelect"];
	            onSelectCapture?: Props["onSelectCapture"];
	            onKeyDown?: Props["onKeyDown"];
	            onKeyDownCapture?: Props["onKeyDownCapture"];
	            onKeyPress?: Props["onKeyPress"];
	            onKeyPressCapture?: Props["onKeyPressCapture"];
	            onKeyUp?: Props["onKeyUp"];
	            onKeyUpCapture?: Props["onKeyUpCapture"];
	            onEnter?: Props["onEnter"];
	            onEsc?: Props["onEsc"];
	            onPointerDown?: Props["onPointerDown"];
	            onPointerDownCapture?: Props["onPointerDownCapture"];
	            onPointerMove?: Props["onPointerMove"];
	            onPointerMoveCapture?: Props["onPointerMoveCapture"];
	            onPointerUp?: Props["onPointerUp"];
	            onPointerUpCapture?: Props["onPointerUpCapture"];
	            onPointerCancel?: Props["onPointerCancel"];
	            onPointerCancelCapture?: Props["onPointerCancelCapture"];
	            onPointerEnter?: Props["onPointerEnter"];
	            onPointerLeave?: Props["onPointerLeave"];
	            onPointerOver?: Props["onPointerOver"];
	            onPointerOverCapture?: Props["onPointerOverCapture"];
	            onPointerOut?: Props["onPointerOut"];
	            onPointerOutCapture?: Props["onPointerOutCapture"];
	            onGotPointerCapture?: Props["onGotPointerCapture"];
	            onGotPointerCaptureCapture?: Props["onGotPointerCaptureCapture"];
	            onLostPointerCapture?: Props["onLostPointerCapture"];
	            onLostPointerCaptureCapture?: Props["onLostPointerCaptureCapture"];
	            onWheel?: Props["onWheel"];
	            onWheelCapture?: Props["onWheelCapture"];
	            onTouchCancel?: Props["onTouchCancel"];
	            onTouchCancelCapture?: Props["onTouchCancelCapture"];
	            onTouchEnd?: Props["onTouchEnd"];
	            onTouchEndCapture?: Props["onTouchEndCapture"];
	            onTouchMove?: Props["onTouchMove"];
	            onTouchMoveCapture?: Props["onTouchMoveCapture"];
	            onTouchStart?: Props["onTouchStart"];
	            onTouchStartCapture?: Props["onTouchStartCapture"];
	            onAuxClick?: Props["onAuxClick"];
	            onAuxClickCapture?: Props["onAuxClickCapture"];
	            onClick?: Props["onClick"];
	            onClickCapture?: Props["onClickCapture"];
	            onContextMenu?: Props["onContextMenu"];
	            onContextMenuCapture?: Props["onContextMenuCapture"];
	            onDoubleClick?: Props["onDoubleClick"];
	            onDoubleClickCapture?: Props["onDoubleClickCapture"];
	            onDrag?: Props["onDrag"];
	            onDragCapture?: Props["onDragCapture"];
	            onDragEnd?: Props["onDragEnd"];
	            onDragEndCapture?: Props["onDragEndCapture"];
	            onDragEnter?: Props["onDragEnter"];
	            onDragEnterCapture?: Props["onDragEnterCapture"];
	            onDragExit?: Props["onDragExit"];
	            onDragExitCapture?: Props["onDragExitCapture"];
	            onDragLeave?: Props["onDragLeave"];
	            onDragLeaveCapture?: Props["onDragLeaveCapture"];
	            onDragOver?: Props["onDragOver"];
	            onDragOverCapture?: Props["onDragOverCapture"];
	            onDragStart?: Props["onDragStart"];
	            onDragStartCapture?: Props["onDragStartCapture"];
	            onDrop?: Props["onDrop"];
	            onDropCapture?: Props["onDropCapture"];
	            onMouseDown?: Props["onMouseDown"];
	            onMouseDownCapture?: Props["onMouseDownCapture"];
	            onMouseEnter?: Props["onMouseEnter"];
	            onMouseLeave?: Props["onMouseLeave"];
	            onMouseMove?: Props["onMouseMove"];
	            onMouseMoveCapture?: Props["onMouseMoveCapture"];
	            onMouseOut?: Props["onMouseOut"];
	            onMouseOutCapture?: Props["onMouseOutCapture"];
	            onMouseOver?: Props["onMouseOver"];
	            onMouseOverCapture?: Props["onMouseOverCapture"];
	            onMouseUp?: Props["onMouseUp"];
	            onMouseUpCapture?: Props["onMouseUpCapture"];
	            onAbort?: Props["onAbort"];
	            onAbortCapture?: Props["onAbortCapture"];
	            onCanPlay?: Props["onCanPlay"];
	            onCanPlayCapture?: Props["onCanPlayCapture"];
	            onCanPlayThrough?: Props["onCanPlayThrough"];
	            onCanPlayThroughCapture?: Props["onCanPlayThroughCapture"];
	            onDurationChange?: Props["onDurationChange"];
	            onDurationChangeCapture?: Props["onDurationChangeCapture"];
	            onEmptied?: Props["onEmptied"];
	            onEmptiedCapture?: Props["onEmptiedCapture"];
	            onEncrypted?: Props["onEncrypted"];
	            onEncryptedCapture?: Props["onEncryptedCapture"];
	            onEnded?: Props["onEnded"];
	            onEndedCapture?: Props["onEndedCapture"];
	            onLoadedData?: Props["onLoadedData"];
	            onLoadedDataCapture?: Props["onLoadedDataCapture"];
	            onLoadedMetadata?: Props["onLoadedMetadata"];
	            onLoadedMetadataCapture?: Props["onLoadedMetadataCapture"];
	            onLoadStart?: Props["onLoadStart"];
	            onLoadStartCapture?: Props["onLoadStartCapture"];
	            onPause?: Props["onPause"];
	            onPauseCapture?: Props["onPauseCapture"];
	            onPlay?: Props["onPlay"];
	            onPlayCapture?: Props["onPlayCapture"];
	            onPlaying?: Props["onPlaying"];
	            onPlayingCapture?: Props["onPlayingCapture"];
	            onProgress?: Props["onProgress"];
	            onProgressCapture?: Props["onProgressCapture"];
	            onRateChange?: Props["onRateChange"];
	            onRateChangeCapture?: Props["onRateChangeCapture"];
	            onSeeked?: Props["onSeeked"];
	            onSeekedCapture?: Props["onSeekedCapture"];
	            onSeeking?: Props["onSeeking"];
	            onSeekingCapture?: Props["onSeekingCapture"];
	            onStalled?: Props["onStalled"];
	            onStalledCapture?: Props["onStalledCapture"];
	            onSuspend?: Props["onSuspend"];
	            onSuspendCapture?: Props["onSuspendCapture"];
	            onTimeUpdate?: Props["onTimeUpdate"];
	            onTimeUpdateCapture?: Props["onTimeUpdateCapture"];
	            onVolumeChange?: Props["onVolumeChange"];
	            onVolumeChangeCapture?: Props["onVolumeChangeCapture"];
	            onWaiting?: Props["onWaiting"];
	            onWaitingCapture?: Props["onWaitingCapture"];
	            onLoad?: Props["onLoad"];
	            onLoadCapture?: Props["onLoadCapture"];
	            onError?: Props["onError"];
	            onErrorCapture?: Props["onErrorCapture"];
	            onFocus?: Props["onFocus"];
	            onFocusCapture?: Props["onFocusCapture"];
	            onBlur?: Props["onBlur"];
	            onBlurCapture?: Props["onBlurCapture"];
	            onChange?: Props["onChange"];
	            onChangeCapture?: Props["onChangeCapture"];
	            onBeforeInput?: Props["onBeforeInput"];
	            onBeforeInputCapture?: Props["onBeforeInputCapture"];
	            onInput?: Props["onInput"];
	            onInputCapture?: Props["onInputCapture"];
	            onReset?: Props["onReset"];
	            onResetCapture?: Props["onResetCapture"];
	            onSubmit?: Props["onSubmit"];
	            onSubmitCapture?: Props["onSubmitCapture"];
	            onInvalid?: Props["onInvalid"];
	            onInvalidCapture?: Props["onInvalidCapture"];
	        };
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
	    mouseFocus?: boolean;
	    focusDecoration?: boolean;
	    theme?: WhaleTypes.Theme;
	} const useComponent: <Styles, Props>(overrideName: string, options: Options<Styles, Props>, params?: Object) => {
	    cs: WhaleTypes.ComponentStyles<Styles>;
	    attributes: WhaleTypes.AttributeProps;
	    events: {
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
	        all: {
	            onScroll?: Props["onScroll"];
	            onScrollCapture?: Props["onScrollCapture"];
	            onCompositionEnd?: Props["onCompositionEnd"];
	            onCompositionEndCapture?: Props["onCompositionEndCapture"];
	            onCompositionStart?: Props["onCompositionStart"];
	            onCompositionStartCapture?: Props["onCompositionStartCapture"];
	            onCompositionUpdate?: Props["onCompositionUpdate"];
	            onCompositionUpdateCapture?: Props["onCompositionUpdateCapture"];
	            onTransitionEnd?: Props["onTransitionEnd"];
	            onTransitionEndCapture?: Props["onTransitionEndCapture"];
	            onCopy?: Props["onCopy"];
	            onCopyCapture?: Props["onCopyCapture"];
	            onCut?: Props["onCut"];
	            onCutCapture?: Props["onCutCapture"];
	            onPaste?: Props["onPaste"];
	            onPasteCapture?: Props["onPasteCapture"];
	            onAnimationStart?: Props["onAnimationStart"];
	            onAnimationStartCapture?: Props["onAnimationStartCapture"];
	            onAnimationEnd?: Props["onAnimationEnd"];
	            onAnimationEndCapture?: Props["onAnimationEndCapture"];
	            onAnimationIteration?: Props["onAnimationIteration"];
	            onAnimationIterationCapture?: Props["onAnimationIterationCapture"];
	            onSelect?: Props["onSelect"];
	            onSelectCapture?: Props["onSelectCapture"];
	            onKeyDown?: Props["onKeyDown"];
	            onKeyDownCapture?: Props["onKeyDownCapture"];
	            onKeyPress?: Props["onKeyPress"];
	            onKeyPressCapture?: Props["onKeyPressCapture"];
	            onKeyUp?: Props["onKeyUp"];
	            onKeyUpCapture?: Props["onKeyUpCapture"];
	            onEnter?: Props["onEnter"];
	            onEsc?: Props["onEsc"];
	            onPointerDown?: Props["onPointerDown"];
	            onPointerDownCapture?: Props["onPointerDownCapture"];
	            onPointerMove?: Props["onPointerMove"];
	            onPointerMoveCapture?: Props["onPointerMoveCapture"];
	            onPointerUp?: Props["onPointerUp"];
	            onPointerUpCapture?: Props["onPointerUpCapture"];
	            onPointerCancel?: Props["onPointerCancel"];
	            onPointerCancelCapture?: Props["onPointerCancelCapture"];
	            onPointerEnter?: Props["onPointerEnter"];
	            onPointerLeave?: Props["onPointerLeave"];
	            onPointerOver?: Props["onPointerOver"];
	            onPointerOverCapture?: Props["onPointerOverCapture"];
	            onPointerOut?: Props["onPointerOut"];
	            onPointerOutCapture?: Props["onPointerOutCapture"];
	            onGotPointerCapture?: Props["onGotPointerCapture"];
	            onGotPointerCaptureCapture?: Props["onGotPointerCaptureCapture"];
	            onLostPointerCapture?: Props["onLostPointerCapture"];
	            onLostPointerCaptureCapture?: Props["onLostPointerCaptureCapture"];
	            onWheel?: Props["onWheel"];
	            onWheelCapture?: Props["onWheelCapture"];
	            onTouchCancel?: Props["onTouchCancel"];
	            onTouchCancelCapture?: Props["onTouchCancelCapture"];
	            onTouchEnd?: Props["onTouchEnd"];
	            onTouchEndCapture?: Props["onTouchEndCapture"];
	            onTouchMove?: Props["onTouchMove"];
	            onTouchMoveCapture?: Props["onTouchMoveCapture"];
	            onTouchStart?: Props["onTouchStart"];
	            onTouchStartCapture?: Props["onTouchStartCapture"];
	            onAuxClick?: Props["onAuxClick"];
	            onAuxClickCapture?: Props["onAuxClickCapture"];
	            onClick?: Props["onClick"];
	            onClickCapture?: Props["onClickCapture"];
	            onContextMenu?: Props["onContextMenu"];
	            onContextMenuCapture?: Props["onContextMenuCapture"];
	            onDoubleClick?: Props["onDoubleClick"];
	            onDoubleClickCapture?: Props["onDoubleClickCapture"];
	            onDrag?: Props["onDrag"];
	            onDragCapture?: Props["onDragCapture"];
	            onDragEnd?: Props["onDragEnd"];
	            onDragEndCapture?: Props["onDragEndCapture"];
	            onDragEnter?: Props["onDragEnter"];
	            onDragEnterCapture?: Props["onDragEnterCapture"];
	            onDragExit?: Props["onDragExit"];
	            onDragExitCapture?: Props["onDragExitCapture"];
	            onDragLeave?: Props["onDragLeave"];
	            onDragLeaveCapture?: Props["onDragLeaveCapture"];
	            onDragOver?: Props["onDragOver"];
	            onDragOverCapture?: Props["onDragOverCapture"];
	            onDragStart?: Props["onDragStart"];
	            onDragStartCapture?: Props["onDragStartCapture"];
	            onDrop?: Props["onDrop"];
	            onDropCapture?: Props["onDropCapture"];
	            onMouseDown?: Props["onMouseDown"];
	            onMouseDownCapture?: Props["onMouseDownCapture"];
	            onMouseEnter?: Props["onMouseEnter"];
	            onMouseLeave?: Props["onMouseLeave"];
	            onMouseMove?: Props["onMouseMove"];
	            onMouseMoveCapture?: Props["onMouseMoveCapture"];
	            onMouseOut?: Props["onMouseOut"];
	            onMouseOutCapture?: Props["onMouseOutCapture"];
	            onMouseOver?: Props["onMouseOver"];
	            onMouseOverCapture?: Props["onMouseOverCapture"];
	            onMouseUp?: Props["onMouseUp"];
	            onMouseUpCapture?: Props["onMouseUpCapture"];
	            onAbort?: Props["onAbort"];
	            onAbortCapture?: Props["onAbortCapture"];
	            onCanPlay?: Props["onCanPlay"];
	            onCanPlayCapture?: Props["onCanPlayCapture"];
	            onCanPlayThrough?: Props["onCanPlayThrough"];
	            onCanPlayThroughCapture?: Props["onCanPlayThroughCapture"];
	            onDurationChange?: Props["onDurationChange"];
	            onDurationChangeCapture?: Props["onDurationChangeCapture"];
	            onEmptied?: Props["onEmptied"];
	            onEmptiedCapture?: Props["onEmptiedCapture"];
	            onEncrypted?: Props["onEncrypted"];
	            onEncryptedCapture?: Props["onEncryptedCapture"];
	            onEnded?: Props["onEnded"];
	            onEndedCapture?: Props["onEndedCapture"];
	            onLoadedData?: Props["onLoadedData"];
	            onLoadedDataCapture?: Props["onLoadedDataCapture"];
	            onLoadedMetadata?: Props["onLoadedMetadata"];
	            onLoadedMetadataCapture?: Props["onLoadedMetadataCapture"];
	            onLoadStart?: Props["onLoadStart"];
	            onLoadStartCapture?: Props["onLoadStartCapture"];
	            onPause?: Props["onPause"];
	            onPauseCapture?: Props["onPauseCapture"];
	            onPlay?: Props["onPlay"];
	            onPlayCapture?: Props["onPlayCapture"];
	            onPlaying?: Props["onPlaying"];
	            onPlayingCapture?: Props["onPlayingCapture"];
	            onProgress?: Props["onProgress"];
	            onProgressCapture?: Props["onProgressCapture"];
	            onRateChange?: Props["onRateChange"];
	            onRateChangeCapture?: Props["onRateChangeCapture"];
	            onSeeked?: Props["onSeeked"];
	            onSeekedCapture?: Props["onSeekedCapture"];
	            onSeeking?: Props["onSeeking"];
	            onSeekingCapture?: Props["onSeekingCapture"];
	            onStalled?: Props["onStalled"];
	            onStalledCapture?: Props["onStalledCapture"];
	            onSuspend?: Props["onSuspend"];
	            onSuspendCapture?: Props["onSuspendCapture"];
	            onTimeUpdate?: Props["onTimeUpdate"];
	            onTimeUpdateCapture?: Props["onTimeUpdateCapture"];
	            onVolumeChange?: Props["onVolumeChange"];
	            onVolumeChangeCapture?: Props["onVolumeChangeCapture"];
	            onWaiting?: Props["onWaiting"];
	            onWaitingCapture?: Props["onWaitingCapture"];
	            onLoad?: Props["onLoad"];
	            onLoadCapture?: Props["onLoadCapture"];
	            onError?: Props["onError"];
	            onErrorCapture?: Props["onErrorCapture"];
	            onFocus?: Props["onFocus"];
	            onFocusCapture?: Props["onFocusCapture"];
	            onBlur?: Props["onBlur"];
	            onBlurCapture?: Props["onBlurCapture"];
	            onChange?: Props["onChange"];
	            onChangeCapture?: Props["onChangeCapture"];
	            onBeforeInput?: Props["onBeforeInput"];
	            onBeforeInputCapture?: Props["onBeforeInputCapture"];
	            onInput?: Props["onInput"];
	            onInputCapture?: Props["onInputCapture"];
	            onReset?: Props["onReset"];
	            onResetCapture?: Props["onResetCapture"];
	            onSubmit?: Props["onSubmit"];
	            onSubmitCapture?: Props["onSubmitCapture"];
	            onInvalid?: Props["onInvalid"];
	            onInvalidCapture?: Props["onInvalidCapture"];
	        };
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
declare module 'utils/mergeObjects' {
	export default function mergeObjects(target?: Object, src?: Object, modify?: (value: any) => any): Object;

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
