import WhaleTypes from '@flow-ui/whale/types'
import CSS from 'csstype'

declare namespace IconTypes {
	/**
	 * TODO: circle и oval добавляют только padding
	 */
	type Shapes = 'circle' | 'oval' | 'square'

	interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
		svg: React.ReactElement
		shape?: Shapes
		size?: CSS.Properties['fontSize']
		color?: WhaleTypes.ColorProp
		background?: WhaleTypes.ColorProp
	}

	interface IconProps extends Omit<Props, 'svg'> {
		type?: 'filled' | 'outline'
		shape?: Shapes
		size?: CSS.Properties['fontSize']
		color?: WhaleTypes.ColorProp
		background?: WhaleTypes.ColorProp
	}

	interface Overrides {
		container: void
		icon: void
	}
}

export default IconTypes