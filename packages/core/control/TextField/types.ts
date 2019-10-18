import Global from "@flow-ui/core/types";
import { ChangeEventHandler } from "react";
import IMask from 'imask';

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

    interface Props extends Global.FieldProps, Global.Props, InputProps, TextAreaProps {
        defaultValue?: string | number
        align?: "left" | "right"
        multiline?: boolean
        masked?: IMask.AnyMaskedOptions
        onChange?: ChangeEventHandler<HTMLInputElement>
    }

    interface InputProps {
        autoComplete?: string;
        autoFocus?: boolean;
        list?: string;
        name?: string;
        placeholder?: string
        pattern?: string;
        readOnly?: boolean;
        required?: boolean;
        type?: InputTypes;
        value?: string | number;

        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;

        max?: number | string;
        maxLength?: number;
        min?: number | string;
        minLength?: number;
        step?: number | string;
        width?: number | string;
    }

    interface TextAreaProps {
        cols?: number;
        rows?: number;
        wrap?: string;
    }

    export interface Styles {
        
    }
}

export default TextFieldTypes