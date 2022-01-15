import { ContainerDecorations } from '@stage-ui/core/utils/containerDecorations'
import CSS from 'csstype'

declare namespace BlockTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * HTML element which is used as a container
     */
    as?:
      | 'div'
      | 'span'
      | 'header'
      | 'footer'
      | 'article'
      | 'section'
      | 'aside'
      | 'main'
      | 'nav'
      | 'figure'
      | 'figcaption'
    /**
     * Defines how block looks
     */
    decoration?: ContainerDecorations
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
      decoration?: ContainerDecorations
    }
  }
}

export default BlockTypes
