/**
 * types.tsx
 * author: I.Trikoz
 */
import { Interpolation } from '@emotion/core';
import { Moment } from 'moment';
import { CSSProperties } from 'react';
import Global from '../../types';

declare namespace DatePickerTypes {

    export type GridType = "year" | "month" | "day"
    export type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de'

    export interface Props extends Global.FieldProps {
        /**
         * Property value could be a string
         * if you pass format property aswell
         * otherwise value should be instance of Date
         */
        value?: Moment | Date | string
        /**
         * String like YYYY-MM-DD etc
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
         * Enable mask input
         */
        masked?: boolean

        locale?: Locale
        /**
         * Hide today button
         */
        hideToday?: boolean
    }

    export interface DateGridProps {
        hideToday: boolean
        date: Moment
        minValue: Moment
        maxValue: Moment
        onChange: (date: Moment) => void
        styles: any
    }
    export interface DateGridCalendarProps {
        active: Moment
        minValue: Moment
        maxValue: Moment
        onClick?: () => void
        style?: CSSProperties
        value: Moment
        styles: any
    }

    export interface DateGridTitleProps {
        date: Moment
        gridType: GridType
        onNext: () => void
        onPrevious: () => void
        onGridTypeChange: (type: GridType) => void
        styles: any
    }

    export interface Overrides {
        textFieldWrapper?: Interpolation
        textFieldOkButton?: Interpolation
        dateGrind?: Interpolation
        weekDay?: Interpolation
        title?: Interpolation
        gridBlock?: Interpolation
    }
}

export default DatePickerTypes;