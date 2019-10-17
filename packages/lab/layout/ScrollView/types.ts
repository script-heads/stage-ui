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
    
    type Styles = Global.ComponentStyles<'container' | 'content' | 'xBar' | 'yBar' | 'xThumb' | 'yThumb', Variants>
}

export default ScrollViewTypes