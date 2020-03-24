import CheckTypes from '@flow-ui/core/misc/hocs/Check/types'

declare namespace CheckboxTypes {
    interface Props extends CheckTypes.Props {
    }
    
    interface Styles extends CheckTypes.Styles {
        /**
         * Checkbox container
         */
        check: {
            size: Props['size']
            disabled: Props['disabled']
            focus: boolean
        }
        /**
         * Icon of checkbox
         */
        icon: {
            checked: Props['checked']
            size: Props['size']
            disabled: Props['disabled']
        }
    }
}

export default CheckboxTypes