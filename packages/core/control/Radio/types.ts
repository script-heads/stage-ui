import CheckTypes from "../../misc/hocs/Check/types";

declare namespace RadioTypes {

    interface Props extends CheckTypes.Props {
    }

    interface Styles extends CheckTypes.Styles {
        check: {
            size: Props['size']
            animated: Props['animated']
            disabled: Props['disabled']
        }
        radio: {
            checked: Props['checked']
            size: Props['size']
            animated: Props['animated']
            disabled: Props['disabled']
        }
    }
}

export default RadioTypes