import WhaleTypes from '@flow-ui/whale/types'

declare namespace ScrollViewTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        children?: React.ReactNode
        /**
         * Display mode
         * @default scroll
         */
        mode?: 'always' | 'scroll' | 'hidden'
        /**
         * Custom ScrollBar color
         */
        color?: WhaleTypes.ColorProp
        /**
         * Bars size
         * @default m
         */
        size?: WhaleTypes.Size
        /**
         * Bars shape
         * @default round
         */
        shape?: 'square' | 'round'
        /**
         * Position of X bar
         * @default bottom
         */
        xBarPosition?: 'top' | 'bottom'
        /**
         * Position of Y bar
         * @default right
         */
        yBarPosition?: 'left' | 'right'
    }
    
    interface Ref {
        scrollTop: () => void
    }

    interface Overrides {
        container: void
        content: void
        yBar: {
            active: boolean,
            shape: Props['shape']
            size: Props['size']
            position: Props['yBarPosition']
        }
        yThumb: {
            active: boolean,
            shape: Props['shape']
            size: Props['size']
        }
        xBar: {
            active: boolean
            shape: Props['shape']
            size: Props['size']
            position: Props['xBarPosition']
        }
        xThumb: {
            active: boolean
            shape: Props['shape']
            size: Props['size']
        }
    }
}

export default ScrollViewTypes