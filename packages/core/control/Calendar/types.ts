import { CSSProperties } from 'react'

import { Moment } from 'moment'

declare namespace CalendarTypes {
  /**
   * Type of calendar view
   */
  type GridType = 'year' | 'month' | 'day' | 'week'
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
    active: Moment | undefined
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

  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
    /**
     * Sizes of field
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Type for Calendar
     * @default day
     */
    type?: GridType
    /**
     * Date or Moment value for controlled component
     */
    value?: Date | [Date | undefined, Date | undefined]
    /**
     * Date or Moment value for uncontrolled component
     */
    defaultValue?: Date | [Date, Date]
    /**
     * Min datetime that could be selected
     */
    minValue?: Date
    /**
     * Max datetime that could be selected
     */
    maxValue?: Date
    /**
     * Callback will fire on user click day
     * moment date will be current date that
     * used just did set
     */
    onChange?: (startDt: Date, endDt?: Date) => void
    /**
     * Callback will fire when user change any view at calendary
     * moment date will be temp date
     */
    onViewChange?: (date: Date) => void
    /**
     * @default ru
     */
    locale?: Locale
    /**
     * Hide today button
     */
    hideToday?: boolean
    /**
     * Hide neighbor months days
     */
    hideNeighborMonths?: boolean
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
    /**
     * Select range date
     */
    range?: boolean
  }

  interface DateGridProps {
    attributes: any
    styleProps: any
    hideToday: boolean
    hideNeighborMonths: boolean
    value: [Moment | undefined, Moment | undefined]
    minValue: Moment
    maxValue: Moment
    onChange: (startDate: Moment, endDate?: Moment) => void
    onViewChange: (dt: Moment) => void
    classes: Stage.Classes<Classes>
    type: GridType
    onYearRender?: (options: YearRenderOptions) => React.ReactNode
    onMonthRender?: (options: MonthRenderOptions) => React.ReactNode
    onDayRender?: (options: DayRenderOptions) => React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
    size?: Stage.Sizes
    range?: boolean
  }

  interface DateGridCalendarProps {
    type: GridType
    minValue: Moment
    maxValue: Moment
    onClick: () => void
    style?: CSSProperties
    size?: Stage.Sizes
    classes: Stage.Classes<Classes>
  }

  interface DateGridDayProps extends Omit<DateGridCalendarProps, 'onClick'> {
    hideNeighborMonths: boolean
    day: Moment
    viewDate: Moment
    tmp: [Moment, Moment | undefined]
    active: [Moment | undefined, Moment | undefined]
    size?: Stage.Sizes
    onDayRender?: (options: DayRenderOptions) => React.ReactNode
    onClick: (day: Moment) => void
  }

  interface DateGridWeekProps extends Omit<DateGridDayProps, 'day'> {
    size?: Stage.Sizes
    week: Moment[]
  }

  interface DateGridMonthProps extends DateGridCalendarProps {
    value: Moment
    tmp: Moment
    active: Moment | undefined
    size?: Stage.Sizes
    onMonthRender?: (options: MonthRenderOptions) => React.ReactNode
  }

  interface DateGridYearProps extends DateGridCalendarProps {
    value: Moment
    tmp: Moment
    active: Moment | undefined
    size?: Stage.Sizes
    onYearRender?: (options: YearRenderOptions) => React.ReactNode
  }

  interface DateGridTitleProps {
    value: Moment
    minValue: Moment
    maxValue: Moment
    gridType: GridType
    onNext: () => void
    onPrevious: () => void
    onGridTypeChange: (type: GridType) => void
    classes: Stage.Classes<Classes>
    size?: Stage.Sizes
  }

  type Classes = {
    /**
     * Root container
     */
    dateGrid: void
    /**
     * Days of week block
     */
    weekDay: void
    /**
     * Each square month or year block
     */
    monthOrYear: {
      isActive: boolean
      isCurrent: boolean
      isDisabled: boolean
    }
    /**
     * Each square week block
     */
    week: {
      isCurrent: boolean
      isActive: boolean
      isWeekType: boolean
    }
    /**
     * Each square day block
     * for day/week view
     */
    day: {
      isActive: boolean
      isCurrent: boolean
      isRange: boolean
      isRangeStart: boolean
      isRangeEnd: boolean
      isDisabled: boolean
      isHidden: boolean
      isCurrentMonth: boolean
      isWeekend?: boolean
      isWeekType?: boolean
    }
  }
}

export default CalendarTypes
