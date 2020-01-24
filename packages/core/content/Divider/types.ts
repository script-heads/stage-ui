import Shared from '@flow-ui/whale/types'

declare namespace DividerTypes {
    interface Props extends Shared.AllProps {
        vertical?: boolean
        dash?: number
        gap?: number
        color?: Shared.ColorProp
    }

    interface Overrides {
        container: void
    }
}

export default DividerTypes