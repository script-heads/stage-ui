declare module "content/Divider/types" {
    namespace DividerTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Draw divider vertical
             */
            vertical?: boolean;
            /**
             * Sizes of dash
             * @display Sizes
             * @link /props/#size
             */
            dash?: Stage.Sizes | (string & {
                T?: string;
            });
            /**
             * Sizes of the gap between dashes
             * @display Sizes
             * @link /props/#size
             */
            gap?: Stage.Sizes | (string & {
                T?: string;
            });
            /**
             * Color of divider
             * @default lightest
             */
            color?: Stage.ColorProp;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
        };
    }
    export default DividerTypes;
}
declare module "content/Divider/styles" {
    import Types from "content/Divider/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "content/Divider/index" {
    import Types from "content/Divider/types";
    const _default: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
    export default _default;
}
declare module "content/Spinner/types" {
    namespace SpinnerTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Color of spinner
             * @default hardest
             */
            color?: Stage.ColorProp;
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
             * Sizes of spinner's container
             * @default 1.125em
             */
            size?: string;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
            /**
             * Wrapper for children component
             */
            children: void;
        };
    }
    export default SpinnerTypes;
}
declare module "content/Spinner/styles" {
    import Types from "content/Spinner/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "content/Spinner/index" {
    import React from 'react';
    import Types from "content/Spinner/types";
    const _default_1: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_1;
}
declare module "content/Article/types" {
    import TypographyTypes from "basic/Typography/types";
    namespace ArticleTypes {
        type Props = Stage.AllProps<HTMLDivElement>;
        type Classes = TypographyTypes.Classes;
    }
    export default ArticleTypes;
}
declare module "content/Article/styles" {
    import Types from "content/Article/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "content/Article/index" {
    import Types from "content/Article/types";
    const _default_2: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
    export default _default_2;
}
declare module "content/Header/types" {
    import TypographyTypes from "basic/Typography/types";
    namespace HeaderTypes {
        interface Props extends TypographyTypes.Props {
        }
        type Classes = TypographyTypes.Classes;
    }
    export default HeaderTypes;
}
declare module "content/Header/index" {
    import React from 'react';
    import Types from "content/Header/types";
    const _default_3: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
    export default _default_3;
}
declare module "content/Paragraph/types" {
    import TypographyTypes from "basic/Typography/types";
    namespace ParagraphTypes {
        interface Props extends TypographyTypes.Props {
        }
        type Classes = TypographyTypes.Classes;
    }
    export default ParagraphTypes;
}
declare module "content/Paragraph/index" {
    import React from 'react';
    import Types from "content/Paragraph/types";
    const _default_4: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLParagraphElement>>;
    export default _default_4;
}
declare module "content/Text/types" {
    import TypographyTypes from "basic/Typography/types";
    namespace TextTypes {
        interface Props extends TypographyTypes.Props {
        }
        type Classes = TypographyTypes.Classes;
    }
    export default TextTypes;
}
declare module "content/Text/index" {
    import React from 'react';
    import Types from "content/Text/types";
    const _default_5: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLSpanElement>>;
    export default _default_5;
}
declare module "content/Link/types" {
    import TypographyTypes from "basic/Typography/types";
    namespace LinkTypes {
        interface Props extends TypographyTypes.LinkProps {
        }
        type Classes = TypographyTypes.Classes;
    }
    export default LinkTypes;
}
declare module "content/Link/index" {
    import React from 'react';
    import Types from "content/Link/types";
    const _default_6: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLAnchorElement>>;
    export default _default_6;
}
declare module "content/Toast/types" {
    namespace ToastTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Color of divider
             * @default primary
             */
            color?: Stage.ColorProp;
            /**
             * Place for items to the right of children
             */
            rightChild?: React.ReactNode;
            /**
             * Place for items to the left of children
             */
            leftChild?: React.ReactNode;
            /**
             * Default content
             */
            children?: React.ReactNode;
            /**
             * Children alias
             */
            label?: React.ReactNode;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
            /**
             * Children of container
             */
            content: void;
            leftChild: void;
            rightChild: void;
        };
    }
    export default ToastTypes;
}
declare module "content/Toast/styles" {
    import Types from "content/Toast/types";
    const styles: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default styles;
}
declare module "content/Toast/index" {
    import React from 'react';
    import Types from "content/Toast/types";
    const _default_7: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_7;
}
declare module "control/Button/types" {
    import React from 'react';
    namespace ButtonTypes {
        type Decoration = 'filled' | 'outline' | 'text' | 'plain';
        type Shape = 'square' | 'rounded' | 'round';
        type Type = 'submit' | 'reset' | 'button';
        type ChildAlign = 'left' | 'right';
        interface Props extends Stage.AllProps<HTMLButtonElement, Classes> {
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
            type?: Type;
            /**
             * Defines the value associated with the button’s name when it’s submitted with the form data
             */
            value?: string | string[] | number;
            /**
             * Sizes of button
             * @display Sizes
             * @link /props/#size
             * @default m
             */
            size?: Stage.Sizes;
            /**
             * Defines how button look
             * @default filled
             */
            decoration?: Decoration;
            /**
             * Shape of button
             * @default rounded
             */
            shape?: Shape;
            /**
             * Make button's text uppercase
             */
            uppercase?: boolean;
            /**
             * Color of button
             */
            color?: Stage.ColorProp;
            /**
             * Button's label
             */
            label?: React.ReactNode;
            /**
             * same as label
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
            /**
             * Async onClick
             */
            onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
            /**
             * Loading component shows when onClick pending promise
             * if no component set then regular spinner will be used instead
             */
            loadingComponent?: React.ReactNode;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
            /**
             * Content's wrappers
             */
            child: {
                align: ChildAlign;
            };
        };
    }
    export default ButtonTypes;
}
declare module "control/Button/styles" {
    import Types from "control/Button/types";
    const styles: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default styles;
}
declare module "control/Button/index" {
    import React from 'react';
    import Types from "control/Button/types";
    const _default_8: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLButtonElement>>;
    export default _default_8;
}
declare module "control/Calendar/types" {
    import { CSSProperties } from 'react';
    import { Moment } from 'moment';
    namespace CalendarTypes {
        /**
         * Type of calendar view
         */
        type GridType = 'year' | 'month' | 'day' | 'week';
        /**
         * Calendar locale
         */
        type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de';
        /**
         * Custom render options
         */
        type RenderOptions = {
            now: Moment;
            self: Moment;
            active: Moment | undefined;
            isActive: boolean;
            isCurrent: boolean;
            isDisabled: boolean;
            onClick: () => void;
        };
        /**
         * Options for prop onMonthRender
         */
        type YearRenderOptions = RenderOptions;
        /**
         * Options for prop onMonthRender
         */
        type MonthRenderOptions = RenderOptions;
        /**
         * Options for prop onDayRender
         */
        type DayRenderOptions = RenderOptions & {
            isCurrentMonth: boolean;
        };
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
            /**
             * Sizes of field
             * @default m
             * @display Sizes
             * @link /props/#size
             */
            size?: Stage.Sizes;
            /**
             * Type for Calendar
             * @default day
             */
            type?: GridType;
            /**
             * Date or Moment value for controlled component
             */
            value?: Date | [Date | undefined, Date | undefined];
            /**
             * Date or Moment value for uncontrolled component
             */
            defaultValue?: Date | [Date, Date];
            /**
             * Min datetime that could be selected
             */
            minValue?: Date;
            /**
             * Max datetime that could be selected
             */
            maxValue?: Date;
            /**
             * Callback will fire on user click day
             * moment date will be current date that
             * used just did set
             */
            onChange?: (startDt: Date, endDt?: Date) => void;
            /**
             * Callback will fire when user change any view at calendary
             * moment date will be temp date
             */
            onViewChange?: (date: Date) => void;
            /**
             * @default ru
             */
            locale?: Locale;
            /**
             * Hide today button
             */
            hideToday?: boolean;
            /**
             * Hide neighbor months days
             */
            hideNeighborMonths?: boolean;
            /**
             * Custom render Year
             */
            onYearRender?: (options: YearRenderOptions) => React.ReactNode;
            /**
             * Custom render Month
             */
            onMonthRender?: (options: MonthRenderOptions) => React.ReactNode;
            /**
             * Custom render Day
             */
            onDayRender?: (options: DayRenderOptions) => React.ReactNode;
            /**
             * Header element
             */
            header?: React.ReactNode;
            /**
             * Footer element
             */
            footer?: React.ReactNode;
            /**
             * Select range date
             */
            range?: boolean;
        }
        interface DateGridProps {
            attributes: any;
            styleProps: any;
            hideToday: boolean;
            hideNeighborMonths: boolean;
            value: [Moment | undefined, Moment | undefined];
            minValue: Moment;
            maxValue: Moment;
            onChange: (startDate: Moment, endDate?: Moment) => void;
            onViewChange: (dt: Moment) => void;
            classes: Stage.Classes<Classes>;
            type: GridType;
            onYearRender?: (options: YearRenderOptions) => React.ReactNode;
            onMonthRender?: (options: MonthRenderOptions) => React.ReactNode;
            onDayRender?: (options: DayRenderOptions) => React.ReactNode;
            header?: React.ReactNode;
            footer?: React.ReactNode;
            size?: Stage.Sizes;
            range?: boolean;
        }
        interface DateGridCalendarProps {
            type: GridType;
            minValue: Moment;
            maxValue: Moment;
            onClick: () => void;
            style?: CSSProperties;
            size?: Stage.Sizes;
            classes: Stage.Classes<Classes>;
        }
        interface DateGridDayProps extends Omit<DateGridCalendarProps, 'onClick'> {
            hideNeighborMonths: boolean;
            day: Moment;
            viewDate: Moment;
            tmp: [Moment, Moment | undefined];
            active: [Moment | undefined, Moment | undefined];
            size?: Stage.Sizes;
            onDayRender?: (options: DayRenderOptions) => React.ReactNode;
            onClick: (day: Moment) => void;
        }
        interface DateGridWeekProps extends Omit<DateGridDayProps, 'day'> {
            size?: Stage.Sizes;
            week: Moment[];
        }
        interface DateGridMonthProps extends DateGridCalendarProps {
            value: Moment;
            tmp: Moment;
            active: Moment | undefined;
            size?: Stage.Sizes;
            onMonthRender?: (options: MonthRenderOptions) => React.ReactNode;
        }
        interface DateGridYearProps extends DateGridCalendarProps {
            value: Moment;
            tmp: Moment;
            active: Moment | undefined;
            size?: Stage.Sizes;
            onYearRender?: (options: YearRenderOptions) => React.ReactNode;
        }
        interface DateGridTitleProps {
            value: Moment;
            minValue: Moment;
            maxValue: Moment;
            gridType: GridType;
            onNext: () => void;
            onPrevious: () => void;
            onGridTypeChange: (type: GridType) => void;
            classes: Stage.Classes<Classes>;
            size?: Stage.Sizes;
        }
        type Classes = {
            /**
             * Root container
             */
            dateGrid: void;
            /**
             * Days of week block
             */
            weekDay: void;
            /**
             * Each square month or year block
             */
            monthOrYear: {
                isActive: boolean;
                isCurrent: boolean;
                isDisabled: boolean;
            };
            /**
             * Each square week block
             */
            week: {
                isCurrent: boolean;
                isActive: boolean;
                isWeekType: boolean;
            };
            /**
             * Each square day block
             * for day/week view
             */
            day: {
                isActive: boolean;
                isCurrent: boolean;
                isRange: boolean;
                isRangeStart: boolean;
                isRangeEnd: boolean;
                isDisabled: boolean;
                isHidden: boolean;
                isCurrentMonth: boolean;
                isWeekend?: boolean;
                isWeekType?: boolean;
            };
        };
    }
    export default CalendarTypes;
}
declare module "control/Calendar/DateGridMonth" {
    import CalendarTypes from "control/Calendar/types";
    const DateGridMonth: (props: CalendarTypes.DateGridMonthProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default DateGridMonth;
}
declare module "control/Calendar/DateGridTitle" {
    import CalendarTypes from "control/Calendar/types";
    const DateGridTitle: (props: CalendarTypes.DateGridTitleProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default DateGridTitle;
}
declare module "control/Calendar/DateGridDay" {
    import T from "control/Calendar/types";
    const DateGridDay: (props: T.DateGridDayProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default DateGridDay;
}
declare module "control/Calendar/DateGridWeek" {
    import T from "control/Calendar/types";
    const DateGridWeek: (props: T.DateGridWeekProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default DateGridWeek;
}
declare module "control/Calendar/DateGridYear" {
    import CalendarTypes from "control/Calendar/types";
    const DateGridYear: (props: CalendarTypes.DateGridYearProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default DateGridYear;
}
declare module "control/Calendar/DateGrid" {
    import T from "control/Calendar/types";
    const DateGrid: (props: T.DateGridProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default DateGrid;
}
declare module "control/Calendar/styles" {
    import Types from "control/Calendar/types";
    const styles: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default styles;
}
declare module "control/Calendar/index" {
    import React from 'react';
    import 'moment/dist/locale/ru';
    import 'moment/dist/locale/it';
    import 'moment/dist/locale/fr';
    import 'moment/dist/locale/de';
    import Types from "control/Calendar/types";
    const _default_9: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_9;
}
declare module "control/Checkbox/types" {
    namespace CheckboxTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            label?: string;
            labelColor?: Stage.ColorProp;
            checked?: boolean;
            half?: boolean;
            disabled?: boolean;
            defaultValue?: boolean;
            uppercase?: boolean;
            size?: Stage.Sizes;
            onChange?: (state: boolean) => void;
        }
        type ClassState = {
            checked: Props['checked'];
            half: Props['half'];
        };
        type Classes = {
            container: void;
            label: void;
            check: ClassState;
            icon: ClassState;
        };
    }
    export default CheckboxTypes;
}
declare module "control/Checkbox/styles" {
    import Types from "control/Checkbox/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Checkbox/index" {
    import React from 'react';
    import Types from "control/Checkbox/types";
    const _default_10: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_10;
}
declare module "basic/Field/types" {
    import React from 'react';
    namespace FieldTypes {
        interface PrivateProps extends Props {
            name?: string;
            children?: React.ReactNode;
        }
        interface Props<Element = HTMLInputElement, ClassesDefinition extends Stage.ClassesSchemaDefinition = Classes> extends Stage.AllProps<Element, ClassesDefinition> {
            /**
             * Label for field
             */
            label?: React.ReactNode;
            /**
             * Define where label be placed
             */
            labelType?: 'none' | 'outside' | 'inside';
            /**
             * Place for hint content
             */
            hint?: React.ReactNode;
            /**
             * Place for error content
             */
            error?: React.ReactNode;
            /**
             * Sizes of field
             * @default m
             * @display Sizes
             * @link /props/#size
             */
            size?: Stage.Sizes;
            /**
             * Defines how field look
             * @default filled
             */
            decoration?: 'none' | 'filled' | 'underline' | 'outline';
            /**
             * Color of field
             * @default surface
             */
            color?: Stage.ColorProp;
            /**
             * Shape of field
             * @default rounded
             */
            shape?: 'round' | 'rounded' | 'square';
            /**
             * Prevents the user from interacting
             */
            disabled?: boolean;
            /**
             * Place for items to the left of value
             */
            rightChild?: React.ReactNode;
            /**
             * Place for items to the left of value
             */
            leftChild?: React.ReactNode;
            /**
             * Allow user clear value
             */
            clearable?: boolean;
            /**
             * Event is fired when user clear value
             */
            onClear?: () => void;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
            /**
             * Container of field
             */
            field: void;
            /**
             * Container of field content
             */
            content: void;
            /**
             * Label element
             */
            label: void;
            /**
             * Container for right child
             */
            rightChild: void;
            /**
             * Container for left child
             */
            leftChild: void;
            /**
             * The button that clear value
             */
            clearButton: void;
            /**
             * Container of hint
             */
            hint: void;
            /**
             * Container of error
             */
            error: void;
        };
    }
    export default FieldTypes;
}
declare module "basic/Field/styles" {
    import Types from "basic/Field/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "basic/Field/index" {
    import React from 'react';
    import Types from "basic/Field/types";
    const _default_11: React.ForwardRefExoticComponent<Types.PrivateProps & React.RefAttributes<HTMLDivElement>>;
    export default _default_11;
}
declare module "utils/SharedZIndex" {
    /**
     * Shared zIndex for Drops & Modals
     */
    export default class SharedZIndex {
        private static index;
        static get increment(): number;
    }
}
declare module "layout/Drop/types" {
    import { AllEventProps, AttributeProps, BorderProps, ColorProps, CoreProps, LayoutProps, PaddingProps } from '@stage-ui/system/props/types';
    namespace DropTypes {
        interface TargetCoordinates {
            top: number;
            bottom: number;
            left: number;
            right: number;
        }
        interface Props extends AttributeProps, AllEventProps<HTMLDivElement>, CoreProps<Classes>, ColorProps, BorderProps, PaddingProps, LayoutProps {
            /**
             * Ref of the target element near which the drop will be shown
             */
            target?: React.RefObject<HTMLElement>;
            /**
             * Will mount or unmount drop
             * @default true
             */
            visible?: boolean;
            /**
             * The side of the target element on which the drop will be shown
             */
            align?: 'top' | 'bottom' | 'left' | 'right' | 'auto-vertical';
            /**
             * Side drop positioning
             */
            justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside' | 'auto-horizontal';
            /**
             * Open/Close animation type
             * @default slide
             */
            animation?: {
                /**
                 * type of animation
                 * @default none
                 */
                type: 'fade' | 'slide' | 'collapse' | 'pop' | 'none';
                /**
                 * duration in ms
                 * @default 100
                 */
                duration?: number;
                /**
                 * reverse animation for 'slide' & 'collapse'
                 * @default false
                 */
                reverse?: boolean;
            };
            /**
             * Stretch drop by target width
             */
            stretchWidth?: boolean;
            /**
             * Stretch drop by target height
             */
            stretchHeight?: boolean;
            /**
             * Place drop under coursor
             */
            stickCursor?: boolean;
            /**
             * Distance between target and drop
             */
            spacing?: number;
            /**
             * Fired when mouse clicks outside drop
             */
            onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void;
            /**
             * Drop's content
             */
            children?: React.ReactNode;
        }
        interface Ref extends Partial<HTMLDivElement> {
            /**
             * Update position of drop (useful when target changes origins and sizes)
             */
            updatePosition: () => void;
            /**
             * Change visible state of drop
             */
            setVisible: (state: boolean) => void;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
        };
    }
    export default DropTypes;
}
declare module "layout/Drop/animation" {
    import Types from "layout/Drop/types";
    type AnimationProp = Exclude<Types.Props['animation'], undefined>;
    type AlignProp = Types.Props['align'];
    export default class DropAnimation {
        style: CSSStyleDeclaration;
        enabled: boolean;
        align: AlignProp;
        type: AnimationProp['type'];
        duration: Exclude<AnimationProp['duration'], undefined>;
        reverse: AnimationProp['reverse'];
        isHorizontal: boolean;
        constructor(props: Types.Props, style: CSSStyleDeclaration);
        animateIn(): void;
        animateOut(): void;
    }
}
declare module "layout/Drop/styles" {
    import Types from "layout/Drop/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Drop/index" {
    import React from 'react';
    import Types from "layout/Drop/types";
    const _default_12: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
    export default _default_12;
}
declare module "control/DatePicker/types" {
    import CalendarTypes from "control/Calendar/types";
    import FieldTypes from "basic/Field/types";
    namespace DatePickerTypes {
        interface Props extends FieldTypes.Props<HTMLInputElement, Classes>, InputProps {
            /**
             * Type for DatePicker
             * @default day
             */
            type?: CalendarTypes.GridType;
            /**
             * Property value could be a string
             * if you pass format property aswell
             * otherwise value should be instance of Date
             */
            value?: Date | string | [Date | string, Date | string];
            defaultValue?: Date | string | [Date | string, Date | string];
            /**
             * Format Date YYYY-MM-DD
             * @default YYYY-MM-DD
             */
            format?: string;
            /**
             * Min datetime that could be selected
             */
            minValue?: Date | string;
            /**
             * Max datetime that could be selected
             */
            maxValue?: Date | string;
            /**
             * Callback function will with Date object
             * or string if format property was passed.
             */
            onChange?: (dt?: Date, value?: string) => void;
            /**
             * Callback function will with Date object
             * or string if format property was passed.
             */
            onChangeRange?: (range: [Date | undefined, Date | undefined]) => void;
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
            locale?: CalendarTypes.Locale;
            /**
             * Hide today button
             */
            hideToday?: boolean;
            /**
             * Select date range
             */
            range?: boolean;
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
        type Classes = {
            /**
             * Drop view
             */
            drop: {
                isActive: boolean;
            };
            /**
             * Input view
             */
            input: void;
        } & Partial<FieldTypes.Classes>;
    }
    export default DatePickerTypes;
}
declare module "control/DatePicker/styles" {
    import Types from "control/DatePicker/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/DatePicker/index" {
    import React from 'react';
    import 'moment/locale/ru';
    import 'moment/locale/it';
    import 'moment/locale/fr';
    import 'moment/locale/de';
    import Types from "control/DatePicker/types";
    const _default_13: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_13;
}
declare module "control/Menu/types" {
    namespace MenuTypes {
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
            itemAs?: keyof HTMLElementTagNameMap;
        }
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Value selected by default
             */
            defaultValue?: MenuValue;
            /**
             * Current selected value for controlled component
             */
            value?: MenuValue;
            /**
             * Simple data items, you can use <Menu.Item/> insted
             */
            data?: React.ReactNode[];
            /**
             * Calls on value change
             */
            onChange?: (value?: MenuValue) => void;
            /**
             * Display as column
             * @default false
             */
            column?: boolean;
            /**
             * Defines how button look
             * @default filled
             */
            decoration?: MenuDecoration;
            /**
             * Flex direction of menu
             * @default row
             */
            direction?: MenuDirection;
            /**
             * Shape of each item
             * @default square
             */
            shape?: MenuShape;
            /**
             * Sizes of each item
             * @default m
             * @display Sizes
             * @link /props/#size
             */
            size?: Stage.Sizes;
            /**
             * Flex align
             * @default flex-start
             */
            align?: MenuAlign;
            /**
             * Menu Items
             */
            children?: React.ReactNode;
            /**
             * HTML element which will be used for an MenuItems
             */
            itemAs?: keyof HTMLElementTagNameMap;
        }
        type ClassState = {
            decoration: Props['decoration'];
        };
        type Classes = {
            /**
             * Root container
             */
            container: ClassState;
            /**
             * Menu item container
             */
            item: ClassState;
            /**
             * Group title container
             */
            group: ClassState;
            /**
             * Group title text
             */
            groupTitle: ClassState;
            /**
             * Submenu container
             */
            subMenu: ClassState;
            /**
             * Submenu content view
             */
            subMenuContent: ClassState;
            /**
             * Submenu arrow icon
             */
            subMenuArrow: ClassState;
            /**
             * Left child at menu item
             */
            leftChild: ClassState;
            /**
             * Middle child at menu item
             */
            middleChild: ClassState;
            /**
             * Right child at menu item
             */
            rightChild: ClassState;
        };
    }
    export default MenuTypes;
}
declare module "control/Menu/MenuItem/types" {
    import MenuTypes from "control/Menu/types";
    namespace MenuItemTypes {
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
            /**
             * Controlled item state
             */
            active?: boolean;
            /**
             * Display title of current item
             */
            title?: React.ReactNode;
            /**
             * Disables item
             * @default false
             */
            disabled?: boolean;
            /**
             * Item value, onChange will not call if empty
             */
            value?: MenuTypes.MenuValue;
            /**
             * Item view custom content
             */
            children?: React.ReactNode;
            /**
             * Left child at item view
             */
            leftChild?: React.ReactNode;
            /**
             * Left child at item view
             */
            rightChild?: React.ReactNode;
            /**
             * HTML element which is used as a container
             */
            as?: keyof HTMLElementTagNameMap;
            /**
             * Only for Anchors
             */
            href?: string;
        }
        type Classes = {
            /**
             * Item view
             */
            container: void;
        };
    }
    export default MenuItemTypes;
}
declare module "control/Menu/MenuItem/styles" {
    import Types from "control/Menu/MenuItem/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Menu/MenuItem/index" {
    import React from 'react';
    import Types from "control/Menu/MenuItem/types";
    const _default_14: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_14;
}
declare module "control/Menu/MenuGroup/types" {
    namespace MenuGroupTypes {
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
            /**
             * Title of group
             */
            title: React.ReactNode;
            children?: React.ReactNode;
            /**
             * Left child at group view
             */
            leftChild?: React.ReactNode;
            /**
             * Right child at group view
             */
            rightChild?: React.ReactNode;
        }
        type Classes = {
            /**
             * Group view
             */
            container: void;
        };
    }
    export default MenuGroupTypes;
}
declare module "control/Menu/MenuGroup/styles" {
    import Types from "control/Menu/MenuGroup/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Menu/MenuGroup/index" {
    import React from 'react';
    import Types from "control/Menu/MenuGroup/types";
    const _default_15: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_15;
}
declare module "control/Menu/styles" {
    import Types from "control/Menu/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Menu/Submenu/types" {
    namespace SubmenuTypes {
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
            /**
             * Title for menu item
             */
            title?: React.ReactNode;
            /**
             * Turn submenu off
             * @default false
             */
            disabled?: boolean;
            /**
             * Indent at left size
             */
            indent?: string;
            /**
             * Open state, for controlled component
             */
            open?: boolean;
            /**
             * Default open state
             */
            defaultOpen?: boolean;
            /**
             * Submenu items
             */
            children?: React.ReactNode;
            /**
             * Left child at submenu view
             */
            leftChild?: React.ReactNode;
            /**
             * Left child at submenu view
             */
            rightChild?: React.ReactNode;
        }
        type Classes = {
            /**
             * Root view
             */
            container: void;
        };
    }
    export default SubmenuTypes;
}
declare module "control/Menu/Submenu/styles" {
    import Types from "control/Menu/Submenu/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Menu/Submenu/index" {
    import React from 'react';
    import Types from "control/Menu/Submenu/types";
    const _default_16: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_16;
}
declare module "control/Menu/index" {
    import React from 'react';
    import MenuItemTypes from "control/Menu/MenuItem/types";
    import MenuGroupTypes from "control/Menu/MenuGroup/types";
    import SubmenuTypes from "control/Menu/Submenu/types";
    import Types from "control/Menu/types";
    const Context: React.Context<Types.Context>;
    /**
     * Hook used in every Menu.Item
     * most optimized method to change item value
     */
    export const useValue: (value?: Types.MenuValue | undefined) => [boolean, () => void, Types.Context];
    type ComplexMenu = React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>> & {
        Item: React.ForwardRefExoticComponent<MenuItemTypes.Props & React.RefAttributes<HTMLDivElement>>;
        Group: React.ForwardRefExoticComponent<MenuGroupTypes.Props & React.RefAttributes<HTMLDivElement>>;
        Submenu: React.ForwardRefExoticComponent<SubmenuTypes.Props & React.RefAttributes<HTMLDivElement>>;
    };
    const _default_17: ComplexMenu;
    export default _default_17;
}
declare module "control/Radio/types" {
    import CheckboxTypes from "control/Checkbox/types";
    namespace RadioTypes {
        type Props = CheckboxTypes.Props;
        type ClassState = CheckboxTypes.Props;
        type Classes = CheckboxTypes.Classes;
    }
    export default RadioTypes;
}
declare module "control/Radio/styles" {
    import Types from "control/Radio/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Radio/index" {
    import React from 'react';
    const _default_18: React.ForwardRefExoticComponent<import("control/Checkbox/types").default.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_18;
}
declare module "control/Range/types" {
    namespace RangeTypes {
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
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
        type Classes = {
            container: void;
            rail: void;
            track: void;
            thumb: void;
        };
    }
    export default RangeTypes;
}
declare module "control/Range/styles" {
    import Types from "control/Range/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Range/index" {
    import React from 'react';
    import Types from "control/Range/types";
    const _default_19: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
    export default _default_19;
}
declare module "control/Pageswitch/types" {
    namespace PageswitchTypes {
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
            /**
             * Total count of records
             */
            length: number;
            /**
             * Calls on page changed
             */
            onChange?: (pageNumber: number, startIndex: number) => void;
            /**
             * Records on page
             * @default 20
             */
            pageSize?: number;
            /**
             * Current page number, for controlled component
             */
            value?: number;
            /**
             * Default page number
             */
            defaultValue?: number;
        }
        type Classes = {
            /**
             * Root container
             */
            container: void;
            /**
             * Left/Right buttons
             */
            arrowButton: {
                disabled: boolean;
            };
            /**
             * Dots
             */
            separator: void;
            /**
             * Pagination button
             */
            pageButton: {
                current: boolean;
            };
            /**
             * Pagination button text
             */
            pageButtonText: {
                current: boolean;
            };
        };
    }
    export default PageswitchTypes;
}
declare module "control/Pageswitch/styles" {
    import Types from "control/Pageswitch/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Pageswitch/index" {
    import React from 'react';
    import Types from "control/Pageswitch/types";
    const _default_20: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_20;
}
declare module "control/Select/types" {
    import React from 'react';
    import FieldTypes from "basic/Field/types";
    import DropTypes from "layout/Drop/types";
    namespace SelectTypes {
        interface Option<T = string | number | boolean> {
            text: string;
            value: T;
        }
        interface Ref {
            isOpen: boolean;
            options: Option[];
            values: Option[];
            toggleOpen: () => void;
        }
        interface Props extends FieldTypes.Props<HTMLDivElement, Classes> {
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
             * Select's drop will appear only when start typing
             */
            openOnFocus?: boolean;
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
             * @default 16rem
             */
            maxScrollHeight?: string;
            /**
             * Animation of drop
             * @default { type: 'collapse' }
             */
            animation?: DropTypes.Props['animation'];
            /**
             * Any content in top of drop
             */
            dropHeader?: React.ReactNode;
            /**
             * Any content in bottom of drop
             */
            dropFooter?: React.ReactNode;
            /**
             * Event is fired when user change value
             */
            onChange?: (values: Option[], changedValue?: Option) => void;
            /**
             * Event is fired when user types in input
             */
            onSearch?: (value: string) => void;
            /**
             * Custom options render
             */
            renderOption?: (option: Option, selected: boolean) => React.ReactNode;
            /**
             * Custom miltiselect value render
             */
            renderMultiselectValue?: (option: Option) => React.ReactNode;
            /**
             * Display when empty
             */
            emptyText?: React.ReactNode;
        }
        type State = {
            selectedOptions: Option[];
            open: boolean;
            searchValue: string;
            empty: boolean;
            cursor: number;
        };
        type ClassState = {
            shape: Props['shape'];
            size: Props['size'];
            decoration: Props['decoration'];
            isOpen: boolean;
        };
        type Classes = {
            /**
             * Container for selected items
             */
            selectedArea: void;
            /**
             * Select's input
             */
            input: {
                searchMode: boolean;
                disableEvents: boolean;
            };
            /**
             * Container of selected option in multiselect
             */
            multiselectValue: void;
            /**
             * Close button for selected option in multiselect
             */
            multiselectValueClose: void;
            /**
             * Select's drop container
             */
            drop: void;
            /**
             * Container of every item in drop
             */
            option: {
                selected: boolean;
            };
            /**
             * Container view when list is empty
             */
            noOptions: void;
            /**
             * Container text when list is empty
             */
            noOptionsText: void;
            /**
             * Moveable part of scroll in drop
             */
            scrollContent: void;
            /**
             * Container of top content in drop
             */
            dropHeader: void;
            /**
             * Container of bottom content in drop
             */
            dropFooter: void;
        } & Partial<FieldTypes.Classes>;
    }
    export default SelectTypes;
}
declare module "control/Select/styles" {
    import Types from "control/Select/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Select/index" {
    import React from 'react';
    import Types from "control/Select/types";
    const _default_21: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
    export default _default_21;
}
declare module "control/Switch/types" {
    import CheckboxTypes from "control/Checkbox/types";
    namespace SwitchTypes {
        type Shape = 'square' | 'rounded' | 'round';
        type Props = CheckboxTypes.Props & {
            /**
             * Shape of switch
             * @default round
             */
            shape?: Shape;
            /**
             * Color of switch
             */
            color?: Stage.ColorProp;
            /**
             * Place icon to child
             */
            iconChild?: React.ReactNode;
        };
        type ClassState = CheckboxTypes.Props;
        type Classes = CheckboxTypes.Classes;
    }
    export default SwitchTypes;
}
declare module "control/Switch/styles" {
    import Types from "control/Switch/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "control/Switch/index" {
    import React from 'react';
    import Types from "control/Switch/types";
    const _default_22: React.ForwardRefExoticComponent<import("control/Checkbox/types").default.Props & {
        shape?: Types.Shape | undefined;
        color?: import("@stage-ui/system/props/color").ColorProp | undefined;
        iconChild?: React.ReactNode;
    } & React.RefAttributes<HTMLDivElement>>;
    export default _default_22;
}
declare module "control/TextField/types" {
    import { ChangeEventHandler } from 'react';
    import FieldTypes from "basic/Field/types";
    namespace TextFieldTypes {
        type InputTypes = 'email' | 'hidden' | 'number' | 'password' | 'reset' | 'search' | 'tel' | 'text' | 'url';
        type Ref = {
            clear: () => void;
            container: HTMLDivElement | null;
            input: HTMLInputElement | HTMLTextAreaElement | null;
        };
        interface Props extends FieldTypes.Props<HTMLInputElement, Classes>, InputProps, TextAreaProps {
            /**
             * Default input value
             */
            defaultValue?: string | number;
            /**
             * Enables textarea mode
             * @default false
             */
            multiline?: boolean;
            /**
             * Calls on input change
             */
            onChange?: ChangeEventHandler<HTMLInputElement>;
            /**
             * Enables textarea line numbers
             * @only if multiline true
             * @default false
             */
            leftChildNumber?: ((index: number) => React.ReactNode) | boolean;
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
        type Classes = {
            /**
             * TextField's input
             */
            input: {
                multiline: boolean;
                size: Stage.Sizes;
                disabled: boolean;
            };
            lineNumbers: void;
        } & Partial<FieldTypes.Classes>;
    }
    export default TextFieldTypes;
}
declare module "control/TextField/styles" {
    import Types from "control/TextField/types";
    const styles: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default styles;
}
declare module "control/TextField/index" {
    import React from 'react';
    import Types from "control/TextField/types";
    const _default_23: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
    export default _default_23;
}
declare module "control/Stepper/types" {
    namespace StepperTypes {
        interface StepperData {
            label?: React.ReactNode;
            text?: React.ReactNode;
        }
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
            data: StepperData[];
            size?: Stage.Sizes;
            current?: number;
            onChange?: (step: StepperData, stepIndex: number) => void;
        }
        type ClassState = {
            size: Stage.Sizes;
            active: boolean;
            complete: boolean;
            pointer: boolean;
        };
        type Classes = {
            /**
             * Root element
             */
            container: void;
            stepContainer: void;
            stepText: ClassState;
            step: ClassState;
            separator: ClassState;
        };
    }
    export default StepperTypes;
}
declare module "control/Stepper/styles" {
    import Types from "control/Stepper/types";
    const styles: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default styles;
}
declare module "control/Stepper/index" {
    import React from 'react';
    import Types from "control/Stepper/types";
    const _default_24: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_24;
}
declare module "control/Toggle/types" {
    namespace ToggleTypes {
        type OptionType = string | number | boolean;
        interface Option<T = OptionType> {
            text: string;
            value: T;
        }
        interface Ref {
            options: Option[];
            values: Option[];
        }
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Items contained in Toggle
             */
            options: Option[];
            /**
             * Prevents the user from interacting with the button
             */
            disabled?: boolean;
            /**
             * Event is fired when user change value
             */
            onChange?: (value: Option) => void;
            value?: Option;
            defaultValue?: Option;
            /**
             * Sizes of button
             * @display Sizes
             * @link /props/#size
             * @default m
             */
            size?: Stage.Sizes;
            /**
             * Shape of button
             * @default rounded
             */
            shape?: 'square' | 'rounded' | 'round';
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
            /**
             * Container of every item in drop
             */
            option: {
                selected: boolean;
            };
        };
    }
    export default ToggleTypes;
}
declare module "control/Toggle/styles" {
    import Types from "control/Toggle/types";
    const styles: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default styles;
}
declare module "control/Toggle/index" {
    import React from 'react';
    import Types from "control/Toggle/types";
    const _default_25: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_25;
}
declare module "data/Meter/types" {
    import MeterThumbTypes from "data/Meter/MeterThumb/types";
    namespace MeterTypes {
        type MeterDecoration = 'filled' | 'outline';
        type MeterShape = 'square' | 'round';
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Current value of meter, for controlled component
             */
            value?: number;
            /**
             * Sizes of meter
             * @display Sizes
             * @link /props/#size
             * @default m
             */
            size?: Stage.Sizes;
            /**
             * Defines how meter look
             * @default filled
             */
            decoration?: MeterDecoration;
            /**
             * Shape of meter
             * @default rounded
             */
            shape?: MeterShape;
            /**
             * Color of meter
             */
            color?: Stage.ColorProp;
            /**
             * Enabled progress animation
             * @default false
             */
            loading?: boolean;
            /**
             * Children thumbs
             */
            children?: React.ReactElement<MeterThumbTypes.Props>[];
        }
        type Classes = {
            /**
             * Root view
             */
            container: {
                shape: MeterShape;
                size: Stage.Sizes;
                decoration: MeterDecoration;
            };
            thumbWrapper: void;
            /**
             * Thumb view
             */
            thumb: {
                shape: MeterShape;
                size: Stage.Sizes;
            };
        };
    }
    export default MeterTypes;
}
declare module "data/Meter/MeterThumb/types" {
    import MeterTypes from "data/Meter/types";
    namespace MeterThumbTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Value for controlled compoents
             */
            value: MeterTypes.Props['value'];
            /**
             * Thumb color
             */
            color?: MeterTypes.Props['color'];
            /**
             * Enabled prgoress animation
             * @default false
             */
            loading?: MeterTypes.Props['loading'];
            shape?: MeterTypes.Props['shape'];
            size?: MeterTypes.Props['size'];
        }
        type Classes = {
            /**
             * Thumb view
             */
            container: MeterTypes.Classes['thumb'];
        };
    }
    export default MeterThumbTypes;
}
declare module "data/Meter/MeterThumb/styles" {
    import Types from "data/Meter/MeterThumb/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "data/Meter/MeterThumb/index" {
    import Types from "data/Meter/MeterThumb/types";
    const MeterThumb: (props: Types.Props) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default MeterThumb;
}
declare module "data/Meter/styles" {
    import Types from "data/Meter/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "data/Meter/index" {
    import React from 'react';
    import Thumb from "data/Meter/MeterThumb/index";
    import Types from "data/Meter/types";
    const _default_26: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>> & {
        Thumb: typeof Thumb;
    };
    export default _default_26;
}
declare module "data/Table/types" {
    import { ContainerDecorations } from "utils/containerDecorations";
    namespace TableTypes {
        type Props<R extends Row = Row> = RowEvents<R> & RowDelegates<R> & Stage.AllProps<HTMLDivElement, Classes> & {
            /**
             * Array of any data objects can be provided
             */
            data: R[];
            /**
             * Array of any selected data objects
             */
            dataKey?: keyof R;
            selected?: R[];
            /**
             * Settings of columns
             */
            columns: TableColumn<R>[];
            /**
             * Applies decoration on table
             * @default surface
             */
            decoration?: ContainerDecorations;
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
            rowDidMount?: (rowCtxItem: TableRowContext<R>) => void;
            rowDidUnmount?: (rowCtxItem: TableRowContext<R>) => void;
            /**
             * calls data changed by table
             */
            onChange?: (data: R[]) => void;
        };
        type Ref<R extends Row = Row> = HTMLTableElement & Omit<Methods<R>, 'getTableRowContext'>;
        type Classes = {
            /**
             * Root view
             */
            container: void;
            /**
             * Header cell element view <th>
             */
            headCell: {
                sort: boolean;
            };
            /**
             * Row view <tr>
             */
            row: {
                clickable: boolean;
                selected: boolean;
            };
            /**
             * Row cell <td>
             */
            rowCell: void;
            /**
             * Row cell drag anchor <div>
             */
            rowCellAnchor: void;
            /**
             * Expanded row <td span>
             */
            expandContainer: void;
            /**
             * Footer view of table
             */
            footer: void;
        };
        type Row = Record<string, any>;
        type Methods<R extends Row = Row> = {
            /**
             * Get table current data
             */
            getData: () => R[];
            /**
             * Get context for specific cell
             */
            getCellContext: (index: number, key: TableCellKey) => TableCellContext<R> | null;
            /**
             * Get context for specific row
             */
            getTableRowContext: (index: number) => TableCellContext<R> | null;
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
        };
        type RowMountType = 
        /**
         * Render all rows at onec
         */
        'default'
        /**
         * Render row only when it become visible
         */
         | 'whenBecomeVisible'
        /**
         * Render row when it become visible
         * and unmount when row away from screen
         */
         | 'onlyWhenVisible';
        type TableCellKey = number | string;
        type TableSortType = 'ASC' | 'DESC' | 'DEFAULT';
        type TableSortAsync = (sortType: TableSortType) => Promise<void>;
        type TableSortObject = {
            key: TableCellKey;
            sort: TableSortType;
        };
        type TablePaginationOptions = {
            pageSize: number;
            alwaysVisible?: boolean;
        };
        interface TableCellContext<R extends Row = Row> {
            /**
             * Current cell key
             * @readonly
             */
            key: TableCellKey;
            /**
             * Current row index
             * @readonly
             */
            index: number;
            /**
             * Current row data
             * @readonly
             */
            row: R;
            /**
             * Link on column configuration
             * @readonly
             */
            column: TableColumn<R> | null;
            /**
             * Raw data of cell
             * @readonly
             */
            value?: React.ReactNode | string | number | null;
            /**
             * Is current cell in modify mode
             * @readonly
             */
            isModify: boolean;
            /**
             * Is current cell in modify mode
             * @readonly
             */
            isCellModify: boolean;
            /**
             * Is current row expanded
             * @readonly
             */
            isExpand: boolean;
            /**
             * If row visible on screen
             * @readonly
             */
            isVisible: boolean;
            /**
             * Is current row selected
             * @readonly
             */
            isSelected: boolean;
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
            /**
             * Set row data and reload all data in table
             */
            setRow: (row: R) => void;
        }
        type TableRowContext<R extends Row = Row> = {
            /**
             * Row data
             */
            row: R;
            /**
             * true if element expanded
             * @default false
             */
            isExpand: boolean;
            /**
             * true if element visible
             * @default false
             */
            isVisible: boolean;
            /**
             * true if element selected
             * @default false
             */
            isSelected: boolean;
            /**
             * keys of cells that in modify mode
             */
            isCellModify: {
                [key: string]: boolean;
            };
            /**
             * Settings cells for modify
             * undefined - changes all row
             */
            setModifyState: {
                [key: string]: React.Dispatch<React.SetStateAction<boolean>>;
            };
            /**
             * Setting expand for row
             */
            setExpandComponent?: React.Dispatch<React.SetStateAction<React.ReactNode>>;
            /**
             * Forcing render row
             */
            setNeedDisplay?: (forceUnmount?: boolean) => boolean;
        };
        interface TableColumn<R extends Row = Row> {
            /**
             * Unique key of row like id/name or something like that
             */
            key: TableCellKey;
            /**
             * Title that will be placed at TableHead
             */
            title?: React.ReactNode;
            /**
             * Specific width of column
             */
            width?: number | string;
            /**
             * Custom render for a TableCell
             */
            render?: (cellContext: TableCellContext<R>, index: number) => React.ReactNode;
            /**
             * Enables sorting for a column
             * support ASC | DESC
             */
            sort?: TableSortType | TableSortAsync;
            /**
             * Primary key for mappings
             */
            primary?: boolean;
        }
        interface RowEvents<R extends Row = Row> {
            /**
             * Calls when ever row selected
             */
            onCheckboxClick?: (rows: TableRowContext<R>[], event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
            /**
             * Calls when ever row clicked
             */
            onRowClick?: (rowCtxItem: TableRowContext<R>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
            /**
             * Calls when row double-clicked
             */
            onRowDoubleClick?: (rowCtxItem: TableRowContext<R>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
            /**
             * Calls when mouse enters row
             */
            onRowMouseEnter?: (rowCtxItem: TableRowContext<R>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
            /**
             * Calls when mouse leaves row
             */
            onRowMouseLeave?: (rowCtxItem: TableRowContext<R>, event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
        }
        interface RowDelegates<R extends Row = Row> {
            /**
             * Delegate tells to TableRow what size it is.
             * Required when rowMountType not default
             */
            rowHeight?: (rowCtxItem: TableRowContext<R>) => number;
            /**
             * Delegate tells TableRow render or not
             */
            rowShouldRender?: (rowCtxItem: TableRowContext<R>) => boolean;
        }
        interface HeadCellProps<R extends Row = Row> {
            column: TableColumn<R>;
            styles: Stage.Classes<Classes>;
            toggleSort: (sort: TableSortObject) => Promise<unknown>;
        }
        interface CellProps<R extends Row = Row> {
            rowCtxItem: TableRowContext<R>;
            column: TableColumn<R>;
            rowIndex: number;
            styles: Stage.Classes<Classes>;
            getCellContext: Methods<R>['getCellContext'];
        }
        interface RowProps<R extends Row = Row> {
            rowCtxItem: TableRowContext<R>;
            columns: TableColumn<R>[];
            rowIndex: number;
            styles: Stage.Classes<Classes>;
            getCellContext: Methods<R>['getCellContext'];
            events: Record<string, React.MouseEventHandler<HTMLTableRowElement>>;
            onCheckboxClick?: React.MouseEventHandler<HTMLDivElement>;
            rowDidMount?: (rowCtxItem: TableRowContext<R>) => void;
            rowDidUnmount?: (rowCtxItem: TableRowContext<R>) => void;
            rowMountType?: Props<R>['rowMountType'];
            enableRenderOptimization: boolean;
            delegates: {
                rowHeight?: Props<R>['rowHeight'];
                rowShouldRender?: Props<R>['rowShouldRender'];
            };
        }
        interface FootProps<R extends Row = Row> {
            rowCtx: TableRowContext<R>[];
            columns: TableColumn<R>[];
            footerContent?: Props<R>['footer'];
            pagination?: TablePaginationOptions;
            onPageChange: (pageNumber: number) => void;
            styles: Stage.Classes<Classes>;
        }
    }
    export default TableTypes;
}
declare module "data/Table/styles" {
    import Types from "data/Table/types";
    const styles: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default styles;
}
declare module "data/Table/TableFoot" {
    import React from 'react';
    import Types from "data/Table/types";
    const _default_27: React.ForwardRefExoticComponent<Types.FootProps<Types.Row> & React.RefAttributes<HTMLTableCellElement>>;
    export default _default_27;
}
declare module "data/Table/TableHeadCell" {
    import React from 'react';
    import Types from "data/Table/types";
    const _default_28: React.ForwardRefExoticComponent<Types.HeadCellProps<Types.Row> & React.RefAttributes<HTMLTableDataCellElement>>;
    export default _default_28;
}
declare module "data/Table/TableCell" {
    import React from 'react';
    import Types from "data/Table/types";
    export const getTR: (target: HTMLElement | null) => HTMLTableRowElement | null;
    const _default_29: React.ForwardRefExoticComponent<Types.CellProps<Types.Row> & React.RefAttributes<HTMLTableCellElement>>;
    export default _default_29;
}
declare module "data/Table/TableRow" {
    import React from 'react';
    import Types from "data/Table/types";
    const _default_30: React.ForwardRefExoticComponent<Types.RowProps<Types.Row> & React.RefAttributes<HTMLTableRowElement>>;
    export default _default_30;
}
declare module "data/Table/index" {
    import React from 'react';
    import Types from "data/Table/types";
    const _default_31: <Row extends Types.Row>(props: Types.RowEvents<Row> & Types.RowDelegates<Row> & Stage.AllProps<HTMLDivElement, Types.Classes> & {
        data: Row[];
        dataKey?: keyof Row | undefined;
        selected?: Row[] | undefined;
        columns: Types.TableColumn<Row>[];
        decoration?: import("utils/containerDecorations").ContainerDecorations | undefined;
        pagination?: Types.TablePaginationOptions | undefined;
        footer?: React.ReactNode;
        rowMountType?: Types.RowMountType | undefined;
        rowDidMount?: ((rowCtxItem: Types.TableRowContext<Row>) => void) | undefined;
        rowDidUnmount?: ((rowCtxItem: Types.TableRowContext<Row>) => void) | undefined;
        onChange?: ((data: Row[]) => void) | undefined;
    } & {
        ref?: React.ForwardedRef<Types.Ref<Row>> | undefined;
    }) => React.ReactElement;
    export default _default_31;
}
declare module "data/CircularProgress/types" {
    namespace CircularProgressTypes {
        type CircularProgressShape = 'square' | 'round';
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Current value of CircularProgress, for controlled component
             */
            value?: number;
            /**
             * Sizes of CircularProgress
             * @display Sizes
             * @link /props/#size
             * @default m
             */
            size?: Stage.Sizes | string;
            /**
             * Shape of CircularProgress
             * @default rounded
             */
            shape?: CircularProgressShape;
            /**
             * Color of CircularProgress
             */
            color?: Stage.ColorProp;
            /**
             * Width of CircularProgress
             */
            strokeWidth?: string | number;
            /**
             * Background color for stroke of CircularProgress
             */
            strokeBackgroundColor?: Stage.ColorProp;
            /**
             * Show value
             */
            showValue?: boolean;
            children?: React.ReactNode;
            text?: string | number;
        }
        type State = {
            shape: CircularProgressShape;
            size: Stage.Sizes | string;
            sizeRem: string;
            sizePx: number;
            strokeWidthRem: string;
            strokeWidthPx: number;
            radius: number;
            circumference: number;
            dash: number;
        };
        type Classes = {
            container: State;
            svg: State;
            circle: State;
            circleBackground: State;
            text: State;
        };
    }
    export default CircularProgressTypes;
}
declare module "data/CircularProgress/styles" {
    import Types from "data/CircularProgress/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "data/CircularProgress/index" {
    import React from 'react';
    import Types from "data/CircularProgress/types";
    const _default_32: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_32;
}
declare module "data/ArcProgress/types" {
    namespace ArcProgressTypes {
        type ArcProgressShape = 'square' | 'round';
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Current value of ArcProgress, for controlled component
             */
            value?: number;
            /**
             * Sizes of ArcProgress
             * @display Sizes
             * @link /props/#size
             * @default m
             */
            size?: Stage.Sizes | string;
            /**
             * Shape of ArcProgress
             * @default rounded
             */
            shape?: ArcProgressShape;
            /**
             * Color of ArcProgress
             */
            color?: Stage.ColorProp;
            /**
             * Width of ArcProgress
             */
            strokeWidth?: string | number;
            /**
             * Background color for stroke of ArcProgress
             */
            strokeBackgroundColor?: Stage.ColorProp;
            children?: React.ReactNode;
        }
        type State = {
            shape: ArcProgressShape;
            size: Stage.Sizes | string;
            sizeRem: string;
            sizeHalfRem: string;
            sizePx: number;
            strokeWidthRem: string;
            strokeWidthPx: number;
            radius: number;
            circumference: number;
            dash: number;
            backgroundDash: number;
        };
        type Classes = {
            container: State;
            svg: State;
            arc: State;
            arcBackground: State;
        };
    }
    export default ArcProgressTypes;
}
declare module "data/ArcProgress/styles" {
    import Types from "data/ArcProgress/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "data/ArcProgress/index" {
    import React from 'react';
    import Types from "data/ArcProgress/types";
    const _default_33: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_33;
}
declare module "layout/Badge/types" {
    namespace BadgeTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Show in badge
             */
            content: React.ReactNode;
            /**
             * Badge size
             * @default m
             * @display Sizes
             * @link /props/#size
             */
            size?: Stage.Sizes;
            /**
             * Badge shape
             */
            shape?: 'square' | 'rounded' | 'round';
            /**
             * Where barge will be placed
             */
            align?: 'top' | 'bottom' | 'left' | 'right' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
            /**
             * The element whose badge will be shown
             */
            children?: React.ReactNode;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
            /**
             * Badge container
             */
            holder: {
                align: Props['align'];
                shape: Props['shape'];
            };
        };
    }
    export default BadgeTypes;
}
declare module "layout/Badge/styles" {
    import Types from "layout/Badge/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Badge/index" {
    import React from 'react';
    import Types from "layout/Badge/types";
    const _default_34: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_34;
}
declare module "layout/Block/types" {
    import { ContainerDecorations } from "utils/containerDecorations";
    import CSS from 'csstype';
    namespace BlockTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * HTML element which is used as a container
             */
            as?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main' | 'nav' | 'figure' | 'figcaption';
            /**
             * Defines how block looks
             */
            decoration?: ContainerDecorations;
            /**
             * Block's content
             */
            children?: React.ReactNode;
            /**
             * Shorthand for overflow style
             */
            overflow?: CSS.Properties['overflow'];
        }
        type Classes = {
            /**
             * Root element
             */
            container: {
                decoration?: ContainerDecorations;
            };
        };
    }
    export default BlockTypes;
}
declare module "layout/Block/styles" {
    import Types from "layout/Block/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Block/index" {
    import Types from "layout/Block/types";
    const _default_35: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
    export default _default_35;
}
declare module "layout/Flexbox/types" {
    import { ContainerDecorations } from "utils/containerDecorations";
    import { BreakpointProp } from '@stage-ui/system/props/breakpoint';
    import { FlexSelf } from '@stage-ui/system/props/types';
    import CSS from 'csstype';
    namespace FlexboxTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * Sets alignItems and justifyContent styles center
             * @BreakpointProp
             * @display boolean
             */
            centered?: BreakpointProp<boolean>;
            /**
             * Sets the align-self value on all direct children as a group.
             * In Flexbox, it controls the alignment of items on the Cross Axis
             * @BreakpointProp
             * @display inherit|auto|baseline|center|flex-start|flex-end|stretch
             * @see https://developer.mozilla.org/docs/Web/CSS/align-items
             */
            alignItems?: BreakpointProp<FlexSelf>;
            /**
             * Sets the distribution of space between and around content
             * items along a flexbox's cross-axis or a grid's block axis
             * @BreakpointProp
             * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
             * @see https://developer.mozilla.org/docs/Web/CSS/align-content
             */
            alignContent?: BreakpointProp<FlexSelf | FlexSpace>;
            /**
             * The place-content CSS property is a shorthand for
             * align-content and justify-content
             * @BreakpointProp
             * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
             * @see https://developer.mozilla.org/docs/Web/CSS/place-content
             */
            placeContent?: BreakpointProp<FlexSelf | FlexSpace>;
            /**
             * Defines how the browser distributes space between and around
             * content items along the main-axis of a flex container, and
             * the inline axis of a grid container.
             * @BreakpointProp
             * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
             */
            justifyContent?: BreakpointProp<FlexSelf | FlexSpace>;
            /**
             * Defines the default justify-self for all items of the box, giving them all
             * a default way of justifying each box along the appropriate axis
             * @BreakpointProp
             * @display inherit|auto|baseline|center|flex-start|flex-end|stretch|space-around|space-between|space-evenly
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
             */
            justifyItems?: BreakpointProp<FlexSelf | FlexSpace>;
            /**
             * Sets how flex items are placed in the flex container defining the
             * main axis and the direction (normal or reversed)
             * @BreakpointProp
             * @display inherit | initial | revert | unset | column | column-reverse | row | row-reverse
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
             */
            direction?: BreakpointProp<FlexDirection>;
            /**
             * Sets flex-direction style to column
             * @display boolean
             * @BreakpointProp
             */
            column?: BreakpointProp<boolean>;
            /**
             * Sets display style to inline-flex
             * @display boolean
             * @BreakpointProp
             */
            inline?: BreakpointProp<boolean>;
            /**
             * Sets whether flex items are forced onto one line or can wrap onto multiple lines
             * @display inherit | initial | revert | unset | nowrap | wrap | wrap-reverse
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
             */
            wrap?: BreakpointProp<FlexWrap>;
            /**
             * Shorthand property for flex-direction and flex-wrap styles
             * @display column | column-reverse | nowrap | row | row-reverse | wrap | wrap-reverse
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
             */
            flow?: BreakpointProp<CSS.Properties['flexFlow']>;
            /**
             * HTML element which is used as a container
             */
            as?: 'div' | 'span' | 'header' | 'footer' | 'article' | 'section' | 'aside' | 'main';
            /**
             * Defines how flexbox look
             */
            decoration?: ContainerDecorations;
            /**
             * Flexbox content
             */
            children?: React.ReactNode;
        }
        type Classes = {
            /**
             * Root element
             */
            container: {
                decoration?: ContainerDecorations;
            };
        };
        type FlexSpace = 'space-around' | 'space-between' | 'space-evenly';
        type FlexDirection = 'inherit' | 'initial' | 'revert' | 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse';
        type FlexWrap = 'inherit' | 'initial' | 'revert' | 'unset' | 'nowrap' | 'wrap' | 'wrap-reverse';
    }
    export default FlexboxTypes;
}
declare module "layout/Flexbox/styles" {
    import Types from "layout/Flexbox/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Flexbox/index" {
    import Types from "layout/Flexbox/types";
    const _default_36: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
    export default _default_36;
}
declare module "layout/Grid/types" {
    import { ContainerDecorations } from "utils/containerDecorations";
    import { BreakpointProp } from '@stage-ui/system/props/breakpoint';
    import CSS from 'csstype';
    namespace GridTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
             */
            templateColumns?: BreakpointProp<CSS.Properties['gridTemplateColumns']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
             */
            templateRows?: BreakpointProp<CSS.Properties['gridTemplateRows']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
             */
            templateAreas?: BreakpointProp<CSS.Properties['gridTemplateAreas']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-gap
             */
            columnGap?: BreakpointProp<CSS.Properties['gridColumnGap']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-gap
             */
            rowGap?: BreakpointProp<CSS.Properties['gridRowGap']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-gap
             */
            gap?: BreakpointProp<CSS.Properties['gridGap']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
             */
            autoColumns?: BreakpointProp<CSS.Properties['gridAutoColumns']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
             */
            autoRows?: BreakpointProp<CSS.Properties['gridAutoRows']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
             */
            autoFlow?: BreakpointProp<CSS.Properties['gridAutoFlow']>;
            /**
             * @display string
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/align-items
             */
            alignItems?: BreakpointProp<CSS.Properties['alignItems']>;
            /**
             * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/align-content
             */
            alignContent?: BreakpointProp<GridSpace | GridSelf>;
            /**
             * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
             */
            justifyContent?: BreakpointProp<GridSpace | GridSelf>;
            /**
             * @display inherit|auto|baseline|center|start|end|stretch|space-around|space-between|space-evenly
             * @BreakpointProp
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
             */
            justifyItems?: BreakpointProp<GridSpace | GridSelf>;
            inline?: BreakpointProp<boolean>;
            /**
             * Defines how grid look
             */
            decoration?: ContainerDecorations;
            /**
             * Grid content
             */
            children?: React.ReactNode;
        }
        type Classes = {
            /**
             * Root element
             */
            container: {
                decoration?: ContainerDecorations;
            };
        };
        /**
         * Used for grid attributes
         * CSS props have string witch kills helps at ide
         */
        type GridSpace = 'space-around' | 'space-between' | 'space-evenly';
        type GridSelf = 'inherit' | 'auto' | 'baseline' | 'center' | 'start' | 'end' | 'stretch';
    }
    export default GridTypes;
}
declare module "layout/Grid/styles" {
    import Types from "layout/Grid/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Grid/index" {
    import Types from "layout/Grid/types";
    const _default_37: import("react").ForwardRefExoticComponent<Types.Props & import("react").RefAttributes<HTMLDivElement>>;
    export default _default_37;
}
declare module "layout/ScrollView/types" {
    import React from 'react';
    namespace ScrollViewTypes {
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onScroll'> {
            /**
             * Any contant of scrollview
             */
            children?: React.ReactNode;
            /**
             * Display mode
             * @default scroll
             */
            mode?: 'always' | 'scroll' | 'hidden';
            /**
             * Custom ScrollBar color
             */
            color?: Stage.ColorProp;
            /**
             * Bars size
             * @default m
             * @display Sizes
             * @link /props/#size
             */
            size?: Stage.Sizes;
            /**
             * Bars shape
             * @default round
             */
            shape?: 'square' | 'round';
            /**
             * Position of X bar
             * @default bottom
             */
            xBarPosition?: 'bottom' | 'none';
            /**
             * Position of Y bar
             * @default right
             */
            yBarPosition?: 'left' | 'right' | 'none';
            /**
             * Scroll bar padding offset
             */
            barOffset?: number;
            /**
             * If true
             * onstagescroll will not dispatch
             */
            preventStageEvents?: boolean;
            /**
             * Calls when ever user scrolls
             */
            onScroll?: (event: ScrollViewEvent) => void;
            /**
             * Calls when elements with data-id attribut got visible
             * and stays at the top of visible area of ScrollView
             */
            watchElement?: WatchElementFn;
            /**
             * Include top offset when watchElement works
             */
            watchElementOffset?: number;
        }
        type Ref = {
            addWatchElementListener: (fn: WatchElementListner['fn'], options?: WatchElementListner['options']) => () => void;
            /**
             * Current state
             */
            getCurrentState: () => MemoParams;
            /**
             * Forcing update scrollview positions
             */
            updateScroll: () => void;
            /**
             * Scroll to top
             * @deprecated use scrollTop()
             */
            onScrollTop: () => void;
            /**
             * Scroll to top
             */
            scrollTo: (x: number, y: number, options?: ScrollToOptions) => void;
            /**
             * Scroll to top
             */
            scrollTop: (options?: ScrollToOptions) => void;
            /**
             * Scroll to bottom
             */
            scrollBottom: (options?: ScrollToOptions) => void;
            /**
             * Scroll to specific item by its data-id attribute
             * data-id attribute should be unique at document
             * if item not found function returns false
             */
            scrollToElement: (dataId: string, options?: ScrollToElementOptions) => boolean;
            /**
             * Ref to container element
             */
            container: HTMLDivElement | null;
        };
        type Classes = {
            /**
             * Root wrapper
             */
            wrapper: void;
            /**
             * Root view
             */
            container: void;
            /**
             * Content view
             */
            content: void;
            /**
             * Vertical scroll bar view
             */
            yBar: {
                active: boolean;
                shape: Props['shape'];
                size: Props['size'];
                position: Props['yBarPosition'];
            };
            /**
             * Vertical scroll thumb
             */
            yThumb: {
                active: boolean;
                shape: Props['shape'];
                size: Props['size'];
            };
            /**
             * Horizontal scroll bar view
             */
            xBar: {
                active: boolean;
                shape: Props['shape'];
                size: Props['size'];
                position: Props['xBarPosition'];
            };
            /**
             * Horizontal scroll thumb
             */
            xThumb: {
                active: boolean;
                shape: Props['shape'];
                size: Props['size'];
            };
        };
        interface ScrollHTMLDivElement extends HTMLDivElement {
            attributes: HTMLDivElement['attributes'] & {
                'data-scroll-id': Attr;
                'data-id': Attr;
            };
            style: CSSStyleDeclaration & {
                'scroll-behavior': string;
            };
        }
        type WatchElementFn = <T extends HTMLDivElement>(dataId: string, element: T) => void;
        type WatchElementListner = {
            fn: WatchElementFn;
            options?: {
                offset?: number;
            };
        };
        interface ScrollViewEvent {
            scrollTop: number;
            scrollLeft: number;
            scrollWidth: number;
            scrollHeight: number;
        }
        interface ScrollToOptions {
            /**
             * if true watchElement will not
             * call at this scrollUpdate
             */
            preventWatchElement?: boolean;
            /**
             * Smooth scroll
             * @only webkit
             */
            smooth?: boolean;
        }
        interface ScrollToElementOptions extends ScrollToOptions {
            /**
             * Offset px at top edge of element
             */
            offsetTop?: number;
        }
        interface ScrollParams extends ScrollToOptions {
            deltaX: number;
            deltaY: number;
            preventDefault: () => void;
            stopPropagation: () => void;
            cursorHandle?: boolean;
        }
        interface MemoParams {
            id: string;
            mounted: boolean;
            y: boolean;
            x: boolean;
            events: boolean;
            yBar: null | HTMLDivElement;
            yThumb: null | HTMLSpanElement;
            xBar: null | HTMLDivElement;
            xThumb: null | HTMLSpanElement;
            container: null | ScrollHTMLDivElement;
            content: null | HTMLDivElement;
            timeout?: number;
            mode: Props['mode'];
            watchElementId: string;
            watchElementListeners: Record<string, WatchElementListner>;
            preventWatchElement: boolean;
            preventWatchElementTimer?: number;
        }
    }
    export default ScrollViewTypes;
}
declare module "layout/ScrollView/styles" {
    import Types from "layout/ScrollView/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/ScrollView/index" {
    import React from 'react';
    import Types from "layout/ScrollView/types";
    const _default_38: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
    export default _default_38;
}
declare module "layout/Modal/types" {
    import React from 'react';
    import { AllEventProps, AttributeProps, BorderProps, ColorProps, CoreProps, LayoutProps, PaddingProps } from '@stage-ui/system/props/types';
    import { ResolvedStyleProps } from '@stage-ui/system/props';
    import ScrollViewTypes from "layout/ScrollView/types";
    namespace ModalTypes {
        type ModalDecoration = 'modal' | 'panel' | 'fullscreen' | 'rightPanel' | 'leftPanel';
        type ExtentedProps = AttributeProps & AllEventProps<HTMLDivElement> & CoreProps<Classes> & ColorProps & BorderProps & PaddingProps & LayoutProps;
        interface Ref {
            /**
             * Opens modal view with optionaly custom content
             */
            open: (render?: React.ReactElement | null) => void;
            /**
             * Closes modal, didClose arg called at closing complete
             */
            close: (didClose?: () => void) => void;
            /**
             * Fn for changing title
             */
            setTitle: (title: string) => void;
            /**
             * Fn for changing subtitle
             */
            setSubtitle: (subtitle: string) => void;
            /**
             * Fn for changing content if it custom
             */
            setRender: (render: React.ReactElement | null) => void;
            /**
             * Current custom content of modal view
             */
            render: React.ReactElement | null;
            /**
             * Current title of modal view
             */
            title?: string;
            /**
             * Current subtitle of modal view
             */
            subtitle?: string;
            /**
             * Ref for overlay view <div>
             */
            overlay: ScrollViewTypes.Ref;
            /**
             * Ref for view view <div>
             */
            window: HTMLDivElement;
        }
        interface Props extends ExtentedProps {
            /**
             * Title will be displaed at top
             */
            title?: string;
            /**
             * Subtitle will be displaed after title
             */
            subtitle?: string;
            /**
             * Content for modal view
             */
            children?: React.ReactNode;
            /**
             * Open state, for controlled component
             */
            opened?: boolean;
            /**
             * How view will looks like
             * @default modal
             */
            decoration?: ModalDecoration;
            /**
             * Sizes of view and its content
             * @default m
             * @display Sizes
             * @link /props/#size
             */
            size?: Stage.Sizes;
            /**
             * Disable header and hide it
             */
            hideHeader?: boolean;
            /**
             * If true then tap on overlay will close view
             * @default false
             */
            overlayClose?: boolean;
            /**
             * Fn calls before view close
             */
            onClose?: () => void;
            /**
             * Fn calls after view close
             */
            didClose?: () => void;
            /**
             * Fn calls before view open
             */
            onOpen?: () => void;
            /**
             * Fn calls after view open
             */
            didOpen?: () => void;
        }
        interface ModalOverlayProps {
            getStyles: () => {
                classes: Stage.Classes<Classes>;
                state: ClassState;
                styleProps: ResolvedStyleProps;
            };
            children?: React.ReactNode;
        }
        interface ModalWindowProps<Element extends HTMLElement> {
            title?: string;
            subtitle?: string;
            hideHeader?: boolean;
            children?: React.ReactNode;
            containerAttr?: React.HTMLAttributes<Element>;
            containerEvents?: any;
            onClosePressed: () => void;
            getStyles: () => {
                classes: Stage.Classes<Classes>;
                state: ClassState;
                styleProps: ResolvedStyleProps;
            };
        }
        interface ModalHeaderProps {
            title?: string;
            subtitle?: string;
            hideHeader?: boolean;
            onClosePressed: () => void;
            getStyles: () => {
                classes: Stage.Classes<Classes>;
                state: ClassState;
            };
        }
        type ClassState = {
            visible?: boolean;
            decoration?: Props['decoration'];
        };
        type Classes = {
            /**
             * Backside view
             */
            overlay: ClassState;
            /**
             * Wrapper of modal
             */
            wrapper: ClassState;
            /**
             * Window it self
             */
            window: ClassState;
            /**
             * Header of window
             */
            header: ClassState;
            /**
             * Close button
             */
            cross: ClassState;
        };
        type DialogRenderFn = (close: () => void) => React.ReactElement;
        interface DialogOptions extends Props {
            /**
             * if custom content filled then message and buttonText will be ignored
             */
            render: DialogRenderFn;
        }
    }
    export default ModalTypes;
}
declare module "layout/Modal/ModalOverlay" {
    import React from 'react';
    import ScrollViewTypes from "layout/ScrollView/types";
    import Types from "layout/Modal/types";
    const _default_39: React.ForwardRefExoticComponent<Types.ModalOverlayProps & React.RefAttributes<ScrollViewTypes.Ref>>;
    export default _default_39;
}
declare module "layout/Modal/ModalPortal" {
    import React from 'react';
    const _default_40: (props: {
        children: React.ReactNode;
    }) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default _default_40;
}
declare module "layout/Modal/ModalHeader" {
    import Types from "layout/Modal/types";
    const ModalHeader: (props: Types.ModalHeaderProps) => import("@emotion/react/jsx-runtime").JSX.Element | null;
    export default ModalHeader;
}
declare module "layout/Modal/ModalWindow" {
    import React from 'react';
    import Types from "layout/Modal/types";
    const ModalWindow: React.ForwardRefExoticComponent<Types.ModalWindowProps<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    export default ModalWindow;
}
declare module "layout/Modal/styles" {
    import Types from "layout/Modal/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Modal/index" {
    import React from 'react';
    import Types from "layout/Modal/types";
    const _default_41: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<Types.Ref>>;
    export default _default_41;
}
declare module "layout/Viewport/types" {
    import { Options } from '@emotion/cache';
    namespace ViewportTypes {
        interface Props {
            /**
             * Defines whether the viewport renders content inside the container
             * @default false
             */
            wrapper?: boolean;
            /**
             * Emotion cache options
             */
            cache?: Options;
            /**
             * Defines which theme to put in context.
             * @default auto
             */
            theme?: 'auto' | 'dark' | 'light' | Stage.Theme;
            /**
             * Set global CSS
             */
            global?: Stage.CSSInterpolation;
            /**
             * Application content
             */
            children?: React.ReactNode;
        }
        type MountArea = {
            className?: string;
        };
        type MountAreaPlacement = 'topLeft' | 'topCenter' | 'topRight' | 'centerLeft' | 'center' | 'centerRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
        type MountAreaElement = {
            key: string;
            children: React.ReactElement;
            placement: MountAreaPlacement;
        };
        type Context = {
            theme: Stage.Theme;
        };
        type Classes = {
            /**
             * Root element
             */
            container: void;
        };
        type Shared = {
            addElement: (children: React.ReactElement, key?: string, placement?: MountAreaPlacement) => string;
            removeElement: (key: string) => void;
        };
    }
    export default ViewportTypes;
}
declare module "layout/Notification/types" {
    import BlockTypes from "layout/Block/types";
    import ViewportTypes from "layout/Viewport/types";
    namespace NotificationTypes {
        interface Props extends Stage.AllProps<HTMLDivElement, Classes>, Omit<BlockTypes.Props, 'overrides'> {
            children?: React.ReactNode;
            /**
             * Position of notification block
             */
            placement?: ViewportTypes.MountAreaPlacement;
        }
        interface NotifyOptions extends Props {
            /**
             * Position of notification block
             */
            placement?: ViewportTypes.MountAreaPlacement;
            /**
             * Title of notification
             */
            title: string;
            /**
             * Message of notification
             */
            message: string;
            /**
             * Time in milliseconds after which the notification will be removed
             */
            timeout?: number;
            /**
             * if custom content filled then message and message will be ignored
             */
            render?: (close: () => void) => React.ReactElement;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
        };
    }
    export default NotificationTypes;
}
declare module "layout/Notification/styles" {
    import Types from "layout/Notification/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Notification/index" {
    import React from 'react';
    import Types from "layout/Notification/types";
    const _default_42: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_42;
}
declare module "layout/Popover/types" {
    import FlexboxTypes from "layout/Flexbox/types";
    namespace PopoverTypes {
        interface Props extends FlexboxTypes.Props {
            /**
             * Alignment of popover's arrow
             */
            align?: 'top' | 'bottom' | 'left' | 'right' | 'none';
            /**
             * offset arrow position
             */
            arrowOffset?: string | number;
            /**
             * Width/height of popover's arrow
             */
            arrowSize?: string | number;
        }
        type Classes = {
            /**
             * Root element
             */
            container: void;
            /**
             * Arrow container
             */
            arrow: {
                align: Props['align'];
            };
        };
    }
    export default PopoverTypes;
}
declare module "layout/Popover/styles" {
    import Types from "layout/Popover/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Popover/index" {
    import React from 'react';
    import Types from "layout/Popover/types";
    const _default_43: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_43;
}
declare module "layout/Tree/types" {
    namespace TreeTypes {
        type RenderChildOptions = {
            isOpen: boolean;
            isParentOpen: boolean;
            hasChilds: boolean;
            lvl: number;
        };
        type RenderChild = (options: RenderChildOptions) => React.ReactNode;
        interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
            label?: React.ReactNode | string | RenderChild;
            leftChild?: React.ReactNode | string | RenderChild;
            rightChild?: React.ReactNode | string | RenderChild;
            children?: React.ReactNode;
            decoration?: 'none' | 'finder';
            size?: Stage.Sizes;
            open?: boolean;
            defaultOpen?: boolean;
            indent?: boolean;
        }
        interface PrivateProps extends Props {
            __TYPE: 'Tree';
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
        type TreeElement = React.ReactElement<PrivateProps>;
        type ClassState = {
            hasChilds: boolean;
            decoration: Props['decoration'];
            size: Props['size'];
        };
        type Classes = {
            container: ClassState;
            row: ClassState;
            label: ClassState;
            arrow: ClassState;
            child: {
                isOpen: boolean;
            };
        };
    }
    export default TreeTypes;
}
declare module "layout/Tree/styles" {
    import Types from "layout/Tree/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.PrivateProps>;
    export default createClasses;
}
declare module "layout/Tree/TreeLabel" {
    import Types from "layout/Tree/types";
    const TreeLabel: (props: Types.TreeLabelProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default TreeLabel;
}
declare module "layout/Tree/TreeLeftChild" {
    import Types from "layout/Tree/types";
    const TreeLeftChild: (props: Types.TreeLeftChildProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default TreeLeftChild;
}
declare module "layout/Tree/TreeRightChild" {
    import Types from "layout/Tree/types";
    const TreeRightChild: (props: Types.TreeRightChildProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default TreeRightChild;
}
declare module "layout/Tree/index" {
    import React from 'react';
    import Types from "layout/Tree/types";
    const _default_44: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_44;
}
declare module "layout/Split/types" {
    import React from 'react';
    namespace SplitTypes {
        interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onMove' | 'onChange'> {
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
        interface SeparatorProps {
            areaSize: number;
            defaultVertical: boolean;
            container: () => Ref;
            prev: () => Ref;
            next: () => Ref;
        }
        type Classes = {
            container: {
                vertical: boolean;
            };
            test: void;
        };
        type Ref = React.RefObject<HTMLDivElement & {
            vertical?: boolean;
            onMove?: () => void;
            onChange?: () => void;
        }>;
    }
    export default SplitTypes;
}
declare module "layout/Split/Separator" {
    import Types from "layout/Split/types";
    const Separator: (props: Types.SeparatorProps) => import("@emotion/react/jsx-runtime").JSX.Element;
    export default Separator;
}
declare module "layout/Split/styles" {
    import Types from "layout/Split/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Split/index" {
    import React from 'react';
    import Types from "layout/Split/types";
    const _default_45: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_45;
}
declare module "hooks/misc/dropDelegate" {
    type DropDelegate = {
        visible: boolean;
        close: () => void;
    };
    export const dropDelegate: DropDelegate;
}
declare module "hooks/misc/dropRef" {
    import React from 'react';
    import FlexboxTypes from "layout/Flexbox/types";
    export type Drop = (node: React.ReactNode) => void;
    export type UseDropOptions = {
        clickMode?: 'toggle' | 'open';
        containerProps?: FlexboxTypes.Props;
        pointerEvents?: boolean;
        screenPadding?: number;
        dropOffsetX?: number;
        dropOffsetY?: number;
        onOpen?: () => void;
        onClose?: () => void;
    };
    type CloseFn = () => void;
    export type DropNode = React.ReactNode | ((close: CloseFn) => React.ReactNode);
    export type DropRef = {
        toggle: (id: number, e: MouseEvent | null, dropNode: DropNode, options: UseDropOptions) => void;
        move: (e: MouseEvent | null) => void;
    };
    export const dropRef: React.RefObject<DropRef>;
}
declare module "hooks/components/DropRenderer" {
    export const DropRenderer: () => import("@emotion/react/jsx-runtime").JSX.Element;
}
declare module "layout/Viewport/MountArea" {
    import { FC } from 'react';
    import ViewportTypes from "layout/Viewport/types";
    export const ViewportShared: ViewportTypes.Shared;
    const MountArea: FC<ViewportTypes.MountArea>;
    export default MountArea;
}
declare module "layout/Viewport/styles" {
    import Types from "layout/Viewport/types";
    const createClasses: Stage.CreateClasses<Types.Classes, Types.Props>;
    export default createClasses;
}
declare module "layout/Viewport/index" {
    import React from 'react';
    import Types from "layout/Viewport/types";
    const _default_46: React.ForwardRefExoticComponent<Types.Props & React.RefAttributes<HTMLDivElement>>;
    export default _default_46;
}
declare module "utils/modal" {
    import ModalTypes from "layout/Modal/types";
    const _default_47: (render: ModalTypes.DialogOptions | ModalTypes.DialogRenderFn) => void;
    export default _default_47;
}
declare module "utils/dialog" {
    import ModalTypes from "layout/Modal/types";
    const _default_48: (render: ModalTypes.DialogOptions | ModalTypes.DialogRenderFn) => void;
    /**
     * @deprecated use utils/modal
     */
    export default _default_48;
}
declare module "utils/notify" {
    import NotificationType from "layout/Notification/types";
    const _default_49: (options: NotificationType.NotifyOptions) => void;
    export default _default_49;
}
declare module "index" {
    /**
     * Content
     */
    export { default as Divider } from "content/Divider/index";
    export { default as Spinner } from "content/Spinner/index";
    export { default as Article } from "content/Article/index";
    export { default as Header } from "content/Header/index";
    export { default as Paragraph } from "content/Paragraph/index";
    export { default as Text } from "content/Text/index";
    export { default as Link } from "content/Link/index";
    export { default as Toast } from "content/Toast/index";
    /**
     * Control
     */
    export { default as Button } from "control/Button/index";
    export { default as Calendar } from "control/Calendar/index";
    export { default as Checkbox } from "control/Checkbox/index";
    export { default as DatePicker } from "control/DatePicker/index";
    export { default as Menu } from "control/Menu/index";
    export { default as Radio } from "control/Radio/index";
    export { default as Range } from "control/Range/index";
    export { default as Pageswitch } from "control/Pageswitch/index";
    export { default as Select } from "control/Select/index";
    export { default as Switch } from "control/Switch/index";
    export { default as TextField } from "control/TextField/index";
    export { default as Stepper } from "control/Stepper/index";
    export { default as Toggle } from "control/Toggle/index";
    /**
     * Data
     */
    export { default as Meter } from "data/Meter/index";
    export { default as Table } from "data/Table/index";
    export { default as CircularProgress } from "data/CircularProgress/index";
    export { default as ArcProgress } from "data/ArcProgress/index";
    /**
     * Layout
     */
    export { default as Badge } from "layout/Badge/index";
    export { default as Block } from "layout/Block/index";
    export { default as Drop } from "layout/Drop/index";
    export { default as Flexbox } from "layout/Flexbox/index";
    export { default as Grid } from "layout/Grid/index";
    export { default as Modal } from "layout/Modal/index";
    export { default as Notification } from "layout/Notification/index";
    export { default as Popover } from "layout/Popover/index";
    export { default as Tree } from "layout/Tree/index";
    export { default as ScrollView } from "layout/ScrollView/index";
    export { default as Split } from "layout/Split/index";
    export { default as Viewport } from "layout/Viewport/index";
    /**
     * Utils
     */
    export { default as dialog } from "utils/dialog";
    export { default as modal } from "utils/modal";
    export { default as notify } from "utils/notify";
    /**
     * Hooks
     */
    export { useDrop } from "hooks/useDrop";
    export { useDropMenu } from "hooks/useDropMenu";
    export { useDropOver } from "hooks/useDropOver";
    /**
     * System links
     */
    export { dark as darkTheme } from '@stage-ui/system/themes';
    export { light as lightTheme } from '@stage-ui/system/themes';
    export { useTheme } from '@stage-ui/system';
    export { createTheme } from '@stage-ui/system';
    export { useBreakpoints } from '@stage-ui/system/';
    export { useAppearance } from '@stage-ui/system/';
}
