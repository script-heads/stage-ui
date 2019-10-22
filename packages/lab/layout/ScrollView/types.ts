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
    }
    
    interface Variants {
        active: boolean
    }
    
    interface Styles {
        container: void
        content: void
        yBar: {
            active: boolean
        }
        yThumb: {
            active: boolean
        }
        xBar: {
            active: boolean
        }
        xThumb: {
            active: boolean
        }
    }
}

export default ScrollViewTypes