declare namespace DividerTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
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
    color?: Stage.ColorProp
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
  }
}

export default DividerTypes
