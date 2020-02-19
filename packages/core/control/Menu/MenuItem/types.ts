import WhaleTypes from '@flow-ui/whale/types'
import MenuTypes from '../types'

declare namespace MenuItemTypes {
    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
        title?: React.ReactNode
        disabled?: boolean
        
        value?: MenuTypes.MenuValue

        children?: React.ReactNode
        leftChild?: React.ReactNode
        rightChild?: React.ReactNode
    }

    interface Overrides {
        container: void
    }
}

export default MenuItemTypes