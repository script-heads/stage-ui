import WhaleTypes from '@flow-ui/whale/types'
import { Moment } from 'moment'
import { CSSProperties } from 'react'

declare namespace CalendarTypes {
    /**
     * Type of calendar view
     */
    type GridType = 'year' | 'month' | 'day'
    /**
     * Calendar locale
     */
    type Locale = 'en' | 'ru' | 'it' | 'fr' | 'de'

    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
        /**
         * Type for Calendar
         * @default day
         */
        type?: GridType
        /**
         * Date or Moment value for controlled component
         */
        value?: Moment | Date
        /**
         * Date or Moment value for uncontrolled component
         */
        defaultValue?: Moment | Date
        /**
         * Min datetime that could be selected
         */
        minValue?: Moment | Date
        /**
         * Max datetime that could be selected
         */
        maxValue?: Moment | Date
        /**
         * Callback function will with Date object
         */
        onChange?: (moment: Moment) => void
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
        attributes: any
        hideToday: boolean
        value: Moment
        minValue: Moment
        maxValue: Moment
        onChange: (date: Moment) => void
        styles: WhaleTypes.ComponentStyles<Styles>
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
        styles: WhaleTypes.ComponentStyles<Styles>
    }

    interface DateGridTitleProps {
        value: Moment
        minValue: Moment
        maxValue: Moment
        gridType: GridType
        onNext: () => void
        onPrevious: () => void
        onGridTypeChange: (type: GridType) => void
        styles: WhaleTypes.ComponentStyles<Styles>
    }

    interface Styles {
        /**
         * Root container
         */
        dateGrid: void
        /**
         * Main title block
         */
        title: void
        /**
         * Days of week block
         */
        weekDay: void
        /**
         * Each square day block
         */
        day: {
            isActive: Boolean
            isCurrent: boolean
            isDisabled: boolean
            isCurrentMonth: boolean
        }
    }
}

export default CalendarTypes