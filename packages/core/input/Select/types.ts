import { CSSProperties } from "react";
import Global from "../../types";
import { Interpolation } from "@emotion/css";

declare namespace SelectTypes {
    export interface Option {
        text: string
        value: any
    }

    export interface Props extends Global.FieldProps, Global.Props {
        style?: CSSProperties
        placeholder?: string
        options: Option[]
        multiselect?: boolean
        values?: Option[]
        defaultValue?: Option[]
        onChange?: (values: Option[], changedValue: Option) => void
    }

    export interface Overrides {
        container: Interpolation
        input: Interpolation
        dropMenu: Interpolation
        dropItem: Interpolation
    }
}

export default SelectTypes;