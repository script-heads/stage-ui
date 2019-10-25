import Global from '@flow-ui/core/types'

declare namespace BadgeTypes {
    interface Props extends Global.Props {
        content: React.ReactNode
        align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
        children?: React.ReactNode
    }

    interface Styles {
        container: void
        holder: {
            align: Props['align']
        }
    }
}

export default BadgeTypes