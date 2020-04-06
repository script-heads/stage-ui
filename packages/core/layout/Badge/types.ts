import SystemTypes from '@stage-ui/system/types'

declare namespace BadgeTypes {
    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        /**
         * Show in badge
         */
        content: React.ReactNode
        /**
         * Badge size
         */
        size?: SystemTypes.Size
        /**
         * Badge shape
         */
        shape?: 'square' | 'rounded' | 'round'
        /**
         * Where barge will be placed
         */
        align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
        /**
         * The element whose badge will be shown
         */
        children?: React.ReactNode
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
        /**
         * Badge container
         */
        holder: {
            align: Props['align']
            shape: Props['shape']
        }
    }
}

export default BadgeTypes