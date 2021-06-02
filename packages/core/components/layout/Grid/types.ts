import { LayoutDecoration } from '@stage-ui/core/utils/applyLayoutDecoration'
import { GridContainerProps } from '@stage-ui/system/props/types'

declare namespace GridTypes {
  interface Props extends GridContainerProps, Stage.AllProps<HTMLDivElement, Styles> {
    /**
     * Defines how grid look
     */
    decoration?: LayoutDecoration
    /**
     * Grid content
     */
    children?: React.ReactNode
  }
  interface Styles {
    /**
     * Root element
     */
    container: {
      decoration?: LayoutDecoration
    }
  }
}

export default GridTypes
