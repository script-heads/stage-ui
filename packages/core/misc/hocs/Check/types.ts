import Global from "@flow-ui/core/types";

declare namespace CheckTypes {

    type CheckType = 'checkbox' | 'radio' | 'switch'

    interface Props extends Global.Props {
        label?: string
        labelColor?: Global.ColorProp
        checked?: boolean
        disabled?: boolean
        onChange?: (checked: boolean) => void
        defaultValue?: boolean
        uppercase?: boolean
        size?: Global.Size
    }

    interface PrivateProps extends Props {
        children: (checked: boolean, focus: boolean) => React.ReactElement
        type?: CheckType
        styles: Global.FlowStyles<Styles>
    }

    interface Styles {
        container: {
            disabled: Props['disabled']
            animated: Props['animated']
        }
        label: {
            disabled: Props['disabled']
            size: Props['size']
            uppercase: Props['uppercase']
            animated: Props['animated']
        }
    }
}

export default CheckTypes;