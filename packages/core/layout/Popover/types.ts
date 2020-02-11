import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace PopoverTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        align?: 'top' | 'bottom' | 'left' | 'right' | 'none'
        borderColor?: WhaleTypes.ColorProp
        backgroundColor?: WhaleTypes.ColorProp
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