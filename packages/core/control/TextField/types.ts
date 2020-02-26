import { ChangeEventHandler } from 'react'
import FieldTypes from '../../misc/hocs/Field/types'
import WhaleTypes from '@flow-ui/whale/types'

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

    interface Overrides extends FieldTypes.Overrides {
        input: {
            multiline: boolean
            size: WhaleTypes.Size
        }
    }
}

export default TextFieldTypes