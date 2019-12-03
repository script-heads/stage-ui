import Shared from '@flow-ui/core/types'

declare namespace SpinnerTypes {
    interface Props extends Shared.AllProps {
        color?: Shared.ColorProp
        children?: React.ReactElement
        shape?: 'square' | 'rounded' | 'round'
        duration?: number
        count?: number
        size?: string
    }

    interface Styles {
        container: void
        children: void
    }
}

export default SpinnerTypes