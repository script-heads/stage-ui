import Shared from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace PopoverTypes {
    interface Props extends Shared.AllProps {
        align?: 'top' | 'bottom' | 'left' | 'right' | 'none'
        background?: Shared.ColorProp
        color?: Shared.ColorProp
        children?: React.ReactNode
        arrowWidth?: CSS.Properties['width']
        arrowHeight?: CSS.Properties['height']
    }

    interface Overrides {
        container: void
        arrow: {
            align: Props['align']
        }
    }
}

export default PopoverTypes