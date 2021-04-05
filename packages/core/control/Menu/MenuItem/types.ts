import SystemTypes from '@stage-ui/system/types'
import MenuTypes from '../types'

declare namespace MenuItemTypes {
    interface Props extends Omit<SystemTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
        /**
         * Controlled item state
         */
        active?: boolean
        /**
         * Display title of current item
         */
        title?: React.ReactNode
        /**
         * Disables item
         * @default false
         */
        disabled?: boolean
        /**
         * Item value, onChange will not call if empty
         */
        value?: MenuTypes.MenuValue
        /**
         * Item view custom content
         */
        children?: React.ReactNode
        /**
         * Left child at item view
         */
        leftChild?: React.ReactNode
        /**
         * Left child at item view
         */
        rightChild?: React.ReactNode

        as?: keyof HTMLElementTagNameMap

        href?: string
    }

    interface Styles {
        /**
         * Item view
         */
        container: void
    }
}

export default MenuItemTypes