import Global from '@flow-ui/core/types';

declare namespace MeterTypes {

    type MeterType = 'line' | 'circle'
    type MeterDecoration = 'filled' | 'outline'
    type MeterShape = 'square' | 'round'

    interface Props extends Global.Props {
        percent: number

        size?: Global.Size
        /**
         * @default line
         */
        type?: MeterType
        decoration?: MeterDecoration
        shape?: MeterShape
        color?: Global.ColorProp
        /**
         * Enabled process animation
         * @default false
         */
        loading?: boolean
    }

    interface Styles {
        container: {
            shape: MeterShape
            size: Global.Size
            decoration: MeterDecoration
        },
        thumb: {
            shape: MeterShape
            size: Global.Size
        }
    }
}

export default MeterTypes;