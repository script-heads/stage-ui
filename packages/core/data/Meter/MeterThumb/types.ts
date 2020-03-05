import WhaleTypes from '@flow-ui/whale/types'
import MeterTypes from '../types'

declare namespace MeterThumbTypes {

    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        value: MeterTypes.Props['value']
        color?: MeterTypes.Props['color']
        /**
         * Enabled process animation
         * @default false
         */
        loading?: MeterTypes.Props['loading']
    }

    interface PrivateProps extends MeterTypes.Props {}

    interface Styles {
        container: MeterTypes.Styles['thumb']
    }
}

export default MeterThumbTypes