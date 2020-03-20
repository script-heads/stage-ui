declare module 'content/Divider/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace DividerTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        vertical?: boolean;
	        dash?: number;
	        gap?: number;
	        color?: WhaleTypes.ColorProp;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default DividerTypes;

}
declare module 'content/Divider/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'content/Divider/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'content/Divider' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'content/Divider/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'content/Spinner/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace SpinnerTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        color?: WhaleTypes.ColorProp;
	        children?: React.ReactElement;
	        shape?: 'square' | 'rounded' | 'round';
	        duration?: number;
	        count?: number;
	        size?: string;
	    }
	    interface Styles {
	        container: void;
	        children: void;
	    }
	}
	export default SpinnerTypes;

}
declare module 'content/Spinner/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'content/Spinner/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'content/Spinner' {
	import React from 'react';
	import Types from 'content/Spinner/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Typography/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace TypographyTypes {
	    interface LinkProps extends Props {
	        download?: any;
	        href?: string;
	        hrefLang?: string;
	        media?: string;
	        ping?: string;
	        rel?: string;
	        target?: string;
	        type?: string;
	        referrerPolicy?: string;
	    }
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        ellipsis?: boolean;
	        decoration?: CSS.Properties['textDecoration'];
	        children?: React.ReactNode;
	        color?: WhaleTypes.ColorProp;
	        backgroundColor?: WhaleTypes.ColorProp;
	        align?: CSS.Properties['textAlign'];
	        weight?: CSS.Properties['fontWeight'];
	        size?: WhaleTypes.Size;
	        transform?: CSS.Properties['textTransform'];
	    }
	    interface Styles<T extends {
	        [T in keyof Styles]?: Object;
	    } = {}> {
	        container: T['container'];
	    }
	    interface PrivateProps extends LinkProps {
	        tag: string;
	        sizesOf: keyof WhaleTypes.ThemeAssets['typography'];
	        specificStyles?: any;
	        mouseFocus?: boolean;
	    }
	}
	export default TypographyTypes;

}
declare module 'misc/hocs/Typography/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Typography/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.PrivateProps>;
	export default styles;

}
declare module 'misc/hocs/Typography' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'misc/hocs/Typography/types'; type RefTag = HTMLSpanElement | HTMLAnchorElement | HTMLParagraphElement; const _default: import("react").ForwardRefExoticComponent<Types.PrivateProps & import("react").RefAttributes<RefTag>>;
	export default _default;

}
declare module 'content/Header' {
	import React from 'react';
	import Types from '@flow-ui/core/misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Display' {
	import React from 'react';
	import Types from '@flow-ui/core/misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Paragraph' {
	import React from 'react';
	import Types from '@flow-ui/core/misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;
	export default _default;

}
declare module 'content/Text' {
	import React from 'react';
	import Types from '@flow-ui/core/misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Link' {
	import React from 'react';
	import Types from '@flow-ui/core/misc/hocs/Typography/types'; const _default: React.ForwardRefExoticComponent<Types.LinkProps & React.RefAttributes<HTMLAnchorElement>>;
	export default _default;

}
declare module 'control/Button/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace ButtonTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLButtonElement, Styles> {
	        autoFocus?: boolean;
	        disabled?: boolean;
	        form?: string;
	        formAction?: string;
	        /**
	         * The formenctype attribute specifies how form-data should be encoded
	         * before sending it to a server. This attribute overrides the form's
	         * enctype attribute.
	         * The formenctype attribute is only used for buttons with type="submit".
	         */
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	        name?: string;
	        type?: 'submit' | 'reset' | 'button';
	        value?: string | string[] | number;
	        size?: WhaleTypes.Size;
	        decoration?: 'filled' | 'outline' | 'text' | 'plain';
	        shape?: 'square' | 'rounded' | 'round';
	        uppercase?: boolean;
	        color?: WhaleTypes.ColorProp;
	        children?: React.ReactNode;
	        rightChild?: React.ReactNode;
	        leftChild?: React.ReactNode;
	    }
	    interface StyleState {
	        decoration: Props['decoration'];
	        shape: Props['shape'];
	        size: Props['size'];
	    }
	    interface Styles {
	        container: StyleState;
	        child: StyleState & {
	            align: 'left' | 'right';
	        };
	    }
	}
	export default ButtonTypes;

}
declare module 'control/Button/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Button/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Button' {
	import React from 'react';
	import Types from 'control/Button/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLButtonElement>>;
	export default _default;

}
declare module 'control/Calendar/types' {
	import WhaleTypes from '@flow-ui/whale/types';
	import { Moment } from 'moment';
	import { CSSProperties } from 'react'; namespace CalendarTypes {
	    type GridType = 'year' | 'month' | 'day';
	    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
	        /**
	         * Type for Calendar
	         * @default day
	         */
	        type?: GridType;
	        /**
	         * Property value could be a string
	         * if you pass format property aswell
	         * otherwise value should be instance of Date
	         */
	        value?: Moment | Date;
	        defaultValue?: Moment | Date;
	        /**
	         * Min datetime that could be selected
	         */
	        minValue?: Moment | Date;
	        /**
	         * Max datetime that could be selected
	         */
	        maxValue?: Moment | Date;
	        /**
	         * Callback function will with Date object
	         */
	        onChange?: (moment: Moment) => void;
	        /**
	         * @default ru
	         */
	        locale?: Locale;
	        /**
	         * Hide today button
	         */
	        hideToday?: boolean;
	    }
	    interface DateGridProps {
	        attributes: any;
	        hideToday: boolean;
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        onChange: (date: Moment) => void;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	        type: GridType;
	    }
	    interface DateGridCalendarProps {
	        value: Moment;
	        tmp: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        active: Moment;
	        onClick?: () => void;
	        style?: CSSProperties;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	    }
	    interface DateGridTitleProps {
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        gridType: GridType;
	        onNext: () => void;
	        onPrevious: () => void;
	        onGridTypeChange: (type: GridType) => void;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	    }
	    interface Styles {
	        dateGrind: void;
	        weekDay: void;
	        title: void;
	        gridBlock: {
	            isActive: Boolean;
	            isCurrent: boolean;
	            isDisabled: boolean;
	            isCurrentMonth: boolean;
	        };
	    }
	}
	export default CalendarTypes;

}
declare module 'control/Calendar/DateGridDay' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridDay: (props: CalendarTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridDay;

}
declare module 'control/Calendar/DateGridMonth' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridMonth: (props: CalendarTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridMonth;

}
declare module 'misc/hocs/Icon/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace IconTypes {
	    /**
	     * TODO: circle и oval добавляют только padding
	     */
	    type IconShapes = 'circle' | 'oval' | 'square';
	    type IconType = 'filled' | 'outline';
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        svg: React.ReactElement;
	        shape?: IconShapes;
	        size?: WhaleTypes.Size | (string & {
	            T?: string;
	        });
	        color?: WhaleTypes.ColorProp;
	        background?: WhaleTypes.ColorProp;
	        rotate?: number;
	    }
	    interface IconProps extends Omit<Props, 'svg'> {
	        type?: IconType;
	    }
	    interface Styles {
	        container: {
	            shape?: IconShapes;
	            size: WhaleTypes.Size | (string & {
	                T?: string;
	            });
	        };
	        icon: void;
	    }
	}
	export default IconTypes;

}
declare module 'misc/hocs/Icon/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Icon/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'misc/hocs/Icon' {
	import React from 'react';
	import Types from 'misc/hocs/Icon/types'; type Icons = {
	    filled: React.ReactElement;
	    outline: React.ReactElement;
	};
	export const createIcon: (props: Types.IconProps | undefined, icons: Icons) => JSX.Element;
	export type Props = Types.IconProps;
	export {};

}
declare module 'icons/svg/activity' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/alert-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/alert-triangle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/archive' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-back' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-circle-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-circle-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-circle-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-circle-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-downward' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-forward' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-ios-back' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-ios-downward' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-ios-forward' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-ios-upward' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrow-upward' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrowhead-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrowhead-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrowhead-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/arrowhead-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/at' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/attach-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/attach' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/award' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/backspace' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/bar-chart-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/bar-chart' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/battery' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/behance' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/bell-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/bell' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/bluetooth' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/book-open' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/book' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/bookmark' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/briefcase' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/browser' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/brush' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/bulb' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/calendar' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/camera' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/car' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/cast' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/charging' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/checkmark-circle-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/checkmark-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/checkmark-square-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/checkmark-square' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/checkmark' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/chevron-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/chevron-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/chevron-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/chevron-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/clipboard' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/clock' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/close-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/close-square' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/close' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/cloud-download' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/cloud-upload' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/code-download' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/code' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/collapse' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/color-palette' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/color-picker' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/compass' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/copy' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-down-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-down-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-left-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-left-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-right-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-right-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-up-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/corner-up-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/credit-card' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/crop' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/cube' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-left-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-left-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-right-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-right-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/done-all' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/download' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/droplet-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/droplet' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/edit-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/edit' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/email' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/expand' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/external-link' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/eye-off-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/eye-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/eye' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/facebook' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/file-add' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/file-remove' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/file-text' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/file' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/film' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/flag' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/flash-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/flash' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/flip-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/flip' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/folder-add' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/folder-remove' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/folder' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/funnel' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/gift' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/github' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/globe-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/globe-3' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/globe' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/google' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/grid' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/hard-drive' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/hash' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/headphones' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/heart' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/home' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/image-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/image' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/inbox' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/info' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/keypad' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/layers' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/layout' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/link-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/link' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/linkedin' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/list' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/lock' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/log-in' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/log-out' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/map' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/maximize' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/menu-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/menu-arrow' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/menu' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/message-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/message-square' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/mic-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/mic' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/minimize' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/minus-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/minus-square' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/minus' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/monitor' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/moon' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/more-horizontal' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/more-vertical' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/move' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/music' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/navigation-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/navigation' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/npm' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/options-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/options' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/pantone' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/paper-plane' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/pause-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/people' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/percent' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/person-add' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/person-delete' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/person-done' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/person-remove' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/person' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/phone-call' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/phone-missed' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/phone-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/phone' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/pie-chart-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/pie-chart' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/pin' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/play-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/plus-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/plus-square' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/plus' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/power' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/pricetags' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/printer' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/question-mark-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/question-mark' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/radio-button-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/radio-button-on' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/radio' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/recording' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/refresh' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/repeat' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/rewind-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/rewind-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/save' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/scissors' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/search' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/settings-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/settings' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/shake' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/share' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/shield-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/shield' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/shopping-bag' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/shopping-cart' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/shuffle-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/shuffle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/skip-back' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/skip-forward' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/slash' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/smartphone' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/smiling-face' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/speaker' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/square' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/star' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/stop-circle' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/sun' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/swap' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/sync' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/text' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/thermometer-minus' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/thermometer-plus' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/thermometer' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/toggle-left' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/toggle-right' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/trash-2' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/trash' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/trending-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/trending-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/tv' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/twitter' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/umbrella' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/undo' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/unlock' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/upload' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/video-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/video' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/volume-down' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/volume-mute' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/volume-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/volume-up' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/wifi-off' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module 'icons/svg/wifi' {
	 const _default: (props: import("../../misc/hocs/Icon/types").default.IconProps) => JSX.Element;
	export default _default;

}
declare module '@flow-ui/core/icons' {
	/**
	version: 1.1.3
	*/
	export { default as Activity } from 'icons/svg/activity';
	export { default as AlertCircle } from 'icons/svg/alert-circle';
	export { default as AlertTriangle } from 'icons/svg/alert-triangle';
	export { default as Archive } from 'icons/svg/archive';
	export { default as ArrowBack } from 'icons/svg/arrow-back';
	export { default as ArrowCircleDown } from 'icons/svg/arrow-circle-down';
	export { default as ArrowCircleLeft } from 'icons/svg/arrow-circle-left';
	export { default as ArrowCircleRight } from 'icons/svg/arrow-circle-right';
	export { default as ArrowCircleUp } from 'icons/svg/arrow-circle-up';
	export { default as ArrowDown } from 'icons/svg/arrow-down';
	export { default as ArrowDownward } from 'icons/svg/arrow-downward';
	export { default as ArrowForward } from 'icons/svg/arrow-forward';
	export { default as ArrowIosBack } from 'icons/svg/arrow-ios-back';
	export { default as ArrowIosDownward } from 'icons/svg/arrow-ios-downward';
	export { default as ArrowIosForward } from 'icons/svg/arrow-ios-forward';
	export { default as ArrowIosUpward } from 'icons/svg/arrow-ios-upward';
	export { default as ArrowLeft } from 'icons/svg/arrow-left';
	export { default as ArrowRight } from 'icons/svg/arrow-right';
	export { default as ArrowUp } from 'icons/svg/arrow-up';
	export { default as ArrowUpward } from 'icons/svg/arrow-upward';
	export { default as ArrowheadDown } from 'icons/svg/arrowhead-down';
	export { default as ArrowheadLeft } from 'icons/svg/arrowhead-left';
	export { default as ArrowheadRight } from 'icons/svg/arrowhead-right';
	export { default as ArrowheadUp } from 'icons/svg/arrowhead-up';
	export { default as At } from 'icons/svg/at';
	export { default as Attach2 } from 'icons/svg/attach-2';
	export { default as Attach } from 'icons/svg/attach';
	export { default as Award } from 'icons/svg/award';
	export { default as Backspace } from 'icons/svg/backspace';
	export { default as BarChart2 } from 'icons/svg/bar-chart-2';
	export { default as BarChart } from 'icons/svg/bar-chart';
	export { default as Battery } from 'icons/svg/battery';
	export { default as Behance } from 'icons/svg/behance';
	export { default as BellOff } from 'icons/svg/bell-off';
	export { default as Bell } from 'icons/svg/bell';
	export { default as Bluetooth } from 'icons/svg/bluetooth';
	export { default as BookOpen } from 'icons/svg/book-open';
	export { default as Book } from 'icons/svg/book';
	export { default as Bookmark } from 'icons/svg/bookmark';
	export { default as Briefcase } from 'icons/svg/briefcase';
	export { default as Browser } from 'icons/svg/browser';
	export { default as Brush } from 'icons/svg/brush';
	export { default as Bulb } from 'icons/svg/bulb';
	export { default as Calendar } from 'icons/svg/calendar';
	export { default as Camera } from 'icons/svg/camera';
	export { default as Car } from 'icons/svg/car';
	export { default as Cast } from 'icons/svg/cast';
	export { default as Charging } from 'icons/svg/charging';
	export { default as CheckmarkCircle2 } from 'icons/svg/checkmark-circle-2';
	export { default as CheckmarkCircle } from 'icons/svg/checkmark-circle';
	export { default as CheckmarkSquare2 } from 'icons/svg/checkmark-square-2';
	export { default as CheckmarkSquare } from 'icons/svg/checkmark-square';
	export { default as Checkmark } from 'icons/svg/checkmark';
	export { default as ChevronDown } from 'icons/svg/chevron-down';
	export { default as ChevronLeft } from 'icons/svg/chevron-left';
	export { default as ChevronRight } from 'icons/svg/chevron-right';
	export { default as ChevronUp } from 'icons/svg/chevron-up';
	export { default as Clipboard } from 'icons/svg/clipboard';
	export { default as Clock } from 'icons/svg/clock';
	export { default as CloseCircle } from 'icons/svg/close-circle';
	export { default as CloseSquare } from 'icons/svg/close-square';
	export { default as Close } from 'icons/svg/close';
	export { default as CloudDownload } from 'icons/svg/cloud-download';
	export { default as CloudUpload } from 'icons/svg/cloud-upload';
	export { default as CodeDownload } from 'icons/svg/code-download';
	export { default as Code } from 'icons/svg/code';
	export { default as Collapse } from 'icons/svg/collapse';
	export { default as ColorPalette } from 'icons/svg/color-palette';
	export { default as ColorPicker } from 'icons/svg/color-picker';
	export { default as Compass } from 'icons/svg/compass';
	export { default as Copy } from 'icons/svg/copy';
	export { default as CornerDownLeft } from 'icons/svg/corner-down-left';
	export { default as CornerDownRight } from 'icons/svg/corner-down-right';
	export { default as CornerLeftDown } from 'icons/svg/corner-left-down';
	export { default as CornerLeftUp } from 'icons/svg/corner-left-up';
	export { default as CornerRightDown } from 'icons/svg/corner-right-down';
	export { default as CornerRightUp } from 'icons/svg/corner-right-up';
	export { default as CornerUpLeft } from 'icons/svg/corner-up-left';
	export { default as CornerUpRight } from 'icons/svg/corner-up-right';
	export { default as CreditCard } from 'icons/svg/credit-card';
	export { default as Crop } from 'icons/svg/crop';
	export { default as Cube } from 'icons/svg/cube';
	export { default as DiagonalArrowLeftDown } from 'icons/svg/diagonal-arrow-left-down';
	export { default as DiagonalArrowLeftUp } from 'icons/svg/diagonal-arrow-left-up';
	export { default as DiagonalArrowRightDown } from 'icons/svg/diagonal-arrow-right-down';
	export { default as DiagonalArrowRightUp } from 'icons/svg/diagonal-arrow-right-up';
	export { default as DoneAll } from 'icons/svg/done-all';
	export { default as Download } from 'icons/svg/download';
	export { default as DropletOff } from 'icons/svg/droplet-off';
	export { default as Droplet } from 'icons/svg/droplet';
	export { default as Edit2 } from 'icons/svg/edit-2';
	export { default as Edit } from 'icons/svg/edit';
	export { default as Email } from 'icons/svg/email';
	export { default as Expand } from 'icons/svg/expand';
	export { default as ExternalLink } from 'icons/svg/external-link';
	export { default as EyeOff2 } from 'icons/svg/eye-off-2';
	export { default as EyeOff } from 'icons/svg/eye-off';
	export { default as Eye } from 'icons/svg/eye';
	export { default as Facebook } from 'icons/svg/facebook';
	export { default as FileAdd } from 'icons/svg/file-add';
	export { default as FileRemove } from 'icons/svg/file-remove';
	export { default as FileText } from 'icons/svg/file-text';
	export { default as File } from 'icons/svg/file';
	export { default as Film } from 'icons/svg/film';
	export { default as Flag } from 'icons/svg/flag';
	export { default as FlashOff } from 'icons/svg/flash-off';
	export { default as Flash } from 'icons/svg/flash';
	export { default as Flip2 } from 'icons/svg/flip-2';
	export { default as Flip } from 'icons/svg/flip';
	export { default as FolderAdd } from 'icons/svg/folder-add';
	export { default as FolderRemove } from 'icons/svg/folder-remove';
	export { default as Folder } from 'icons/svg/folder';
	export { default as Funnel } from 'icons/svg/funnel';
	export { default as Gift } from 'icons/svg/gift';
	export { default as Github } from 'icons/svg/github';
	export { default as Globe2 } from 'icons/svg/globe-2';
	export { default as Globe3 } from 'icons/svg/globe-3';
	export { default as Globe } from 'icons/svg/globe';
	export { default as Google } from 'icons/svg/google';
	export { default as Grid } from 'icons/svg/grid';
	export { default as HardDrive } from 'icons/svg/hard-drive';
	export { default as Hash } from 'icons/svg/hash';
	export { default as Headphones } from 'icons/svg/headphones';
	export { default as Heart } from 'icons/svg/heart';
	export { default as Home } from 'icons/svg/home';
	export { default as Image2 } from 'icons/svg/image-2';
	export { default as Image } from 'icons/svg/image';
	export { default as Inbox } from 'icons/svg/inbox';
	export { default as Info } from 'icons/svg/info';
	export { default as Keypad } from 'icons/svg/keypad';
	export { default as Layers } from 'icons/svg/layers';
	export { default as Layout } from 'icons/svg/layout';
	export { default as Link2 } from 'icons/svg/link-2';
	export { default as Link } from 'icons/svg/link';
	export { default as Linkedin } from 'icons/svg/linkedin';
	export { default as List } from 'icons/svg/list';
	export { default as Lock } from 'icons/svg/lock';
	export { default as LogIn } from 'icons/svg/log-in';
	export { default as LogOut } from 'icons/svg/log-out';
	export { default as Map } from 'icons/svg/map';
	export { default as Maximize } from 'icons/svg/maximize';
	export { default as Menu2 } from 'icons/svg/menu-2';
	export { default as MenuArrow } from 'icons/svg/menu-arrow';
	export { default as Menu } from 'icons/svg/menu';
	export { default as MessageCircle } from 'icons/svg/message-circle';
	export { default as MessageSquare } from 'icons/svg/message-square';
	export { default as MicOff } from 'icons/svg/mic-off';
	export { default as Mic } from 'icons/svg/mic';
	export { default as Minimize } from 'icons/svg/minimize';
	export { default as MinusCircle } from 'icons/svg/minus-circle';
	export { default as MinusSquare } from 'icons/svg/minus-square';
	export { default as Minus } from 'icons/svg/minus';
	export { default as Monitor } from 'icons/svg/monitor';
	export { default as Moon } from 'icons/svg/moon';
	export { default as MoreHorizontal } from 'icons/svg/more-horizontal';
	export { default as MoreVertical } from 'icons/svg/more-vertical';
	export { default as Move } from 'icons/svg/move';
	export { default as Music } from 'icons/svg/music';
	export { default as Navigation2 } from 'icons/svg/navigation-2';
	export { default as Navigation } from 'icons/svg/navigation';
	export { default as Npm } from 'icons/svg/npm';
	export { default as Options2 } from 'icons/svg/options-2';
	export { default as Options } from 'icons/svg/options';
	export { default as Pantone } from 'icons/svg/pantone';
	export { default as PaperPlane } from 'icons/svg/paper-plane';
	export { default as PauseCircle } from 'icons/svg/pause-circle';
	export { default as People } from 'icons/svg/people';
	export { default as Percent } from 'icons/svg/percent';
	export { default as PersonAdd } from 'icons/svg/person-add';
	export { default as PersonDelete } from 'icons/svg/person-delete';
	export { default as PersonDone } from 'icons/svg/person-done';
	export { default as PersonRemove } from 'icons/svg/person-remove';
	export { default as Person } from 'icons/svg/person';
	export { default as PhoneCall } from 'icons/svg/phone-call';
	export { default as PhoneMissed } from 'icons/svg/phone-missed';
	export { default as PhoneOff } from 'icons/svg/phone-off';
	export { default as Phone } from 'icons/svg/phone';
	export { default as PieChart2 } from 'icons/svg/pie-chart-2';
	export { default as PieChart } from 'icons/svg/pie-chart';
	export { default as Pin } from 'icons/svg/pin';
	export { default as PlayCircle } from 'icons/svg/play-circle';
	export { default as PlusCircle } from 'icons/svg/plus-circle';
	export { default as PlusSquare } from 'icons/svg/plus-square';
	export { default as Plus } from 'icons/svg/plus';
	export { default as Power } from 'icons/svg/power';
	export { default as Pricetags } from 'icons/svg/pricetags';
	export { default as Printer } from 'icons/svg/printer';
	export { default as QuestionMarkCircle } from 'icons/svg/question-mark-circle';
	export { default as QuestionMark } from 'icons/svg/question-mark';
	export { default as RadioButtonOff } from 'icons/svg/radio-button-off';
	export { default as RadioButtonOn } from 'icons/svg/radio-button-on';
	export { default as Radio } from 'icons/svg/radio';
	export { default as Recording } from 'icons/svg/recording';
	export { default as Refresh } from 'icons/svg/refresh';
	export { default as Repeat } from 'icons/svg/repeat';
	export { default as RewindLeft } from 'icons/svg/rewind-left';
	export { default as RewindRight } from 'icons/svg/rewind-right';
	export { default as Save } from 'icons/svg/save';
	export { default as Scissors } from 'icons/svg/scissors';
	export { default as Search } from 'icons/svg/search';
	export { default as Settings2 } from 'icons/svg/settings-2';
	export { default as Settings } from 'icons/svg/settings';
	export { default as Shake } from 'icons/svg/shake';
	export { default as Share } from 'icons/svg/share';
	export { default as ShieldOff } from 'icons/svg/shield-off';
	export { default as Shield } from 'icons/svg/shield';
	export { default as ShoppingBag } from 'icons/svg/shopping-bag';
	export { default as ShoppingCart } from 'icons/svg/shopping-cart';
	export { default as Shuffle2 } from 'icons/svg/shuffle-2';
	export { default as Shuffle } from 'icons/svg/shuffle';
	export { default as SkipBack } from 'icons/svg/skip-back';
	export { default as SkipForward } from 'icons/svg/skip-forward';
	export { default as Slash } from 'icons/svg/slash';
	export { default as Smartphone } from 'icons/svg/smartphone';
	export { default as SmilingFace } from 'icons/svg/smiling-face';
	export { default as Speaker } from 'icons/svg/speaker';
	export { default as Square } from 'icons/svg/square';
	export { default as Star } from 'icons/svg/star';
	export { default as StopCircle } from 'icons/svg/stop-circle';
	export { default as Sun } from 'icons/svg/sun';
	export { default as Swap } from 'icons/svg/swap';
	export { default as Sync } from 'icons/svg/sync';
	export { default as Text } from 'icons/svg/text';
	export { default as ThermometerMinus } from 'icons/svg/thermometer-minus';
	export { default as ThermometerPlus } from 'icons/svg/thermometer-plus';
	export { default as Thermometer } from 'icons/svg/thermometer';
	export { default as ToggleLeft } from 'icons/svg/toggle-left';
	export { default as ToggleRight } from 'icons/svg/toggle-right';
	export { default as Trash2 } from 'icons/svg/trash-2';
	export { default as Trash } from 'icons/svg/trash';
	export { default as TrendingDown } from 'icons/svg/trending-down';
	export { default as TrendingUp } from 'icons/svg/trending-up';
	export { default as Tv } from 'icons/svg/tv';
	export { default as Twitter } from 'icons/svg/twitter';
	export { default as Umbrella } from 'icons/svg/umbrella';
	export { default as Undo } from 'icons/svg/undo';
	export { default as Unlock } from 'icons/svg/unlock';
	export { default as Upload } from 'icons/svg/upload';
	export { default as VideoOff } from 'icons/svg/video-off';
	export { default as Video } from 'icons/svg/video';
	export { default as VolumeDown } from 'icons/svg/volume-down';
	export { default as VolumeMute } from 'icons/svg/volume-mute';
	export { default as VolumeOff } from 'icons/svg/volume-off';
	export { default as VolumeUp } from 'icons/svg/volume-up';
	export { default as WifiOff } from 'icons/svg/wifi-off';
	export { default as Wifi } from 'icons/svg/wifi';

}
declare module 'control/Calendar/DateGridTitle' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridTitle: (props: CalendarTypes.DateGridTitleProps) => JSX.Element;
	export default DateGridTitle;

}
declare module 'control/Calendar/DateGridYear' {
	/// <reference types="react" />
	import CalendarTypes from 'control/Calendar/types'; const DateGridYear: (props: CalendarTypes.DateGridCalendarProps) => JSX.Element;
	export default DateGridYear;

}
declare module 'control/Calendar/DateGrid' {
	/// <reference types="react" />
	import DatePickerTypes from 'control/Calendar/types'; const DateGrid: (props: DatePickerTypes.DateGridProps) => JSX.Element;
	export default DateGrid;

}
declare module 'control/Calendar/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Calendar/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Calendar' {
	import React from 'react';
	import Types from 'control/Calendar/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Check/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace CheckTypes {
	    type CheckType = 'checkbox' | 'radio' | 'switch';
	    interface Props extends WhaleTypes.AllProps<HTMLInputElement, Styles> {
	        label?: string;
	        labelColor?: WhaleTypes.ColorProp;
	        checked?: boolean;
	        disabled?: boolean;
	        defaultValue?: boolean;
	        uppercase?: boolean;
	        size?: WhaleTypes.Size;
	    }
	    interface PrivateProps extends Omit<Props, 'styles'> {
	        children: (checked: boolean, focus: boolean) => React.ReactElement;
	        type?: CheckType;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	    }
	    interface Styles {
	        container: {
	            disabled: Props['disabled'];
	            animated: Props['animated'];
	        };
	        label: {
	            disabled: Props['disabled'];
	            size: Props['size'];
	            uppercase: Props['uppercase'];
	            animated: Props['animated'];
	        };
	    }
	}
	export default CheckTypes;

}
declare module 'misc/hocs/Check' {
	import React from 'react';
	import CheckTypes from 'misc/hocs/Check/types'; const _default: React.ForwardRefExoticComponent<CheckTypes.PrivateProps & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Checkbox/types' {
	import CheckTypes from '@flow-ui/core/misc/hocs/Check/types'; namespace CheckboxTypes {
	    interface Props extends CheckTypes.Props {
	    }
	    interface Styles extends CheckTypes.Styles {
	        check: {
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	            focus: boolean;
	        };
	        icon: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	    }
	}
	export default CheckboxTypes;

}
declare module 'misc/hocs/Check/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Check/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Checkbox/styles' {
	import Types from 'control/Checkbox/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Checkbox' {
	import React from 'react';
	import Types from 'control/Checkbox/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hocs/Field/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace FieldTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLInputElement, Styles>, 'onChange'> {
	        label?: React.ReactNode;
	        labelType?: 'none' | 'outside' | 'inside';
	        hint?: React.ReactNode;
	        size?: WhaleTypes.Size;
	        decoration?: 'none' | 'filled' | 'underline' | 'outline';
	        color?: WhaleTypes.ColorProp;
	        shape?: 'round' | 'rounded' | 'square';
	        disabled?: boolean;
	        rightChild?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        clearable?: boolean;
	        onEnter?: () => void;
	        onClear?: () => void;
	    }
	    interface State {
	        disabled: Props['disabled'];
	        focus: boolean;
	        shape: Props['shape'];
	        size: Props['size'];
	        decoration: Props['decoration'];
	        labelType: Props['labelType'];
	    }
	    interface Styles<T extends {
	        [T in keyof Styles]?: Object;
	    } = {}> {
	        container: State & T['container'];
	        field: State & T['field'];
	        content: State & T['content'];
	        label: State & T['label'];
	        child: {
	            align: 'right' | 'left';
	        } & State & T['child'];
	        clearButton: State & T['clearButton'];
	        hint: State & T['hint'];
	    }
	    interface PrivateProps extends Omit<Props, 'styles'> {
	        focus: boolean;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	        state?: Object;
	        labelName?: string;
	        attributes?: any;
	        events?: any;
	        children?: React.ReactNode;
	    }
	}
	export default FieldTypes;

}
declare module 'misc/hocs/Field' {
	import React from 'react';
	import Types from 'misc/hocs/Field/types'; const _default: React.ForwardRefExoticComponent<Types.PrivateProps & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/hooks/useMask' {
	import IMask from 'imask'; const _default: (ref: any, masked: any) => IMask.InputMask<IMask.AnyMaskedOptions>;
	export default _default;

}
declare module 'control/DatePicker/mask' {
	import moment from 'moment'; const _default: (format: string, min: moment.Moment, max: moment.Moment) => any;
	export default _default;

}
declare module 'misc/hocs/Field/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Field/types'; type ExtractFunction<T> = {
	    [K in keyof T]: Extract<T[K], Function>;
	}; const fieldStyles: <T extends Types.Styles<{}>>(props: Pick<Types.Props, "color" | "alignSelf" | "backgroundColor" | "display" | "flexBasis" | "flexGrow" | "flexShrink" | "fontSize" | "gridColumnEnd" | "gridColumnStart" | "gridRowEnd" | "gridRowStart" | "justifySelf" | "letterSpacing" | "lineHeight" | "position" | "textAlign" | "visibility" | "borderColor" | "borderRadius" | "borderStyle" | "borderWidth" | "flex" | "gridArea" | "gridColumn" | "gridRow" | "placeSelf" | "size" | "style" | "disabled" | "label" | "p" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "className" | "id" | "tabIndex" | "role" | "draggable" | "attrs" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onWheel" | "onWheelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onEnter" | "onEsc" | "onSelect" | "onSelectCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onScroll" | "onScrollCapture" | "styles" | "animated" | "textColor" | "px" | "py" | "pr" | "pl" | "pt" | "pb" | "w" | "h" | "m" | "mx" | "my" | "mr" | "ml" | "mt" | "mb" | "shape" | "decoration" | "rightChild" | "leftChild" | "labelType" | "hint" | "clearable" | "onClear">, theme: WhaleTypes.Theme, stylePatch?: Partial<ExtractFunction<WhaleTypes.Styles<T>>> | undefined) => WhaleTypes.Styles<Types.Styles<{}>>;
	export default fieldStyles;

}
declare module 'control/DatePicker/types' {
	import { Moment } from 'moment';
	import FieldTypes from 'misc/hocs/Field/types'; namespace DatePickerTypes {
	    type GridType = 'year' | 'month' | 'day';
	    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
	    interface Props extends Omit<FieldTypes.Props, 'onChange'>, InputProps {
	        /**
	         * Type for DatePicker
	         * @default day
	         */
	        type?: GridType;
	        /**
	         * Property value could be a string
	         * if you pass format property aswell
	         * otherwise value should be instance of Date
	         */
	        value?: Moment | Date | string;
	        defaultValue?: Moment | Date | string;
	        /**
	         * Format moment YYYY-MM-DD
	         * @default YYYY-MM-DD
	         */
	        format?: string;
	        /**
	         * Min datetime that could be selected
	         */
	        minValue?: Moment | Date | string;
	        /**
	         * Max datetime that could be selected
	         */
	        maxValue?: Moment | Date | string;
	        /**
	         * Callback function will with Date object
	         * or string if format property was passed.
	         */
	        onChange?: (moment: Moment, value: string) => void;
	        /**
	         * Do not close datepicker on change
	         * latest value
	         */
	        stayOpen?: boolean;
	        /**
	         * Enable mask input
	         */
	        masked?: boolean;
	        /**
	         * @default ru
	         */
	        locale?: Locale;
	        /**
	         * Hide today button
	         */
	        hideToday?: boolean;
	    }
	    interface InputProps {
	        autoComplete?: string;
	        autoFocus?: boolean;
	        list?: string;
	        name?: string;
	        placeholder?: string;
	        pattern?: string;
	        readOnly?: boolean;
	        required?: boolean;
	        form?: string;
	        formAction?: string;
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	    }
	    interface Styles extends FieldTypes.Styles {
	        drop: {
	            isActive: boolean;
	        };
	        input: void;
	    }
	}
	export default DatePickerTypes;

}
declare module 'control/DatePicker/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/DatePicker/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/DatePicker' {
	import React from 'react';
	import Types from 'control/DatePicker/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Menu/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace MenuTypes {
	    type MenuValue = string | number;
	    type MenuDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
	    type MenuDecoration = 'filled' | 'color' | 'marker' | 'marker-reverse';
	    type MenuAlign = 'flex-start' | 'flex-end' | 'stretch' | 'center';
	    type MenuShape = 'square' | 'rounded' | 'round';
	    interface Context {
	        values: Record<string, () => void>;
	        current?: MenuValue;
	        controlled?: boolean;
	        onChange?: (value?: MenuValue) => void;
	    }
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
	        defaultValue?: MenuValue;
	        value?: MenuValue;
	        data?: React.ReactNode[];
	        onChange?: (value?: MenuValue) => void;
	        column?: boolean;
	        decoration?: MenuDecoration;
	        direction?: MenuDirection;
	        shape?: MenuShape;
	        size?: WhaleTypes.Size;
	        align?: MenuAlign;
	        children?: React.ReactNode;
	    }
	    interface StyleState {
	        decoration: Props['decoration'];
	    }
	    interface Styles {
	        container: StyleState;
	        item: StyleState;
	        group: StyleState;
	        groupTitle: StyleState;
	        subMenu: StyleState;
	        subMenuContent: StyleState;
	        subMenuArrow: StyleState;
	        leftChild: StyleState;
	        middleChild: StyleState;
	        rightChild: StyleState;
	    }
	}
	export default MenuTypes;

}
declare module 'control/Menu/MenuItem/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import MenuTypes from 'control/Menu/types'; namespace MenuItemTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
	        title?: React.ReactNode;
	        disabled?: boolean;
	        value?: MenuTypes.MenuValue;
	        children?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        rightChild?: React.ReactNode;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default MenuItemTypes;

}
declare module 'control/Menu/MenuItem/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/MenuItem/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Menu/MenuItem' {
	import React from 'react';
	import Types from 'control/Menu/MenuItem/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Menu/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Menu/Submenu/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace SubmenuTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
	        title?: React.ReactNode;
	        disabled?: boolean;
	        indent?: string;
	        open?: boolean;
	        defaultOpen?: boolean;
	        children?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        rightChild?: React.ReactNode;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default SubmenuTypes;

}
declare module 'control/Menu/Submenu/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/Submenu/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Menu/Submenu' {
	import React from 'react';
	import Types from 'control/Menu/Submenu/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Menu/MenuGroup/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace MenuGroupTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
	        title: React.ReactNode;
	        children?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        rightChild?: React.ReactNode;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default MenuGroupTypes;

}
declare module 'control/Menu/MenuGroup/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/MenuGroup/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Menu/MenuGroup' {
	import React from 'react';
	import Types from 'control/Menu/MenuGroup/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Menu' {
	import React from 'react';
	import Types from 'control/Menu/types';
	/**
	 * Hook used in every Menu.Item
	 * most optimized method to change item value
	 */
	export const useValue: (value?: string | number | undefined) => [boolean, () => void, Types.Context]; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>> & {
	    Item: React.ForwardRefExoticComponent<import("./MenuItem/types").default.Props & React.RefAttributes<HTMLDivElement>>;
	    Group: React.ForwardRefExoticComponent<import("./MenuGroup/types").default.Props & React.RefAttributes<HTMLDivElement>>;
	    Submenu: React.ForwardRefExoticComponent<import("./Submenu/types").default.Props & React.RefAttributes<HTMLDivElement>>;
	};
	export default _default;

}
declare module 'control/Radio/types' {
	import CheckTypes from 'misc/hocs/Check/types'; namespace RadioTypes {
	    interface Props extends CheckTypes.Props {
	    }
	    interface Styles extends CheckTypes.Styles {
	        check: {
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	        radio: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	    }
	}
	export default RadioTypes;

}
declare module 'control/Radio/styles' {
	import Types from 'control/Radio/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Radio' {
	import React from 'react';
	import Types from 'control/Radio/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Range/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace RangeTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
	        min?: number;
	        max?: number;
	        defaultValue?: number;
	        value?: number;
	        onChange?: (value: number) => void;
	        mode?: 'single' | 'range';
	        className?: string;
	    }
	    interface Ref {
	        container: HTMLDivElement;
	        setValue: (value: number) => void;
	    }
	    interface Styles {
	        container: void;
	        rail: void;
	        track: void;
	        thumb: void;
	    }
	}
	export default RangeTypes;

}
declare module 'control/Range/styles' {
	import Types from 'control/Range/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Range' {
	import React from 'react';
	import Types from 'control/Range/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'control/Pageswitch/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace PageswitchTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
	        length: number;
	        onChange?: (pageNumber: number, startIndex: number) => void;
	        options?: Options;
	        value?: number;
	        defaultValue?: number;
	    }
	    interface Options {
	        pageSize?: number;
	    }
	    interface Styles {
	        container: void;
	        arrowButton: {
	            disabled: boolean;
	        };
	    }
	}
	export default PageswitchTypes;

}
declare module 'control/Pageswitch/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Pageswitch/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Pageswitch' {
	import React from 'react';
	import Types from 'control/Pageswitch/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Drop/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace DropTypes {
	    interface TargetCoordinates {
	        top: number;
	        bottom: number;
	        left: number;
	        right: number;
	    }
	    interface Props extends WhaleTypes.AttributeProps, WhaleTypes.AllEventProps<HTMLDivElement>, WhaleTypes.CoreProps<Styles>, WhaleTypes.ColorProps, WhaleTypes.BorderProps, WhaleTypes.PaddingProps, WhaleTypes.LayoutProps {
	        /**
	         * Target where to place drop
	         */
	        target?: any;
	        /**
	         * Will mount or unmount Drop
	         */
	        visible?: boolean;
	        align?: 'top' | 'bottom' | 'left' | 'right';
	        justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside';
	        stretchWidth?: boolean;
	        stretchHeight?: boolean;
	        followCursor?: boolean;
	        /**
	         * Space around drop
	         * like margin or so
	         */
	        spacing?: number;
	        /**
	         * Event will calls on
	         * outside mouse clicks
	         */
	        onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void;
	        /**
	         * Calls whenever esc pressed
	         */
	        onEsc?: () => void;
	        children?: React.ReactNode;
	    }
	    interface Ref extends Partial<HTMLDivElement> {
	        /**
	         * Update self position of drop
	         * useful when target changes origins and sizes
	         */
	        updatePosition: () => void;
	        /**
	         * Can be use ONLY on
	         * uncontrolled compnents
	         */
	        setVisible: (state: boolean) => void;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default DropTypes;

}
declare module 'control/Select/types' {
	import FieldTypes from 'misc/hocs/Field/types';
	import WhaleTypes from '@flow-ui/whale/types'; namespace SelectTypes {
	    interface Option {
	        text: string;
	        value: any;
	    }
	    interface Props extends Omit<FieldTypes.Props, 'onChange'> {
	        placeholder?: string;
	        options: Option[];
	        /**
	         * Allow selecting multiple values
	         */
	        multiselect?: boolean;
	        /**
	         * Allow search values
	         */
	        searchable?: boolean;
	        /**
	         * Select will not close after
	         * option clicked
	         */
	        keepOpen?: boolean;
	        values?: Option[];
	        defaultValues?: Option[];
	        /**
	         * Max size of scroll area
	         * at select drop view
	         */
	        maxScrollHeight?: string;
	        onChange?: (values: Option[], changedValue?: Option) => void;
	    }
	    type State = {
	        selectedOptions: Option[];
	        open: boolean;
	        searchValue: string;
	        empty: boolean;
	        cursor: number;
	    };
	    interface OptionsProps extends SearchProps {
	        selected: SelectTypes.Option[];
	        onClose: (option: any) => void;
	        searchable?: boolean;
	        size: WhaleTypes.Size;
	    }
	    interface SearchProps {
	        searchValue: string;
	        onSearch: (searchValue: string) => void;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	        placeholder?: string;
	        defaultValue?: string;
	        disabled?: boolean;
	    }
	    interface StyleState {
	        shape: Props['shape'];
	        size: Props['size'];
	        decoration: Props['decoration'];
	    }
	    interface StyleParams {
	        isOpen: boolean;
	    }
	    interface Styles extends FieldTypes.Styles {
	        selectedOptionInput: {
	            searchMode: boolean;
	            multiselect: boolean;
	        };
	        selectedOptionsContainer: void;
	        tag: StyleState;
	        tagRemove: StyleState;
	        drop: StyleState;
	        dropItem: StyleState;
	    }
	}
	export default SelectTypes;

}
declare module 'control/Select/styles' {
	import Types from 'control/Select/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props, Types.StyleParams>;
	export default styles;

}
declare module 'control/Select' {
	import React from 'react';
	import Types from 'control/Select/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Switch/types' {
	import CheckTypes from 'misc/hocs/Check/types'; namespace SwitchTypes {
	    interface Props extends CheckTypes.Props {
	    }
	    interface Styles extends CheckTypes.Styles {
	        check: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	        switch: {
	            checked: Props['checked'];
	            size: Props['size'];
	            animated: Props['animated'];
	            disabled: Props['disabled'];
	        };
	    }
	}
	export default SwitchTypes;

}
declare module 'control/Switch/styles' {
	import Types from 'control/Switch/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/Switch' {
	import React from 'react';
	import Types from 'control/Switch/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/TextField/types' {
	import { ChangeEventHandler } from 'react';
	import FieldTypes from 'misc/hocs/Field/types';
	import WhaleTypes from '@flow-ui/whale/types'; namespace TextFieldTypes {
	    type InputTypes = 'email' | 'hidden' | 'number' | 'password' | 'reset' | 'search' | 'tel' | 'text' | 'url';
	    interface Props extends FieldTypes.Props, InputProps, TextAreaProps {
	        defaultValue?: string | number;
	        align?: 'left' | 'right';
	        multiline?: boolean;
	        onChange?: ChangeEventHandler<HTMLInputElement>;
	    }
	    interface InputProps {
	        autoComplete?: string;
	        autoFocus?: boolean;
	        list?: string;
	        name?: string;
	        placeholder?: string;
	        pattern?: string;
	        readOnly?: boolean;
	        required?: boolean;
	        type?: InputTypes;
	        value?: string | number;
	        form?: string;
	        formAction?: string;
	        formEncType?: string;
	        formMethod?: string;
	        formNoValidate?: boolean;
	        formTarget?: string;
	        max?: number | string;
	        maxLength?: number;
	        min?: number | string;
	        minLength?: number;
	        step?: number | string;
	        width?: number | string;
	    }
	    interface TextAreaProps {
	        cols?: number;
	        rows?: number;
	        wrap?: string;
	    }
	    interface Styles extends FieldTypes.Styles {
	        input: {
	            multiline: boolean;
	            size: WhaleTypes.Size;
	        };
	    }
	}
	export default TextFieldTypes;

}
declare module 'control/TextField/styles' {
	import Types from 'control/TextField/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'control/TextField' {
	import React from 'react';
	import Types from 'control/TextField/types'; type RefTypes = ((HTMLInputElement | HTMLTextAreaElement) & HTMLDivElement) | null | {}; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<RefTypes>>;
	export default _default;

}
declare module 'data/Meter/MeterThumb/types' {
	import WhaleTypes from '@flow-ui/whale/types';
	import MeterTypes from 'data/Meter/types'; namespace MeterThumbTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        value: MeterTypes.Props['value'];
	        color?: MeterTypes.Props['color'];
	        /**
	         * Enabled process animation
	         * @default false
	         */
	        loading?: MeterTypes.Props['loading'];
	    }
	    interface PrivateProps extends MeterTypes.Props {
	    }
	    interface Styles {
	        container: MeterTypes.Styles['thumb'];
	    }
	}
	export default MeterThumbTypes;

}
declare module 'data/Meter/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import MeterThumbTypes from 'data/Meter/MeterThumb/types'; namespace MeterTypes {
	    type MeterDecoration = 'filled' | 'outline';
	    type MeterShape = 'square' | 'round';
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        value?: number;
	        size?: WhaleTypes.Size;
	        decoration?: MeterDecoration;
	        shape?: MeterShape;
	        color?: WhaleTypes.ColorProp;
	        /**
	         * Enabled process animation
	         * @default false
	         */
	        loading?: boolean;
	        children?: React.ReactElement<MeterThumbTypes.Props>[];
	    }
	    interface Styles {
	        container: {
	            shape: MeterShape;
	            size: WhaleTypes.Size;
	            decoration: MeterDecoration;
	        };
	        thumb: {
	            shape: MeterShape;
	            size: WhaleTypes.Size;
	        };
	    }
	}
	export default MeterTypes;

}
declare module 'data/Meter/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'data/Meter/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'data/Meter/MeterThumb/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'data/Meter/MeterThumb/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.PrivateProps>;
	export default styles;

}
declare module 'data/Meter/MeterThumb' {
	import { RefForwardingComponent } from 'react';
	import Types from 'data/Meter/MeterThumb/types'; const MeterThumb: RefForwardingComponent<HTMLDivElement, Types.PrivateProps>;
	export default MeterThumb;

}
declare module 'data/Meter' {
	import React from 'react';
	import Types from 'data/Meter/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>> & {
	    Thumb: React.RefForwardingComponent<HTMLDivElement, import("./MeterThumb/types").default.PrivateProps>;
	};
	export default _default;

}
declare module 'misc/utils/applyLayoutDecoration' {
	import WhaleTypes from '@flow-ui/whale/types';
	export type LayoutDecoration = 'surface' | 'minorShadow' | 'mediumShadow' | 'majorShadow' | 'neumorphism'; type Props = WhaleTypes.AllProps<HTMLDivElement, {}> & {
	    decoration?: LayoutDecoration;
	}; const applyLayoutDecoration: (props: Props, theme: WhaleTypes.Theme) => {
	    background: string;
	    borderRadius: string;
	    borderWidth: string;
	    borderStyle: string;
	    borderColor: string;
	    boxShadow?: undefined;
	} | {
	    background: string;
	    borderRadius: string;
	    borderWidth: string;
	    borderStyle: string;
	    borderColor: string;
	    boxShadow: string;
	} | {
	    background: string;
	    borderRadius: string;
	    boxShadow: string;
	    borderWidth?: undefined;
	    borderStyle?: undefined;
	    borderColor?: undefined;
	} | undefined;
	export default applyLayoutDecoration;

}
declare module '@flow-ui/core/data/Table/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration'; namespace TableTypes {
	    type RowMountType = 
	    /**
	     * Render all rows at onec
	     */
	    'default' | 
	    /**
	     * Render row only when it become visible
	     */
	    'whenBecomeVisible' | 
	    /**
	     * Render row when it become visible
	     * and unmount when row away from screen
	     */
	    'onlyWhenVisible';
	    type TableCellKey = number | string;
	    type TableSortType = 'ASC' | 'DESC';
	    type TableSortObject = {
	        key: TableCellKey;
	        sort: TableSortType;
	    };
	    type TablePaginationOptions = {
	        pageSize: number;
	        alwaysVisible?: boolean;
	    };
	    interface TableCellContext {
	        /**
	         * Current cell key
	         */
	        key: TableCellKey;
	        /**
	         * Current row index
	         */
	        index: number;
	        /**
	         * Current row data
	         */
	        row: Object;
	        /**
	         * Link on column configuration
	         */
	        column: TableColumn | null;
	        /**
	         * Raw data of cell
	         */
	        value?: React.ReactNode | string | number | null;
	        /**
	         * Is current cell in modify mode
	         */
	        isModify: boolean;
	        /**
	         * Is current row expanded
	         */
	        isExpand: boolean;
	        /**
	         * If row visible on screen
	         */
	        isVisible: boolean;
	        /**
	         * Set expanded ReactNode below current row
	         */
	        setExpand: (el: React.ReactNode | null) => boolean;
	        /**
	         * Set modify mode for this cell
	         */
	        setModify: (modify: boolean, key?: TableCellKey) => boolean;
	        /**
	         * Reload all data in table
	         */
	        reloadData: () => void;
	    }
	    type RowContext = {
	        row: Object;
	        isExpand: boolean;
	        isVisible: boolean;
	        isCellModify: {
	            [key: string]: boolean;
	        };
	        setModifyState: {
	            [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
	        };
	        setExpandComponent?: React.Dispatch<React.SetStateAction<React.ReactNode>>;
	        setNeedDisplay?: (forceUnmount?: boolean) => boolean;
	    };
	    interface Ref extends TableRef, HTMLTableElement {
	    }
	    interface TableRef {
	        /**
	         * Get context for specific cell
	         */
	        getCellContext: (index: number, key: TableCellKey) => TableCellContext | null;
	        /**
	         * Set expanded ReactNode below row index
	         * @returns true if success
	         */
	        setExpand: (index: number, content: React.ReactNode | null) => boolean;
	        /**
	         * Set modify mode for specific row or cell
	         * @returns true if success
	         */
	        setModify: (modify: boolean, index: number, key?: TableCellKey) => boolean;
	    }
	    interface TableColumn {
	        /**
	         * Unique key of row like id/name or something like that
	         */
	        key: TableCellKey;
	        /**
	         * Title that will be placed at TableHead
	         */
	        title?: string;
	        /**
	         * Specific width of column
	         */
	        width?: number | string;
	        /**
	         * Custom render for a TableCell
	         */
	        render?: (cellContext: TableCellContext, index: number) => void;
	        /**
	         * Enables sorting for a column
	         * support ASC | DESC
	         */
	        sort?: TableSortType;
	    }
	    interface RowEvents {
	        /**
	         * Calls when ever row clicked
	         */
	        onRowClick?: (rowCtxItem: RowContext, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
	        /**
	         * Calls when mouse enters row
	         */
	        onRowMouseEnter?: (rowCtxItem: RowContext, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
	        /**
	         * Calls when mouse leaves row
	         */
	        onRowMouseLeave?: (rowCtxItem: RowContext, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
	    }
	    interface RowDelegates {
	        /**
	         * Delegate tells to TableRow what size it is.
	         * Required when rowMountType not default
	         */
	        rowHeight?: (rowCtxItem: RowContext) => number;
	        /**
	         * Delegate tells TableRow render or not
	         */
	        rowShouldRender?: (rowCtxItem: RowContext) => boolean;
	    }
	    interface Props extends RowEvents, RowDelegates, WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        /**
	         * Array of any data objects can be provided
	         */
	        data: Object[];
	        /**
	         * Settings of columns
	         */
	        columns: TableColumn[];
	        /**
	         * Applies decoration on table
	         */
	        decoration?: LayoutDecoration;
	        /**
	         * Pagination settings
	         */
	        pagination?: TablePaginationOptions;
	        /**
	         * React element will be placed at footer
	         */
	        footer?: React.ReactNode;
	        /**
	         * How Table will render rows.
	         * any type except 'default' requires rowHeight delegate!
	         *
	         * default - Render all rows at once.
	         * whenBecomeVisible - Render row only when it become visible.
	         * onlyWhenVisible - Render row when it become visible and unmount when row away from screen.
	         */
	        rowMountType?: RowMountType;
	    }
	    interface HeadCellProps {
	        column: TableColumn;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	        setSort: React.Dispatch<React.SetStateAction<TableSortObject>>;
	    }
	    interface CellProps {
	        rowCtxItem: RowContext;
	        column: TableColumn;
	        rowIndex: number;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	        getCellContext: TableRef['getCellContext'];
	    }
	    interface RowProps {
	        rowCtxItem: RowContext;
	        columns: TableColumn[];
	        rowIndex: number;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	        getCellContext: TableRef['getCellContext'];
	        events: RowEvents;
	        rowMountType?: Props['rowMountType'];
	        enableRenderOptimization: boolean;
	        delegates: {
	            rowHeight?: Props['rowHeight'];
	            rowShouldRender?: Props['rowShouldRender'];
	        };
	    }
	    interface FootProps {
	        rowCtx: RowContext[];
	        columns: TableColumn[];
	        footerContent?: Props['footer'];
	        pagination?: TablePaginationOptions;
	        onPageChange: (pageNumber: number) => void;
	        styles: WhaleTypes.ComponentStyles<Styles>;
	    }
	    interface Styles {
	        container: void;
	        headCell: {
	            sort: boolean;
	        };
	        row: void;
	        rowCell: void;
	        expandContainer: void;
	        footer: void;
	    }
	}
	export default TableTypes;

}
declare module 'data/Table/styles' {
	import Types from '@flow-ui/core/data/Table/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'data/Table/TableCell' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.CellProps & React.RefAttributes<HTMLTableDataCellElement>>;
	export default _default;

}
declare module 'data/Table/TableRow' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.RowProps & React.RefAttributes<HTMLTableRowElement>>;
	export default _default;

}
declare module 'data/Table/TableHeadCell' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.HeadCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
	export default _default;

}
declare module 'data/Table/TableFoot' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.FootProps & React.RefAttributes<HTMLTableCellElement>>;
	export default _default;

}
declare module 'data/Table' {
	import React from 'react';
	import Types from '@flow-ui/core/data/Table/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.TableRef>>;
	export default _default;

}
declare module 'layout/Badge/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace BadgeTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        content: React.ReactNode;
	        size?: WhaleTypes.Size;
	        shape?: 'square' | 'rounded' | 'round';
	        align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
	        children?: React.ReactNode;
	    }
	    interface Styles {
	        container: void;
	        holder: {
	            align: Props['align'];
	            shape: Props['shape'];
	        };
	    }
	}
	export default BadgeTypes;

}
declare module 'layout/Badge/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Badge/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Badge' {
	import React from 'react';
	import Types from 'layout/Badge/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Block/types' {
	/// <reference types="react" />
	import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration';
	import WhaleTypes from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace BlockTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main';
	        decoration?: LayoutDecoration;
	        children?: React.ReactNode;
	        overflow?: CSS.Properties['overflow'];
	    }
	    interface Styles {
	        container: {
	            decoration?: LayoutDecoration;
	        };
	    }
	}
	export default BlockTypes;

}
declare module 'layout/Block/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Block/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Block' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Block/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Drop/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Drop/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Drop' {
	import React from 'react';
	import Types from 'layout/Drop/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'layout/Flexbox/types' {
	/// <reference types="react" />
	import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration';
	import WhaleTypes from '@flow-ui/whale/types'; namespace FlexboxTypes {
	    interface Props extends WhaleTypes.FlexboxContainerProps, WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        column?: boolean;
	        inline?: boolean;
	        decoration?: LayoutDecoration;
	        children?: React.ReactNode;
	    }
	    interface Styles {
	        container: {
	            decoration?: LayoutDecoration;
	        };
	    }
	}
	export default FlexboxTypes;

}
declare module 'layout/Flexbox/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Flexbox/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Flexbox' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Flexbox/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Grid/types' {
	/// <reference types="react" />
	import { LayoutDecoration } from '@flow-ui/core/misc/utils/applyLayoutDecoration';
	import WhaleTypes from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace GridTypes {
	    interface Props extends WhaleTypes.GridContainerProps, WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        inline?: boolean;
	        children?: React.ReactNode;
	        decoration?: LayoutDecoration;
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        templateColumns?: CSS.Properties['gridTemplateColumns'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        templateRows?: CSS.Properties['gridTemplateRows'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        templateAreas?: CSS.Properties['gridTemplateAreas'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        columnGap?: CSS.Properties['gridColumnGap'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        rowGap?: CSS.Properties['gridRowGap'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        gap?: CSS.Properties['gridGap'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        autoColumns?: CSS.Properties['gridAutoColumns'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        autoRows?: CSS.Properties['gridAutoRows'];
	        /**
	         * @displayType string
	         * @deprecated
	         */
	        autoFlow?: CSS.Properties['gridAutoFlow'];
	    }
	    interface Styles {
	        container: {
	            decoration?: LayoutDecoration;
	        };
	    }
	}
	export default GridTypes;

}
declare module 'layout/Grid/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Grid/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Grid' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from 'layout/Grid/types'; const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module '@flow-ui/core/layout/Modal/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace ModalTypes {
	    type ModalDecoration = 'modal' | 'panel';
	    type ExtentedProps = WhaleTypes.AttributeProps & WhaleTypes.AllEventProps<HTMLDivElement> & WhaleTypes.CoreProps<Styles> & WhaleTypes.ColorProps & WhaleTypes.BorderProps & WhaleTypes.PaddingProps & WhaleTypes.LayoutProps;
	    interface Ref {
	        open: (customContent?: React.ReactElement | null) => void;
	        close: (didClose?: () => void) => void;
	        setTitle: (title: string) => void;
	        setSubtitle: (subtitle: string) => void;
	        setCustomContent: (customContent: React.ReactElement | null) => void;
	        title?: string;
	        subtitle?: string;
	        customContent: React.ReactElement | null;
	        overlay: React.ReactNode;
	        window: React.ReactNode;
	    }
	    interface Props extends ExtentedProps {
	        title?: string;
	        subtitle?: string;
	        children?: React.ReactNode;
	        opened?: boolean;
	        decoration?: ModalDecoration;
	        size?: WhaleTypes.Size;
	        hideHeader?: boolean;
	        overlayClose?: boolean;
	        onClose?: () => void;
	        didClose?: () => void;
	        onOpen?: () => void;
	        didOpen?: () => void;
	    }
	    interface InnerProps extends Props {
	        innerRef: any;
	    }
	    interface ModalOverlayProps {
	        getStyles: () => {
	            cs: WhaleTypes.ComponentStyles<Styles>;
	            state: StyleState;
	        };
	        children?: React.ReactNode;
	    }
	    interface ModalWindowProps {
	        title?: string;
	        subtitle?: string;
	        hideHeader?: boolean;
	        children?: React.ReactNode;
	        containerAttr?: ExtentedProps;
	        containerEvents?: any;
	        onClosePressed: () => void;
	        getStyles: () => {
	            cs: WhaleTypes.ComponentStyles<Styles>;
	            state: StyleState;
	        };
	    }
	    interface ModalHeaderProps {
	        title?: string;
	        subtitle?: string;
	        hideHeader?: boolean;
	        onClosePressed: () => void;
	        getStyles: () => {
	            cs: WhaleTypes.ComponentStyles<Styles>;
	            state: StyleState;
	        };
	    }
	    type StyleState = {
	        visible?: boolean;
	        decoration?: Props['decoration'];
	    };
	    interface Styles {
	        overlay: StyleState;
	        wrapper: StyleState;
	        window: StyleState;
	        header: StyleState;
	        cross: StyleState;
	    }
	}
	export default ModalTypes;

}
declare module 'layout/Modal/ModalOverlay' {
	import React from 'react';
	import ModalTypes from '@flow-ui/core/layout/Modal/types'; const ModalOverlay: React.ForwardRefExoticComponent<ModalTypes.ModalOverlayProps & React.RefAttributes<unknown>>;
	export default ModalOverlay;

}
declare module 'layout/Modal/ModalPortal' {
	 const _default: (props: any) => import("react").ReactPortal;
	export default _default;

}
declare module 'layout/Modal/ModalHeader' {
	/// <reference types="react" />
	import ModalTypes from '@flow-ui/core/layout/Modal/types'; const ModalHeader: (props: ModalTypes.ModalHeaderProps) => JSX.Element | null;
	export default ModalHeader;

}
declare module 'layout/Modal/ModalWindow' {
	import ModalTypes from '@flow-ui/core/layout/Modal/types';
	import React from 'react'; const ModalWindow: React.ForwardRefExoticComponent<ModalTypes.ModalWindowProps & React.RefAttributes<unknown>>;
	export default ModalWindow;

}
declare module 'layout/Modal/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from '@flow-ui/core/layout/Modal/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Modal' {
	import React from 'react';
	import Types from '@flow-ui/core/layout/Modal/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'layout/Notification/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace NotificationTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        children?: React.ReactNode;
	    }
	    interface NotifyOptions {
	        /**
	         * Title of notification
	         */
	        title: string;
	        /**
	         * Message of notification
	         */
	        message: string;
	        /**
	         * Notification will be removed after timeout
	         * value in milisecods
	         */
	        timeout?: number;
	        /**
	         * Will call on notificaion click
	         */
	        onClick?: (e: any) => void;
	        /**
	         * if custom content filled then title and message will be ignored
	         */
	        customContent?: React.ReactElement;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default NotificationTypes;

}
declare module 'layout/Notification/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Notification/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Notification' {
	import React from 'react';
	import Types from 'layout/Notification/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Popover/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace PopoverTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        align?: 'top' | 'bottom' | 'left' | 'right' | 'none';
	        borderColor?: WhaleTypes.ColorProp;
	        backgroundColor?: WhaleTypes.ColorProp;
	        children?: React.ReactNode;
	        arrowWidth?: CSS.Properties['width'];
	        arrowHeight?: CSS.Properties['height'];
	    }
	    interface Styles {
	        container: void;
	        arrow: {
	            align: Props['align'];
	        };
	    }
	}
	export default PopoverTypes;

}
declare module 'layout/Popover/styles' {
	import Types from 'layout/Popover/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Popover' {
	import React from 'react';
	import Types from 'layout/Popover/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/Tree/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace TreeTypes {
	    type RenderChildOptions = {
	        isOpen: boolean;
	        isParentOpen: boolean;
	        hasChilds: boolean;
	        lvl: number;
	    };
	    type RenderChild = (options: RenderChildOptions) => React.ReactNode;
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        label?: React.ReactNode | string | RenderChild;
	        leftChild?: React.ReactNode | string | RenderChild;
	        rightChild?: React.ReactNode | string | RenderChild;
	        children?: React.ReactNode;
	        decoration?: 'none' | 'finder';
	        size?: WhaleTypes.Size;
	        open?: boolean;
	        defaultOpen?: boolean;
	        indent?: boolean;
	    }
	    interface PrivateProps extends Props {
	        lvl: number;
	        isParentOpen: boolean;
	    }
	    interface TreeLabelProps {
	        children?: Props['label'];
	        className?: Props['className'];
	        size: Props['size'];
	        options: RenderChildOptions;
	    }
	    interface TreeLeftChildProps {
	        children?: Props['leftChild'];
	        className?: Props['className'];
	        size: Props['size'];
	        options: RenderChildOptions;
	    }
	    interface TreeRightChildProps {
	        children?: Props['leftChild'];
	        className?: Props['className'];
	        size: Props['size'];
	        options: RenderChildOptions;
	    }
	    interface ExtentedReactElement extends Omit<React.ReactElement, 'type'> {
	        type: {
	            render: {
	                name: string;
	            };
	        };
	    }
	    interface StyleState {
	        hasChilds: boolean;
	        decoration: Props['decoration'];
	        size: Props['size'];
	    }
	    interface Styles {
	        container: StyleState;
	        row: StyleState;
	        label: StyleState;
	        arrow: StyleState;
	        child: {
	            isOpen: boolean;
	        };
	    }
	}
	export default TreeTypes;

}
declare module 'layout/Tree/styles' {
	import Types from 'layout/Tree/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.PrivateProps>;
	export default styles;

}
declare module 'layout/Tree/TreeLabel' {
	/// <reference types="react" />
	import Types from 'layout/Tree/types'; const TreeLabel: (props: Types.TreeLabelProps) => JSX.Element;
	export default TreeLabel;

}
declare module 'layout/Tree/TreeLeftChild' {
	/// <reference types="react" />
	import Types from 'layout/Tree/types'; const TreeLeftChild: (props: Types.TreeLeftChildProps) => JSX.Element;
	export default TreeLeftChild;

}
declare module 'layout/Tree/TreeRightChild' {
	/// <reference types="react" />
	import Types from 'layout/Tree/types'; const TreeRightChild: (props: Types.TreeRightChildProps) => JSX.Element;
	export default TreeRightChild;

}
declare module 'layout/Tree' {
	import React from 'react';
	import Types from 'layout/Tree/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'layout/ScrollView/types' {
	import React from 'react';
	import WhaleTypes from '@flow-ui/whale/types'; namespace ScrollViewTypes {
	    interface ScrollViewEvent {
	        scrollTop: number;
	        scrollLeft: number;
	        scrollWidth: number;
	        scrollHeight: number;
	    }
	    interface ScrollParams {
	        deltaX: number;
	        deltaY: number;
	        preventDefault: () => void;
	        stopPropagation: () => void;
	        cursorHandle?: boolean;
	    }
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onScroll'> {
	        children?: React.ReactNode;
	        /**
	         * Display mode
	         * @default scroll
	         */
	        mode?: 'always' | 'scroll' | 'hidden';
	        /**
	         * Custom ScrollBar color
	         */
	        color?: WhaleTypes.ColorProp;
	        /**
	         * Bars size
	         * @default m
	         */
	        size?: WhaleTypes.Size;
	        /**
	         * Bars shape
	         * @default round
	         */
	        shape?: 'square' | 'round';
	        /**
	         * Position of X bar
	         * @default bottom
	         */
	        xBarPosition?: 'top' | 'bottom';
	        /**
	         * Position of Y bar
	         * @default right
	         */
	        yBarPosition?: 'left' | 'right';
	        /**
	         * If false
	         * onflowscroll will not dispatch
	         */
	        sendFlowScollEvent?: boolean;
	        onScroll?: (event: ScrollViewEvent) => void;
	    }
	    interface Ref {
	        updateScroll: () => void;
	        scrollTop: () => void;
	    }
	    interface Styles {
	        container: void;
	        content: void;
	        legacy: void;
	        yBar: {
	            active: boolean;
	            shape: Props['shape'];
	            size: Props['size'];
	            position: Props['yBarPosition'];
	        };
	        yThumb: {
	            active: boolean;
	            shape: Props['shape'];
	            size: Props['size'];
	        };
	        xBar: {
	            active: boolean;
	            shape: Props['shape'];
	            size: Props['size'];
	            position: Props['xBarPosition'];
	        };
	        xThumb: {
	            active: boolean;
	            shape: Props['shape'];
	            size: Props['size'];
	        };
	    }
	}
	export default ScrollViewTypes;

}
declare module 'layout/ScrollView/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/ScrollView/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'misc/utils/isWebKit' {
	 const isWebKit: boolean;
	export default isWebKit;

}
declare module 'layout/ScrollView' {
	import React from 'react';
	import Types from 'layout/ScrollView/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
	export default _default;

}
declare module 'types' {
	/**
	 * Content
	 */
	import DividerTypes from 'content/Divider/types';
	import SpinnerTypes from 'content/Spinner/types';
	/**
	 * Control
	 */
	import ButtonTypes from 'control/Button/types';
	import Calendar from 'control/Calendar/types';
	import CheckboxTypes from 'control/Checkbox/types';
	import DatePickerTypes from 'control/DatePicker/types';
	import MenuTypes from 'control/Menu/types';
	import RadioTypes from 'control/Radio/types';
	import RangeTypes from 'control/Range/types';
	import SelectTypes from 'control/Select/types';
	import SwitchTypes from 'control/Switch/types';
	import TextFieldTypes from 'control/TextField/types';
	/**
	 * Data
	 */
	import MeterTypes from 'data/Meter/types';
	import TableTypes from '@flow-ui/core/data/Table/types';
	/**
	 * Layout
	 */
	import BadgeTypes from 'layout/Badge/types';
	import BlockTypes from 'layout/Block/types';
	import DropTypes from 'layout/Drop/types';
	import FlexboxTypes from 'layout/Flexbox/types';
	import GridTypes from 'layout/Grid/types';
	import ModalTypes from '@flow-ui/core/layout/Modal/types';
	import NotificationTypes from 'layout/Notification/types';
	import PopoverTypes from 'layout/Popover/types';
	import TreeTypes from 'layout/Tree/types';
	import ScrollView from 'layout/ScrollView/types'; namespace FlowTypes {
	    type LayoutDecoration = 'surface' | 'minorShadow' | 'mediumShadow' | 'majorShadow' | 'neumorphism';
	    interface Styles {
	        Divider?: DividerTypes.Styles;
	        Spinner?: SpinnerTypes.Styles;
	        Button?: ButtonTypes.Styles;
	        Calendar?: Calendar.Styles;
	        Checkbox?: CheckboxTypes.Styles;
	        DatePicker?: DatePickerTypes.Styles;
	        Menu?: MenuTypes.Styles;
	        Radio?: RadioTypes.Styles;
	        Range?: RangeTypes.Styles;
	        Select?: SelectTypes.Styles;
	        Switch?: SwitchTypes.Styles;
	        TextField?: TextFieldTypes.Styles;
	        Meter?: MeterTypes.Styles;
	        Table?: TableTypes.Styles;
	        Badge?: BadgeTypes.Styles;
	        Block?: BlockTypes.Styles;
	        Drop?: DropTypes.Styles;
	        Flexbox?: FlexboxTypes.Styles;
	        Grid?: GridTypes.Styles;
	        Modal?: ModalTypes.Styles;
	        Notification?: NotificationTypes.Styles;
	        Popover?: PopoverTypes.Styles;
	        Tree?: TreeTypes.Styles;
	        ScrollView?: ScrollView.Styles;
	    }
	}
	export default FlowTypes;

}
declare module 'misc/themes/light' {
	import WhaleTypes from '@flow-ui/whale/types'; const _default: WhaleTypes.Theme;
	export default _default;

}
declare module 'misc/themes/dark' {
	 const dark: import("@flow-ui/whale/types").default.Theme;
	export default dark;

}
declare module 'misc/themes' {
	import FlowTypes from 'types'; global {
	    namespace Whale {
	        interface Styles extends FlowTypes.Styles {
	        }
	    }
	}
	export { default as light } from 'misc/themes/light';
	export { default as dark } from 'misc/themes/dark';

}
declare module 'layout/Viewport/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import { Options } from '@emotion/cache';
	import { SerializedStyles } from '@emotion/core';
	import ModalTypes from '@flow-ui/core/layout/Modal/types'; namespace ViewportTypes {
	    interface Themes {
	        light: WhaleTypes.Theme;
	        dark: WhaleTypes.Theme;
	    }
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        wrapper?: boolean;
	        cache?: Options;
	        theme?: 'dark' | 'light' | WhaleTypes.Theme;
	        global?: SerializedStyles;
	        children?: React.ReactNode;
	    }
	    interface MountArea {
	        className?: string;
	    }
	    interface MountAreaElement {
	        key: string;
	        children: React.ReactElement;
	    }
	    interface Context {
	        theme: WhaleTypes.Theme;
	    }
	    interface DialogOptions {
	        /**
	         * Title of modal window header
	         */
	        title?: ModalTypes.Props['title'];
	        /**
	         * Subtitle of modal window header
	         */
	        subtitle?: ModalTypes.Props['subtitle'];
	        /**
	         * Dialog size
	         */
	        size?: ModalTypes.Props['size'];
	        /**
	         * Overrides
	         */
	        styles?: ModalTypes.Props['styles'];
	        /**
	         * Dialog decoration
	         */
	        decoration?: ModalTypes.Props['decoration'];
	        /**
	         * Message of dialog
	         */
	        message?: string;
	        /**
	         * Button text
	         */
	        buttonText?: string;
	        /**
	         * Hides modal window header
	         */
	        hideHeader?: boolean;
	        /**
	         * if custom content filled then message and buttonText will be ignored
	         */
	        customContent?: (close: () => void) => React.ReactElement;
	    }
	    interface Styles {
	        container: void;
	    }
	}
	export default ViewportTypes;

}
declare module 'layout/Viewport/MountArea' {
	import React, { FC } from 'react';
	import ViewportTypes from 'layout/Viewport/types';
	export let addElement: (children: React.ReactElement, key?: string) => string;
	export let removeElement: (key: string) => void; const MountArea: FC<ViewportTypes.MountArea>;
	export default MountArea;

}
declare module 'layout/Viewport/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Viewport/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'layout/Viewport' {
	import React from 'react';
	import Types from 'layout/Viewport/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'misc/utils/dialog' {
	import ViewportTypes from '@flow-ui/core/layout/Viewport/types'; const _default: (options: ViewportTypes.DialogOptions) => void;
	export default _default;

}
declare module 'misc/utils/notify' {
	import NotificationType from '@flow-ui/core/layout/Notification/types'; const _default: (options: NotificationType.NotifyOptions) => void;
	export default _default;

}
declare module '@flow-ui/core' {
	/**
	 * Content
	 */
	export { default as Divider } from 'content/Divider';
	export { default as Spinner } from 'content/Spinner';
	export { default as Header } from 'content/Header';
	export { default as Display } from 'content/Display';
	export { default as Paragraph } from 'content/Paragraph';
	export { default as Text } from 'content/Text';
	export { default as Link } from 'content/Link';
	/**
	 * Control
	 */
	export { default as Button } from 'control/Button';
	export { default as Calendar } from 'control/Calendar';
	export { default as Checkbox } from 'control/Checkbox';
	export { default as DatePicker } from 'control/DatePicker';
	export { default as Menu } from 'control/Menu';
	export { default as Radio } from 'control/Radio';
	export { default as Range } from 'control/Range';
	export { default as Pageswitch } from 'control/Pageswitch';
	export { default as Select } from 'control/Select';
	export { default as Switch } from 'control/Switch';
	export { default as TextField } from 'control/TextField';
	/**
	 * Data
	 */
	export { default as Meter } from 'data/Meter';
	export { default as Table } from 'data/Table';
	/**
	 * Layout
	 */
	export { default as Badge } from 'layout/Badge';
	export { default as Block } from 'layout/Block';
	export { default as Drop } from 'layout/Drop';
	export { default as Flexbox } from 'layout/Flexbox';
	export { default as Grid } from 'layout/Grid';
	export { default as Modal } from 'layout/Modal';
	export { default as Notification } from 'layout/Notification';
	export { default as Popover } from 'layout/Popover';
	export { default as Tree } from 'layout/Tree';
	export { default as ScrollView } from 'layout/ScrollView';
	export { default as Viewport } from 'layout/Viewport';
	/**
	 * Utils
	 */
	export { default as dialog } from 'misc/utils/dialog';
	export { default as notify } from 'misc/utils/notify';
	/**
	 * Misc
	 */
	export { useTheme } from '@flow-ui/whale';
	export { createTheme } from '@flow-ui/whale';

}
declare module 'misc/utils/validate' {
	export interface ValidateObject {
	    error?: string;
	    regex: RegExp;
	    isMatch?: boolean;
	}

}
