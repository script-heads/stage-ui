import Global from "@flow-ui/core/types";

declare namespace SpinnerTypes {
    interface Props extends Global.Props {
        color?: Global.ColorProp
        children?: React.ReactElement
        shape?: 'square' | 'rounded' | 'round'
        duration?: number
        count?: number
        size?: string
    }

    interface Styles {
        container: void
        children: void
    }
}

export default SpinnerTypes;