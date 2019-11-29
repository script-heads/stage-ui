import Global from '@flow-ui/core/types'
import CSS from 'csstype'
import ThemeTypes from '../../themes/types'

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

	interface Props extends Global.Props {
		ellipsis?: boolean
		decoration?: CSS.Properties['textDecoration']

		children?: React.ReactNode
		color?: Global.ColorProp
		background?: Global.ColorProp
		align?: CSS.Properties['textAlign']
		weight?: CSS.Properties['fontWeight']
		size?: CSS.Properties['fontSize'] | number
		lineHeight?: CSS.Properties['lineHeight']
		transform?: CSS.Properties['textTransform']
	}

	interface PrivateProps extends AnchorProps {
		tag: string
		sizesOf: keyof ThemeTypes.Typography
		specificStyles?: any
	}
}

export default TypographyTypes
