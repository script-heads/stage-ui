import SystemTypes from '@stage-ui/system/types'

declare namespace CheckTypes {

    type CheckType = 'checkbox' | 'radio' | 'switch'

    interface Props extends SystemTypes.AllProps<HTMLInputElement, Styles> {
        label?: string
        labelColor?: SystemTypes.ColorProp
        checked?: boolean
        disabled?: boolean
        defaultValue?: boolean
        uppercase?: boolean
        size?: SystemTypes.Size
    }

    interface PrivateProps extends Omit<Props, 'styles'> {
        children: (checked: boolean, focus: boolean) => React.ReactElement
        type?: CheckType
        styles: SystemTypes.ComponentStyles<Styles>
    }

    interface Styles {
        container: {
            disabled: Props['disabled']
        }
        label: {
            disabled: Props['disabled']
            size: Props['size']
            uppercase: Props['uppercase']
        }
    }
}

export default CheckTypes