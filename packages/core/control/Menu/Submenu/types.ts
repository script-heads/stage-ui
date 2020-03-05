import WhaleTypes from '@flow-ui/whale/types'

declare namespace SubmenuTypes {
    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
        title?: React.ReactNode
        disabled?: boolean
        indent?: string

        open?: boolean
        defaultOpen?: boolean

        children?: React.ReactNode
        leftChild?: React.ReactNode
        rightChild?: React.ReactNode
    }

    interface Styles {
        container: void
    }
}

export default SubmenuTypes