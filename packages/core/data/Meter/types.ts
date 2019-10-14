import Global from '../../types';

declare namespace MeterTypes {

    type MeterType = 'line' | 'circle'
    type MeterDecoration = 'filled' | 'outline'
    type MeterShape = 'square' | 'round'

    export interface Props extends Global.Props {
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
        animation?: boolean
    }

    export interface Styles {
        
    }
}

export default MeterTypes;