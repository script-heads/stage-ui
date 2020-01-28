import WhaleTypes from '@flow-ui/whale/types'

declare namespace SpinnerTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        color?: WhaleTypes.ColorProp
        children?: React.ReactElement
        shape?: 'square' | 'rounded' | 'round'
        duration?: number
        count?: number
        size?: string
    }

    interface Overrides {
        container: void
        children: void
    }
}

export default SpinnerTypes