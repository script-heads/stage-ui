/**
 * types.tsx
 * author: I.Trikoz
 */
import { DateTime } from 'luxon';

import { Interpolation } from '@emotion/core';
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
        value?: Date | string
        /**
         * String like YYYY-MM-DD etc
         */
        format?: string
        /**
         * Min datetime that could be selected
         */
        minValue?: Date
        /**
         * Max datetime that could be selected
         */
        maxValue?: Date
        /**
         * Callback function will with Date object
         * or string if format property was passed.
         */
        onChange?: (date: Date, formatedValue: string, luxon: DateTime) => void
        /**
         * Enable mask input
         */
        masked?: boolean

        locale?: Locale
    }

    export interface DateGridProps {
        locale: Locale
        date: DateTime,
        minValue: DateTime
        maxValue: DateTime
        onChange: (date: DateTime) => void
        styles: any
    }
    export interface DateGridDayProps {
        locale: Locale
        active: DateTime
        day: DateTime
        minValue: DateTime
        maxValue: DateTime
        onClick?: () => void
        styles: any
    }
    export interface DateGridMonthProps {
        locale: Locale
        active: DateTime
        minValue: DateTime
        maxValue: DateTime
        onClick?: () => void
        styles: any
        month: DateTime
    }
    export interface DateGridYearProps {
        locale: Locale
        active: DateTime
        minValue: DateTime
        maxValue: DateTime
        onClick?: () => void
        styles: any
        year: DateTime
    }

    export interface DateGridTitleProps {
        locale: Locale
        date: DateTime
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