import CheckTypes from '../../misc/hocs/Check/types'

declare namespace CheckboxTypes {
    interface Props extends CheckTypes.Props {
    }
    
    interface Overrides extends CheckTypes.Overrides {
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