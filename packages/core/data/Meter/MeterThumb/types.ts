import WhaleTypes from '@flow-ui/whale/types'
import MeterTypes from '../types'

declare namespace MeterThumbTypes {

    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        value: MeterTypes.Props['value']
        color?: MeterTypes.Props['color']
        /**
         * Enabled process animation
         * @default false
         */
        loading?: MeterTypes.Props['loading']
    }

    interface PrivateProps extends MeterTypes.Props {}

    interface Overrides {
        container: MeterTypes.Overrides['thumb']
    }
}

export default MeterThumbTypes