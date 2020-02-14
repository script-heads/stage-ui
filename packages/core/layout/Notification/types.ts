import WhaleTypes from '@flow-ui/whale/types'

declare namespace NotificationTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        children?: React.ReactNode
    }

    interface NotifyOptions {
        /**
         * Title of notification
         */
        title: string
        /**
         * Message of notification
         */
        message: string
        /**
         * Notification will be removed after timeout
         * value in milisecods
         */
        timeout?: number
        /**
         * Will call on notificaion click
         */
        onClick?: (e: any) => void
        /**
         * if custom content filled then title and message will be ignored
         */
        customContent?: React.ReactElement
    }

    interface Overrides {
        container: void
    }
}

export default NotificationTypes