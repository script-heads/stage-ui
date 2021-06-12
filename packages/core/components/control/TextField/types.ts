import { ChangeEventHandler } from 'react'
import FieldTypes from '../../basic/Field/types'

declare namespace TextFieldTypes {
  type InputTypes =
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'reset'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'

  type Ref = {
    clear: () => void
    container: HTMLDivElement | null
    input: HTMLInputElement | HTMLTextAreaElement | null
  }

  interface Props extends FieldTypes.Props<HTMLInputElement, Classes>, InputProps, TextAreaProps {
    /**
     * Default input value
     */
    defaultValue?: string | number
    /**
     * Enables textarea mode
     * @default false
     */
    multiline?: boolean
    /**
     * Calls on input change
     */
    onChange?: ChangeEventHandler<HTMLInputElement>
    /**
     * Enables textarea line numbers
     * @only if multiline true
     * @default false
     */
    leftChildNumber?: ((index: number) => React.ReactNode) | boolean
  }

  interface InputProps {
    /**
     * 	Hint for form autofill feature
     */
    autoComplete?: string
    /**
     * Automatically focus the form control when the page is loaded
     */
    autoFocus?: boolean
    /**
     * Value of the id attribute of the <datalist> of autocomplete options
     */
    list?: string
    /**
     * Name of the input form control. Submitted with the form as part of a name/value pair
     */
    name?: string
    /**
     * Content to be appear in the form control when the form control is empty
     */
    placeholder?: string
    /**
     * 	Pattern the value must match to be valid
     */
    pattern?: string
    /**
     * The value is not editable
     */
    readOnly?: boolean
    /**
     * A value is required for the form to be submittable
     */
    required?: boolean
    /**
     * Type of input form control
     */
    type?: InputTypes
    /**
     * Current value of the form control
     */
    value?: string | number

    /**
     * Associates the control with a form element
     */
    form?: string
    /**
     * 	URL to use for form submission
     */
    formAction?: string
    /**
     * Form data set encoding type to use for form submission
     */
    formEncType?: string
    /**
     * 	HTTP method to use for form submission
     */
    formMethod?: string
    /**
     *  Bypass form control validation for form submission
     */
    formNoValidate?: boolean
    /**
     * Browsing context for form submission
     */
    formTarget?: string

    /**
     * Maximum value
     */
    max?: number | string
    /**
     * Maximum length (number of characters) of value
     */
    maxLength?: number
    /**
     * 	Minimum value
     */
    min?: number | string
    /**
     * Minimum length (number of characters) of value
     */
    minLength?: number
    /**
     * 	Incremental values that are valid
     */
    step?: number | string
  }

  interface TextAreaProps {
    /**
     * The visible width of the text control, in average character widths
     */
    cols?: number
    /**
     * The number of visible text lines for the control
     */
    rows?: number
    /**
     * Indicates how the control wraps text
     */
    wrap?: string
  }

  type Classes = {
    /**
     * TextField's input
     */
    input: {
      multiline: boolean
      size: Stage.Sizes
      disabled: boolean
    }
    lineNumbers: void
  }
}

export default TextFieldTypes
