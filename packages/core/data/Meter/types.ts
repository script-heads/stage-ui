import WhaleTypes from '@flow-ui/whale/types'

declare namespace MeterTypes {

    type MeterType = 'line' | 'circle'
    type MeterDecoration = 'filled' | 'outline'
    type MeterShape = 'square' | 'round'

    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        percent: number

        size?: WhaleTypes.Size
        /**
         * @default line
         */
        type?: MeterType
        decoration?: MeterDecoration
        shape?: MeterShape
        color?: WhaleTypes.ColorProp
        /**
         * Enabled process animation
         * @default false
         */
        loading?: boolean
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