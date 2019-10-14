import Global from "@flow-ui/core/types";
import ButtonTypes from "@flow-ui/core/control/Button/types";

declare namespace ButtonGroupTypes {
    export interface Props extends Global.Props, ButtonTypes.Props {
        children: (
            React.ReactElement<ButtonTypes.Props>
            |
            React.ReactElement<ButtonTypes.Props>[]
        )
    }
}

export default ButtonGroupTypes