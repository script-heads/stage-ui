import Global from '@flow-ui/core/types';
import CSS from 'csstype';

declare namespace BlockTypes {
    interface Props extends Global.Props {
        tag?: "div" | "span" | "header" | "footer" | "article" | "section" | "aside" | "main"
        surface?: "major" | "medium" | "minor"
        hoverSurface?: "major" | "medium" | "minor"
        position?: CSS.Properties["position"]
        children?: React.ReactNode
        background?: Global.ColorProp
        color?: Global.ColorProp
        overflow?: CSS.Properties["overflow"]
    }

    interface Styles {
        container: {
            surface: Props["surface"]
            hoverSurface: Props["hoverSurface"]
        }
    }
}

export default BlockTypes