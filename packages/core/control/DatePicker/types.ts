/**
 * types.tsx
 * author: I.Trikoz
 */
import { Moment } from 'moment';
import { Interpolation } from '@emotion/core';
import Global from '../../types';

declare namespace DatePickerTypes {
    export interface Props extends Global.FieldProps {
        /**
         * Type of render
         */
        type?: 'textfield' | 'display'
        /**
         * Property value could be a string
         * if you pass format property aswell
         * otherwise value should be instance of Moment
         */
        value?: Moment | string
        /**
         * String like YYYY-MM-DD etc
         */
        format?: string
        /**
         * Min datetime that could be selected
         */
        minValue?: Moment
        /**
         * Max datetime that could be selected
         */
        maxValue?: Moment
        /**
         * Callback function will with Moment object
         * or string if format property was passed.
         */
        onChange?: (date: Moment, formatedValue: string) => void
    }

    export interface MonthGridProps {
        value: Moment,
        minValue?: Moment
        maxValue?: Moment
        onChange: (date: Moment) => void
        styles: any
    }
    export interface MonthGridDayProps {
        /**
         * Currect active day
         * should be moment object
         */
        active: Moment
        /**
         * Day that should be render
         */
        day: Moment
        minValue?: Moment
        maxValue?: Moment
        onClick?: () => void
        styles: any
    }

    export interface MonthGridTitleProps {
        /**
         * Current date
         */
        date: Moment
        /**
         * Turn off weeks
         */
        disaplayWeeks?: boolean
        /**
         * Callback function with Moment object
         * of changed date, calls after Next or Prev pressed
         */
        onChange?: (date: Moment) => void
        styles: any
    }

    export interface Overrides {
        textFieldWrapper?: Interpolation
        textFieldOkButton?: Interpolation
        monthGrid?: Interpolation
        weekDay?: Interpolation
        title?: Interpolation
        monthTitle?: Interpolation
        yearTitle?: Interpolation
        day?: Interpolation
    }
}

export default DatePickerTypes;