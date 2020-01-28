import WhaleTypes from '@flow-ui/whale/types'

declare namespace SplitTypes {
    export interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onMove' | 'onChange'> {
        direction?: 'row' | 'column'
        children: React.ReactElement[]
        /**
         * Split area size, value in pixels
         */
        areaSize?: number
        /**
         * You can give it array of numbers (in percent)
         */
        positions?: number[]
        /**
         * Calls when split area moves
         */
        onMove?: (positions: number[]) => void
        /**
         * Calls when mouseUp if position did change
         */
        onChange?: (positions: number[]) => void
    }

    interface Overrides {
        container: {
            vertical: boolean
        }
    }
}

export default SplitTypes