import Global from "@flow-ui/core/types";
import CSS from 'csstype';

declare namespace IconTypes {
	/**
	 * TODO: circle и oval добавляют только padding
	 * пример <Icon shape="circle" type={(t) => t.outline.cube} />
	 */
	export type Shapes = "circle" | "oval" | "square";

	export interface Props extends Global.Props {
		type: Global.IconProp
		shape?: Shapes
		size?: CSS.Properties["fontSize"]
		color?: Global.ColorProp
		background?: Global.ColorProp
	}

	export interface Styles {

	}
}

export default IconTypes;