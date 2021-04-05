import SystemTypes from '@stage-ui/system/types'
import Menu from './'
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
        itemContainer?: keyof HTMLElementTagNameMap
    }

    interface Props extends Omit<SystemTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
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
         * Size of each item
         * @default m
         * @display SystemTypes.Size
         * @link /props/#size
         */
        size?: SystemTypes.Size
        /**
         * Flex align 
         * @default flex-start
         */
        align?: MenuAlign
        /**
         * Menu Items
         */
        children?: React.ReactNode

        itemContainer?: keyof HTMLElementTagNameMap
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