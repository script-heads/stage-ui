import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace TypographyTypes {

	interface AnchorProps extends Props {
		download?: any
		href?: string
		hrefLang?: string
		media?: string
		ping?: string
		rel?: string
		target?: string
		type?: string
		referrerPolicy?: string
		onEnter?: () => void
	}

	interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
		ellipsis?: boolean
		decoration?: CSS.Properties['textDecoration']

		children?: React.ReactNode
		color?: WhaleTypes.ColorProp
		background?: WhaleTypes.ColorProp
		align?: CSS.Properties['textAlign']
		weight?: CSS.Properties['fontWeight']
		size?: WhaleTypes.Size
		lineHeight?: CSS.Properties['lineHeight']
		transform?: CSS.Properties['textTransform']
	}

	interface Overrides<T extends {[T in keyof Overrides]?: Object} = {}> {
        container: T['container']
	}
	
	interface PrivateProps extends AnchorProps {
		tag: string
		sizesOf: keyof WhaleTypes.Theme['typography']
		specificStyles?: any
	}
}

export default TypographyTypes
