import Global from "../../types";

declare namespace DividerTypes {
    export interface Props extends Global.Props {
        vertical?: boolean
        dash?: number
        gap?: number
        color?: Global.ColorProp
    }
}

export default DividerTypes