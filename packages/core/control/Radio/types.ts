import CheckTypes from '../../misc/hocs/Check/types'

declare namespace RadioTypes {

    interface Props extends CheckTypes.Props {
    }

    interface Styles extends CheckTypes.Styles {
        /**
         * Radio container
         */
        check: {
            size: Props['size']
            disabled: Props['disabled']
        }
        /**
         * Icon of Radio
         */
        radio: {
            checked: Props['checked']
            size: Props['size']
            disabled: Props['disabled']
        }
    }
}

export default RadioTypes