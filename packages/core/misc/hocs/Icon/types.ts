import WhaleTypes from '@flow-ui/whale/types'

declare namespace IconTypes {
	/**
	 * TODO: circle и oval добавляют только padding
	 */
	type IconShapes = 'circle' | 'oval' | 'square'
	type IconType = 'filled' | 'outline'

	interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
		svg: React.ReactElement
		shape?: IconShapes
		size?: WhaleTypes.Size | (string & { T?: string})
		color?: WhaleTypes.ColorProp
		background?: WhaleTypes.ColorProp
		rotate?: number
	}

	interface IconProps extends Omit<Props, 'svg'> {
		type?: IconType
	}

	interface Overrides {
		container: {
			shape?: IconShapes
			size: WhaleTypes.Size | (string & { T?: string})
		}
		icon: void
	}
}

export default IconTypes