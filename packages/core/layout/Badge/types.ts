import Global from '../../types';
import { Interpolation } from '@emotion/css';

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
        container?: Interpolation
        holder?: Interpolation
    }
}

export default BadgeTypes