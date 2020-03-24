import WhaleTypes from '@flow-ui/whale/types'
import MeterThumbTypes from './MeterThumb/types'

declare namespace MeterTypes {

    type MeterDecoration = 'filled' | 'outline'
    type MeterShape = 'square' | 'round'

    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        /**
         * Current value of meter, for controlled component
         */
        value?: number
        /**
         * Size of meter
         * @default m
         */
        size?: WhaleTypes.Size
        /**
         * Defines how meter look
         * @default filled
         */
        decoration?: MeterDecoration
        /**
         * Shape of meter
         * @default rounded
         */
        shape?: MeterShape
        /**
         * Color of meter
         */
        color?: WhaleTypes.ColorProp
        /**
         * Enabled progress animation
         * @default false
         */
        loading?: boolean
        /**
         * Children thumbs
         */
        children?: React.ReactElement<MeterThumbTypes.Props>[]
    }

    interface Styles {
        /**
         * Root view
         */
        container: {
            shape: MeterShape
            size: WhaleTypes.Size
            decoration: MeterDecoration
        },
        /**
         * Thumb view
         */
        thumb: {
            shape: MeterShape
            size: WhaleTypes.Size
        }
    }
}

export default MeterTypes