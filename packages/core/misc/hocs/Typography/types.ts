import SystemTypes from '@stage-ui/system/types'
import CSS from 'csstype'

declare namespace TypographyTypes {

    interface LinkProps extends Props {
		/**
		 * Prompts the user to save the linked URL instead of navigating to it
		 */
        download?: any
		/**
		 * The URL that the hyperlink points to
		 */
        href?: string
		/**
		 * Hints at the human language of the linked URL
		 */
        hrefLang?: string
		/**
		 * Specifies what media/device the linked document is optimized for
		 */
        media?: string
		/**
		 * A space-separated list of URLs
		 */
        ping?: string
		/**
		 * The relationship of the linked URL as space-separated link types
		 */
        rel?: string
		/**
		 * Where to display the linked URL
		 */
        target?: string
		/**
		 * Hints at the linked URL’s format with a MIME type
		 */
        type?: string
		/**
		 * How much of the referrer to send when following the link
		 */
        referrerPolicy?: string
    }

    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
		/**
		 * Capitalize first letter
		 */
				capitalize?: boolean
		/**
		 * Overflow text shortening
		 */
        ellipsis?: boolean
		/**
		 * Shorthand for text-decoration
		 */
        decoration?: CSS.Properties['textDecoration']

		/**
		 * Content
		 */
        children?: React.ReactNode
		/**
		 * Text color
		 */
        color?: SystemTypes.ColorProp
		/**
		 * Shorthand for background-color
		 */
        backgroundColor?: SystemTypes.ColorProp
		/**
		 * Shorthand for text-align
		 */
        align?: CSS.Properties['textAlign']
		/**
		 * Shorthand for font-weight
		 */
        weight?: CSS.Properties['fontWeight']
		/**
		 * Shorthand for font-size
		 * @default m
         * @display SystemTypes.Size
         * @link /props/#size
		 */
        size?: SystemTypes.Size | (string & { T?: string })
		/**
		 * Shorthand for text-transform
		 */
        transform?: CSS.Properties['textTransform']
    }

    interface Styles {
		/**
		 * Root element
		 */
        container: void
    }

    interface PrivateProps extends LinkProps {
        tag: string
        sizesOf: keyof SystemTypes.ThemeAssets['typography']
        specificStyles?: any
        mouseFocus?: boolean
        overrides: string
    }
}

export default TypographyTypes
