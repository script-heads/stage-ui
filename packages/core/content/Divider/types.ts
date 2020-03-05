import WhaleTypes from '@flow-ui/whale/types'

declare namespace DividerTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        vertical?: boolean
        dash?: number
        gap?: number
        color?: WhaleTypes.ColorProp
    }

    interface Styles {
        container: void
    }
}

export default DividerTypes