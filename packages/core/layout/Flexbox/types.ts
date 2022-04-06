import { ContainerDecorations } from '@stage-ui/core/utils/containerDecorations'
import { BreakpointProp } from '@stage-ui/system/props/breakpoint'
import { FlexSelf } from '@stage-ui/system/props/types'
import CSS from 'csstype'

declare namespace FlexboxTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Sets alignItems and justifyContent styles center
     * @BreakpointProp
     * @display boolean
     */
    centered?: BreakpointProp<boolean>
    /**
     * Sets the align-self value on all direct children as a group.
     * In Flexbox, it controls the alignment of items on the Cross Axis
     * @BreakpointProp
     * @display inherit|auto|baseline|center|flex-start|flex-end|stretch
     * @see https://developer.mozilla.org/docs/Web/CSS/align-items
     */
    alignItems?: BreakpointProp<FlexSelf>
    /**
     * Sets the distribution of space between and around content
     * items along a flexbox's cross-axis or a grid's block axis
     * @BreakpointProp
     * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
     * @see https://developer.mozilla.org/docs/Web/CSS/align-content
     */
    alignContent?: BreakpointProp<FlexSelf | FlexSpace>
    /**
     * The place-content CSS property is a shorthand for
     * align-content and justify-content
     * @BreakpointProp
     * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
     * @see https://developer.mozilla.org/docs/Web/CSS/place-content
     */
    placeContent?: BreakpointProp<FlexSelf | FlexSpace>
    /**
     * Defines how the browser distributes space between and around
     * content items along the main-axis of a flex container, and
     * the inline axis of a grid container.
     * @BreakpointProp
     * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
     * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
     */
    justifyContent?: BreakpointProp<FlexSelf | FlexSpace>
    /**
     * Defines the default justify-self for all items of the box, giving them all
     * a default way of justifying each box along the appropriate axis
     * @BreakpointProp
     * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
     * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
     */
    justifyItems?: BreakpointProp<FlexSelf | FlexSpace>
    /**
     * Sets how flex items are placed in the flex container defining the
     * main axis and the direction (normal or reversed)
     * @BreakpointProp
     * @display inherit | initial | revert | unset | column | column-reverse | row | row-reverse
     * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
     */
    direction?: BreakpointProp<FlexDirection>
    /**
     * Sets flex-direction style to column
     * @display boolean
     * @BreakpointProp
     */
    column?: BreakpointProp<boolean>
    /**
     * Sets display style to inline-flex
     * @display boolean
     * @BreakpointProp
     */
    inline?: BreakpointProp<boolean>
    /**
     * Sets whether flex items are forced onto one line or can wrap onto multiple lines
     * @display inherit | initial | revert | unset | nowrap | wrap | wrap-reverse
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
     */
    wrap?: BreakpointProp<FlexWrap>
    /**
     * Shorthand property for flex-direction and flex-wrap styles
     * @display column | column-reverse | nowrap | row | row-reverse | wrap | wrap-reverse
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
     */
    flow?: BreakpointProp<CSS.Properties['flexFlow']>
    /**
     * HTML element which is used as a container
     */
    as?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
    /**
     * Defines how flexbox look
     */
    decoration?: ContainerDecorations
    /**
     * Flexbox content
     */
    children?: React.ReactNode
  }

  type Classes = {
    /**
     * Root element
     */
    container: {
      decoration?: ContainerDecorations
    }
  }

  type FlexSpace = 'space-around' | 'space-between' | 'space-evenly'
  type FlexDirection =
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'column'
    | 'column-reverse'
    | 'row'
    | 'row-reverse'
  type FlexWrap =
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset'
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
}

export default FlexboxTypes
