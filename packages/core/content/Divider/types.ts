import SystemTypes from '@stage-ui/system/types'

declare namespace DividerTypes {
    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        /**
        * Draw divider vertical
        */
        vertical?: boolean
        /**
        * Size of dash
        * @display SystemTypes.Size
        * @link /props/#size
        */
        dash?: SystemTypes.Size | (string & { T?: string })
        /**
        * Size of the gap between dashes
        * @display SystemTypes.Size
        * @link /props/#size
        */
        gap?: SystemTypes.Size | (string & { T?: string })
        /**
        * Color of divider
        * @default lightest
        */
        color?: SystemTypes.ColorProp
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
    }
}

export default DividerTypes