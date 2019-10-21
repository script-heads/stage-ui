import Global from "@flow-ui/core/types";

declare namespace DividerTypes {
    interface Props extends Global.Props {
        vertical?: boolean
        dash?: number
        gap?: number
        color?: Global.ColorProp
    }

    interface Styles {
        container: void
    }
}

export default DividerTypes