declare namespace ToastTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Color of divider
     * @default primary
     */
    color?: Stage.ColorProp
    /**
     * Place for items to the right of children
     */
    rightChild?: React.ReactNode
    /**
     * Place for items to the left of children
     */
    leftChild?: React.ReactNode
    /**
     * Default content
     */
    children?: React.ReactNode
    /**
     * Children alias
     */
    label?: React.ReactNode
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
    /**
     * Children of container
     */
    content: void

    leftChild: void
    rightChild: void
  }
}

export default ToastTypes
