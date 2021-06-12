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

  interface SeparatorProps {
    areaSize: number
    defaultVertical: boolean
    container: () => Ref
    prev: () => Ref
    next: () => Ref
  }

  type Classes = {
    container: {
      vertical: boolean
    }
    test: void
  }

  type Ref = React.RefObject<
    HTMLDivElement & {
      vertical?: boolean
      onMove?: () => void
      onChange?: () => void
    }
  >
}

export default SplitTypes
