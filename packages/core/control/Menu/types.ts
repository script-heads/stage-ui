import WhaleTypes from '@flow-ui/whale/types'

declare namespace MenuTypes {

    type Value = string | number

    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
        defaultValue?: Value
        value?: Value
        onChange?: (value: Value) => void
        items: Item[]

        size?: WhaleTypes.Size
        decoration?:
        'filled' |
        'outline' |
        'color' |
        'underline' |
        'tab' |
        'filled-underline'
        flip?: boolean
        spacing?: string
        direction?: 'row' | 'column'
        shape?: 'square' | 'rounded' | 'round'
        border?: 'none' | 'narrow' | 'wide'
        align?: 'start' | 'center' | 'end'
        separator?: React.ReactElement

        color?: WhaleTypes.ColorProp
        disabled?: boolean
    }

    interface Item extends Partial<Omit<WhaleTypes.EventProps<HTMLDivElement>, 'onChange'>>, Partial<Props> {
        content: React.ReactNode
        value: Value
        disabled?: boolean
    }

    interface ItemProps extends Omit<Item, 'styles'> {
        active: boolean
        styles: WhaleTypes.ComponentStyles<Overrides>
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