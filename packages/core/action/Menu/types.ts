import Global from '../../types';

declare namespace MenuTypes {

    export interface Props extends Global.Props {
        defaultValue?: string
        value?: string
        onChange?: (id: string) => void
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
        value: string
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