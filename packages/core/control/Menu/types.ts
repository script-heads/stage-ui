import Shared from '@flow-ui/core/types'

declare namespace MenuTypes {

    type Value = string | number

    interface Props extends Shared.AllProps {
        defaultValue?: Value
        value?: Value
        onChange?: (value: Value) => void
        items: Item[]

        size?: Shared.Size
        decoration?:
        'filled' |
        'outline' |
        'color' |
        'underline' |
        'tab' |
        'filled-underline'
        flip?: boolean
        distance?: string
        direction?: 'row' | 'column'
        shape?: 'square' | 'rounded' | 'round'
        border?: 'none' | 'narrow' | 'wide'
        align?: 'start' | 'center' | 'end'
        separator?: React.ReactElement

        color?: Shared.ColorProp
        disabled?: boolean
    }

    interface Item extends Partial<Shared.EventProps>, Partial<Props> {
        content: React.ReactNode
        value: Value
        disabled?: boolean
    }

    interface ItemProps extends Item {
        active: boolean
        styles: Shared.FlowStyles<Overrides>
        onEnter: () => void
    }

    interface Overrides {
        container: {
            size: Props['size']
            flip: Props['flip']
            border: Props['border']
        }
        item: {
            shape: Props['shape']
            disabled: boolean
            active: boolean
            size: Props['size']
            decoration: Props['decoration']
        }
        separator: void
    }
}

export default MenuTypes