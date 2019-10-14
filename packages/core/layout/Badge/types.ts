import Global from '../../types';

declare namespace BadgeTypes {
    export interface Props extends Global.Props {
        content: React.ReactNode
        align?: "top" | "bottom" | "left" | "right" | "top-right" | "bottom-right" | "top-left" | "bottom-left"
        background?: Global.ColorProp
        color?: Global.ColorProp
        children?: React.ReactNode
        overrides?: Overrides
    }

    export interface Overrides {
        styles: {
            container: Global.EmotionStyles
            holder: Global.EmotionStyles
        }
        variants: {
            align: Global.Variant<Props["align"], {
                holder: Global.EmotionStyles
            }>
        }
    }
}

export default BadgeTypes