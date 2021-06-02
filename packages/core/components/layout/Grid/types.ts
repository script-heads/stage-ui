import { LayoutDecoration } from '@stage-ui/core/utils/applyLayoutDecoration'

declare namespace GridTypes {
  interface Props extends GridContainerProps, AllProps<HTMLDivElement, Styles> {
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
