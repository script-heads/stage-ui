declare module 'data/Chart/types' {
	import { ChartDataSets, ChartOptions } from 'chart.js';
	import Global from '@flow-ui/core/types'; namespace ChartTypes {
	    type ChartType = 'line' | 'pie' | 'verticalBar' | 'horizontalBar' | 'doughnut' | 'radar' | 'polar' | 'scatter' | 'bubble';
	    interface Props extends Global.Props {
	        /**
	         * @default line
	         */
	        type: ChartType;
	        labels: Array<string | string[]>;
	        data: Array<number[] | ChartDataSets>;
	        options?: ChartOptions;
	    }
	}
	export default ChartTypes;

}
declare module 'data/Chart' {
	import React from 'react';
	import ChartTypes from 'data/Chart/types'; const _default: React.ForwardRefExoticComponent<ChartTypes.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module 'layout/Split/Separator' {
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
	import Global from '@flow-ui/core/types'; namespace SplitTypes {
	    interface Props extends Global.Props {
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
	}
	export default SplitTypes;

}
declare module 'layout/Split' {
	import React from 'react';
	import SplitTypes from 'layout/Split/types';
	export type SplitElRef = (HTMLDivElement & {
	    _vertical?: true;
	    _onMove?: () => void;
	    _onChange?: () => void;
	}) | null; const _default: React.ForwardRefExoticComponent<SplitTypes.Props & React.RefAttributes<unknown>>;
	export default _default;

}
declare module '@flow-ui/lab' {
	/**
	 * Data
	 */
	export { default as Chart } from 'data/Chart';
	/**
	 * Layout
	 */
	export { default as Split } from 'layout/Split';

}
declare module 'data/Chart/styles' {
	import ChartTypes from 'data/Chart/types'; const _default: (props: ChartTypes.Props) => {};
	export default _default;

}
declare module 'layout/Split/styles' {
	import SplitTypes from 'layout/Split/types'; const _default: (props: SplitTypes.Props) => {};
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
	 const whiteCurrant: import("@flow-ui/core/misc/themes/types").default.Index;
	export default whiteCurrant;

}
declare module 'misc/themes' {
	export { default as whiteCurrant } from 'misc/themes/whiteCurrant';

}