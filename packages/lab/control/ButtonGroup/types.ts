import Shared from "@flow-ui/core/types";
import ButtonTypes from "@flow-ui/core/control/Button/types";

declare namespace ButtonGroupTypes {
    export interface Props extends Shared.AllProps, ButtonTypes.Props {
        children: (
            React.ReactElement<ButtonTypes.Props>
            |
            React.ReactElement<ButtonTypes.Props>[]
        )
    }
}

export default ButtonGroupTypes