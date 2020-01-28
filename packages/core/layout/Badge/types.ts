import WhaleTypes from '@flow-ui/whale/types'

declare namespace BadgeTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        content: React.ReactNode
        align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
        children?: React.ReactNode
    }

    interface Overrides {
        container: void
        holder: {
            align: Props['align']
        }
    }
}

export default BadgeTypes