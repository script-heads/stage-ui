import { LayoutDecoration } from '@stage-ui/core/utils/applyLayoutDecoration'
import { BreakpointProp } from '@stage-ui/system/props/breakpoint'
import CSS from 'csstype'

declare namespace GridTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Styles> {
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
     */
    templateColumns?: BreakpointProp<CSS.Properties['gridTemplateColumns']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
     */
    templateRows?: BreakpointProp<CSS.Properties['gridTemplateRows']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
     */
    templateAreas?: BreakpointProp<CSS.Properties['gridTemplateAreas']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-gap
     */
    columnGap?: BreakpointProp<CSS.Properties['gridColumnGap']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-gap
     */
    rowGap?: BreakpointProp<CSS.Properties['gridRowGap']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-gap
     */
    gap?: BreakpointProp<CSS.Properties['gridGap']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
     */
    autoColumns?: BreakpointProp<CSS.Properties['gridAutoColumns']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
     */
    autoRows?: BreakpointProp<CSS.Properties['gridAutoRows']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
     */
    autoFlow?: BreakpointProp<CSS.Properties['gridAutoFlow']>
    /**
     * @display string
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/align-items
     */
    alignItems?: BreakpointProp<CSS.Properties['alignItems']>
    /**
     * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/align-content
     */
    alignContent?: BreakpointProp<GridSpace | GridSelf>
    /**
     * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
     */
    justifyContent?: BreakpointProp<GridSpace | GridSelf>
    /**
     * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
     * @BreakpointProp
     * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
     */
    justifyItems?: BreakpointProp<GridSpace | GridSelf>
    inline?: BreakpointProp<boolean>
    /**
     * Defines how grid look
     */
    decoration?: LayoutDecoration
    /**
     * Grid content
     */
    children?: React.ReactNode
  }
  interface Styles {
    /**
     * Root element
     */
    container: {
      decoration?: LayoutDecoration
    }
  }
  /**
   * Used for grid attributes
   * CSS props have string witch kills helps at ide
   */
  type GridSpace = 'space-around' | 'space-between' | 'space-evenly'
  type GridSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'start' | 'end' | 'stretch'
}

export default GridTypes
