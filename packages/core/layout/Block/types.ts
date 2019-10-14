import Global from '../../types';
import CSS from 'csstype';
import { Interpolation } from '@emotion/css';

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
        overrides?: Overrides
    }

    export type SurfaceStyles = {
        borderWidth?: CSS.Properties["borderWidth"],
        borderStyle?: CSS.Properties["borderStyle"],
        borderColor?: CSS.Properties["borderColor"],
        borderRadius?: CSS.Properties["borderRadius"]
        background?: CSS.Properties["background"]
        boxShadow?: CSS.Properties["boxShadow"]
    }

    export interface Overrides {
        styles?: {
            container?: any[]
        }
        variants?: {
            surface: {
                minor?: {
                    container?: any[]
                }
                medium?: {
                    container?: any[]
                }
                major?: {
                    container?: any[]
                }
            }
        }
    }
}

export default BlockTypes