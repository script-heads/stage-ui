import Global from "@flow-ui/core/types";

declare namespace DividerTypes {
    export interface Props extends Global.Props {
        vertical?: boolean
        dash?: number
        gap?: number
        color?: Global.ColorProp
    }

    export interface Styles {
        
    }
}

export default DividerTypes