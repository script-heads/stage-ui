import SystemTypes from '@flow-ui/system/types'

declare namespace DividerTypes {
    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        /**
        * Draw divider vertical
        */
        vertical?: boolean
        /**
        * Size of dash
        */
        dash?: SystemTypes.Size | (string & { T?: string })
        /**
        * Size of the gap between dashes
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