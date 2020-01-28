import WhaleTypes from '@flow-ui/whale/types'

declare namespace CheckTypes {

    type CheckType = 'checkbox' | 'radio' | 'switch'

    interface Props extends WhaleTypes.AllProps<HTMLInputElement, Overrides> {
        label?: string
        labelColor?: WhaleTypes.ColorProp
        checked?: boolean
        disabled?: boolean
        defaultValue?: boolean
        uppercase?: boolean
        size?: WhaleTypes.Size
    }

    interface PrivateProps extends Props {
        children: (checked: boolean, focus: boolean) => React.ReactElement
        type?: CheckType
        styles: WhaleTypes.ComponentStyles<Overrides>
    }

    interface Overrides {
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

export default CheckTypes