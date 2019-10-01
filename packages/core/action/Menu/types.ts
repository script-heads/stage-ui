import Global from '../../types';

declare namespace MenuTypes {

    export interface Props extends Global.Props {
        defaultValue?: number
        value?: number
        onChange?: (value: number) => void
        children?: React.ReactNode

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

    export interface Item extends Global.HTMLAttributes, Global.EventHandlers {
        styles?: any
        active?: boolean
        onEnter?: Function
        children?: React.ReactNode
        disabled?: boolean
    }

    export interface Overrides {

    }
}

export default MenuTypes;