import WhaleTypes from '@flow-ui/whale/types'

declare namespace DividerTypes {
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
        /**
        * Draw divider vertical
        */
        vertical?: boolean
        /**
        * Size of dash
        */
        dash?: WhaleTypes.Size | (string & { T?: string})
        /**
        * Size of the gap between dashes
        */
        gap?:WhaleTypes.Size | (string & { T?: string})
        /**
        * Color of divider
        * @default lightest
        */
        color?: WhaleTypes.ColorProp
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
    }
}

export default DividerTypes