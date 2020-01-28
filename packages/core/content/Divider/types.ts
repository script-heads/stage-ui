import WhaleTypes from '@flow-ui/whale/types'

declare namespace DividerTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        vertical?: boolean
        dash?: number
        gap?: number
        color?: WhaleTypes.ColorProp
    }

    interface Overrides {
        container: void
    }
}

export default DividerTypes