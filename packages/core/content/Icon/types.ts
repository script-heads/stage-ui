import Global from '@flow-ui/core/types'
import CSS from 'csstype'

declare namespace IconTypes {
	/**
	 * TODO: circle и oval добавляют только padding
	 * пример <Icon shape="circle" type={(t) => t.outline.cube} />
	 */
	type Shapes = 'circle' | 'oval' | 'square'

	interface Props extends Global.Props {
		type: Global.IconProp
		shape?: Shapes
		size?: CSS.Properties['fontSize']
		color?: Global.ColorProp
		background?: Global.ColorProp
	}

	interface Styles {
		container: void
		icon: void
	}
}

export default IconTypes