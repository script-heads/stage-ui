/**
 * types.tsx
 * author: I.Trikoz
 */
import { Interpolation } from '@emotion/core';
import { Moment } from 'moment';
import { CSSProperties } from 'react';
import Global from '@flow-ui/core/types';

declare namespace DatePickerTypes {

    export type GridType = "year" | "month" | "day"
    export type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de'

    export interface Props extends Global.FieldProps {
        /**
         * Type for DatePicker
         * @default day
         */
        type?: GridType
        /**
         * Property value could be a string
         * if you pass format property aswell
         * otherwise value should be instance of Date
         */
        value?: Moment | Date | string
        /**
         * Format moment YYYY-MM-DD 
         * @default YYYY-MM-DD
         */
        format?: string
        /**
         * Min datetime that could be selected
         */
        minValue?: Moment | Date | string
        /**
         * Max datetime that could be selected
         */
        maxValue?: Moment | Date | string
        /**
         * Callback function will with Date object
         * or string if format property was passed.
         */
        onChange?: (moment: Moment, value: string) => void
        /**
         * Do not close datepicker on change
         * latest value
         */
        stayOpen?: boolean
        /**
         * Enable mask input
         */
        masked?: boolean
        /**
         * @default ru
         */
        locale?: Locale
        /**
         * Hide today button
         */
        hideToday?: boolean
    }

    export interface DateGridProps {
        hideToday: boolean
        value: Moment
        minValue: Moment
        maxValue: Moment
        onChange: (date: Moment) => void
        styles: any
        type: GridType
    }
    export interface DateGridCalendarProps {
        value: Moment
        tmp: Moment
        minValue: Moment
        maxValue: Moment
        active: Moment
        onClick?: () => void
        style?: CSSProperties
        styles: any
    }

    export interface DateGridTitleProps {
        value: Moment
        minValue: Moment
        maxValue: Moment
        gridType: GridType
        onNext: () => void
        onPrevious: () => void
        onGridTypeChange: (type: GridType) => void
        styles: any
    }

    export interface Styles {
        textFieldWrapper?: Interpolation
        textFieldOkButton?: Interpolation
        dateGrind?: Interpolation
        weekDay?: Interpolation
        title?: Interpolation
        gridBlock?: Interpolation
    }
}

export default DatePickerTypes;