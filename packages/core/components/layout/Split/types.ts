import React from 'react'

declare namespace SplitTypes {
  export interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onMove' | 'onChange'> {
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

  type Classes = {
    container: {
      vertical: boolean
    }
    test: void
  }
}

export default SplitTypes
