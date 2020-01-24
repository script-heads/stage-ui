import Shared from '@flow-ui/whale/types'

declare namespace MeterTypes {

    type MeterType = 'line' | 'circle'
    type MeterDecoration = 'filled' | 'outline'
    type MeterShape = 'square' | 'round'

    interface Props extends Shared.AllProps {
        percent: number

        size?: Shared.Size
        /**
         * @default line
         */
        type?: MeterType
        decoration?: MeterDecoration
        shape?: MeterShape
        color?: Shared.ColorProp
        /**
         * Enabled process animation
         * @default false
         */
        loading?: boolean
    }

    interface Overrides {
        container: {
            shape: MeterShape
            size: Shared.Size
            decoration: MeterDecoration
        },
        thumb: {
            shape: MeterShape
            size: Shared.Size
        }
    }
}

export default MeterTypes