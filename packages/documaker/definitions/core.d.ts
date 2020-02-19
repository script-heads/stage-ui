declare module 'content/Divider/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace DividerTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        vertical?: boolean;
	        dash?: number;
	        gap?: number;
	        color?: WhaleTypes.ColorProp;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default DividerTypes;

}
declare module 'content/Divider/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'content/Divider/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        color?: WhaleTypes.ColorProp;
	        children?: React.ReactElement;
	        shape?: 'square' | 'rounded' | 'round';
	        duration?: number;
	        count?: number;
	        size?: string;
	    }
	    interface Overrides {
	        container: void;
	        children: void;
	    }
	}
	export default SpinnerTypes;

}
declare module 'content/Spinner/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'content/Spinner/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        ellipsis?: boolean;
	        decoration?: CSS.Properties['textDecoration'];
	        children?: React.ReactNode;
	        color?: WhaleTypes.ColorProp;
	        backgroundColor?: WhaleTypes.ColorProp;
	        align?: CSS.Properties['textAlign'];
	        weight?: CSS.Properties['fontWeight'];
	        size?: WhaleTypes.Size | string;
	        lineHeight?: CSS.Properties['lineHeight'];
	        transform?: CSS.Properties['textTransform'];
	    }
	    interface Overrides<T extends {
	        [T in keyof Overrides]?: Object;
	    } = {}> {
	        container: T['container'];
	    }
	    interface PrivateProps extends LinkProps {
	        tag: string;
	        sizesOf: keyof WhaleTypes.Theme['typography'];
	        specificStyles?: any;
	    }
	}
	export default TypographyTypes;

}
declare module 'misc/hocs/Typography/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Typography/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.PrivateProps>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLButtonElement, Overrides> {
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
	    }
	    interface Overrides {
	        container: {
	            decoration: Props['decoration'];
	            shape: Props['shape'];
	            size: Props['size'];
	        };
	    }
	}
	export default ButtonTypes;

}
declare module 'control/Button/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Button/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
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
	        styles: WhaleTypes.ComponentStyles<Overrides>;
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
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface DateGridTitleProps {
	        value: Moment;
	        minValue: Moment;
	        maxValue: Moment;
	        gridType: GridType;
	        onNext: () => void;
	        onPrevious: () => void;
	        onGridTypeChange: (type: GridType) => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        svg: React.ReactElement;
	        shape?: IconShapes;
	        size?: WhaleTypes.Size | string;
	        color?: WhaleTypes.ColorProp;
	        background?: WhaleTypes.ColorProp;
	        rotate?: number;
	    }
	    interface IconProps extends Omit<Props, 'svg'> {
	        type?: IconType;
	    }
	    interface Overrides {
	        container: {
	            shape?: IconShapes;
	            size: WhaleTypes.Size | string;
	        };
	        icon: void;
	    }
	}
	export default IconTypes;

}
declare module 'misc/hocs/Icon/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'misc/hocs/Icon/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'misc/hocs/Icon' {
	import React from 'react';
	import Types from 'misc/hocs/Icon/types'; type Icons = {
	    filled: React.ReactElement;
	    outline: React.ReactElement;
	};
	export const createIcon: (props: Types.IconProps | undefined, ref: React.Ref<HTMLSpanElement>, icons: Icons) => JSX.Element;
	export type Props = Types.IconProps;
	export {};

}
declare module 'icons/svg/activity' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/alertCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/alertTriangle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/archive' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowBack' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowCircleDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowCircleLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowCircleRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowCircleUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowDownward' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowForward' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowIosBack' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowIosDownward' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowIosForward' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowIosUpward' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowUpward' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowheadDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowheadLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowheadRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowheadUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/at' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/attach2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/attach' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/award' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/backspace' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/barChart2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/barChart' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/battery' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/behance' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bellOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bell' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bluetooth' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bookOpen' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/book' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bookmark' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/briefcase' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/browser' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/brush' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bulb' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/calendar' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/camera' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/car' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cast' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/charging' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmarkCircle2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmarkCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmarkSquare2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmarkSquare' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmark' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevronDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevronLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevronRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevronUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/clipboard' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/clock' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/closeCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/closeSquare' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/close' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cloudDownload' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cloudUpload' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/codeDownload' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/code' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/collapse' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/colorPalette' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/colorPicker' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/compass' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/copy' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerDownLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerDownRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerLeftDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerLeftUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerRightDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerRightUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerUpLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cornerUpRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/creditCard' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/crop' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cube' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonalArrowLeftDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonalArrowLeftUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonalArrowRightDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonalArrowRightUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/doneAll' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/download' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/dropletOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/droplet' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/edit2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/edit' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/email' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/expand' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/externalLink' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/eyeOff2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/eyeOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/eye' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/facebook' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/fileAdd' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/fileRemove' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/fileText' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/file' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/film' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flag' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flashOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flash' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flip2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flip' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/folderAdd' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/folderRemove' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/folder' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/funnel' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/gift' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/github' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/globe2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/globe3' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/globe' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/google' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/grid' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/hardDrive' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/hash' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/headphones' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/heart' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/home' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/image2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/image' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/inbox' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/info' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/keypad' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/layers' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/layout' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/link2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/link' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/linkedin' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/list' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/lock' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/logIn' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/logOut' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/map' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/maximize' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/menu2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/menuArrow' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/menu' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/messageCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/messageSquare' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/micOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/mic' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minimize' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minusCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minusSquare' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minus' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/monitor' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/moon' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/moreHorizontal' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/moreVertical' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/move' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/music' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/navigation2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/navigation' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/npm' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/options2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/options' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pantone' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/paperPlane' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pauseCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/people' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/percent' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/personAdd' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/personDelete' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/personDone' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/personRemove' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/person' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phoneCall' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phoneMissed' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phoneOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phone' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pieChart2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pieChart' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pin' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/playCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/plusCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/plusSquare' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/plus' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/power' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pricetags' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/printer' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/questionMarkCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/questionMark' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/radioButtonOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/radioButtonOn' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/radio' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/recording' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/refresh' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/repeat' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/rewindLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/rewindRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/save' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/scissors' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/search' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/settings2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/settings' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shake' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/share' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shieldOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shield' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shoppingBag' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shoppingCart' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shuffle2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shuffle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/skipBack' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/skipForward' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/slash' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/smartphone' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/speaker' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/square' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/star' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/stopCircle' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/sun' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/swap' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/sync' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/text' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/thermometerMinus' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/thermometerPlus' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/thermometer' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/toggleLeft' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/toggleRight' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trash2' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trash' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trendingDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trendingUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/tv' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/twitter' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/umbrella' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/undo' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/unlock' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/upload' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/videoOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/video' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volumeDown' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volumeMute' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volumeOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volumeUp' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/wifiOff' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/wifi' {
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module '@flow-ui/core/icons' {
	export { default as Activity } from 'icons/svg/activity';
	export { default as AlertCircle } from 'icons/svg/alertCircle';
	export { default as AlertTriangle } from 'icons/svg/alertTriangle';
	export { default as Archive } from 'icons/svg/archive';
	export { default as ArrowBack } from 'icons/svg/arrowBack';
	export { default as ArrowCircleDown } from 'icons/svg/arrowCircleDown';
	export { default as ArrowCircleLeft } from 'icons/svg/arrowCircleLeft';
	export { default as ArrowCircleRight } from 'icons/svg/arrowCircleRight';
	export { default as ArrowCircleUp } from 'icons/svg/arrowCircleUp';
	export { default as ArrowDown } from 'icons/svg/arrowDown';
	export { default as ArrowDownward } from 'icons/svg/arrowDownward';
	export { default as ArrowForward } from 'icons/svg/arrowForward';
	export { default as ArrowIosBack } from 'icons/svg/arrowIosBack';
	export { default as ArrowIosDownward } from 'icons/svg/arrowIosDownward';
	export { default as ArrowIosForward } from 'icons/svg/arrowIosForward';
	export { default as ArrowIosUpward } from 'icons/svg/arrowIosUpward';
	export { default as ArrowLeft } from 'icons/svg/arrowLeft';
	export { default as ArrowRight } from 'icons/svg/arrowRight';
	export { default as ArrowUp } from 'icons/svg/arrowUp';
	export { default as ArrowUpward } from 'icons/svg/arrowUpward';
	export { default as ArrowheadDown } from 'icons/svg/arrowheadDown';
	export { default as ArrowheadLeft } from 'icons/svg/arrowheadLeft';
	export { default as ArrowheadRight } from 'icons/svg/arrowheadRight';
	export { default as ArrowheadUp } from 'icons/svg/arrowheadUp';
	export { default as At } from 'icons/svg/at';
	export { default as Attach2 } from 'icons/svg/attach2';
	export { default as Attach } from 'icons/svg/attach';
	export { default as Award } from 'icons/svg/award';
	export { default as Backspace } from 'icons/svg/backspace';
	export { default as BarChart2 } from 'icons/svg/barChart2';
	export { default as BarChart } from 'icons/svg/barChart';
	export { default as Battery } from 'icons/svg/battery';
	export { default as Behance } from 'icons/svg/behance';
	export { default as BellOff } from 'icons/svg/bellOff';
	export { default as Bell } from 'icons/svg/bell';
	export { default as Bluetooth } from 'icons/svg/bluetooth';
	export { default as BookOpen } from 'icons/svg/bookOpen';
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
	export { default as CheckmarkCircle2 } from 'icons/svg/checkmarkCircle2';
	export { default as CheckmarkCircle } from 'icons/svg/checkmarkCircle';
	export { default as CheckmarkSquare2 } from 'icons/svg/checkmarkSquare2';
	export { default as CheckmarkSquare } from 'icons/svg/checkmarkSquare';
	export { default as Checkmark } from 'icons/svg/checkmark';
	export { default as ChevronDown } from 'icons/svg/chevronDown';
	export { default as ChevronLeft } from 'icons/svg/chevronLeft';
	export { default as ChevronRight } from 'icons/svg/chevronRight';
	export { default as ChevronUp } from 'icons/svg/chevronUp';
	export { default as Clipboard } from 'icons/svg/clipboard';
	export { default as Clock } from 'icons/svg/clock';
	export { default as CloseCircle } from 'icons/svg/closeCircle';
	export { default as CloseSquare } from 'icons/svg/closeSquare';
	export { default as Close } from 'icons/svg/close';
	export { default as CloudDownload } from 'icons/svg/cloudDownload';
	export { default as CloudUpload } from 'icons/svg/cloudUpload';
	export { default as CodeDownload } from 'icons/svg/codeDownload';
	export { default as Code } from 'icons/svg/code';
	export { default as Collapse } from 'icons/svg/collapse';
	export { default as ColorPalette } from 'icons/svg/colorPalette';
	export { default as ColorPicker } from 'icons/svg/colorPicker';
	export { default as Compass } from 'icons/svg/compass';
	export { default as Copy } from 'icons/svg/copy';
	export { default as CornerDownLeft } from 'icons/svg/cornerDownLeft';
	export { default as CornerDownRight } from 'icons/svg/cornerDownRight';
	export { default as CornerLeftDown } from 'icons/svg/cornerLeftDown';
	export { default as CornerLeftUp } from 'icons/svg/cornerLeftUp';
	export { default as CornerRightDown } from 'icons/svg/cornerRightDown';
	export { default as CornerRightUp } from 'icons/svg/cornerRightUp';
	export { default as CornerUpLeft } from 'icons/svg/cornerUpLeft';
	export { default as CornerUpRight } from 'icons/svg/cornerUpRight';
	export { default as CreditCard } from 'icons/svg/creditCard';
	export { default as Crop } from 'icons/svg/crop';
	export { default as Cube } from 'icons/svg/cube';
	export { default as DiagonalArrowLeftDown } from 'icons/svg/diagonalArrowLeftDown';
	export { default as DiagonalArrowLeftUp } from 'icons/svg/diagonalArrowLeftUp';
	export { default as DiagonalArrowRightDown } from 'icons/svg/diagonalArrowRightDown';
	export { default as DiagonalArrowRightUp } from 'icons/svg/diagonalArrowRightUp';
	export { default as DoneAll } from 'icons/svg/doneAll';
	export { default as Download } from 'icons/svg/download';
	export { default as DropletOff } from 'icons/svg/dropletOff';
	export { default as Droplet } from 'icons/svg/droplet';
	export { default as Edit2 } from 'icons/svg/edit2';
	export { default as Edit } from 'icons/svg/edit';
	export { default as Email } from 'icons/svg/email';
	export { default as Expand } from 'icons/svg/expand';
	export { default as ExternalLink } from 'icons/svg/externalLink';
	export { default as EyeOff2 } from 'icons/svg/eyeOff2';
	export { default as EyeOff } from 'icons/svg/eyeOff';
	export { default as Eye } from 'icons/svg/eye';
	export { default as Facebook } from 'icons/svg/facebook';
	export { default as FileAdd } from 'icons/svg/fileAdd';
	export { default as FileRemove } from 'icons/svg/fileRemove';
	export { default as FileText } from 'icons/svg/fileText';
	export { default as File } from 'icons/svg/file';
	export { default as Film } from 'icons/svg/film';
	export { default as Flag } from 'icons/svg/flag';
	export { default as FlashOff } from 'icons/svg/flashOff';
	export { default as Flash } from 'icons/svg/flash';
	export { default as Flip2 } from 'icons/svg/flip2';
	export { default as Flip } from 'icons/svg/flip';
	export { default as FolderAdd } from 'icons/svg/folderAdd';
	export { default as FolderRemove } from 'icons/svg/folderRemove';
	export { default as Folder } from 'icons/svg/folder';
	export { default as Funnel } from 'icons/svg/funnel';
	export { default as Gift } from 'icons/svg/gift';
	export { default as Github } from 'icons/svg/github';
	export { default as Globe2 } from 'icons/svg/globe2';
	export { default as Globe3 } from 'icons/svg/globe3';
	export { default as Globe } from 'icons/svg/globe';
	export { default as Google } from 'icons/svg/google';
	export { default as Grid } from 'icons/svg/grid';
	export { default as HardDrive } from 'icons/svg/hardDrive';
	export { default as Hash } from 'icons/svg/hash';
	export { default as Headphones } from 'icons/svg/headphones';
	export { default as Heart } from 'icons/svg/heart';
	export { default as Home } from 'icons/svg/home';
	export { default as Image2 } from 'icons/svg/image2';
	export { default as Image } from 'icons/svg/image';
	export { default as Inbox } from 'icons/svg/inbox';
	export { default as Info } from 'icons/svg/info';
	export { default as Keypad } from 'icons/svg/keypad';
	export { default as Layers } from 'icons/svg/layers';
	export { default as Layout } from 'icons/svg/layout';
	export { default as Link2 } from 'icons/svg/link2';
	export { default as Link } from 'icons/svg/link';
	export { default as Linkedin } from 'icons/svg/linkedin';
	export { default as List } from 'icons/svg/list';
	export { default as Lock } from 'icons/svg/lock';
	export { default as LogIn } from 'icons/svg/logIn';
	export { default as LogOut } from 'icons/svg/logOut';
	export { default as Map } from 'icons/svg/map';
	export { default as Maximize } from 'icons/svg/maximize';
	export { default as Menu2 } from 'icons/svg/menu2';
	export { default as MenuArrow } from 'icons/svg/menuArrow';
	export { default as Menu } from 'icons/svg/menu';
	export { default as MessageCircle } from 'icons/svg/messageCircle';
	export { default as MessageSquare } from 'icons/svg/messageSquare';
	export { default as MicOff } from 'icons/svg/micOff';
	export { default as Mic } from 'icons/svg/mic';
	export { default as Minimize } from 'icons/svg/minimize';
	export { default as MinusCircle } from 'icons/svg/minusCircle';
	export { default as MinusSquare } from 'icons/svg/minusSquare';
	export { default as Minus } from 'icons/svg/minus';
	export { default as Monitor } from 'icons/svg/monitor';
	export { default as Moon } from 'icons/svg/moon';
	export { default as MoreHorizontal } from 'icons/svg/moreHorizontal';
	export { default as MoreVertical } from 'icons/svg/moreVertical';
	export { default as Move } from 'icons/svg/move';
	export { default as Music } from 'icons/svg/music';
	export { default as Navigation2 } from 'icons/svg/navigation2';
	export { default as Navigation } from 'icons/svg/navigation';
	export { default as Npm } from 'icons/svg/npm';
	export { default as Options2 } from 'icons/svg/options2';
	export { default as Options } from 'icons/svg/options';
	export { default as Pantone } from 'icons/svg/pantone';
	export { default as PaperPlane } from 'icons/svg/paperPlane';
	export { default as PauseCircle } from 'icons/svg/pauseCircle';
	export { default as People } from 'icons/svg/people';
	export { default as Percent } from 'icons/svg/percent';
	export { default as PersonAdd } from 'icons/svg/personAdd';
	export { default as PersonDelete } from 'icons/svg/personDelete';
	export { default as PersonDone } from 'icons/svg/personDone';
	export { default as PersonRemove } from 'icons/svg/personRemove';
	export { default as Person } from 'icons/svg/person';
	export { default as PhoneCall } from 'icons/svg/phoneCall';
	export { default as PhoneMissed } from 'icons/svg/phoneMissed';
	export { default as PhoneOff } from 'icons/svg/phoneOff';
	export { default as Phone } from 'icons/svg/phone';
	export { default as PieChart2 } from 'icons/svg/pieChart2';
	export { default as PieChart } from 'icons/svg/pieChart';
	export { default as Pin } from 'icons/svg/pin';
	export { default as PlayCircle } from 'icons/svg/playCircle';
	export { default as PlusCircle } from 'icons/svg/plusCircle';
	export { default as PlusSquare } from 'icons/svg/plusSquare';
	export { default as Plus } from 'icons/svg/plus';
	export { default as Power } from 'icons/svg/power';
	export { default as Pricetags } from 'icons/svg/pricetags';
	export { default as Printer } from 'icons/svg/printer';
	export { default as QuestionMarkCircle } from 'icons/svg/questionMarkCircle';
	export { default as QuestionMark } from 'icons/svg/questionMark';
	export { default as RadioButtonOff } from 'icons/svg/radioButtonOff';
	export { default as RadioButtonOn } from 'icons/svg/radioButtonOn';
	export { default as Radio } from 'icons/svg/radio';
	export { default as Recording } from 'icons/svg/recording';
	export { default as Refresh } from 'icons/svg/refresh';
	export { default as Repeat } from 'icons/svg/repeat';
	export { default as RewindLeft } from 'icons/svg/rewindLeft';
	export { default as RewindRight } from 'icons/svg/rewindRight';
	export { default as Save } from 'icons/svg/save';
	export { default as Scissors } from 'icons/svg/scissors';
	export { default as Search } from 'icons/svg/search';
	export { default as Settings2 } from 'icons/svg/settings2';
	export { default as Settings } from 'icons/svg/settings';
	export { default as Shake } from 'icons/svg/shake';
	export { default as Share } from 'icons/svg/share';
	export { default as ShieldOff } from 'icons/svg/shieldOff';
	export { default as Shield } from 'icons/svg/shield';
	export { default as ShoppingBag } from 'icons/svg/shoppingBag';
	export { default as ShoppingCart } from 'icons/svg/shoppingCart';
	export { default as Shuffle2 } from 'icons/svg/shuffle2';
	export { default as Shuffle } from 'icons/svg/shuffle';
	export { default as SkipBack } from 'icons/svg/skipBack';
	export { default as SkipForward } from 'icons/svg/skipForward';
	export { default as Slash } from 'icons/svg/slash';
	export { default as Smartphone } from 'icons/svg/smartphone';
	export { default as Speaker } from 'icons/svg/speaker';
	export { default as Square } from 'icons/svg/square';
	export { default as Star } from 'icons/svg/star';
	export { default as StopCircle } from 'icons/svg/stopCircle';
	export { default as Sun } from 'icons/svg/sun';
	export { default as Swap } from 'icons/svg/swap';
	export { default as Sync } from 'icons/svg/sync';
	export { default as Text } from 'icons/svg/text';
	export { default as ThermometerMinus } from 'icons/svg/thermometerMinus';
	export { default as ThermometerPlus } from 'icons/svg/thermometerPlus';
	export { default as Thermometer } from 'icons/svg/thermometer';
	export { default as ToggleLeft } from 'icons/svg/toggleLeft';
	export { default as ToggleRight } from 'icons/svg/toggleRight';
	export { default as Trash2 } from 'icons/svg/trash2';
	export { default as Trash } from 'icons/svg/trash';
	export { default as TrendingDown } from 'icons/svg/trendingDown';
	export { default as TrendingUp } from 'icons/svg/trendingUp';
	export { default as Tv } from 'icons/svg/tv';
	export { default as Twitter } from 'icons/svg/twitter';
	export { default as Umbrella } from 'icons/svg/umbrella';
	export { default as Undo } from 'icons/svg/undo';
	export { default as Unlock } from 'icons/svg/unlock';
	export { default as Upload } from 'icons/svg/upload';
	export { default as VideoOff } from 'icons/svg/videoOff';
	export { default as Video } from 'icons/svg/video';
	export { default as VolumeDown } from 'icons/svg/volumeDown';
	export { default as VolumeMute } from 'icons/svg/volumeMute';
	export { default as VolumeOff } from 'icons/svg/volumeOff';
	export { default as VolumeUp } from 'icons/svg/volumeUp';
	export { default as wifiOff } from 'icons/svg/wifiOff';
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
	import Types from 'control/Calendar/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLInputElement, Overrides> {
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
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
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
	    interface Overrides extends CheckTypes.Overrides {
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
	import Types from 'misc/hocs/Check/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Checkbox/styles' {
	import Types from 'control/Checkbox/types';
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLInputElement, Overrides>, 'onChange'> {
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
	    interface Overrides<T extends {
	        [T in keyof Overrides]?: Object;
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
	        styles: WhaleTypes.ComponentStyles<Overrides>;
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
	}; const fieldStyles: <T extends Types.Overrides<{}>>(props: Pick<Types.Props, "alignSelf" | "backgroundColor" | "color" | "display" | "flexBasis" | "flexGrow" | "flexShrink" | "gridColumnEnd" | "gridColumnStart" | "gridRowEnd" | "gridRowStart" | "justifySelf" | "visibility" | "borderColor" | "borderRadius" | "borderStyle" | "borderWidth" | "flex" | "gridArea" | "gridColumn" | "gridRow" | "placeSelf" | "size" | "style" | "disabled" | "label" | "p" | "styles" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "className" | "id" | "tabIndex" | "role" | "draggable" | "attrs" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onWheel" | "onWheelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onEnter" | "onEsc" | "onSelect" | "onSelectCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onScroll" | "onScrollCapture" | "animated" | "textColor" | "px" | "py" | "pr" | "pl" | "pt" | "pb" | "w" | "h" | "m" | "mx" | "my" | "mr" | "ml" | "mt" | "mb" | "shape" | "decoration" | "labelType" | "hint" | "rightChild" | "leftChild" | "clearable" | "onClear">, theme: WhaleTypes.Theme, stylePatch?: Partial<ExtractFunction<WhaleTypes.Styles<T>>> | undefined) => WhaleTypes.Styles<Types.Overrides<{}>>;
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
	    interface Overrides extends FieldTypes.Overrides {
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
	import Types from 'control/DatePicker/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        defaultValue?: MenuValue;
	        value?: MenuValue;
	        data?: React.ReactNode[];
	        onChange?: (value?: MenuValue) => void;
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
	    interface Overrides {
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
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        title?: React.ReactNode;
	        disabled?: boolean;
	        value?: MenuTypes.MenuValue;
	        children?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        rightChild?: React.ReactNode;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default MenuItemTypes;

}
declare module 'control/Menu/MenuItem/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/MenuItem/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Menu/MenuItem' {
	import React from 'react';
	import Types from 'control/Menu/MenuItem/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Menu/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Menu/Submenu/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace SubmenuTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        title?: React.ReactNode;
	        disabled?: boolean;
	        indent?: string;
	        open?: boolean;
	        defaultOpen?: boolean;
	        children?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        rightChild?: React.ReactNode;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default SubmenuTypes;

}
declare module 'control/Menu/Submenu/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/Submenu/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        title: React.ReactNode;
	        children?: React.ReactNode;
	        leftChild?: React.ReactNode;
	        rightChild?: React.ReactNode;
	    }
	    interface Overrides {
	        container: void;
	    }
	}
	export default MenuGroupTypes;

}
declare module 'control/Menu/MenuGroup/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'control/Menu/MenuGroup/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Overrides extends CheckTypes.Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Radio' {
	import React from 'react';
	import Types from 'control/Radio/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Range/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace RangeTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        min?: number;
	        max?: number;
	        defaultValue?: number;
	        value?: number;
	        onChange?: (value: number) => void;
	        mode?: 'single' | 'range';
	        className?: string;
	    }
	    interface Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Range' {
	import React from 'react';
	import Types from 'control/Range/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Pageswitch/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace PageswitchTypes {
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
	        length: number;
	        onChange?: (pageNumber: number, startIndex: number) => void;
	        options?: Options;
	        value?: number;
	        defaultValue?: number;
	    }
	    interface Options {
	        pageSize?: number;
	    }
	    interface Overrides {
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
	import Types from 'control/Pageswitch/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AttributeProps, WhaleTypes.AllEventProps<HTMLDivElement>, WhaleTypes.CoreProps<Overrides>, WhaleTypes.ColorProps, WhaleTypes.BorderProps, WhaleTypes.PaddingProps, WhaleTypes.LayoutProps {
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
	    interface Overrides {
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
	        styles: WhaleTypes.ComponentStyles<Overrides>;
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
	    interface Overrides extends FieldTypes.Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props, Types.StyleParams>;
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
	    interface Overrides extends CheckTypes.Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/Switch' {
	import React from 'react';
	import Types from 'control/Switch/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/TextField/types' {
	import { ChangeEventHandler } from 'react';
	import IMask from 'imask';
	import FieldTypes from 'misc/hocs/Field/types';
	import WhaleTypes from '@flow-ui/whale/types'; namespace TextFieldTypes {
	    type InputTypes = 'email' | 'hidden' | 'number' | 'password' | 'reset' | 'search' | 'tel' | 'text' | 'url';
	    interface Props extends FieldTypes.Props, InputProps, TextAreaProps {
	        defaultValue?: string | number;
	        align?: 'left' | 'right';
	        multiline?: boolean;
	        masked?: IMask.AnyMaskedOptions;
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
	    interface Overrides extends FieldTypes.Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'control/TextField' {
	import React from 'react';
	import Types from 'control/TextField/types'; type RefTypes = ((HTMLInputElement | HTMLTextAreaElement) & HTMLDivElement) | null | {}; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<RefTypes>>;
	export default _default;

}
declare module 'data/Meter/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace MeterTypes {
	    type MeterType = 'line' | 'circle';
	    type MeterDecoration = 'filled' | 'outline';
	    type MeterShape = 'square' | 'round';
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        percent: number;
	        size?: WhaleTypes.Size;
	        /**
	         * @default line
	         */
	        type?: MeterType;
	        decoration?: MeterDecoration;
	        shape?: MeterShape;
	        color?: WhaleTypes.ColorProp;
	        /**
	         * Enabled process animation
	         * @default false
	         */
	        loading?: boolean;
	    }
	    interface Overrides {
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
	import Types from 'data/Meter/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
	export default styles;

}
declare module 'data/Meter' {
	import React from 'react';
	import Types from 'data/Meter/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
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
	    type DataCollection = {
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
	        key: TableCellKey;
	        title?: string;
	        width?: number | string;
	        render?: (cellContext: TableCellContext, index: number) => void;
	        sort?: TableSortType;
	    }
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        data: Object[];
	        columns: TableColumn[];
	        decoration?: LayoutDecoration;
	        pagination?: TablePaginationOptions;
	        footer?: React.ReactNode;
	    }
	    interface HeadCellProps {
	        column: TableColumn;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        setSort: React.Dispatch<React.SetStateAction<TableSortObject>>;
	    }
	    interface CellProps {
	        dcItem: DataCollection;
	        column: TableColumn;
	        rowIndex: number;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        getCellContext: TableRef['getCellContext'];
	    }
	    interface RowProps {
	        dcItem: DataCollection;
	        columns: TableColumn[];
	        rowIndex: number;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	        getCellContext: TableRef['getCellContext'];
	    }
	    interface FootProps {
	        dc: DataCollection[];
	        columns: TableColumn[];
	        footerContent?: Props['footer'];
	        pagination?: TablePaginationOptions;
	        onPageChange: (pageNumber: number) => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        content: React.ReactNode;
	        align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
	        children?: React.ReactNode;
	    }
	    interface Overrides {
	        container: void;
	        holder: {
	            align: Props['align'];
	        };
	    }
	}
	export default BadgeTypes;

}
declare module 'layout/Badge/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Badge/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        tag?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main';
	        decoration?: LayoutDecoration;
	        children?: React.ReactNode;
	        overflow?: CSS.Properties['overflow'];
	    }
	    interface Overrides {
	        container: {
	            decoration?: LayoutDecoration;
	        };
	    }
	}
	export default BlockTypes;

}
declare module 'layout/Block/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Block/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	import Types from 'layout/Drop/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	import WhaleTypes from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace FlexboxTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        column?: boolean;
	        inline?: boolean;
	        decoration?: LayoutDecoration;
	        alignItems?: WhaleTypes.FlexSelf;
	        alignContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace;
	        placeContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace;
	        justifyContent?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace;
	        justifyItems?: WhaleTypes.FlexSelf | WhaleTypes.FlexSpace;
	        direction?: CSS.Properties['flexDirection'];
	        wrap?: CSS.Properties['flexWrap'];
	        flow?: CSS.Properties['flexFlow'];
	        children?: React.ReactNode;
	    }
	    interface Overrides {
	        container: {
	            decoration?: LayoutDecoration;
	        };
	    }
	}
	export default FlexboxTypes;

}
declare module 'layout/Flexbox/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Flexbox/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        inline?: boolean;
	        children?: React.ReactNode;
	        decoration?: LayoutDecoration;
	        templateColumns?: CSS.Properties['gridTemplateColumns'];
	        templateRows?: CSS.Properties['gridTemplateRows'];
	        templateAreas?: CSS.Properties['gridTemplateAreas'];
	        columnGap?: CSS.Properties['gridColumnGap'];
	        rowGap?: CSS.Properties['gridRowGap'];
	        gap?: CSS.Properties['gridGap'];
	        autoColumns?: CSS.Properties['gridAutoColumns'];
	        autoRows?: CSS.Properties['gridAutoRows'];
	        autoFlow?: CSS.Properties['gridAutoFlow'];
	        alignItems?: CSS.Properties['alignItems'];
	        alignContent?: CSS.Properties['alignContent'];
	        justifyContent?: CSS.Properties['justifyContent'];
	        justifyItems?: CSS.Properties['justifyItems'];
	    }
	    interface Overrides {
	        container: {
	            decoration?: LayoutDecoration;
	        };
	    }
	}
	export default GridTypes;

}
declare module 'layout/Grid/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Grid/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    type ExtentedProps = WhaleTypes.AttributeProps & WhaleTypes.AllEventProps<HTMLDivElement> & WhaleTypes.CoreProps<Overrides> & WhaleTypes.ColorProps & WhaleTypes.BorderProps & WhaleTypes.PaddingProps & WhaleTypes.LayoutProps;
	    interface Ref {
	        open: (customContent?: React.ReactElement | null) => void;
	        close: (didClose?: () => void) => void;
	        setTitle: (title: string) => void;
	        setSubtitle: (subtitle: string) => void;
	        setCenter: (center: boolean) => void;
	        setCustomContent: (customContent: React.ReactElement | null) => void;
	        title?: string;
	        subtitle?: string;
	        center: boolean;
	        customContent: React.ReactElement | null;
	        overlay: any;
	        window: any;
	    }
	    interface Props extends ExtentedProps {
	        title?: string;
	        subtitle?: string;
	        fullSize?: boolean;
	        children?: any;
	        opened?: boolean;
	        hideHeader?: boolean;
	        onClose?: () => void;
	        didClose?: () => void;
	        onOpen?: () => void;
	        didOpen?: () => void;
	    }
	    interface InnerProps extends Props {
	        innerRef: any;
	    }
	    interface StyleProps {
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	    }
	    interface ModalOverlayProps {
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	        children?: any;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface ModalWindowProps {
	        title?: string;
	        subtitle?: string;
	        visible: boolean;
	        center: boolean;
	        fullSize?: boolean;
	        hideHeader?: boolean;
	        children?: any;
	        containerAttr?: ExtentedProps;
	        containerEvents?: any;
	        onClosePressed: () => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface ModalHeaderProps {
	        title?: string;
	        subtitle?: string;
	        hideHeader?: boolean;
	        onClosePressed: () => void;
	        styles: WhaleTypes.ComponentStyles<Overrides>;
	    }
	    interface Overrides {
	        overlay: {
	            visible?: boolean;
	            center?: boolean;
	        };
	        window: {
	            visible?: boolean;
	            fullSizeCenter?: boolean;
	        };
	        header: void;
	        cross: void;
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
	import Types from '@flow-ui/core/layout/Modal/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
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
	    interface Overrides {
	        container: void;
	    }
	}
	export default NotificationTypes;

}
declare module 'layout/Notification/styles' {
	import WhaleTypes from '@flow-ui/whale/types';
	import Types from 'layout/Notification/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
	        align?: 'top' | 'bottom' | 'left' | 'right' | 'none';
	        borderColor?: WhaleTypes.ColorProp;
	        backgroundColor?: WhaleTypes.ColorProp;
	        children?: React.ReactNode;
	        arrowWidth?: CSS.Properties['width'];
	        arrowHeight?: CSS.Properties['height'];
	    }
	    interface Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
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
	    interface Overrides {
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
	import WhaleTypes from '@flow-ui/whale/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.PrivateProps>;
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
	    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onScroll'> {
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
	    interface Overrides {
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
	import Types from 'layout/ScrollView/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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
	    interface Overrides {
	        Divider?: DividerTypes.Overrides;
	        Spinner?: SpinnerTypes.Overrides;
	        Button?: ButtonTypes.Overrides;
	        Calendar?: Calendar.Overrides;
	        Checkbox?: CheckboxTypes.Overrides;
	        DatePicker?: DatePickerTypes.Overrides;
	        Menu?: MenuTypes.Overrides;
	        Radio?: RadioTypes.Overrides;
	        Range?: RangeTypes.Overrides;
	        Select?: SelectTypes.Overrides;
	        Switch?: SwitchTypes.Overrides;
	        TextField?: TextFieldTypes.Overrides;
	        Meter?: MeterTypes.Overrides;
	        Table?: TableTypes.Overrides;
	        Badge?: BadgeTypes.Overrides;
	        Block?: BlockTypes.Overrides;
	        Drop?: DropTypes.Overrides;
	        Flexbox?: FlexboxTypes.Overrides;
	        Grid?: GridTypes.Overrides;
	        Modal?: ModalTypes.Overrides;
	        Notification?: NotificationTypes.Overrides;
	        Popover?: PopoverTypes.Overrides;
	        Tree?: TreeTypes.Overrides;
	        ScrollView?: ScrollView.Overrides;
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
	        interface Overrides extends FlowTypes.Overrides {
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
	import { SerializedStyles } from '@emotion/core'; namespace ViewportTypes {
	    interface Themes {
	        light: WhaleTypes.Theme;
	        dark: WhaleTypes.Theme;
	    }
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
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
	        title?: string;
	        /**
	         * Subtitle of modal window header
	         */
	        subtitle?: string;
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
	    interface Overrides {
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
	import Types from 'layout/Viewport/types'; const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props>;
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

}
declare module 'misc/utils/validate' {
	export interface ValidateObject {
	    error?: string;
	    regex: RegExp;
	    isMatch?: boolean;
	}

}
