import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace BlockTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        /**
         * HTML element which is used as a container
         */
        as?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main'
        /**
         * Defines how block look
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

    interface Styles {
        /**
         * Root element
         */
        container: {
            decoration?: LayoutDecoration
        }
    }
}

export default BlockTypes