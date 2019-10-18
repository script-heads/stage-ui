import Global from '@flow-ui/core/types';
import CSS from 'csstype';
import { Interpolation } from '@emotion/css';

declare namespace PanelTypes {
    export interface Props extends Global.Props {
        align?: "top" | "right" | "bottom" | "left"
        background?: Global.ColorProp
        color?: Global.ColorProp
        children?: React.ReactNode
    }

    export interface Styles {
        container?: Interpolation
    }
}

export default PanelTypes