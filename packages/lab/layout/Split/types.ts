import Global from "@flow-ui/core/types";

declare namespace SplitTypes {
    export interface Props extends Global.Props {
        direction?: 'row' | 'column'
        children: React.ReactElement[]
        /**
         * Saved positions
         * Use percent values
         */
        positions?: number[]
        /**
         * Positions change
         * calls every event
         */
        onDrag?: (positions: number[]) => void
        /**
         * Positions change
         * calls once after positions change
         */
        onChange?: (positions: number[]) => void
    }
}

export default SplitTypes