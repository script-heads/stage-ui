import ThemeTypes from './misc/themes/types';
import IconsetTypes from './misc/icons/types';
import chroma from 'chroma-js';
import CSS from 'csstype';
import { Interpolation } from "@emotion/core";

declare module 'csstype' {
    interface Properties {
        display?: "block" | "inline" | "inline-block" | "inline-table" | "list-item" | "none" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column-group" | "table-column" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | "flex" | "grid"
        overflow?: "auto" | "hidden" | "scroll" | "visible" | "inherit",
        alignSelf?: "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherid" | "initial" | "left" | "normal" | "right" | "safe" | "safe-end" | "safe-start" | "start" | "stretch" | "unsafe" | "unset"
        justifySelf?: "baseline" | "center" | "end" | "flex-end" | "flex-start" | "inherid" | "initial" | "left" | "normal" | "right" | "safe" | "safe-end" | "safe-start" | "start" | "stretch" | "unsafe" | "unset"
    }
}

declare namespace Global {

    type EventProp<T> = (event: T) => void
    type FunctionalProp<T, R> = ((lib: T) => R) | R

    interface Props extends
        HTMLAttributes,
        EventHandlers,
        SelfProps,
        FlowProps { }

    /**
     * Default attributes
     * @name HTMLAttributes
     * @weight 200
     */
    interface HTMLAttributes extends React.AriaAttributes {
        className?: string
        id?: string
        style?: React.CSSProperties
        tabIndex?: number
        role?: string;
        attrs?: Object
    }

    /**
     * Default events
     * @name Events
     * @weight 500
     */
    interface EventHandlers {
        /**
         * An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.
         */
        onClick?: EventProp<React.MouseEvent<HTMLElement>>
        /**
         * Event fires when an element has received focus. The main difference between this event and focusin is that focusin bubbles while focus does not.
         */
        onFocus?: EventProp<React.FocusEvent<HTMLElement>>
        /**
         * Event fires when an element has lost focus. The main difference between this event and focusout is that focusout bubbles while blur does not.
         */
        onBlur?: EventProp<React.FocusEvent<HTMLElement>>
        /**
         * Event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
         */
        onMouseDown?: EventProp<React.MouseEvent<HTMLElement>>
        /**
         * Event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it. mouseup events are the counterpoint to onMouseDown events.
         */
        onMouseUp?: EventProp<React.MouseEvent<HTMLElement>>
        /**
         * Event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.
         */
        onMouseEnter?: EventProp<React.MouseEvent<HTMLElement>>
        /**
         * Event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.
         */
        onMouseLeave?: EventProp<React.MouseEvent<HTMLElement>>
        /**
         * Event is fired when one or more touch points are placed on the touch surface.
         */
        onTouchStart?: EventProp<React.TouchEvent<HTMLElement>>
        /**
         * Event fires when one or more touch points are removed from the touch surface.
         */
        onTouchEnd?: EventProp<React.TouchEvent<HTMLElement>>
        /**
         * Event is fired when a key that produces a character value is pressed down. Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys.
         * @deprecated This feature is no longer recommended.
         */
        onKeyPress?: EventProp<React.KeyboardEvent<HTMLElement>>
        /**
         * Event is fired when a key is pressed.
         */
        onKeyDown?: EventProp<React.KeyboardEvent<HTMLElement>>
        /**
         * Event is fired when a key is released.
         */
        onKeyUp?: EventProp<React.KeyboardEvent<HTMLElement>>
    }

    /**
     * Color styles
     * @name StyleColors
     * @weight 400
     */
    interface ColorProps {
        textColor?: ColorProp
        backgroundColor?: ColorProp
    }

    /**
     * Border styles
     * @name StyleBorder
     * @weight 400
     */
    interface BorderProps {
        borderWidth?: CSS.Properties["borderWidth"]
        borderStyle?: CSS.Properties["borderStyle"]
        borderColor?: CSS.Properties["borderColor"]
        borderRadius?: CSS.Properties["borderRadius"]
    }

    /**
     * Layout styles
     * @name StyleLayout
     * @weight 400
     */
    interface LayoutProps {
        /**
         * Width alias
         */
        w?: CSS.Properties["width"]
        /**
         * Heigth alias
         */
        h?: CSS.Properties["height"]
        /**
         * Shows or hides an element without changing the layout of a document.
         */
        visibility?: CSS.Properties["visibility"]
        /**
         * Sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
         */
        display?: CSS.Properties["display"]
        /**
         * Enables transition animation
         */
        animated?: boolean
    }

    /**
     * Padding styles
     * @name StylePadding
     * @weight 400
     */
    interface PaddingProps {
        /**
         * Padding alias
         */
        p?: CSS.Properties["padding"]
        /**
         * Padding horizontal alias
         */
        px?: CSS.Properties["padding"]
        /**
         * Padding vertical alias
         */
        py?: CSS.Properties["padding"]
        /**
         * PaddingRight alias
         */
        pr?: CSS.Properties["paddingRight"]
        /**
         * PaddingLeft alias
         */
        pl?: CSS.Properties["paddingLeft"]
        /**
         * PaddingTop alias
         */
        pt?: CSS.Properties["paddingTop"]
        /**
         * PaddingBottom alias
         */
        pb?: CSS.Properties["paddingBottom"]
    }

    /**
     * Grid children styles
     * @name StyleGrid
     * @weight 400
     */
    interface MarginProps {
        /**
         * Margin alias
         */
        m?: CSS.Properties["margin"]
        /**
         * Margin horizontal alias
         */
        mx?: CSS.Properties["margin"]
        /**
         * Margin vertical alias
         */
        my?: CSS.Properties["margin"]
        /**
         * MarginRight alias
         */
        mr?: CSS.Properties["marginRight"]
        /**
         * MarginLeft alias
         */
        ml?: CSS.Properties["marginLeft"]
        /**
         * MarginTop alias
         */
        mt?: CSS.Properties["marginTop"]
        /**
         * MarginBottom alias
         */
        mb?: CSS.Properties["marginBottom"]
        /**
         * Sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
         */
    }

    /**
     * Flexbox children styles
     * @name StyleFlex
     * @weight 400
     */
    interface FlexProps {
        /**
         * Sets how a flex item will grow or shrink to fit the space available in its flex container.
         */
        flex?: CSS.Properties["flex"]
        /**
         * Sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
         */
        flexBasis?: CSS.Properties["flexBasis"]
        /**
         * Sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).
         */
        flexGrow?: CSS.Properties["flexGrow"]
        /**
         * Sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.
         */
        flexShrink?: CSS.Properties["flexShrink"]
        /**
         * Property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
         */
        alignSelf?: CSS.Properties["alignSelf"]
        /**
         * Sets the way a box is justified inside its alignment container along the appropriate axis.
         */
        justifySelf?: CSS.Properties["justifySelf"]
    }

    /**
     * Grid children styles
     * @name StyleGrid
     * @weight 400
     */
    interface GridProps {
        /**
         * Specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
         */
        gridColumnStart?: CSS.Properties["gridColumnStart"]
        /**
         * Specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
         */
        gridColumnEnd?: CSS.Properties["gridColumnEnd"]
        /**
         * Specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
         */
        gridRowStart?: CSS.Properties["gridRowStart"]
        /**
         * Specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
         */
        gridRowEnd?: CSS.Properties["gridRowEnd"]
        /**
         * Shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
         */
        gridColumn?: CSS.Properties["gridColumn"]
        /**
         * Shorthand property for grid-row-start and grid-row-end specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
         */
        gridRow?: CSS.Properties["gridRow"]
        /**
         * Shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end, specifying a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
         */
        gridArea?: CSS.Properties["gridArea"]
        /**
         * Shorthand property sets both the align-self and justify-self properties. The first value is the align-self property value, the second the justify-self one. If the second value is not present, the first value is also used for it.
         */
        placeSelf?: CSS.Properties["placeSelf"]
    }

    
    /**
     * Styles inside the component. Paddings, layout, border and color props
     * @name StyleSelf
     * @weight 400
     */
    interface SelfProps extends 
        ColorProps,
        BorderProps,
        PaddingProps,
        LayoutProps {}

    /**
     * Style outsize the component. Margins, flex, grid
     * @name StyleFlow
     * @weight 300
     */
    interface FlowProps extends 
        MarginProps,
        FlexProps,
        GridProps {}

    type ColorProp = FunctionalProp<ThemeTypes.Colors<chroma.Color>, CSS.Properties["color"]>
    type IconProp = FunctionalProp<IconsetTypes.Index, React.ReactElement>


    /**
     * Props for text form fields
     * @name FieldProps
     * @weight 100
     */
    interface FieldProps {
        label?: React.ReactNode
        hint?: React.ReactNode
        size?: Global.Size
        decoration?: 'none' | 'filled' | 'underline' | 'outline'
        color?: Global.ColorProp,
        shape?: 'round' | 'rounded' | 'square'
        disabled?: boolean
        rightChild?: React.ReactNode
        leftChild?: React.ReactNode
        clearable?: boolean
    }

    type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

    type EmotionStyles = Array<Interpolation>;

    type Variants<T> = Partial<{
        [K in keyof T]: Partial<
            Record<Extract<T[K],string>,
            EmotionStyles>
        >
    }>
    
    type Variant<V> = (variants: Variants<V>) => EmotionStyles
    
    type ComponentStyle<V> = 
        ((variant: Variant<V>) => EmotionStyles) | EmotionStyles
    
    type ComponentStyles<S extends string,V, R = {[O in S]: ComponentStyle<V>}> = 
        ((props, theme: ThemeTypes.Index) => R) | R
}

export default Global