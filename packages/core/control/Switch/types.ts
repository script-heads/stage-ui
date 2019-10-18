import Global from "@flow-ui/core/types";
import { ObjectInterpolation } from "@emotion/css";

declare namespace SwitchTypes {
    interface Props extends Global.Props {
        label?: string
        labelColor?: Global.ColorProp
        checked?: boolean
        disabled?: boolean
        defaultValue?: boolean
        uppercase?: boolean
        size?: Global.Size
        onChange?: (checked: boolean) => void
    }
    export interface Styles {
        check: ObjectInterpolation<undefined>
        icon: ObjectInterpolation<undefined>
    }
}

export default SwitchTypes