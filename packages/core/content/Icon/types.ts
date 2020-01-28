import WhaleTypes from '@flow-ui/whale/types'
import IconsetTypes from '@flow-ui/core/misc/icons/types'

import CSS from 'csstype'

declare namespace IconTypes {
	/**
	 * TODO: circle и oval добавляют только padding
	 * пример <Icon shape="circle" type={(t) => t.outline.cube} />
	 */
	type Shapes = 'circle' | 'oval' | 'square'

	interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
		type: ((icons: IconsetTypes.Index) => React.ReactElement) | React.ReactElement
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