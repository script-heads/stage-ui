import Global from '../../types';

declare namespace MenuTypes {

    type Value = string | number;

    export interface Props extends Global.Props {
        defaultValue?: Value
        value?: Value
        onChange?: (value: Value) => void
        items: Item[]

        size?: Global.Size
        decoration?:
        'filled' |
        'outline' |
        'color' |
        'underline' |
        'tab' |
        'filled-underline'
        flip?: boolean
        distance?: string
        direction?: "row" | "column"
        shape?: 'square' | 'rounded' | 'round'
        border?: 'none' | 'narrow' | 'wide'
        align?: 'start' | 'center' | 'end'
        separator?: React.ReactElement

        color?: Global.ColorProp
        disabled?: boolean
    }

    export interface Item extends Global.EventHandlers {
        content: React.ReactNode
        value: Value
        disabled?: boolean
    }

    export interface ItemProps extends Item {
        active?: boolean
        styles?: any
        onEnter?: () => void
    }

    export interface Overrides {

    }
}

export default MenuTypes;