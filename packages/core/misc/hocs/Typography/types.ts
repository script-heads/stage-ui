import WhaleTypes from '@flow-ui/whale/types'
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

	interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
		/**
		 * Overflow text shortening
		 */
		ellipsis?: boolean
		/**
		 * Shorhand for text-decoration
		 */
		decoration?: CSS.Properties['textDecoration']

		/**
		 * Content
		 */
		children?: React.ReactNode
		/**
		 * Text color
		 */
		color?: WhaleTypes.ColorProp
		/**
		 * Shorhand for background-color
		 */
		backgroundColor?: WhaleTypes.ColorProp
		/**
		 * Shorhand for text-align
		 */
		align?: CSS.Properties['textAlign']
		/**
		 * Shorhand for font-weight
		 */
		weight?: CSS.Properties['fontWeight']
		/**
		 * Shorhand for font-size
		 */
		size?: WhaleTypes.Size
		/**
		 * Shorhand for text-transform
		 */
		transform?: CSS.Properties['textTransform']
	}

	interface Styles<T extends {[T in keyof Styles]?: Object} = {}> {
		/**
		 * Root element
		 */
        container: T['container']
	}
	
	interface PrivateProps extends LinkProps {
		tag: string
		sizesOf: keyof WhaleTypes.ThemeAssets['typography']
		specificStyles?: any
		mouseFocus?: boolean
	}
}

export default TypographyTypes
