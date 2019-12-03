import Shared from "@flow-ui/core/types";

declare namespace ScrollViewTypes {
    interface Props extends Shared.AllProps {
        children?: React.ReactNode
        /**
         * Display mode
         * @default scroll
         */
        mode?: 'always' | 'scroll' | 'hidden'
        /**
         * Custom ScrollBar color
         */
        color?: Shared.ColorProp
        /**
         * Bars size
         * @default medium
         */
        size?: Shared.Size
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
    
    interface Styles {
        container: void
        content: void
        yBar: {
            active: boolean,
            shape: Props["shape"]
            size: Props["size"]
            position: Props["yBarPosition"]
        }
        yThumb: {
            active: boolean,
            shape: Props["shape"]
            size: Props["size"]
        }
        xBar: {
            active: boolean
            shape: Props["shape"]
            size: Props["size"]
            position: Props["xBarPosition"]
        }
        xThumb: {
            active: boolean
            shape: Props["shape"]
            size: Props["size"]
        }
    }
}

export default ScrollViewTypes