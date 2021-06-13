declare namespace MenuGroupTypes {
  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
    /**
     * Title of group
     */
    title: React.ReactNode
    children?: React.ReactNode
    /**
     * Left child at group view
     */
    leftChild?: React.ReactNode
    /**
     * Right child at group view
     */
    rightChild?: React.ReactNode
  }

  type Classes = {
    /**
     * Group view
     */
    container: void
  }
}

export default MenuGroupTypes
