declare module "props/color" {
    import Color from 'color';
    export type ColorProp = ((colors: Stage.Theme['color']) => Color | Stage.ColorNames) | Color | Stage.ColorNames;
    function colorProp<V extends ColorProp | undefined>(value: V, theme: Stage.Theme): V extends undefined ? undefined : Stage.Color;
    export default colorProp;
}
declare module "props/breakpoint" {
    export type BreakpointProp<T> = T[] | T;
    function breakpointProp<P = string | number | undefined>(value: P | P[], theme: Stage.Theme, resolver: (currentValue: P, theme: Stage.Theme) => Stage.CSSInterpolation): Stage.CSSInterpolation;
    export default breakpointProp;
}
declare module "props/space" {
    export type SpaceProp = Stage.Sizes | (string & {
        T?: string;
    }) | number;
    function spaceProp(value: string | number | undefined, theme: Stage.Theme): string | undefined;
    export default spaceProp;
}
declare module "utils/isFunction" {
    export default function isFunction<V = Function>(a: any): a is V;
}
declare module "props/size" {
    export const sizes: string[];
    function sizeProp<T, V>(value: V, spacingResolvers: Record<Stage.Sizes, T>, otherResolver: (value: V) => T): T;
    export default sizeProp;
}
declare module "props/index" {
    import { ClassesSchemaDefinition, ComponentData } from "hooks/useSystem";
    export type Resolver = <Props, ClassesSchema extends ClassesSchemaDefinition, Element extends HTMLElement>(props: Record<string, any>, componentData: ComponentData<Props, ClassesSchema, Element>, theme: Stage.Theme) => void;
    const resolvers: Record<string, Resolver>;
    export default resolvers;
}
declare module "utils/createVariant" {
    import { ClassStateDefinition } from "hooks/useSystem";
    type ObjectVariant<States extends string> = Partial<Record<States, Stage.CSSInterpolation | Stage.CSSInterpolation[]>>;
    type BooleanVariant = Stage.CSSInterpolation | Stage.CSSInterpolation[];
    export type Variant<ClassState extends Exclude<ClassStateDefinition, void>> = (variants: {
        [State in keyof ClassState]?: ClassState[State] extends boolean ? BooleanVariant : ObjectVariant<Exclude<ClassState[State], boolean | undefined>>;
    }) => Stage.CSSInterpolation;
    export default function createVariant<ClassState extends Exclude<ClassStateDefinition, void>>(state: ClassState): Variant<ClassState>;
}
declare module "props/overrides" {
    import { ClassesSchemaDefinition, OverridesClassesDefinition, ResolvedStyleProps } from "hooks/useSystem";
    export type OverridesProp<ClassesSchema extends ClassesSchemaDefinition> = ((theme: Stage.Theme, styleProps: ResolvedStyleProps) => OverridesClassesDefinition<ClassesSchema>) | OverridesClassesDefinition<ClassesSchema>;
    function overridesProp<ClassesSchema extends ClassesSchemaDefinition>(prop: OverridesProp<ClassesSchema> | undefined, theme: Stage.Theme, styleProps: ResolvedStyleProps): OverridesClassesDefinition<ClassesSchema>;
    export default overridesProp;
}
declare module "utils/cssReset" {
    export const cssReset = "\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video, button {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n";
}
declare module "Provider" {
    import { Options } from '@emotion/cache';
    import React from 'react';
    interface ProviderProps {
        theme?: Stage.Theme;
        global?: Stage.CSSInterpolation;
        cache?: Options;
        children?: React.ReactNode;
    }
    export const StageContext: React.Context<Stage.Theme>;
    const Provider: <T extends ProviderProps>(props: T) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default Provider;
}
declare module "hooks/useTheme" {
    const _default: () => Stage.Theme;
    export default _default;
}
declare module "hooks/useSystem" {
    import { Variant } from "utils/createVariant";
    import { AllEventProps, CoreProps } from "props/types";
    export interface Options {
        focus?: 'always' | 'tabOnly' | 'never';
        label?: string;
        theme?: Stage.Theme;
    }
    export type ClassStateDefinition = Record<string, string | boolean | undefined> | void;
    export type ClassesSchemaDefinition = Record<string, ClassStateDefinition>;
    export type FunctionClassDefinition<ClassState extends Exclude<ClassStateDefinition, void>> = (state: ClassState, variant: Variant<ClassState>) => Stage.CSSInterpolation;
    export type OverridesClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = {
        [ClassName in keyof ClassesSchema]?: ClassesSchema[ClassName] extends void ? Stage.CSSInterpolation : FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>>;
    };
    export type ThemeOverrides<Props, ClassesSchema extends ClassesSchemaDefinition> = ((props: Props, styleProps: ResolvedStyleProps) => OverridesClassesDefinition<ClassesSchema>) | OverridesClassesDefinition<ClassesSchema>;
    export type ClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = {
        [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void ? Stage.CSSInterpolation : FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>>;
    };
    export type FunctionClass<ClassSchema extends ClassStateDefinition> = (state: ClassSchema) => Stage.CSSInterpolation;
    export type Classes<ClassesSchema extends ClassesSchemaDefinition> = {
        [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void ? Stage.CSSInterpolation : FunctionClass<ClassesSchema[ClassName]>;
    };
    export type CreateClasses<ClassesSchema extends ClassesSchemaDefinition, Props> = (theme: Stage.Theme, props: Props, styleProps: ResolvedStyleProps) => ClassesDefinition<ClassesSchema>;
    export type ResolvedStyleProps = {
        all: Stage.CSSInterpolation[];
        container: Stage.CSSInterpolation[];
        content: Stage.CSSInterpolation[];
        style: Stage.CSSInterpolation[];
        margin: Stage.CSSInterpolation[];
        padding: Stage.CSSInterpolation[];
        color: Stage.CSSInterpolation[];
        border: Stage.CSSInterpolation[];
        layout: Stage.CSSInterpolation[];
        flex: Stage.CSSInterpolation[];
        grid: Stage.CSSInterpolation[];
        shadow: Stage.CSSInterpolation[];
    };
    export type ComponentData<Props extends SystemPropsMeta<Element, ClassesSchema>, ClassesSchema extends ClassesSchemaDefinition, Element extends HTMLElement> = {
        classes: Classes<ClassesSchema>;
        attributes: Exclude<CoreProps<Element, ClassesSchema>['attributes'], undefined>;
        events: Pick<Props, Stage.FilterStartingWith<keyof Props, 'on'>>;
        styleProps: ResolvedStyleProps;
        overridesPropClasses: OverridesClassesDefinition<ClassesSchema>;
    };
    export type SystemPropsMeta<Element, ClassesSchema extends ClassesSchemaDefinition> = CoreProps<Element, ClassesSchema> & Pick<AllEventProps<Element>, 'onFocus' | 'onBlur' | 'onClick' | 'onEnter' | 'onEsc' | 'onKeyDown'>;
    function useSystem<Props extends SystemPropsMeta<Element, ClassesSchema>, ClassesSchema extends ClassesSchemaDefinition, Element extends HTMLElement>(name: string, props: Props, createClasses?: Stage.CreateClasses<ClassesSchema, Props>, options?: Options): ComponentData<Props, ClassesSchema, Element>;
    export default useSystem;
}
declare module "props/types" {
    import CSS from 'csstype';
    import React from 'react';
    import { ClassesSchemaDefinition } from "hooks/useSystem";
    import { BreakpointProp } from "props/breakpoint";
    import { ColorProp } from "props/color";
    import { OverridesProp } from "props/overrides";
    import { SpaceProp } from "props/space";
    /**
     * All typical component props
     * @name All
     */
    export interface AllProps<Container, ClassSchema extends ClassesSchemaDefinition = {}> extends CoreProps<Container, ClassSchema>, AttributeProps, AllEventProps<Container>, AllStyleProps {
    }
    /**
     * Component core props
     * @name Core
     */
    export interface CoreProps<Container, ClassesSchema extends ClassesSchemaDefinition = {}> {
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
        attributes?: React.HTMLAttributes<Container>;
    }
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
    export interface AllStyleProps extends ColorProps, BorderProps, PaddingProps, LayoutProps, MarginProps, FlexProps, GridProps, ShadowProps {
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
         * @display Size
         * @link /props#margin-padding
         */
        p?: BreakpointProp<SpaceProp>;
        /**
         * Set horizontal padding style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        px?: BreakpointProp<SpaceProp>;
        /**
         * Set vertical padding style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        py?: BreakpointProp<SpaceProp>;
        /**
         * Set right padding style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        pr?: BreakpointProp<SpaceProp>;
        /**
         * Set left padding style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        pl?: BreakpointProp<SpaceProp>;
        /**
         * Set top padding style
         * @BreakpointProp
         * @display Size
         * @link /props#margin-padding
         */
        pt?: BreakpointProp<SpaceProp>;
        /**
         * Set bottom padding style
         * @BreakpointProp
         * @display Size
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
declare module "hooks/useBreakpoint" {
    function useBreakpoint<T>(values: T[]): T;
    export default useBreakpoint;
}
declare module "utils/createID" {
    const _default_1: () => string;
    export default _default_1;
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
    const createTheme: (themeDefinition: Stage.ThemeDefiniton) => Stage.Theme;
    export default createTheme;
}
declare module "index" {
    import { CSSInterpolation as CSSI, CSSObject as CSSO } from '@emotion/serialize';
    import { ColorProp as ColorPropType } from "props/color";
    import ColorType from 'color';
    import CSS from 'csstype';
    import { AllProps as AllPropsType } from "props/types";
    import { ClassesSchemaDefinition, CreateClasses as CreateClassesType, ThemeOverrides as ThemeOverridesType } from "hooks/useSystem";
    import { OverridesProp } from "props/overrides";
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
            type ColorPallete<C = Color> = {
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
            type ColorNames = LiteralUnion<LiteralUnion<keyof ColorMain | `gray${keyof ColorPallete['gray']}` | `yellow${keyof ColorPallete['yellow']}` | `orange${keyof ColorPallete['orange']}` | `red${keyof ColorPallete['red']}` | `rose${keyof ColorPallete['rose']}` | `pink${keyof ColorPallete['pink']}` | `green${keyof ColorPallete['green']}` | `lightGreen${keyof ColorPallete['lightGreen']}` | `lime${keyof ColorPallete['lime']}` | `teal${keyof ColorPallete['teal']}` | `cyan${keyof ColorPallete['cyan']}` | `lightBlue${keyof ColorPallete['lightBlue']}` | `blue${keyof ColorPallete['blue']}` | `indigo${keyof ColorPallete['indigo']}` | `purple${keyof ColorPallete['purple']}`, keyof ColorCustom['palette']>, string>;
            type Colors<C = Color, Definition = false> = ColorMain<C> & ColorPallete<C> & (Definition extends true ? Partial<ColorCustom<C>> : ColorCustom<C>);
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
                    header: Record<Sizes, {
                        fontSize: string;
                        lineHeight: string | number;
                    }>;
                    text: Record<Sizes, {
                        fontSize: string;
                        lineHeight: string | number;
                    }>;
                    paragraph: Record<Sizes, {
                        fontSize: string;
                        lineHeight: string | number;
                    }>;
                };
            }
            interface ThemeOverrides {
            }
            interface Theme extends ThemeMain {
                assets: ThemeAssets;
                overrides: ThemeOverrides;
                replace: (theme: ReplaceTheme) => Theme;
            }
            interface ThemeDefiniton {
                main: Stage.ThemeMain<Stage.ColorDefinition, true>;
                assets: ((main: Stage.ThemeMain) => Stage.ThemeAssets) | Stage.ThemeAssets;
                overrides?: ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => Stage.ThemeOverrides) | Stage.ThemeOverrides;
            }
            interface ReplaceTheme {
                main?: DeepPartial<ThemeDefiniton['main']>;
                assets?: ((main: Stage.ThemeMain) => DeepPartial<Stage.ThemeAssets>) | DeepPartial<Stage.ThemeAssets>;
                overrides?: ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => Stage.ThemeOverrides) | Stage.ThemeOverrides;
            }
            type AllProps<Containter, ClassSchema extends ClassesSchemaDefinition = ClassesSchemaDefinition> = AllPropsType<Containter, ClassSchema>;
            type CreateClasses<ClassesSchema extends ClassesSchemaDefinition, Props> = CreateClassesType<ClassesSchema, Props>;
            type ColorProp = ColorPropType;
            type PropOverrides<ClassSchema extends ClassesSchemaDefinition> = OverridesProp<ClassSchema>;
            type ComponentThemeOverrides<Props, ClassSchema extends ClassesSchemaDefinition> = ThemeOverridesType<Props, ClassSchema>;
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
    export { default as Provider } from "Provider";
    export { default as useTheme } from "hooks/useTheme";
    export { default as useSystem } from "hooks/useSystem";
    export { default as useBreakpoint } from "hooks/useBreakpoint";
    export { default as createTheme } from "utils/createTheme";
}