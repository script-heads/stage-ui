import FieldTypes from '../../misc/hocs/Field/types'
import WhaleTypes from '@flow-ui/whale/types'

declare namespace SelectTypes {
    interface Option {
        text: string
        value: any
    }

    interface Props extends Omit<FieldTypes.Props, 'onChange'> {
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
        open: boolean
        searchValue: string
        empty: boolean
        cursor: number
    }

    interface OptionsProps extends SearchProps {
        selected: SelectTypes.Option[]
        onClose: (option) => void
        searchable?: boolean
        size: WhaleTypes.Size
    }

    interface SearchProps {
        searchValue: string
        onSearch: (searchValue: string) => void
        styles: WhaleTypes.ComponentStyles<Overrides>
        placeholder?: string
        defaultValue?: string
        disabled?: boolean
    }
    
    interface Overrides extends FieldTypes.Overrides<{field: {open: boolean}}> {
        placeholder: void
        input: void
        options: void
        optionItem: void
        optionItemText: {
            size: Props['size']
        }
        dropIcon: {
            size: Props['size']
        }
        dropMenu: {
            open: boolean
            shape: Props['shape']
            size: Props['size']
            decoration: Props['decoration']
            focus: boolean
        }
        dropItem: {
            size: Props['size']
            underCursor: boolean
        }
    }
}

export default SelectTypes