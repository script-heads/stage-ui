import Global from "@flow-ui/core/types";

declare namespace ScrollViewTypes {
    interface Props extends Global.Props {
        children?: React.ReactNode
        /**
         * Display mode
         * @default scroll
         */
        mode?: 'always' | 'scroll' | 'hidden'
        /**
         * Custom ScrollBar color
         */
        color?: Global.ColorProp
        /**
         * Bars size
         * @default medium
         */
        size?: Global.Size
        /**
         * Bars shape
         * @default round
         */
        shape?: 'square' | 'round'
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
        }
        xThumb: {
            active: boolean
            shape: Props["shape"]
            size: Props["size"]
        }
    }
}

export default ScrollViewTypes