import WhaleTypes from '@flow-ui/whale/types'

declare namespace SpinnerTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        /**
         * Color of spinner
         * @default hardest
         */
        color?: WhaleTypes.ColorProp
        /**
         * Custom content
         */
        children?: React.ReactElement
        /**
         * Shape of spinner's division 
         * @default square
         */
        shape?: 'square' | 'rounded' | 'round'
        /**
         * Spin speed
         * @default 1
         */
        duration?: number
        /**
         * Number of spinner's division
         * @default 12
         */
        count?: number
        /**
         * Size of spinner's container
         * @default 1.125em
         */
        size?: string
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
        /**
         * Wrapper for children component
         */
        children: void
    }
}

export default SpinnerTypes