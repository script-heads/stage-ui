import Global from '../../types';

declare namespace BadgeTypes {
    export interface Props extends Global.Props {
        content: React.ReactNode
        align?: "top" | "bottom" | "left" | "right" | "top-right" | "bottom-right" | "top-left" | "bottom-left"
        background?: Global.ColorProp
        color?: Global.ColorProp
        children?: React.ReactNode
    }


    export interface Styles {
        container: Global.EmotionStyles
        holder: Global.EmotionStyles
    }   
    export interface Variants {
        align: Global.Variant<Props["align"]>
    }
}

export default BadgeTypes