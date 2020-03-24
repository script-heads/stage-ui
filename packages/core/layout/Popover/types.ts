import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace PopoverTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        /**
         * Alignment of popover's arrow
         */
        align?: 'top' | 'bottom' | 'left' | 'right' | 'none'
        /**
         * Color of popover's border
         */
        borderColor?: WhaleTypes.ColorProp
        /**
         * Color of popover's background
         */
        backgroundColor?: WhaleTypes.ColorProp
        /**
         * Popover's content
         */
        children?: React.ReactNode
        /**
         * Width of popover's arrow
         */
        arrowWidth?: CSS.Properties['width']
        /**
         * Height of popover's arrow
         */
        arrowHeight?: CSS.Properties['height']
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
        /**
         * Arrow container
         */
        arrow: {
            align: Props['align']
        }
    }
}

export default PopoverTypes