import { LayoutDecoration } from '@stage-ui/core/misc/utils/applyLayoutDecoration'
import SystemTypes from '@stage-ui/system/types'

declare namespace FlexboxTypes {
    interface Props extends FlexboxContainerProps, AllProps<HTMLDivElement, Styles> {
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