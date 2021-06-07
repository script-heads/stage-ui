import { Classes } from '@stage-ui/system/hooks/useSystem'
import { Moment } from 'moment'
import { CSSProperties } from 'react'

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

  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
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
  }

  interface DateGridProps {
    attributes: any
    hideToday: boolean
    hideNeighborMonths: boolean
    value: Moment
    minValue: Moment
    maxValue: Moment
    onChange: (date: Moment) => void
    onViewChange?: (date: Moment) => void
    classes: Classes<Classes>
    type: GridType
    onYearRender?: (options: YearRenderOptions) => React.ReactNode
    onMonthRender?: (options: MonthRenderOptions) => React.ReactNode
    onDayRender?: (options: DayRenderOptions) => React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
  }

  interface DateGridCalendarProps {
    type: GridType
    minValue: Moment
    maxValue: Moment
    onClick: () => void
    style?: CSSProperties
    classes: Classes<Classes>
  }

  interface DateGridDayProps extends Omit<DateGridCalendarProps, 'onClick'> {
    hideNeighborMonths: boolean
    day: Moment
    tmp: Moment
    active: Moment
    onDayRender?: (options: DayRenderOptions) => React.ReactNode
    onClick: (day: Moment) => void
  }

  interface DateGridWeekProps extends Omit<DateGridDayProps, 'day'> {
    week: Moment[]
  }

  interface DateGridMonthProps extends DateGridCalendarProps {
    value: Moment
    tmp: Moment
    active: Moment
    onMonthRender?: (options: MonthRenderOptions) => React.ReactNode
  }

  interface DateGridYearProps extends DateGridCalendarProps {
    value: Moment
    tmp: Moment
    active: Moment
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
    classes: Classes<Classes>
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
      isDisabled: boolean
      isHidden: boolean
      isCurrentMonth: boolean
      isWeekend?: boolean
      isWeekType?: boolean
    }
  }
}

export default CalendarTypes
