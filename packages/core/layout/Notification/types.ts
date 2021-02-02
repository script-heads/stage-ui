import BlockTypes from '@stage-ui/core/layout/Block/types'
import SystemTypes from '@stage-ui/system/types'

declare namespace NotificationTypes {
    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        children?: React.ReactNode
    }

    interface NotifyOptions extends BlockTypes.Props {
        /**
         * Title of notification
         */
        title: string
        /**
         * Message of notification
         */
        message: string
        /**
         * Time in milliseconds after which the notification will be removed
         */
        timeout?: number
        /**
         * Fired when user click on notification
         */
        onClick?: (e: any) => void
        /**
         * if custom content filled then message and message will be ignored
         */
        render?: (close: () => void) => React.ReactElement
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
    }
}

export default NotificationTypes