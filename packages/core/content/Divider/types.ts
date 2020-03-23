import WhaleTypes from '@flow-ui/whale/types'

declare namespace DividerTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        vertical?: boolean
        dash?: WhaleTypes.Size | (string & { T?: string})
        gap?:WhaleTypes.Size | (string & { T?: string})
        color?: WhaleTypes.ColorProp
    }

    interface Styles {
        container: void
    }
}

export default DividerTypes