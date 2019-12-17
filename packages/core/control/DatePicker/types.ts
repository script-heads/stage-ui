/**
 * types.tsx
 * author: I.Trikoz
 */
import { Moment } from 'moment'
import { CSSProperties } from 'react'
import Shared from '@flow-ui/core/types'
import FieldTypes from '../../misc/hocs/Field/types'

declare namespace DatePickerTypes {

    type GridType = 'year' | 'month' | 'day'
    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de'

    interface Props extends FieldTypes.Props, InputProps {
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
        defaultValue?: Moment | Date | string
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

    interface DateGridProps {
        hideToday: boolean
        value: Moment
        minValue: Moment
        maxValue: Moment
        onChange: (date: Moment) => void
        styles: Shared.FlowStyles<Overrides>
        type: GridType
    }
    
    interface DateGridCalendarProps {
        value: Moment
        tmp: Moment
        minValue: Moment
        maxValue: Moment
        active: Moment
        onClick?: () => void
        style?: CSSProperties
        styles: Shared.FlowStyles<Overrides>
    }

    interface DateGridTitleProps {
        value: Moment
        minValue: Moment
        maxValue: Moment
        gridType: GridType
        onNext: () => void
        onPrevious: () => void
        onGridTypeChange: (type: GridType) => void
        styles: Shared.FlowStyles<Overrides>
    }

    interface InputProps {
        autoComplete?: string
        autoFocus?: boolean
        list?: string
        name?: string
        placeholder?: string
        pattern?: string
        readOnly?: boolean
        required?: boolean

        form?: string
        formAction?: string
        formEncType?: string
        formMethod?: string
        formNoValidate?: boolean
        formTarget?: string
    }

    interface Overrides extends FieldTypes.Overrides {
        dateGrind: void
        weekDay: void
        title: void
        gridBlock: {
            isActive: Boolean
            isCurrent: boolean
            isDisabled: boolean
            isCurrentMonth: boolean
        }
        drop: {
            isActive: boolean
        }
        input: {
            isLabelOverlay: boolean
        }
    }
}

export default DatePickerTypes