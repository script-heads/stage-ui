import Global from '@flow-ui/core/types'
import CSS from 'csstype'

declare namespace PopoverTypes {
    interface Props extends Global.Props {
        align?: 'top' | 'bottom' | 'left' | 'right' | 'none'
        background?: Global.ColorProp
        color?: Global.ColorProp
        children?: React.ReactNode
        arrowWidth?: CSS.Properties['width']
        arrowHeight?: CSS.Properties['height']
    }

    interface Styles {
        container: void
        arrow: {
            align: Props['align']
        }
    }
}

export default PopoverTypes