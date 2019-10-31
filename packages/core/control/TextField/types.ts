import { ChangeEventHandler } from 'react'
import IMask from 'imask'
import FieldTypes from '../../misc/hocs/Field/types'

declare namespace TextFieldTypes {

    type InputTypes =
        'email' |
        'hidden' |
        'number' |
        'password' |
        'reset' |
        'search' |
        'tel' |
        'text' |
        'url'

    interface Props extends FieldTypes.Props, InputProps, TextAreaProps {
        defaultValue?: string | number
        align?: 'left' | 'right'
        multiline?: boolean
        masked?: IMask.AnyMaskedOptions
        onChange?: ChangeEventHandler<HTMLInputElement>
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
        type?: InputTypes
        value?: string | number

        form?: string
        formAction?: string
        formEncType?: string
        formMethod?: string
        formNoValidate?: boolean
        formTarget?: string

        max?: number | string
        maxLength?: number
        min?: number | string
        minLength?: number
        step?: number | string
        width?: number | string
    }

    interface TextAreaProps {
        cols?: number
        rows?: number
        wrap?: string
    }

    interface Styles extends FieldTypes.Styles {
        input: {
            isLabelOverlay: boolean
        }
    }
}

export default TextFieldTypes