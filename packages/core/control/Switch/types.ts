import CheckTypes from "../../misc/hocs/Check/types";

declare namespace SwitchTypes {
    interface Props extends CheckTypes.Props {
    }
    
    interface Styles extends CheckTypes.Styles {
        check: {
            checked: Props['checked']
            size: Props['size']
            animated: Props['animated']
            disabled: Props['disabled']
        }
        switch: {
            checked: Props['checked']
            size: Props['size']
            animated: Props['animated']
            disabled: Props['disabled']
        }
    }
}

export default SwitchTypes