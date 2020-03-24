import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import WhaleTypes from '@flow-ui/whale/types'

declare namespace GridTypes {
    interface Props extends WhaleTypes.GridContainerProps, WhaleTypes.AllProps<HTMLDivElement, Styles> {
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