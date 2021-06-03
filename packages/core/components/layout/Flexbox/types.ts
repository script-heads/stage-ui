import { LayoutDecoration } from '@stage-ui/core/utils/applyLayoutDecoration'
import { FlexboxContainerProps } from '@stage-ui/system/props/types'

declare namespace FlexboxTypes {
  interface Props extends FlexboxContainerProps, Stage.AllProps<HTMLDivElement, Styles> {
    /**
     * HTML element which is used as a container
     */
    as?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
    /**
     * Defines how flexbox look
     */
    decoration?: LayoutDecoration
    /**
     * Flexbox content
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

export default FlexboxTypes