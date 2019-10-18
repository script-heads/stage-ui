import Global from "@flow-ui/core/types";

declare namespace SpinnerTypes {
    export interface Props extends Global.Props {
        color?: Global.ColorProp
        children?: React.ReactElement
        shape?: 'square' | 'rounded' | 'round'
        duration?: number
        count?: number
        size?: string
    }

    export interface Styles {
        
    }
}

export default SpinnerTypes;