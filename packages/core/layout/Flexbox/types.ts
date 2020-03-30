import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import SystemTypes from '@flow-ui/system/types'

declare namespace FlexboxTypes {
    interface Props extends SystemTypes.FlexboxContainerProps, SystemTypes.AllProps<HTMLDivElement, Styles> {
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