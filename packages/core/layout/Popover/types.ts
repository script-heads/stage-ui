import Global from '../../types';
import CSS from 'csstype';
import { Interpolation } from '@emotion/core';

declare namespace PopoverTypes {
    export interface Props extends Global.Props {
        align?: "top" | "bottom" | "left" | "right"
        background?: Global.ColorProp
        color?: Global.ColorProp
        children?: React.ReactNode
        overrides?: Overrides
        arrowWidth?: CSS.Properties["width"]
        arrowHeight?: CSS.Properties["height"]
    }

    export interface Overrides {
        container?: Interpolation
        arrow?: Interpolation
    }
}

export default PopoverTypes