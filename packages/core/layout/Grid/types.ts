import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'
import SystemTypes from '@flow-ui/system/types'

declare namespace GridTypes {
    interface Props extends SystemTypes.GridContainerProps, SystemTypes.AllProps<HTMLDivElement, Styles> {
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