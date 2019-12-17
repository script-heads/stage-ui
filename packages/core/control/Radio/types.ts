import CheckTypes from '../../misc/hocs/Check/types'

declare namespace RadioTypes {

    interface Props extends CheckTypes.Props {
    }

    interface Overrides extends CheckTypes.Overrides {
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