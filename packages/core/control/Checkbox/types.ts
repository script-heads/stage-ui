import CheckTypes from '@flow-ui/core/misc/hocs/Check/types'

declare namespace CheckboxTypes {
    interface Props extends CheckTypes.Props {
    }
    
    interface Styles extends CheckTypes.Styles {
        check: {
            size: Props['size']
            animated: Props['animated']
            disabled: Props['disabled']
            focus: boolean
        }
        icon: {
            checked: Props['checked']
            size: Props['size']
            animated: Props['animated']
            disabled: Props['disabled']
        }
    }
}

export default CheckboxTypes