declare module 'content/Divider/types' {
	import WhaleTypes from '@flow-ui/whale/types'; namespace DividerTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        /**
	        * Draw divider vertical
	        */
	        vertical?: boolean;
	        /**
	        * Size of dash
	        */
	        dash?: WhaleTypes.Size | (string & {
	            T?: string;
	        });
	        /**
	        * Size of the gap between dashes
	        */
	        gap?: WhaleTypes.Size | (string & {
	            T?: string;
	        });
	        /**
	        * Color of divider
	        * @default lightest
	        */
	        color?: WhaleTypes.ColorProp;
	    }
	    interface Styles {
	        /**
	         * Root element
	         */
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
	        /**
	         * Color of spinner
	         * @default hardest
	         */
	        color?: WhaleTypes.ColorProp;
	        /**
	         * Custom content
	         */
	        children?: React.ReactElement;
	        /**
	         * Shape of spinner's division
	         * @default square
	         */
	        shape?: 'square' | 'rounded' | 'round';
	        /**
	         * Spin speed
	         * @default 1
	         */
	        duration?: number;
	        /**
	         * Number of spinner's division
	         * @default 12
	         */
	        count?: number;
	        /**
	         * Size of spinner's container
	         * @default 1.125em
	         */
	        size?: string;
	    }
	    interface Styles {
	        /**
	         * Root element
	         */
	        container: void;
	        /**
	         * Wrapper for children component
	         */
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
declare module '@flow-ui/core/misc/hocs/Typography/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types';
	import CSS from 'csstype'; namespace TypographyTypes {
	    interface LinkProps extends Props {
	        /**
	         * Prompts the user to save the linked URL instead of navigating to it
	         */
	        download?: any;
	        /**
	         * The URL that the hyperlink points to
	         */
	        href?: string;
	        /**
	         * Hints at the human language of the linked URL
	         */
	        hrefLang?: string;
	        /**
	         * Specifies what media/device the linked document is optimized for
	         */
	        media?: string;
	        /**
	         * A space-separated list of URLs
	         */
	        ping?: string;
	        /**
	         * The relationship of the linked URL as space-separated link types
	         */
	        rel?: string;
	        /**
	         * Where to display the linked URL
	         */
	        target?: string;
	        /**
	         * Hints at the linked URL’s format with a MIME type
	         */
	        type?: string;
	        /**
	         * How much of the referrer to send when following the link
	         */
	        referrerPolicy?: string;
	    }
	    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Styles> {
	        /**
	         * Overflow text shortening
	         */
	        ellipsis?: boolean;
	        /**
	         * Shorhand for text-decoration
	         */
	        decoration?: CSS.Properties['textDecoration'];
	        /**
	         * Content
	         */
	        children?: React.ReactNode;
	        /**
	         * Text color
	         */
	        color?: WhaleTypes.ColorProp;
	        /**
	         * Shorhand for background-color
	         */
	        backgroundColor?: WhaleTypes.ColorProp;
	        /**
	         * Shorhand for text-align
	         */
	        align?: CSS.Properties['textAlign'];
	        /**
	         * Shorhand for font-weight
	         */
	        weight?: CSS.Properties['fontWeight'];
	        /**
	         * Shorhand for font-size
	         */
	        size?: WhaleTypes.Size;
	        /**
	         * Shorhand for text-transform
	         */
	        transform?: CSS.Properties['textTransform'];
	    }
	    interface Styles<T extends {
	        [T in keyof Styles]?: Object;
	    } = {}> {
	        /**
	         * Root element
	         */
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
	import Types from '@flow-ui/core/misc/hocs/Typography/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.PrivateProps>;
	export default styles;

}
declare module 'misc/hocs/Typography' {
	/// <reference types="react" />
	/// <reference types="@emotion/core" />
	import Types from '@flow-ui/core/misc/hocs/Typography/types'; type RefTag = HTMLSpanElement | HTMLAnchorElement | HTMLParagraphElement; const _default: import("react").ForwardRefExoticComponent<Types.PrivateProps & import("react").RefAttributes<RefTag>>;
	export default _default;

}
declare module 'content/Header/types' {
	import TypographyTypes from '@flow-ui/core/@flow-ui/core/misc/hocs/Typography/types'; namespace HeaderTypes {
	    interface Props extends TypographyTypes.Props {
	    }
	    interface Styles extends TypographyTypes.Styles {
	    }
	}
	export default HeaderTypes;

}
declare module 'content/Header' {
	import React from 'react';
	import Types from 'content/Header/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Display/types' {
	import TypographyTypes from '@flow-ui/core/@flow-ui/core/misc/hocs/Typography/types'; namespace DisplayTypes {
	    interface Props extends TypographyTypes.Props {
	    }
	    interface Styles extends TypographyTypes.Styles {
	    }
	}
	export default DisplayTypes;

}
declare module 'content/Display' {
	import React from 'react';
	import Types from 'content/Display/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Paragraph/types' {
	import TypographyTypes from '@flow-ui/core/@flow-ui/core/misc/hocs/Typography/types'; namespace ParagraphTypes {
	    interface Props extends TypographyTypes.Props {
	    }
	    interface Styles extends TypographyTypes.Styles {
	    }
	}
	export default ParagraphTypes;

}
declare module 'content/Paragraph' {
	import React from 'react';
	import Types from 'content/Paragraph/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;
	export default _default;

}
declare module 'content/Text/types' {
	import TypographyTypes from '@flow-ui/core/@flow-ui/core/misc/hocs/Typography/types'; namespace TextTypes {
	    interface Props extends TypographyTypes.Props {
	    }
	    interface Styles extends TypographyTypes.Styles {
	    }
	}
	export default TextTypes;

}
declare module 'content/Text' {
	import React from 'react';
	import Types from 'content/Text/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'content/Link/types' {
	import TypographyTypes from '@flow-ui/core/@flow-ui/core/misc/hocs/Typography/types'; namespace LinkTypes {
	    interface Props extends TypographyTypes.LinkProps {
	    }
	    interface Styles extends TypographyTypes.Styles {
	    }
	}
	export default LinkTypes;

}
declare module 'content/Link' {
	import React from 'react';
	import Types from 'content/Link/types'; const _default: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLAnchorElement>>;
	export default _default;

}
declare module 'control/Button/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace ButtonTypes {
	    interface Props extends WhaleTypes.AllProps<HTMLButtonElement, Styles> {
	        /**
	         * Specifies that the button should have input focus when the page loads
	         */
	        autoFocus?: boolean;
	        /**
	         * Prevents the user from interacting with the button
	         */
	        disabled?: boolean;
	        /**
	         * The <form> element to associate the button with
	         */
	        form?: string;
	        /**
	         * The URL that processes the information submitted by the button
	         */
	        formAction?: string;
	        /**
	         * If the button is a submit button, specifies how to encode the form data that is submitted
	         */
	        formEncType?: string;
	        /**
	         * If the button is a submit button, this attribute specifies the HTTP method used to submit the form
	         */
	        formMethod?: string;
	        /**
	         * If the button is a submit button, this Boolean attribute specifies that the form
	         * is not to be validated when it is submitted
	         */
	        formNoValidate?: boolean;
	        /**
	         * If the button is a submit button, this attribute is a author-defined name or standardized, underscore
	         * prefixed keyword indicating where to display the response from submitting the form
	         */
	        formTarget?: string;
	        /**
	         * The name of the button, submitted as a pair with the button’s value as part of the form data
	         */
	        name?: string;
	        /**
	         * The default behavior of the button
	         */
	        type?: 'submit' | 'reset' | 'button';
	        /**
	         * Defines the value associated with the button’s name when it’s submitted with the form data
	         */
	        value?: string | string[] | number;
	        /**
	         * Size of button
	         * @default medium
	         */
	        size?: WhaleTypes.Size;
	        /**
	         * Defines how button look
	         * @default filled
	         */
	        decoration?: 'filled' | 'outline' | 'text' | 'plain';
	        /**
	         * Shape of button
	         * @default rounded
	         */
	        shape?: 'square' | 'rounded' | 'round';
	        /**
	         * Make button's text uppercase
	         */
	        uppercase?: boolean;
	        /**
	         * Color of button
	         */
	        color?: WhaleTypes.ColorProp;
	        /**
	         * Button's content
	         */
	        children?: React.ReactNode;
	        /**
	         * Place for items to the right of children
	         */
	        rightChild?: React.ReactNode;
	        /**
	         * Place for items to the left of children
	         */
	        leftChild?: React.ReactNode;
	    }
	    interface StyleState {
	        decoration: Props['decoration'];
	        shape: Props['shape'];
	        size: Props['size'];
	    }
	    interface Styles {
	        /**
	         * Root element
	         */
	        container: StyleState;
	        /**
	         * Content's wrappers
	         */
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
declare module '@flow-ui/core/misc/hocs/Icon/types' {
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
	import Types from '@flow-ui/core/misc/hocs/Icon/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
	export default styles;

}
declare module 'misc/hocs/Icon' {
	import React from 'react';
	import Types from '@flow-ui/core/misc/hocs/Icon/types'; type Icons = {
	    filled: React.ReactElement;
	    outline: React.ReactElement;
	};
	export const createIcon: (props: Types.IconProps | undefined, ref: React.RefObject<HTMLSpanElement>, icons: Icons) => JSX.Element;
	export type Props = Types.IconProps;
	export {};

}
declare module 'icons/svg/activity' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/alert-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/alert-triangle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/archive' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-back' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-circle-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-circle-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-circle-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-circle-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-downward' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-forward' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-ios-back' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-ios-downward' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-ios-forward' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-ios-upward' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrow-upward' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowhead-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowhead-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowhead-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/arrowhead-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/at' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/attach-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/attach' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/award' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/backspace' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bar-chart-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bar-chart' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/battery' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/behance' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bell-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bell' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bluetooth' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/book-open' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/book' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bookmark' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/briefcase' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/browser' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/brush' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/bulb' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/calendar' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/camera' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/car' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cast' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/charging' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmark-circle-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmark-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmark-square-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmark-square' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/checkmark' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevron-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevron-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevron-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/chevron-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/clipboard' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/clock' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/close-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/close-square' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/close' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cloud-download' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cloud-upload' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/code-download' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/code' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/collapse' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/color-palette' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/color-picker' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/compass' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/copy' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-down-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-down-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-left-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-left-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-right-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-right-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-up-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/corner-up-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/credit-card' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/crop' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/cube' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-left-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-left-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-right-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/diagonal-arrow-right-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/done-all' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/download' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/droplet-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/droplet' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/edit-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/edit' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/email' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/expand' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/external-link' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/eye-off-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/eye-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/eye' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/facebook' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/file-add' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/file-remove' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/file-text' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/file' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/film' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flag' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flash-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flash' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flip-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/flip' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/folder-add' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/folder-remove' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/folder' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/funnel' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/gift' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/github' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/globe-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/globe-3' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/globe' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/google' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/grid' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/hard-drive' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/hash' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/headphones' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/heart' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/home' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/image-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/image' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/inbox' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/info' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/keypad' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/layers' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/layout' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/link-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/link' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/linkedin' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/list' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/lock' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/log-in' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/log-out' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/map' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/maximize' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/menu-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/menu-arrow' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/menu' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/message-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/message-square' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/mic-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/mic' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minimize' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minus-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minus-square' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/minus' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/monitor' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/moon' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/more-horizontal' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/more-vertical' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/move' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/music' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/navigation-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/navigation' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/npm' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/options-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/options' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pantone' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/paper-plane' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pause-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/people' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/percent' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/person-add' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/person-delete' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/person-done' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/person-remove' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/person' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phone-call' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phone-missed' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phone-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/phone' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pie-chart-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pie-chart' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pin' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/play-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/plus-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/plus-square' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/plus' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/power' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/pricetags' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/printer' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/question-mark-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/question-mark' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/radio-button-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/radio-button-on' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/radio' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/recording' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/refresh' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/repeat' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/rewind-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/rewind-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/save' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/scissors' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/search' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/settings-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/settings' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shake' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/share' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shield-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shield' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shopping-bag' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shopping-cart' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shuffle-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/shuffle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/skip-back' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/skip-forward' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/slash' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/smartphone' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/smiling-face' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/speaker' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/square' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/star' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/stop-circle' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/sun' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/swap' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/sync' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/text' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/thermometer-minus' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/thermometer-plus' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/thermometer' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/toggle-left' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/toggle-right' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trash-2' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trash' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trending-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/trending-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/tv' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/twitter' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/umbrella' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/undo' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/unlock' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/upload' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/video-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/video' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volume-down' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volume-mute' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volume-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/volume-up' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/wifi-off' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
	export default _default;

}
declare module 'icons/svg/wifi' {
	/**
	The MIT License (MIT)

	Copyright (c) 2018 Akveo.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	*/
	import React from 'react'; const _default: React.ForwardRefExoticComponent<import("../../@flow-ui/core/misc/hocs/Icon/types").default.IconProps & React.RefAttributes<HTMLSpanElement>>;
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
declare module '@flow-ui/core/misc/hocs/Check/types' {
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
	import CheckTypes from '@flow-ui/core/misc/hocs/Check/types'; const _default: React.ForwardRefExoticComponent<CheckTypes.PrivateProps & React.RefAttributes<HTMLDivElement>>;
	export default _default;

}
declare module 'control/Checkbox/types' {
	import CheckTypes from '@flow-ui/core/@flow-ui/core/misc/hocs/Check/types'; namespace CheckboxTypes {
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
	import Types from '@flow-ui/core/misc/hocs/Check/types'; const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props>;
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
declare module '@flow-ui/core/misc/hocs/Field/types' {
	/// <reference types="react" />
	import WhaleTypes from '@flow-ui/whale/types'; namespace FieldTypes {
	    interface Props<S = Styles> extends Omit<WhaleTypes.AllProps<HTMLInputElement, S>, 'onChange'> {
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
	import Types from '@flow-ui/core/misc/hocs/Field/types'; const _default: React.ForwardRefExoticComponent<Types.PrivateProps & React.RefAttributes<HTMLDivElement>>;
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
	import Types from '@flow-ui/core/misc/hocs/Field/types'; type ExtractFunction<T> = {
	    [K in keyof T]: Extract<T[K], Function>;
	}; const fieldStyles: <T extends Types.Styles<{}>>(props: Pick<Types.Props<Types.Styles<{}>>, "m" | "color" | "alignSelf" | "backgroundColor" | "display" | "flexBasis" | "flexGrow" | "flexShrink" | "fontSize" | "gridColumnEnd" | "gridColumnStart" | "gridRowEnd" | "gridRowStart" | "justifySelf" | "letterSpacing" | "lineHeight" | "position" | "textAlign" | "visibility" | "borderColor" | "borderRadius" | "borderStyle" | "borderWidth" | "flex" | "gridArea" | "gridColumn" | "gridRow" | "placeSelf" | "size" | "style" | "disabled" | "label" | "p" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "className" | "id" | "tabIndex" | "role" | "draggable" | "attrs" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onWheel" | "onWheelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onEnter" | "onEsc" | "onSelect" | "onSelectCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onScroll" | "onScrollCapture" | "styles" | "animated" | "textColor" | "px" | "py" | "pr" | "pl" | "pt" | "pb" | "w" | "h" | "mx" | "my" | "mr" | "ml" | "mt" | "mb" | "shape" | "decoration" | "rightChild" | "leftChild" | "labelType" | "hint" | "clearable" | "onClear">, theme: WhaleTypes.Theme, stylePatch?: Partial<ExtractFunction<WhaleTypes.Styles<T>>> | undefined) => WhaleTypes.Styles<Types.Styles<{}>>;
	export default fieldStyles;

}
declare module 'control/DatePicker/types' {
	import { Moment } from 'moment';
	import FieldTypes from '@flow-ui/core/misc/hocs/Field/types'; namespace DatePickerTypes {
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
	import CheckTypes from '@flow-ui/core/misc/hocs/Check/types'; namespace RadioTypes {
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
	import FieldTypes from '@flow-ui/core/misc/hocs/Field/types'; namespace SelectTypes {
	    interface Option {
	        text: string;
	        value: any;
	    }
	    interface Props extends Omit<FieldTypes.Props<Styles>, 'onChange'> {
	        /**
	         * Content to be appear in the form control when the form control is empty
	         */
	        placeholder?: string;
	        /**
	         * Items contained in Select
	         */
	        options: Option[];
	        /**
	         * Allow selecting multiple options
	         */
	        multiselect?: boolean;
	        /**
	         * Allow search values
	         */
	        searchable?: boolean;
	        /**
	         * Select's drop will not close after select option
	         */
	        keepOpen?: boolean;
	        /**
	         * Selected options
	         */
	        values?: Option[];
	        /**
	         * Options selected by default
	         */
	        defaultValues?: Option[];
	        /**
	         * Max size of scroll area at select's drop
	         */
	        maxScrollHeight?: string;
	        /**
	         * Max size of scroll area at select's drop
	         * @default 16rem
	         */
	        onChange?: (values: Option[], changedValue?: Option) => void;
	    }
	    type State = {
	        selectedOptions: Option[];
	        open: boolean;
	        searchValue: string;
	        empty: boolean;
	        cursor: number;
	    };
	    interface StyleState extends StyleParams {
	        shape: Props['shape'];
	        size: Props['size'];
	        decoration: Props['decoration'];
	    }
	    interface StyleParams {
	        isOpen: boolean;
	    }
	    interface Styles extends FieldTypes.Styles<{
	        container: StyleState;
	    }> {
	        /**
	         * Container for selected items
	         */
	        selected: void;
	        /**
	         * Select's input
	         */
	        input: {
	            searchMode: boolean;
	            multiselect: boolean;
	        };
	        /**
	         * Container of selected option in multiselect
	         */
	        tag: StyleState;
	        /**
	         * Close button for selected option in multiselect
	         */
	        tagRemove: StyleState;
	        /**
	         * Select's drop container
	         */
	        drop: StyleState;
	        /**
	         * Container of every item in drop
	         */
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
	import CheckTypes from '@flow-ui/core/misc/hocs/Check/types'; namespace SwitchTypes {
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
	import FieldTypes from '@flow-ui/core/misc/hocs/Field/types';
	import WhaleTypes from '@flow-ui/whale/types'; namespace TextFieldTypes {
	    type InputTypes = 'email' | 'hidden' | 'number' | 'password' | 'reset' | 'search' | 'tel' | 'text' | 'url';
	    interface Props extends FieldTypes.Props, InputProps, TextAreaProps {
	        defaultValue?: string | number;
	        align?: 'left' | 'right';
	        multiline?: boolean;
	        onChange?: ChangeEventHandler<HTMLInputElement>;
	    }
	    interface InputProps {
	        /**
	         * 	Hint for form autofill feature
	         */
	        autoComplete?: string;
	        /**
	         * Automatically focus the form control when the page is loaded
	         */
	        autoFocus?: boolean;
	        /**
	         * Value of the id attribute of the <datalist> of autocomplete options
	         */
	        list?: string;
	        /**
	         * Name of the input form control. Submitted with the form as part of a name/value pair
	         */
	        name?: string;
	        /**
	         * Content to be appear in the form control when the form control is empty
	         */
	        placeholder?: string;
	        /**
	         * 	Pattern the value must match to be valid
	         */
	        pattern?: string;
	        /**
	         * The value is not editable
	         */
	        readOnly?: boolean;
	        /**
	         * A value is required for the form to be submittable
	         */
	        required?: boolean;
	        /**
	         * Type of input form control
	         */
	        type?: InputTypes;
	        /**
	         * Current value of the form control
	         */
	        value?: string | number;
	        /**
	         * Associates the control with a form element
	         */
	        form?: string;
	        /**
	         * 	URL to use for form submission
	         */
	        formAction?: string;
	        /**
	         * Form data set encoding type to use for form submission
	         */
	        formEncType?: string;
	        /**
	         * 	HTTP method to use for form submission
	         */
	        formMethod?: string;
	        /**
	         *  Bypass form control validation for form submission
	         */
	        formNoValidate?: boolean;
	        /**
	         * Browsing context for form submission
	         */
	        formTarget?: string;
	        /**
	         * Maximum value
	         */
	        max?: number | string;
	        /**
	         * Maximum length (number of characters) of value
	         */
	        maxLength?: number;
	        /**
	         * 	Minimum value
	         */
	        min?: number | string;
	        /**
	         * Minimum length (number of characters) of value
	         */
	        minLength?: number;
	        /**
	         * 	Incremental values that are valid
	         */
	        step?: number | string;
	    }
	    interface TextAreaProps {
	        /**
	         * The visible width of the text control, in average character widths
	         */
	        cols?: number;
	        /**
	         * The number of visible text lines for the control
	         */
	        rows?: number;
	        /**
	         * Indicates how the control wraps text
	         */
	        wrap?: string;
	    }
	    interface Styles extends FieldTypes.Styles {
	        /**
	         * TextField's input
	         */
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
	         * @default surface
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
	         *
	         * @default default
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
	    interface Overrides {
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
