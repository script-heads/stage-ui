import SystemTypes from '@stage-ui/system/types'

declare namespace DividerTypes {
    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        /**
        * Color of divider
        * @default primary
        */
        color?: SystemTypes.ColorProp
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

    interface Styles {
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

export default DividerTypes