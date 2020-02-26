declare module 'data/Chart/types' {
	import { ChartDataSets, ChartOptions } from 'chart.js';
	import WhaleTypes from '@flow-ui/whale/types'; namespace ChartTypes {
	    type ChartType = 'line' | 'pie' | 'verticalBar' | 'horizontalBar' | 'doughnut' | 'radar' | 'polar' | 'scatter' | 'bubble';
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        /**
	         * @default line
	         */
	        type: ChartType;
	        labels: Array<string | string[]>;
	        data: Array<number[] | ChartDataSets>;
	        options?: ChartOptions;
	    }
	    interface Overrides {
	    }
	}
	export default ChartTypes;

}
declare module 'data/Chart' {
	import React from 'react';
	import { Bar, Bubble, Doughnut, HorizontalBar, Line, Pie, Polar, Radar, Scatter } from 'react-chartjs-2';
	import Types from 'data/Chart/types'; type ChartRef = Bar | Bubble | Doughnut | HorizontalBar | Line | Pie | Polar | Radar | Scatter; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<ChartRef>>;
	export default _default;

}
declare module 'data/MeterStack/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import MeterTypes from '/data/Meter/types'; namespace MeterStackTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        size?: MeterTypes.Props['size'];
	        decoration?: MeterTypes.Props['decoration'];
	        shape?: MeterTypes.Props['shape'];
	        children: React.ReactElement<MeterTypes.Props>[];
	    }
	    interface Overrides {
	        container: void;
	        meterContainer: MeterTypes.Overrides['container'];
	        meterThumb: MeterTypes.Overrides['thumb'];
	    }
	}
	export default MeterStackTypes;

}
declare module 'data/MeterStack/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'data/MeterStack/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'data/MeterStack' {
	import React from 'react';
	import Types from 'data/MeterStack/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Split/Separator' {
	/// <reference types="react" />
	import { SplitElRef } from 'layout/Split';
	interface SeparatorProps {
	    areaSize: number;
	    defaultVertical: boolean;
	    container: () => SplitElRef;
	    prev: () => HTMLDivElement;
	    next: () => HTMLDivElement;
	} const Separator: (props: SeparatorProps) => JSX.Element;
	export default Separator;

}
declare module 'layout/Split/types' {
	import React from 'react';
	import WhaleTypes from '@flow-ui/whale/types'; namespace SplitTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onMove' | 'onChange'> {
	        direction?: 'row' | 'column';
	        children: React.ReactElement[];
	        /**
	         * Split area size, value in pixels
	         */
	        areaSize?: number;
	        /**
	         * You can give it array of numbers (in percent)
	         */
	        positions?: number[];
	        /**
	         * Calls when split area moves
	         */
	        onMove?: (positions: number[]) => void;
	        /**
	         * Calls when mouseUp if position did change
	         */
	        onChange?: (positions: number[]) => void;
	    }
	    interface Overrides {
	        container: {
	            vertical: boolean;
	        };
	        test: void;
	    }
	}
	export default SplitTypes;

}
declare module 'layout/Split/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Split/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Split' {
	import React from 'react';
	import Types from 'layout/Split/types';
	export type SplitElRef = (HTMLDivElement & {
	    _vertical?: true;
	    _onMove?: () => void;
	    _onChange?: () => void;
	}) | null; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Toolbar/types' {
	import FlexboxTypes from '/layout/Flexbox/types'; namespace BlockTypes {
	    interface Props extends FlexboxTypes.Props {
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default BlockTypes;

}
declare module 'layout/Toolbar/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Toolbar/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'layout/Toolbar' {
	import React from 'react';
	import Types from 'layout/Toolbar/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/ButtonGroup/types' {
	/// <reference types="react" />
	import ButtonTypes from '/control/Button/types'; namespace ButtonGroupTypes {
	    interface Props extends ButtonTypes.Props {
	        children: (React.ReactElement<ButtonTypes.Props> | React.ReactElement<ButtonTypes.Props>[]);
	    }
	}
	export default ButtonGroupTypes;

}
declare module 'control/ButtonGroup' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module '@flow-ui/lab' {
	/**
	 * Data
	 */
	export { default as Chart } from 'data/Chart';
	export { default as MeterStack } from 'data/MeterStack';
	/**
	 * Layout
	 */
	export { default as Split } from 'layout/Split';
	export { default as Toolbar } from 'layout/Toolbar';
	/**
	 * Control
	 */
	export { default as ButtonGroup } from 'control/ButtonGroup';

}
declare module 'data/Chart/styles' {
	import ChartTypes from 'data/Chart/types'; const _default: (props: ChartTypes.Props) => {};
	export default _default;

}
declare module 'misc/hooks/useProgress' {
	 let useProgress: (animate: boolean, time: number, pause: any, currentProgress: any) => number;
	export default useProgress;

}
declare module 'misc/logos/abr' {
	import React from 'react'; const _default: (props: {
	    color?: string | undefined;
	    style?: React.CSSProperties | undefined;
	}) => JSX.Element;
	export default _default;

}
declare module 'misc/logos/mrg' {
	import React from 'react'; const _default: (props: {
	    color?: string | undefined;
	    style?: React.CSSProperties | undefined;
	}) => JSX.Element;
	export default _default;

}
declare module 'misc/logos/smorodina' {
	import React from 'react'; const _default: (props: {
	    color?: string | undefined;
	    style?: React.CSSProperties | undefined;
	}) => JSX.Element;
	export default _default;

}
declare module 'misc/logos' {
	export { default as MRG } from 'misc/logos/mrg';
	export { default as ABR } from 'misc/logos/abr';
	export { default as Smorodina } from 'misc/logos/smorodina';

}
declare module 'misc/themes/whiteCurrant' {
	 const whiteCurrant: import("@flow-ui/whale/types").default.Theme;
	export default whiteCurrant;

}
declare module 'misc/themes' {
	export { default as whiteCurrant } from 'misc/themes/whiteCurrant';

}
