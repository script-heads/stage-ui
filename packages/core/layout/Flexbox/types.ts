import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'

declare namespace FlexboxTypes {
    interface Props extends WhaleTypes.FlexboxContainerProps, WhaleTypes.AllProps<HTMLDivElement, Styles> {
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