import Shared from '@flow-ui/core/types'

declare namespace DividerTypes {
    interface Props extends Shared.AllProps {
        vertical?: boolean
        dash?: number
        gap?: number
        color?: Shared.ColorProp
    }

    interface Styles {
        container: void
    }
}

export default DividerTypes