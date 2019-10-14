
declare namespace NotificationTypes {
    export interface Props {
        children?: React.ReactNode
        onClick?: () => void
    }

    export interface NotifyOptions {
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
        onClick?: () => void
        /**
         * if custom content filled then title and message will be ignored
         */
        customContent?: React.ReactElement
    }

    export interface Overrides {
        
    }
}

export default NotificationTypes