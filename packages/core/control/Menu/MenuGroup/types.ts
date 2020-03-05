import WhaleTypes from '@flow-ui/whale/types'

declare namespace MenuGroupTypes {
    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
        title: React.ReactNode
        children?: React.ReactNode
        leftChild?: React.ReactNode
        rightChild?: React.ReactNode
    }

    interface Styles {
        container: void
    }
}

export default MenuGroupTypes