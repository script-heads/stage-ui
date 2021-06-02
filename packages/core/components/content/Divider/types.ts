import { ColorProp } from '@stage-ui/system/props/color'
import { AllProps } from '@stage-ui/system/props/types'

declare namespace DividerTypes {
  interface Props extends AllProps<HTMLDivElement, Styles> {
    /**
     * Draw divider vertical
     */
    vertical?: boolean
    /**
     * Sizes of dash
     * @display Sizes
     * @link /props/#size
     */
    dash?: Stage.Sizes | (string & { T?: string })
    /**
     * Sizes of the gap between dashes
     * @display Sizes
     * @link /props/#size
     */
    gap?: Stage.Sizes | (string & { T?: string })
    /**
     * Color of divider
     * @default lightest
     */
    color?: ColorProp
  }

  interface Styles {
    /**
     * Root element
     */
    container: void
  }
}

export default DividerTypes
