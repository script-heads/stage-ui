import CheckTypes from '../../misc/hocs/Check/types'

declare namespace RadioTypes {

    interface Props extends CheckTypes.Props {
    }

    interface StyleState {
        checked: Props['checked']
        size: Props['size']
        disabled: Props['disabled']
        focus: boolean
    }
    interface Styles extends CheckTypes.Styles {
        /**
         * Radio container
         */
        check: StyleState
        /**
         * Icon of Radio
         */
        radio: StyleState
    }
}

export default RadioTypes