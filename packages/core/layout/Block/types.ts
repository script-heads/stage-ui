import Global from '../../types';
import CSS from 'csstype';

declare namespace BlockTypes {
    export interface Props extends Global.Props {
        tag?: "div" | "span" | "header" | "footer" | "article" | "section" | "aside" | "main"
        surface?: "major" | "medium" | "minor"
        hoverSurface?: "major" | "medium" | "minor"
        position?: CSS.Properties["position"]
        children?: React.ReactNode
        background?: Global.ColorProp
        color?: Global.ColorProp
        overflow?: CSS.Properties["overflow"]
    }

    export interface Variants {
        surface: Props["surface"]
        hoverSurface: Props["hoverSurface"]
    }

    export type Styles = Global.ComponentStyles<'container',Variants>
}

export default BlockTypes