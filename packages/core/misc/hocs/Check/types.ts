import WhaleTypes from '@flow-ui/whale/types'

declare namespace CheckTypes {

    type CheckType = 'checkbox' | 'radio' | 'switch'

    interface Props extends WhaleTypes.AllProps<HTMLInputElement, Styles> {
        label?: string
        labelColor?: WhaleTypes.ColorProp
        checked?: boolean
        disabled?: boolean
        defaultValue?: boolean
        uppercase?: boolean
        size?: WhaleTypes.Size
    }

    interface PrivateProps extends Omit<Props, 'styles'> {
        children: (checked: boolean, focus: boolean) => React.ReactElement
        type?: CheckType
        styles: WhaleTypes.ComponentStyles<Styles>
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