import BlockTypes from '../Block/types'

declare namespace NotificationTypes {
  interface Props extends Stage.AllProps<HTMLDivElement, Classes>, Omit<BlockTypes.Props, 'overrides'> {
    children?: React.ReactNode
  }

  interface NotifyOptions extends Props {
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
     * if custom content filled then message and message will be ignored
     */
    render?: (close: () => void) => React.ReactElement
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
  }
}

export default NotificationTypes
