import WhaleTypes from '@flow-ui/whale/types'
import MeterThumbTypes from './MeterThumb/types'

declare namespace MeterTypes {

    type MeterDecoration = 'filled' | 'outline'
    type MeterShape = 'square' | 'round'

    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        value?: number

        size?: WhaleTypes.Size

        decoration?: MeterDecoration
        shape?: MeterShape
        color?: WhaleTypes.ColorProp
        /**
         * Enabled process animation
         * @default false
         */
        loading?: boolean

        children?: React.ReactElement<MeterThumbTypes.Props>[]
    }

    interface Overrides {
        container: {
            shape: MeterShape
            size: WhaleTypes.Size
            decoration: MeterDecoration
        },
        thumb: {
            shape: MeterShape
            size: WhaleTypes.Size
        }
    }
}

export default MeterTypes