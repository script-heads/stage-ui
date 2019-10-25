import FieldTypes from "../../misc/hocs/Field/types";

declare namespace SelectTypes {
    interface Option {
        text: string
        value: any
    }

    interface Props extends FieldTypes.Props {
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
        type: 'toggleOpen'
        payload: boolean
    } |
    {
        type: 'search'
        payload: string
    } |
    {
        type: 'setCursor'
        payload: number
    } |
    {
        type: 'clear'
    }

    type State = {
        selectedOptions: Option[] 
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

    interface Styles extends FieldTypes.Styles {
        fieldStyles: {
            open: boolean
        }
        placeholder: void
        input: void
        options: void
        optionItem: void
        optionItemText: void
        dropMenu: void
        dropItem: {
            underCursor: boolean
        }
        insideLabelStyles: void
    }
}

export default SelectTypes;