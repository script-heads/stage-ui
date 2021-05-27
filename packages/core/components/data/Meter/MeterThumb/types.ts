import SystemTypes from '@stage-ui/system/types'
import MeterTypes from '../types'

declare namespace MeterThumbTypes {

    interface Props extends AllProps<HTMLDivElement, Styles> {
        /**
         * Value for controlled compoents
         */
        value: MeterTypes.Props['value']
        /**
         * Thumb color
         */
        color?: MeterTypes.Props['color']
        /**
         * Enabled prgoress animation
         * @default false
         */
        loading?: MeterTypes.Props['loading']
    }

    interface PrivateProps extends MeterTypes.Props { }

    interface Styles {
        /**
         * Thumb view
         */
        container: MeterTypes.Styles['thumb']
    }
}

export default MeterThumbTypes