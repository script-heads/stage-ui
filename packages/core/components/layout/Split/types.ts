import React from 'react'
import SystemTypes from '@stage-ui/system/types'

declare namespace SplitTypes {
    export interface Props extends Omit<AllProps<HTMLDivElement, Styles>, 'onMove' | 'onChange'> {
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

    interface Styles {
        container: {
            vertical: boolean
        }
        test: void
    }
}

export default SplitTypes