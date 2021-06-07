import { LayoutDecoration } from '@stage-ui/core/utils/applyLayoutDecoration'
import CSS from 'csstype'

declare namespace BlockTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * HTML element which is used as a container
     */
    as?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
    /**
     * Defines how block looks
     */
    decoration?: LayoutDecoration
    /**
     * Block's content
     */
    children?: React.ReactNode
    /**
     * Shorthand for overflow style
     */
    overflow?: CSS.Properties['overflow']
  }

  type Classes = {
    /**
     * Root element
     */
    container: {
      decoration?: LayoutDecoration
    }
  }
}

export default BlockTypes
