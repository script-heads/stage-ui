import Menu from '.'

declare namespace MenuTypes {
  type MenuValue = string | number
  type MenuDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
  type MenuDecoration = 'filled' | 'color' | 'marker' | 'marker-reverse'
  type MenuAlign = 'flex-start' | 'flex-end' | 'stretch' | 'center'
  type MenuShape = 'square' | 'rounded' | 'round'

  interface Context {
    values: Record<string, () => void>
    current?: MenuValue
    controlled?: boolean
    onChange?: (value?: MenuValue) => void
    itemAs?: keyof HTMLElementTagNameMap
  }

  interface Props extends Omit<AllProps<HTMLDivElement, Styles>, 'onChange'> {
    /**
     * Value selected by default
     */
    defaultValue?: MenuValue
    /**
     * Current selected value for controlled component
     */
    value?: MenuValue
    /**
     * Simple data items, you can use <Menu.Item/> insted
     */
    data?: React.ReactNode[]
    /**
     * Calls on value change
     */
    onChange?: (value?: MenuValue) => void
    /**
     * Display as column
     * @default false
     */
    column?: boolean
    /**
     * Defines how button look
     * @default filled
     */
    decoration?: MenuDecoration
    /**
     * Flex direction of menu
     * @default row
     */
    direction?: MenuDirection
    /**
     * Shape of each item
     * @default square
     */
    shape?: MenuShape
    /**
     * Sizes of each item
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Flex align
     * @default flex-start
     */
    align?: MenuAlign
    /**
     * Menu Items
     */
    children?: React.ReactNode
    /**
     * HTML element which will be used for an MenuItems
     */
    itemAs?: keyof HTMLElementTagNameMap
  }
  interface StyleState {
    decoration: Props['decoration']
  }
  interface Styles {
    /**
     * Root container
     */
    container: StyleState
    /**
     * Menu item container
     */
    item: StyleState
    /**
     * Group title container
     */
    group: StyleState
    /**
     * Group title text
     */
    groupTitle: StyleState
    /**
     * Submenu container
     */
    subMenu: StyleState
    /**
     * Submenu content view
     */
    subMenuContent: StyleState
    /**
     * Submenu arrow icon
     */
    subMenuArrow: StyleState
    /**
     * Left child at menu item
     */
    leftChild: StyleState
    /**
     * Middle child at menu item
     */
    middleChild: StyleState
    /**
     * Right child at menu item
     */
    rightChild: StyleState
  }
}

export default MenuTypes
