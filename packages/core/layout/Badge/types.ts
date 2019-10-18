import Global from '@flow-ui/core/types';

declare namespace BadgeTypes {
    export interface Props extends Global.Props {
        content: React.ReactNode
        align?: "top" | "bottom" | "left" | "right" | "top-right" | "bottom-right" | "top-left" | "bottom-left"
        background?: Global.ColorProp
        color?: Global.ColorProp
        children?: React.ReactNode
    }

    export interface Variants {
        align: Props["align"]
    }

    export type Styles = Global.ComponentStyles<"container" | "holder", Variants> 
}

export default BadgeTypes