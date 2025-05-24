import CalendarTypes from '@stage-ui/core/control/Calendar/types'

import FieldTypes from '../../basic/Field/types'

declare namespace DatePickerTypes {
  interface Props extends FieldTypes.Props<HTMLInputElement, Classes>, InputProps {
    /**
     * Whether to value & inputValue on passing value=undefined
     */
    clearOnUndefined?: boolean
    /**
     * Type for DatePicker
     * @default day
     */
    type?: CalendarTypes.GridType
    /**
     * Property value could be a string
     * if you pass format property aswell
     * otherwise value should be instance of Date
     */
    value?: Date | string | [Date | string, Date | string]
    defaultValue?: Date | string | [Date | string, Date | string]
    /**
     * Format Date YYYY-MM-DD
     * @default YYYY-MM-DD
     */
    format?: string
    /**
     * Min datetime that could be selected
     */
    minValue?: Date | string
    /**
     * Max datetime that could be selected
     */
    maxValue?: Date | string
    /**
     * Callback function will with Date object
     * or string if format property was passed.
     */
    onChange?: (dt?: Date, value?: string) => void
    /**
     * Callback function will with Date object
     * or string if format property was passed.
     */
    onChangeRange?: (range: [Date | undefined, Date | undefined]) => void
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
    locale?: CalendarTypes.Locale
    /**
     * Hide today button
     */
    hideToday?: boolean
    /**
     * Select date range
     */
    range?: boolean
    /**
     * Shortcuts for calendar left panel
     */
    shortcuts?: CalendarTypes.ShortcutDate[]
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

  type Classes = {
    /**
     * Drop view
     */
    drop: {
      isActive: boolean
    }
    /**
     * Input view
     */
    input: void
  } & Partial<FieldTypes.Classes>
}

export default DatePickerTypes
