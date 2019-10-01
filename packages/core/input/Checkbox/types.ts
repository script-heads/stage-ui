import Global from "../../types";
import { ObjectInterpolation } from "@emotion/css";

declare namespace CheckboxTypes {
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
    export interface Overrides {
        check: ObjectInterpolation<undefined>
        icon: ObjectInterpolation<undefined>
    }
}

export default CheckboxTypes