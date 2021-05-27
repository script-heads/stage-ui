import SystemTypes from '@stage-ui/system/types'
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

    /**
     * Custom render options
     */
    type RenderOptions = {
        now: Moment
        self: Moment
        active: Moment
        isActive: boolean
        isCurrent: boolean
        isDisabled: boolean
        onClick: () => void
    }
    /**
     * Options for prop onMonthRender
     */
    type YearRenderOptions = RenderOptions
    /**
     * Options for prop onMonthRender
     */
    type MonthRenderOptions = RenderOptions
    /**
     * Options for prop onDayRender
     */
    type DayRenderOptions = RenderOptions & {
        isCurrentMonth: boolean
    }

    interface Props extends Omit<AllProps<HTMLDivElement, Styles>, 'onChange'> {
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
         * Callback will fire on user click day
         * moment date will be current date that
         * used just did set
         */
        onChange?: (moment: Moment) => void
        /**
         * Callback will fire when user change any view at calendary
         * moment date will be temp date
         */
        onViewChange?: (moment: Moment) => void
        /**
         * @default ru
         */
        locale?: Locale
        /**
         * Hide today button
         */
        hideToday?: boolean
        /**
         * Custom render Year
         */
        onYearRender?: (options: YearRenderOptions) => React.ReactNode
        /**
         * Custom render Month
         */
        onMonthRender?: (options: MonthRenderOptions) => React.ReactNode
        /**
         * Custom render Day
         */
        onDayRender?: (options: DayRenderOptions) => React.ReactNode
        /**
         * Header element
         */
        header?: React.ReactNode
        /**
         * Footer element
         */
        footer?: React.ReactNode
    }

    interface DateGridProps {
        attributes: any
        hideToday: boolean
        value: Moment
        minValue: Moment
        maxValue: Moment
        onChange: (date: Moment) => void
        onViewChange?: (date: Moment) => void
        styles: ComponentStyles<Styles>
        type: GridType
        onYearRender?: (options: YearRenderOptions) => React.ReactNode
        onMonthRender?: (options: MonthRenderOptions) => React.ReactNode
        onDayRender?: (options: DayRenderOptions) => React.ReactNode
        header?: React.ReactNode
        footer?: React.ReactNode
    }

    interface DateGridCalendarProps {
        value: Moment
        tmp: Moment
        minValue: Moment
        maxValue: Moment
        active: Moment
        onClick: () => void
        style?: CSSProperties
        styles: ComponentStyles<Styles>
        onYearRender?: (options: YearRenderOptions) => React.ReactNode
        onMonthRender?: (options: MonthRenderOptions) => React.ReactNode
        onDayRender?: (options: DayRenderOptions) => React.ReactNode
    }

    interface DateGridTitleProps {
        value: Moment
        minValue: Moment
        maxValue: Moment
        gridType: GridType
        onNext: () => void
        onPrevious: () => void
        onGridTypeChange: (type: GridType) => void
        styles: ComponentStyles<Styles>
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