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
	} namespace WhaleTypes {
	    type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
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
	    interface AllProps<Container, Styles> extends AttributeProps, EventProps<Container>, CoreProps<Styles>, ColorProps, BorderProps, PaddingProps, LayoutProps, MarginProps, FlexProps, GridProps {
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
	     * DOM events
	     * @name Events
	     */
	    interface EventProps<T> {
	        onCopy?: React.ClipboardEventHandler<T>;
	        onCopyCapture?: React.ClipboardEventHandler<T>;
	        onCut?: React.ClipboardEventHandler<T>;
	        onCutCapture?: React.ClipboardEventHandler<T>;
	        onPaste?: React.ClipboardEventHandler<T>;
	        onPasteCapture?: React.ClipboardEventHandler<T>;
	        onCompositionEnd?: React.CompositionEventHandler<T>;
	        onCompositionEndCapture?: React.CompositionEventHandler<T>;
	        onCompositionStart?: React.CompositionEventHandler<T>;
	        onCompositionStartCapture?: React.CompositionEventHandler<T>;
	        onCompositionUpdate?: React.CompositionEventHandler<T>;
	        onCompositionUpdateCapture?: React.CompositionEventHandler<T>;
	        onFocus?: React.FocusEventHandler<T>;
	        onFocusCapture?: React.FocusEventHandler<T>;
	        onBlur?: React.FocusEventHandler<T>;
	        onBlurCapture?: React.FocusEventHandler<T>;
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
	        onLoad?: React.ReactEventHandler<T>;
	        onLoadCapture?: React.ReactEventHandler<T>;
	        onError?: React.ReactEventHandler<T>;
	        onErrorCapture?: React.ReactEventHandler<T>;
	        onKeyDown?: React.KeyboardEventHandler<T>;
	        onKeyDownCapture?: React.KeyboardEventHandler<T>;
	        onKeyPress?: React.KeyboardEventHandler<T>;
	        onKeyPressCapture?: React.KeyboardEventHandler<T>;
	        onKeyUp?: React.KeyboardEventHandler<T>;
	        onKeyUpCapture?: React.KeyboardEventHandler<T>;
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
	        onSelect?: React.ReactEventHandler<T>;
	        onSelectCapture?: React.ReactEventHandler<T>;
	        onTouchCancel?: React.TouchEventHandler<T>;
	        onTouchCancelCapture?: React.TouchEventHandler<T>;
	        onTouchEnd?: React.TouchEventHandler<T>;
	        onTouchEndCapture?: React.TouchEventHandler<T>;
	        onTouchMove?: React.TouchEventHandler<T>;
	        onTouchMoveCapture?: React.TouchEventHandler<T>;
	        onTouchStart?: React.TouchEventHandler<T>;
	        onTouchStartCapture?: React.TouchEventHandler<T>;
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
	        onScroll?: React.UIEventHandler<T>;
	        onScrollCapture?: React.UIEventHandler<T>;
	        onWheel?: React.WheelEventHandler<T>;
	        onWheelCapture?: React.WheelEventHandler<T>;
	        onAnimationStart?: React.AnimationEventHandler<T>;
	        onAnimationStartCapture?: React.AnimationEventHandler<T>;
	        onAnimationEnd?: React.AnimationEventHandler<T>;
	        onAnimationEndCapture?: React.AnimationEventHandler<T>;
	        onAnimationIteration?: React.AnimationEventHandler<T>;
	        onAnimationIterationCapture?: React.AnimationEventHandler<T>;
	        onTransitionEnd?: React.TransitionEventHandler<T>;
	        onTransitionEndCapture?: React.TransitionEventHandler<T>;
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
	        alignSelf?: Breakpointify<CSS.Properties['alignSelf']>;
	        /**
	         * Sets the way a box is justified inside its
	         * alignment container along the appropriate axis.
	         */
	        justifySelf?: Breakpointify<CSS.Properties['justifySelf']>;
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
	        placeSelf?: Breakpointify<CSS.Properties['placeSelf']>;
	    }
	    type ColorProp = ((colors: Theme['color']) => QIXColor | string) | string | QIXColor;
	    type Styles<StyleDefinitions> = {
	        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object ? ((variant: Variant<StyleDefinitions[StyleName]>) => EmotionStyles) : EmotionStyles;
	    };
	    type ComponentStyles<StyleDefinitions> = {
	        [StyleName in keyof StyleDefinitions]: StyleDefinitions[StyleName] extends Object ? (state: StyleDefinitions[StyleName]) => SerializedStyles : SerializedStyles;
	    };
	    type Variant<Style> = (variants: Partial<{
	        [StyleName in keyof Style]: Partial<Record<Extract<Style[StyleName], string>, EmotionStyles>>;
	    }>) => EmotionStyles;
	    type CreateStyles<Overrides, Props = {}, T = {}> = (props: Props, theme: WhaleTypes.Theme, params?: T) => WhaleTypes.Styles<Overrides>;
	} module 'csstype' {
	    interface Properties {
	        display?: 'block' | 'inline' | 'inline-block' | 'inline-table' | 'list-item' | 'none' | 'run-in' | 'table' | 'table-caption' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-footer-group' | 'table-header-group' | 'table-row' | 'table-row-group' | 'flex' | 'grid';
	        overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit';
	        alignSelf?: 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'inherid' | 'initial' | 'left' | 'normal' | 'right' | 'safe' | 'safe-end' | 'safe-start' | 'start' | 'stretch' | 'unsafe' | 'unset';
	        justifySelf?: 'baseline' | 'center' | 'end' | 'flex-end' | 'flex-start' | 'inherid' | 'initial' | 'left' | 'normal' | 'right' | 'safe' | 'safe-end' | 'safe-start' | 'start' | 'stretch' | 'unsafe' | 'unset';
	    }
	}
	export type DeepPartial<T> = {
	    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
	};
	export type EmotionStyles = Array<Interpolation> | ObjectInterpolation<undefined>;
	export type Breakpointify<T> = T[] | T;
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
declare module 'utils/props/style/types' {
	import CSS from 'csstype'

	export type StyleResolverObject = {
	    [key: string] : [string, string, StyleResolver?]
	}

	export type StyleResolverContext = {
	    padding: [string, string, string, string],
	    margin: [string, string, string, string]
	}

	export type StyleResolver = (resolverParams: {
	    propValue: any
	    propName: string
	    theme: WhaleTypes.Theme
	    ctx: StyleResolverContext
	}) => string | void



	export interface StyleProps extends
	    WhaleTypes.ColorProps,
	    WhaleTypes.BorderProps,
	    WhaleTypes.PaddingProps,
	    WhaleTypes.MarginProps,
	    WhaleTypes.LayoutProps,
	    WhaleTypes.FlexProps,
	    WhaleTypes.GridProps {
	    [key: string]: unknown
	}

	type Color = {
	    background: CSS.Properties['background']
	    color: CSS.Properties['color']
	}

	type Border = {
	    borderWidth: CSS.Properties['borderWidth']
	    borderStyle: CSS.Properties['borderStyle']
	    borderColor: CSS.Properties['borderColor']
	    borderRadius: CSS.Properties['borderRadius']
	}
	type Padding = {
	    padding: CSS.Properties['padding']
	}

	type Margin = {
	    margin: CSS.Properties['margin']
	}

	type Layout = {
	    display: CSS.Properties['display']
	    visibility: CSS.Properties['visibility']
	    width: CSS.Properties['width']
	    height: CSS.Properties['height']
	    transition: CSS.Properties['transition']
	}

	type Flex = {
	    flex: CSS.Properties['flex']
	    flexBasis: CSS.Properties['flexBasis']
	    flexGrow: CSS.Properties['flexGrow']
	    flexShrink: CSS.Properties['flexShrink']
	    alignSelf: CSS.Properties['alignSelf']
	    justifySelf: CSS.Properties['justifySelf']
	}

	type Grid = {
	    gridColumnStart: CSS.Properties['gridColumnStart']
	    gridColumnEnd: CSS.Properties['gridColumnEnd']
	    gridRowStart: CSS.Properties['gridRowStart']
	    gridRowEnd: CSS.Properties['gridRowEnd']
	    gridColumn: CSS.Properties['gridColumn']
	    gridRow: CSS.Properties['gridRow']
	    gridArea: CSS.Properties['gridArea']
	    placeSelf: CSS.Properties['placeSelf']
	}

	export interface InjectedStyles {
	    color: Color
	    border: Border
	    padding: Padding
	    margin: Margin
	    layout: Layout
	    flex: Flex
	    grid: Grid
	    flow: Margin & Flex & Grid
	    self: Padding & Layout & Color & Border
	    all: Margin & Flex & Grid & Padding & Layout & Color & Border
	}

	export type InjectedStylesNames = keyof InjectedStyles
}
declare module 'utils/props/attribute' {
	 const _default: (props: any, setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>, mouseFocus?: boolean | undefined) => {
	    attributes: any;
	    events: {
	        all: {
	            onTransitionEnd: any;
	            onTransitionEndCapture: any;
	            onAnimationStart: any;
	            onAnimationStartCapture: any;
	            onAnimationEnd: any;
	            onAnimationEndCapture: any;
	            onAnimationIteration: any;
	            onAnimationIterationCapture: any;
	            onWheel: any;
	            onWheelCapture: any;
	            onScroll: any;
	            onScrollCapture: any;
	            onPointerDown: any;
	            onPointerDownCapture: any;
	            onPointerMove: any;
	            onPointerMoveCapture: any;
	            onPointerUp: any;
	            onPointerUpCapture: any;
	            onPointerCancel: any;
	            onPointerCancelCapture: any;
	            onPointerEnter: any;
	            onPointerLeave: any;
	            onPointerOver: any;
	            onPointerOverCapture: any;
	            onPointerOut: any;
	            onPointerOutCapture: any;
	            onGotPointerCapture: any;
	            onGotPointerCaptureCapture: any;
	            onLostPointerCapture: any;
	            onLostPointerCaptureCapture: any;
	            onTouchCancel: any;
	            onTouchCancelCapture: any;
	            onTouchEnd: any;
	            onTouchEndCapture: any;
	            onTouchMove: any;
	            onTouchMoveCapture: any;
	            onTouchStart: any;
	            onTouchStartCapture: any;
	            onSelect: any;
	            onSelectCapture: any;
	            onAuxClick: any;
	            onAuxClickCapture: any;
	            onClick: any;
	            onClickCapture: any;
	            onContextMenu: any;
	            onContextMenuCapture: any;
	            onDoubleClick: any;
	            onDoubleClickCapture: any;
	            onDrag: any;
	            onDragCapture: any;
	            onDragEnd: any;
	            onDragEndCapture: any;
	            onDragEnter: any;
	            onDragEnterCapture: any;
	            onDragExit: any;
	            onDragExitCapture: any;
	            onDragLeave: any;
	            onDragLeaveCapture: any;
	            onDragOver: any;
	            onDragOverCapture: any;
	            onDragStart: any;
	            onDragStartCapture: any;
	            onDrop: any;
	            onDropCapture: any;
	            onMouseDown: (event: any) => void;
	            onMouseDownCapture: any;
	            onMouseEnter: any;
	            onMouseLeave: any;
	            onMouseMove: any;
	            onMouseMoveCapture: any;
	            onMouseOut: any;
	            onMouseOutCapture: any;
	            onMouseOver: any;
	            onMouseOverCapture: any;
	            onMouseUp: (event: any) => void;
	            onMouseUpCapture: any;
	            onAbort: any;
	            onAbortCapture: any;
	            onCanPlay: any;
	            onCanPlayCapture: any;
	            onCanPlayThrough: any;
	            onCanPlayThroughCapture: any;
	            onDurationChange: any;
	            onDurationChangeCapture: any;
	            onEmptied: any;
	            onEmptiedCapture: any;
	            onEncrypted: any;
	            onEncryptedCapture: any;
	            onEnded: any;
	            onEndedCapture: any;
	            onLoadedData: any;
	            onLoadedDataCapture: any;
	            onLoadedMetadata: any;
	            onLoadedMetadataCapture: any;
	            onLoadStart: any;
	            onLoadStartCapture: any;
	            onPause: any;
	            onPauseCapture: any;
	            onPlay: any;
	            onPlayCapture: any;
	            onPlaying: any;
	            onPlayingCapture: any;
	            onProgress: any;
	            onProgressCapture: any;
	            onRateChange: any;
	            onRateChangeCapture: any;
	            onSeeked: any;
	            onSeekedCapture: any;
	            onSeeking: any;
	            onSeekingCapture: any;
	            onStalled: any;
	            onStalledCapture: any;
	            onSuspend: any;
	            onSuspendCapture: any;
	            onTimeUpdate: any;
	            onTimeUpdateCapture: any;
	            onVolumeChange: any;
	            onVolumeChangeCapture: any;
	            onWaiting: any;
	            onWaitingCapture: any;
	            onKeyDown: (event: any) => void;
	            onKeyDownCapture: any;
	            onKeyPress: any;
	            onKeyPressCapture: any;
	            onKeyUp: any;
	            onKeyUpCapture: any;
	            onLoad: any;
	            onLoadCapture: any;
	            onError: any;
	            onErrorCapture: any;
	            onChange: any;
	            onChangeCapture: any;
	            onBeforeInput: any;
	            onBeforeInputCapture: any;
	            onInput: any;
	            onInputCapture: any;
	            onReset: any;
	            onResetCapture: any;
	            onSubmit: any;
	            onSubmitCapture: any;
	            onInvalid: any;
	            onInvalidCapture: any;
	            onFocus: (e: any) => void;
	            onFocusCapture: any;
	            onBlur: (e: any) => void;
	            onBlurCapture: any;
	            onCompositionEnd: any;
	            onCompositionEndCapture: any;
	            onCompositionStart: any;
	            onCompositionStartCapture: any;
	            onCompositionUpdate: any;
	            onCompositionUpdateCapture: any;
	            onCopy: any;
	            onCopyCapture: any;
	            onCut: any;
	            onCutCapture: any;
	            onPaste: any;
	            onPasteCapture: any;
	        };
	        clipboardEvents: {
	            onCopy: any;
	            onCopyCapture: any;
	            onCut: any;
	            onCutCapture: any;
	            onPaste: any;
	            onPasteCapture: any;
	        };
	        compositionEvents: {
	            onCompositionEnd: any;
	            onCompositionEndCapture: any;
	            onCompositionStart: any;
	            onCompositionStartCapture: any;
	            onCompositionUpdate: any;
	            onCompositionUpdateCapture: any;
	        };
	        focusEvents: {
	            onFocus: (e: any) => void;
	            onFocusCapture: any;
	            onBlur: (e: any) => void;
	            onBlurCapture: any;
	        };
	        formEvents: {
	            onChange: any;
	            onChangeCapture: any;
	            onBeforeInput: any;
	            onBeforeInputCapture: any;
	            onInput: any;
	            onInputCapture: any;
	            onReset: any;
	            onResetCapture: any;
	            onSubmit: any;
	            onSubmitCapture: any;
	            onInvalid: any;
	            onInvalidCapture: any;
	        };
	        imageEvents: {
	            onLoad: any;
	            onLoadCapture: any;
	            onError: any;
	            onErrorCapture: any;
	        };
	        keyboardEvents: {
	            onKeyDown: (event: any) => void;
	            onKeyDownCapture: any;
	            onKeyPress: any;
	            onKeyPressCapture: any;
	            onKeyUp: any;
	            onKeyUpCapture: any;
	        };
	        mediaEvents: {
	            onAbort: any;
	            onAbortCapture: any;
	            onCanPlay: any;
	            onCanPlayCapture: any;
	            onCanPlayThrough: any;
	            onCanPlayThroughCapture: any;
	            onDurationChange: any;
	            onDurationChangeCapture: any;
	            onEmptied: any;
	            onEmptiedCapture: any;
	            onEncrypted: any;
	            onEncryptedCapture: any;
	            onEnded: any;
	            onEndedCapture: any;
	            onLoadedData: any;
	            onLoadedDataCapture: any;
	            onLoadedMetadata: any;
	            onLoadedMetadataCapture: any;
	            onLoadStart: any;
	            onLoadStartCapture: any;
	            onPause: any;
	            onPauseCapture: any;
	            onPlay: any;
	            onPlayCapture: any;
	            onPlaying: any;
	            onPlayingCapture: any;
	            onProgress: any;
	            onProgressCapture: any;
	            onRateChange: any;
	            onRateChangeCapture: any;
	            onSeeked: any;
	            onSeekedCapture: any;
	            onSeeking: any;
	            onSeekingCapture: any;
	            onStalled: any;
	            onStalledCapture: any;
	            onSuspend: any;
	            onSuspendCapture: any;
	            onTimeUpdate: any;
	            onTimeUpdateCapture: any;
	            onVolumeChange: any;
	            onVolumeChangeCapture: any;
	            onWaiting: any;
	            onWaitingCapture: any;
	        };
	        mouseEvents: {
	            onAuxClick: any;
	            onAuxClickCapture: any;
	            onClick: any;
	            onClickCapture: any;
	            onContextMenu: any;
	            onContextMenuCapture: any;
	            onDoubleClick: any;
	            onDoubleClickCapture: any;
	            onDrag: any;
	            onDragCapture: any;
	            onDragEnd: any;
	            onDragEndCapture: any;
	            onDragEnter: any;
	            onDragEnterCapture: any;
	            onDragExit: any;
	            onDragExitCapture: any;
	            onDragLeave: any;
	            onDragLeaveCapture: any;
	            onDragOver: any;
	            onDragOverCapture: any;
	            onDragStart: any;
	            onDragStartCapture: any;
	            onDrop: any;
	            onDropCapture: any;
	            onMouseDown: (event: any) => void;
	            onMouseDownCapture: any;
	            onMouseEnter: any;
	            onMouseLeave: any;
	            onMouseMove: any;
	            onMouseMoveCapture: any;
	            onMouseOut: any;
	            onMouseOutCapture: any;
	            onMouseOver: any;
	            onMouseOverCapture: any;
	            onMouseUp: (event: any) => void;
	            onMouseUpCapture: any;
	        };
	        selectionEvents: {
	            onSelect: any;
	            onSelectCapture: any;
	        };
	        touchEvents: {
	            onTouchCancel: any;
	            onTouchCancelCapture: any;
	            onTouchEnd: any;
	            onTouchEndCapture: any;
	            onTouchMove: any;
	            onTouchMoveCapture: any;
	            onTouchStart: any;
	            onTouchStartCapture: any;
	        };
	        pointerEvents: {
	            onPointerDown: any;
	            onPointerDownCapture: any;
	            onPointerMove: any;
	            onPointerMoveCapture: any;
	            onPointerUp: any;
	            onPointerUpCapture: any;
	            onPointerCancel: any;
	            onPointerCancelCapture: any;
	            onPointerEnter: any;
	            onPointerLeave: any;
	            onPointerOver: any;
	            onPointerOverCapture: any;
	            onPointerOut: any;
	            onPointerOutCapture: any;
	            onGotPointerCapture: any;
	            onGotPointerCaptureCapture: any;
	            onLostPointerCapture: any;
	            onLostPointerCaptureCapture: any;
	        };
	        scrollEvents: {
	            onScroll: any;
	            onScrollCapture: any;
	        };
	        wheelEvents: {
	            onWheel: any;
	            onWheelCapture: any;
	        };
	        animationEvents: {
	            onAnimationStart: any;
	            onAnimationStartCapture: any;
	            onAnimationEnd: any;
	            onAnimationEndCapture: any;
	            onAnimationIteration: any;
	            onAnimationIterationCapture: any;
	        };
	        transitionEvents: {
	            onTransitionEnd: any;
	            onTransitionEndCapture: any;
	        };
	    };
	};
	export default _default;

}
declare module 'utils/colorProp' {
	import Color from 'color';
	import WhaleTypes from 'types'; const _default: (theme: WhaleTypes.Theme, prop?: string | ((colors: {
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
	}>) | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
	}> | undefined) => Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | Color<string | number | any | ArrayLike<number> | {
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
declare module 'utils/props/style/resolvers/color' {
	import { StyleResolver } from 'utils/props/style/types'; const resolver: StyleResolver;
	export default resolver;

}
declare module 'utils/props/style/resolvers/paddingMargin' {
	import { StyleResolver } from 'utils/props/style/types'; const resolver: StyleResolver;
	export default resolver;

}
declare module 'utils/props/style' {
	import WhaleTypes from '@flow-ui/whale/types';
	import { StyleProps } from 'utils/props/style/types'; const _default: (props: StyleProps, theme: WhaleTypes.Theme, styleProps: Partial<Record<string, string[]>>) => Record<string, Record<string, string>>;
	export default _default;

}
declare module 'utils/props' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import WhaleTypes from 'types';
	interface Options {
	    styleProps?: Partial<Record<string, string[]>>;
	    mouseFocus?: boolean;
	} const attachProps: (props: any, theme: WhaleTypes.Theme, setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>, options: Options) => {
	    attributes: any;
	    events: {
	        all: {
	            onTransitionEnd: any;
	            onTransitionEndCapture: any;
	            onAnimationStart: any;
	            onAnimationStartCapture: any;
	            onAnimationEnd: any;
	            onAnimationEndCapture: any;
	            onAnimationIteration: any;
	            onAnimationIterationCapture: any;
	            onWheel: any;
	            onWheelCapture: any;
	            onScroll: any;
	            onScrollCapture: any;
	            onPointerDown: any;
	            onPointerDownCapture: any;
	            onPointerMove: any;
	            onPointerMoveCapture: any;
	            onPointerUp: any;
	            onPointerUpCapture: any;
	            onPointerCancel: any;
	            onPointerCancelCapture: any;
	            onPointerEnter: any;
	            onPointerLeave: any;
	            onPointerOver: any;
	            onPointerOverCapture: any;
	            onPointerOut: any;
	            onPointerOutCapture: any;
	            onGotPointerCapture: any;
	            onGotPointerCaptureCapture: any;
	            onLostPointerCapture: any;
	            onLostPointerCaptureCapture: any;
	            onTouchCancel: any;
	            onTouchCancelCapture: any;
	            onTouchEnd: any;
	            onTouchEndCapture: any;
	            onTouchMove: any;
	            onTouchMoveCapture: any;
	            onTouchStart: any;
	            onTouchStartCapture: any;
	            onSelect: any;
	            onSelectCapture: any;
	            onAuxClick: any;
	            onAuxClickCapture: any;
	            onClick: any;
	            onClickCapture: any;
	            onContextMenu: any;
	            onContextMenuCapture: any;
	            onDoubleClick: any;
	            onDoubleClickCapture: any;
	            onDrag: any;
	            onDragCapture: any;
	            onDragEnd: any;
	            onDragEndCapture: any;
	            onDragEnter: any;
	            onDragEnterCapture: any;
	            onDragExit: any;
	            onDragExitCapture: any;
	            onDragLeave: any;
	            onDragLeaveCapture: any;
	            onDragOver: any;
	            onDragOverCapture: any;
	            onDragStart: any;
	            onDragStartCapture: any;
	            onDrop: any;
	            onDropCapture: any;
	            onMouseDown: (event: any) => void;
	            onMouseDownCapture: any;
	            onMouseEnter: any;
	            onMouseLeave: any;
	            onMouseMove: any;
	            onMouseMoveCapture: any;
	            onMouseOut: any;
	            onMouseOutCapture: any;
	            onMouseOver: any;
	            onMouseOverCapture: any;
	            onMouseUp: (event: any) => void;
	            onMouseUpCapture: any;
	            onAbort: any;
	            onAbortCapture: any;
	            onCanPlay: any;
	            onCanPlayCapture: any;
	            onCanPlayThrough: any;
	            onCanPlayThroughCapture: any;
	            onDurationChange: any;
	            onDurationChangeCapture: any;
	            onEmptied: any;
	            onEmptiedCapture: any;
	            onEncrypted: any;
	            onEncryptedCapture: any;
	            onEnded: any;
	            onEndedCapture: any;
	            onLoadedData: any;
	            onLoadedDataCapture: any;
	            onLoadedMetadata: any;
	            onLoadedMetadataCapture: any;
	            onLoadStart: any;
	            onLoadStartCapture: any;
	            onPause: any;
	            onPauseCapture: any;
	            onPlay: any;
	            onPlayCapture: any;
	            onPlaying: any;
	            onPlayingCapture: any;
	            onProgress: any;
	            onProgressCapture: any;
	            onRateChange: any;
	            onRateChangeCapture: any;
	            onSeeked: any;
	            onSeekedCapture: any;
	            onSeeking: any;
	            onSeekingCapture: any;
	            onStalled: any;
	            onStalledCapture: any;
	            onSuspend: any;
	            onSuspendCapture: any;
	            onTimeUpdate: any;
	            onTimeUpdateCapture: any;
	            onVolumeChange: any;
	            onVolumeChangeCapture: any;
	            onWaiting: any;
	            onWaitingCapture: any;
	            onKeyDown: (event: any) => void;
	            onKeyDownCapture: any;
	            onKeyPress: any;
	            onKeyPressCapture: any;
	            onKeyUp: any;
	            onKeyUpCapture: any;
	            onLoad: any;
	            onLoadCapture: any;
	            onError: any;
	            onErrorCapture: any;
	            onChange: any;
	            onChangeCapture: any;
	            onBeforeInput: any;
	            onBeforeInputCapture: any;
	            onInput: any;
	            onInputCapture: any;
	            onReset: any;
	            onResetCapture: any;
	            onSubmit: any;
	            onSubmitCapture: any;
	            onInvalid: any;
	            onInvalidCapture: any;
	            onFocus: (e: any) => void;
	            onFocusCapture: any;
	            onBlur: (e: any) => void;
	            onBlurCapture: any;
	            onCompositionEnd: any;
	            onCompositionEndCapture: any;
	            onCompositionStart: any;
	            onCompositionStartCapture: any;
	            onCompositionUpdate: any;
	            onCompositionUpdateCapture: any;
	            onCopy: any;
	            onCopyCapture: any;
	            onCut: any;
	            onCutCapture: any;
	            onPaste: any;
	            onPasteCapture: any;
	        };
	        clipboardEvents: {
	            onCopy: any;
	            onCopyCapture: any;
	            onCut: any;
	            onCutCapture: any;
	            onPaste: any;
	            onPasteCapture: any;
	        };
	        compositionEvents: {
	            onCompositionEnd: any;
	            onCompositionEndCapture: any;
	            onCompositionStart: any;
	            onCompositionStartCapture: any;
	            onCompositionUpdate: any;
	            onCompositionUpdateCapture: any;
	        };
	        focusEvents: {
	            onFocus: (e: any) => void;
	            onFocusCapture: any;
	            onBlur: (e: any) => void;
	            onBlurCapture: any;
	        };
	        formEvents: {
	            onChange: any;
	            onChangeCapture: any;
	            onBeforeInput: any;
	            onBeforeInputCapture: any;
	            onInput: any;
	            onInputCapture: any;
	            onReset: any;
	            onResetCapture: any;
	            onSubmit: any;
	            onSubmitCapture: any;
	            onInvalid: any;
	            onInvalidCapture: any;
	        };
	        imageEvents: {
	            onLoad: any;
	            onLoadCapture: any;
	            onError: any;
	            onErrorCapture: any;
	        };
	        keyboardEvents: {
	            onKeyDown: (event: any) => void;
	            onKeyDownCapture: any;
	            onKeyPress: any;
	            onKeyPressCapture: any;
	            onKeyUp: any;
	            onKeyUpCapture: any;
	        };
	        mediaEvents: {
	            onAbort: any;
	            onAbortCapture: any;
	            onCanPlay: any;
	            onCanPlayCapture: any;
	            onCanPlayThrough: any;
	            onCanPlayThroughCapture: any;
	            onDurationChange: any;
	            onDurationChangeCapture: any;
	            onEmptied: any;
	            onEmptiedCapture: any;
	            onEncrypted: any;
	            onEncryptedCapture: any;
	            onEnded: any;
	            onEndedCapture: any;
	            onLoadedData: any;
	            onLoadedDataCapture: any;
	            onLoadedMetadata: any;
	            onLoadedMetadataCapture: any;
	            onLoadStart: any;
	            onLoadStartCapture: any;
	            onPause: any;
	            onPauseCapture: any;
	            onPlay: any;
	            onPlayCapture: any;
	            onPlaying: any;
	            onPlayingCapture: any;
	            onProgress: any;
	            onProgressCapture: any;
	            onRateChange: any;
	            onRateChangeCapture: any;
	            onSeeked: any;
	            onSeekedCapture: any;
	            onSeeking: any;
	            onSeekingCapture: any;
	            onStalled: any;
	            onStalledCapture: any;
	            onSuspend: any;
	            onSuspendCapture: any;
	            onTimeUpdate: any;
	            onTimeUpdateCapture: any;
	            onVolumeChange: any;
	            onVolumeChangeCapture: any;
	            onWaiting: any;
	            onWaitingCapture: any;
	        };
	        mouseEvents: {
	            onAuxClick: any;
	            onAuxClickCapture: any;
	            onClick: any;
	            onClickCapture: any;
	            onContextMenu: any;
	            onContextMenuCapture: any;
	            onDoubleClick: any;
	            onDoubleClickCapture: any;
	            onDrag: any;
	            onDragCapture: any;
	            onDragEnd: any;
	            onDragEndCapture: any;
	            onDragEnter: any;
	            onDragEnterCapture: any;
	            onDragExit: any;
	            onDragExitCapture: any;
	            onDragLeave: any;
	            onDragLeaveCapture: any;
	            onDragOver: any;
	            onDragOverCapture: any;
	            onDragStart: any;
	            onDragStartCapture: any;
	            onDrop: any;
	            onDropCapture: any;
	            onMouseDown: (event: any) => void;
	            onMouseDownCapture: any;
	            onMouseEnter: any;
	            onMouseLeave: any;
	            onMouseMove: any;
	            onMouseMoveCapture: any;
	            onMouseOut: any;
	            onMouseOutCapture: any;
	            onMouseOver: any;
	            onMouseOverCapture: any;
	            onMouseUp: (event: any) => void;
	            onMouseUpCapture: any;
	        };
	        selectionEvents: {
	            onSelect: any;
	            onSelectCapture: any;
	        };
	        touchEvents: {
	            onTouchCancel: any;
	            onTouchCancelCapture: any;
	            onTouchEnd: any;
	            onTouchEndCapture: any;
	            onTouchMove: any;
	            onTouchMoveCapture: any;
	            onTouchStart: any;
	            onTouchStartCapture: any;
	        };
	        pointerEvents: {
	            onPointerDown: any;
	            onPointerDownCapture: any;
	            onPointerMove: any;
	            onPointerMoveCapture: any;
	            onPointerUp: any;
	            onPointerUpCapture: any;
	            onPointerCancel: any;
	            onPointerCancelCapture: any;
	            onPointerEnter: any;
	            onPointerLeave: any;
	            onPointerOver: any;
	            onPointerOverCapture: any;
	            onPointerOut: any;
	            onPointerOutCapture: any;
	            onGotPointerCapture: any;
	            onGotPointerCaptureCapture: any;
	            onLostPointerCapture: any;
	            onLostPointerCaptureCapture: any;
	        };
	        scrollEvents: {
	            onScroll: any;
	            onScrollCapture: any;
	        };
	        wheelEvents: {
	            onWheel: any;
	            onWheelCapture: any;
	        };
	        animationEvents: {
	            onAnimationStart: any;
	            onAnimationStartCapture: any;
	            onAnimationEnd: any;
	            onAnimationEndCapture: any;
	            onAnimationIteration: any;
	            onAnimationIterationCapture: any;
	        };
	        transitionEvents: {
	            onTransitionEnd: any;
	            onTransitionEndCapture: any;
	        };
	    };
	    propStyles: {};
	};
	export default attachProps;

}
declare module 'utils/createStyles' {
	import WhaleTypes, { EmotionStyles } from 'types'; type createComponentStyles = <S>(styles: WhaleTypes.Styles<S>, propStyles: {
	    [K in keyof S]?: EmotionStyles;
	}, overrideName: string, overrides: WhaleTypes.Theme['overrides']) => WhaleTypes.ComponentStyles<S>; const createComponentStyles: createComponentStyles;
	export default createComponentStyles;

}
declare module 'hooks/useComponent' {
	import WhaleTypes from 'types';
	import { InjectedStyles } from 'utils/props/style/types';
	interface Options<S> {
	    props: any;
	    styles: WhaleTypes.Styles<S> | WhaleTypes.CreateStyles<S>;
	    styleProps?: Partial<Record<keyof S, (keyof InjectedStyles)[]>>;
	    mouseFocus?: boolean;
	    focusDecoration?: boolean;
	    theme?: WhaleTypes.Theme;
	} const useComponent: <S>(overrideName: string, options: Options<S>, params?: Object) => {
	    cs: WhaleTypes.ComponentStyles<S>;
	    attributes: any;
	    events: {
	        all: {
	            onTransitionEnd: any;
	            onTransitionEndCapture: any;
	            onAnimationStart: any;
	            onAnimationStartCapture: any;
	            onAnimationEnd: any;
	            onAnimationEndCapture: any;
	            onAnimationIteration: any;
	            onAnimationIterationCapture: any;
	            onWheel: any;
	            onWheelCapture: any;
	            onScroll: any;
	            onScrollCapture: any;
	            onPointerDown: any;
	            onPointerDownCapture: any;
	            onPointerMove: any;
	            onPointerMoveCapture: any;
	            onPointerUp: any;
	            onPointerUpCapture: any;
	            onPointerCancel: any;
	            onPointerCancelCapture: any;
	            onPointerEnter: any;
	            onPointerLeave: any;
	            onPointerOver: any;
	            onPointerOverCapture: any;
	            onPointerOut: any;
	            onPointerOutCapture: any;
	            onGotPointerCapture: any;
	            onGotPointerCaptureCapture: any;
	            onLostPointerCapture: any;
	            onLostPointerCaptureCapture: any;
	            onTouchCancel: any;
	            onTouchCancelCapture: any;
	            onTouchEnd: any;
	            onTouchEndCapture: any;
	            onTouchMove: any;
	            onTouchMoveCapture: any;
	            onTouchStart: any;
	            onTouchStartCapture: any;
	            onSelect: any;
	            onSelectCapture: any;
	            onAuxClick: any;
	            onAuxClickCapture: any;
	            onClick: any;
	            onClickCapture: any;
	            onContextMenu: any;
	            onContextMenuCapture: any;
	            onDoubleClick: any;
	            onDoubleClickCapture: any;
	            onDrag: any;
	            onDragCapture: any;
	            onDragEnd: any;
	            onDragEndCapture: any;
	            onDragEnter: any;
	            onDragEnterCapture: any;
	            onDragExit: any;
	            onDragExitCapture: any;
	            onDragLeave: any;
	            onDragLeaveCapture: any;
	            onDragOver: any;
	            onDragOverCapture: any;
	            onDragStart: any;
	            onDragStartCapture: any;
	            onDrop: any;
	            onDropCapture: any;
	            onMouseDown: (event: any) => void;
	            onMouseDownCapture: any;
	            onMouseEnter: any;
	            onMouseLeave: any;
	            onMouseMove: any;
	            onMouseMoveCapture: any;
	            onMouseOut: any;
	            onMouseOutCapture: any;
	            onMouseOver: any;
	            onMouseOverCapture: any;
	            onMouseUp: (event: any) => void;
	            onMouseUpCapture: any;
	            onAbort: any;
	            onAbortCapture: any;
	            onCanPlay: any;
	            onCanPlayCapture: any;
	            onCanPlayThrough: any;
	            onCanPlayThroughCapture: any;
	            onDurationChange: any;
	            onDurationChangeCapture: any;
	            onEmptied: any;
	            onEmptiedCapture: any;
	            onEncrypted: any;
	            onEncryptedCapture: any;
	            onEnded: any;
	            onEndedCapture: any;
	            onLoadedData: any;
	            onLoadedDataCapture: any;
	            onLoadedMetadata: any;
	            onLoadedMetadataCapture: any;
	            onLoadStart: any;
	            onLoadStartCapture: any;
	            onPause: any;
	            onPauseCapture: any;
	            onPlay: any;
	            onPlayCapture: any;
	            onPlaying: any;
	            onPlayingCapture: any;
	            onProgress: any;
	            onProgressCapture: any;
	            onRateChange: any;
	            onRateChangeCapture: any;
	            onSeeked: any;
	            onSeekedCapture: any;
	            onSeeking: any;
	            onSeekingCapture: any;
	            onStalled: any;
	            onStalledCapture: any;
	            onSuspend: any;
	            onSuspendCapture: any;
	            onTimeUpdate: any;
	            onTimeUpdateCapture: any;
	            onVolumeChange: any;
	            onVolumeChangeCapture: any;
	            onWaiting: any;
	            onWaitingCapture: any;
	            onKeyDown: (event: any) => void;
	            onKeyDownCapture: any;
	            onKeyPress: any;
	            onKeyPressCapture: any;
	            onKeyUp: any;
	            onKeyUpCapture: any;
	            onLoad: any;
	            onLoadCapture: any;
	            onError: any;
	            onErrorCapture: any;
	            onChange: any;
	            onChangeCapture: any;
	            onBeforeInput: any;
	            onBeforeInputCapture: any;
	            onInput: any;
	            onInputCapture: any;
	            onReset: any;
	            onResetCapture: any;
	            onSubmit: any;
	            onSubmitCapture: any;
	            onInvalid: any;
	            onInvalidCapture: any;
	            onFocus: (e: any) => void;
	            onFocusCapture: any;
	            onBlur: (e: any) => void;
	            onBlurCapture: any;
	            onCompositionEnd: any;
	            onCompositionEndCapture: any;
	            onCompositionStart: any;
	            onCompositionStartCapture: any;
	            onCompositionUpdate: any;
	            onCompositionUpdateCapture: any;
	            onCopy: any;
	            onCopyCapture: any;
	            onCut: any;
	            onCutCapture: any;
	            onPaste: any;
	            onPasteCapture: any;
	        };
	        clipboardEvents: {
	            onCopy: any;
	            onCopyCapture: any;
	            onCut: any;
	            onCutCapture: any;
	            onPaste: any;
	            onPasteCapture: any;
	        };
	        compositionEvents: {
	            onCompositionEnd: any;
	            onCompositionEndCapture: any;
	            onCompositionStart: any;
	            onCompositionStartCapture: any;
	            onCompositionUpdate: any;
	            onCompositionUpdateCapture: any;
	        };
	        focusEvents: {
	            onFocus: (e: any) => void;
	            onFocusCapture: any;
	            onBlur: (e: any) => void;
	            onBlurCapture: any;
	        };
	        formEvents: {
	            onChange: any;
	            onChangeCapture: any;
	            onBeforeInput: any;
	            onBeforeInputCapture: any;
	            onInput: any;
	            onInputCapture: any;
	            onReset: any;
	            onResetCapture: any;
	            onSubmit: any;
	            onSubmitCapture: any;
	            onInvalid: any;
	            onInvalidCapture: any;
	        };
	        imageEvents: {
	            onLoad: any;
	            onLoadCapture: any;
	            onError: any;
	            onErrorCapture: any;
	        };
	        keyboardEvents: {
	            onKeyDown: (event: any) => void;
	            onKeyDownCapture: any;
	            onKeyPress: any;
	            onKeyPressCapture: any;
	            onKeyUp: any;
	            onKeyUpCapture: any;
	        };
	        mediaEvents: {
	            onAbort: any;
	            onAbortCapture: any;
	            onCanPlay: any;
	            onCanPlayCapture: any;
	            onCanPlayThrough: any;
	            onCanPlayThroughCapture: any;
	            onDurationChange: any;
	            onDurationChangeCapture: any;
	            onEmptied: any;
	            onEmptiedCapture: any;
	            onEncrypted: any;
	            onEncryptedCapture: any;
	            onEnded: any;
	            onEndedCapture: any;
	            onLoadedData: any;
	            onLoadedDataCapture: any;
	            onLoadedMetadata: any;
	            onLoadedMetadataCapture: any;
	            onLoadStart: any;
	            onLoadStartCapture: any;
	            onPause: any;
	            onPauseCapture: any;
	            onPlay: any;
	            onPlayCapture: any;
	            onPlaying: any;
	            onPlayingCapture: any;
	            onProgress: any;
	            onProgressCapture: any;
	            onRateChange: any;
	            onRateChangeCapture: any;
	            onSeeked: any;
	            onSeekedCapture: any;
	            onSeeking: any;
	            onSeekingCapture: any;
	            onStalled: any;
	            onStalledCapture: any;
	            onSuspend: any;
	            onSuspendCapture: any;
	            onTimeUpdate: any;
	            onTimeUpdateCapture: any;
	            onVolumeChange: any;
	            onVolumeChangeCapture: any;
	            onWaiting: any;
	            onWaitingCapture: any;
	        };
	        mouseEvents: {
	            onAuxClick: any;
	            onAuxClickCapture: any;
	            onClick: any;
	            onClickCapture: any;
	            onContextMenu: any;
	            onContextMenuCapture: any;
	            onDoubleClick: any;
	            onDoubleClickCapture: any;
	            onDrag: any;
	            onDragCapture: any;
	            onDragEnd: any;
	            onDragEndCapture: any;
	            onDragEnter: any;
	            onDragEnterCapture: any;
	            onDragExit: any;
	            onDragExitCapture: any;
	            onDragLeave: any;
	            onDragLeaveCapture: any;
	            onDragOver: any;
	            onDragOverCapture: any;
	            onDragStart: any;
	            onDragStartCapture: any;
	            onDrop: any;
	            onDropCapture: any;
	            onMouseDown: (event: any) => void;
	            onMouseDownCapture: any;
	            onMouseEnter: any;
	            onMouseLeave: any;
	            onMouseMove: any;
	            onMouseMoveCapture: any;
	            onMouseOut: any;
	            onMouseOutCapture: any;
	            onMouseOver: any;
	            onMouseOverCapture: any;
	            onMouseUp: (event: any) => void;
	            onMouseUpCapture: any;
	        };
	        selectionEvents: {
	            onSelect: any;
	            onSelectCapture: any;
	        };
	        touchEvents: {
	            onTouchCancel: any;
	            onTouchCancelCapture: any;
	            onTouchEnd: any;
	            onTouchEndCapture: any;
	            onTouchMove: any;
	            onTouchMoveCapture: any;
	            onTouchStart: any;
	            onTouchStartCapture: any;
	        };
	        pointerEvents: {
	            onPointerDown: any;
	            onPointerDownCapture: any;
	            onPointerMove: any;
	            onPointerMoveCapture: any;
	            onPointerUp: any;
	            onPointerUpCapture: any;
	            onPointerCancel: any;
	            onPointerCancelCapture: any;
	            onPointerEnter: any;
	            onPointerLeave: any;
	            onPointerOver: any;
	            onPointerOverCapture: any;
	            onPointerOut: any;
	            onPointerOutCapture: any;
	            onGotPointerCapture: any;
	            onGotPointerCaptureCapture: any;
	            onLostPointerCapture: any;
	            onLostPointerCaptureCapture: any;
	        };
	        scrollEvents: {
	            onScroll: any;
	            onScrollCapture: any;
	        };
	        wheelEvents: {
	            onWheel: any;
	            onWheelCapture: any;
	        };
	        animationEvents: {
	            onAnimationStart: any;
	            onAnimationStartCapture: any;
	            onAnimationEnd: any;
	            onAnimationEndCapture: any;
	            onAnimationIteration: any;
	            onAnimationIterationCapture: any;
	        };
	        transitionEvents: {
	            onTransitionEnd: any;
	            onTransitionEndCapture: any;
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
