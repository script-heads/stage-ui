import WhaleTypes from '@flow-ui/whale/types'

declare namespace MenuGroupTypes {
    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
        title: React.ReactNode
        children?: React.ReactNode
        leftChild?: React.ReactNode
        rightChild?: React.ReactNode
    }

    interface Overrides {
        container: void
    }
}

export default MenuGroupTypes