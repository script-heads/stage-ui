import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace TypographyTypes {

	interface LinkProps extends Props {
		download?: any
		href?: string
		hrefLang?: string
		media?: string
		ping?: string
		rel?: string
		target?: string
		type?: string
		referrerPolicy?: string
	}

	interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
		ellipsis?: boolean
		decoration?: CSS.Properties['textDecoration']

		children?: React.ReactNode
		color?: WhaleTypes.ColorProp
		backgroundColor?: WhaleTypes.ColorProp
		align?: CSS.Properties['textAlign']
		weight?: CSS.Properties['fontWeight']
		size?: WhaleTypes.Size
		transform?: CSS.Properties['textTransform']
	}

	interface Styles<T extends {[T in keyof Styles]?: Object} = {}> {
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
