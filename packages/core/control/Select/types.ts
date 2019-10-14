import { CSSProperties } from "react";
import Global from "../../types";
import { Interpolation } from "@emotion/css";

declare namespace SelectTypes {
    export interface Option {
        text: string
        value: any
    }

    export interface Props extends Global.FieldProps, Global.Props {
        placeholder?: string
        options: Option[]
        multiselect?: boolean
        searchable?: boolean
        values?: Option[]
        defaultValues?: Option[]
        onChange?: (values: Option[], changedValue?: Option) => void
    }

    type Actions = 
    {
        type: 'setSelectedOptions'
        payload: Option[]
    } |
    {
        type: 'toggleOption'
        payload: Option
    } |
    {
        type: 'toggleOpen'
        payload: boolean
    } |
    {
        type: 'search'
        payload: string
    } |
    {
        type: 'reduceSelectedOptions'
    } |
    {
        type: 'setCursor'
        payload: number
    } |
    {
        type: 'clear'
    } |
    {
        type: 'setOverlay'
        payload: boolean
    }

    type State = {
        selectedOptions: Option[] 
        availableOptions: Option[] 
        underOverlay: boolean,
        open: boolean,
        searchValue: string
        empty: boolean
        cursor: number
    }

    interface OptionsProps extends SearchProps {
        selected: SelectTypes.Option[],
        onClose: (option) => void,
        searchable?: boolean
    }
    interface SearchProps {
        searchValue: string,
        onSearch: (searchValue: string) => void
        size?: number
        styles: any
        placeholder?: string
        defaultValue?: string
        disabled?: boolean
    }
    export interface Styles {
        container: Interpolation
        input: Interpolation
        dropMenu: Interpolation
        dropItem: Interpolation
    }
}

export default SelectTypes;