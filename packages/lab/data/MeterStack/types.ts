import WhaleTypes from '@flow-ui/whale/types'
import MeterTypes from '@flow-ui/core/data/Meter/types'

declare namespace MeterStackTypes {

    interface Props extends  WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        size?: MeterTypes.Props['size']
        decoration?: MeterTypes.Props['decoration']
        shape?: MeterTypes.Props['shape']

        children: React.ReactElement<MeterTypes.Props>[]  
    }

    interface Overrides {
        container: void,

        meterContainer: MeterTypes.Overrides['container'],
        meterThumb: MeterTypes.Overrides['thumb']
    }
}

export default MeterStackTypes