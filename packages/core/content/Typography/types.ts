import Global from '@flow-ui/core/types'
import CSS from 'csstype'

declare namespace TypographyTypes {

	export interface Props extends AnchorProps {
		defaultStyles: any
		tag: string
		theme: any,
	}

	export interface AnchorProps extends TextProps {
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

	export interface TextProps extends Global.Props {
		quotes?: boolean
		ellipsis?: boolean
		decoration?: CSS.Properties['textDecoration']

		children?: React.ReactNode
		color?: Global.ColorProp
		background?: Global.ColorProp
		align?: CSS.Properties['textAlign']
		weight?: CSS.Properties['fontWeight']
		size?: CSS.Properties['fontSize']
		transform?: CSS.Properties['textTransform']
	}

	export interface Styles {
        
    }
}

export default TypographyTypes
