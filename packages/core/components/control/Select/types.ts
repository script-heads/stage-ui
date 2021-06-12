import React from 'react'
import FieldTypes from '../../basic/Field/types'
import DropTypes from '../../layout/Drop/types'

declare namespace SelectTypes {
  interface T extends String {}
  interface Option {
    text: string
    value: T
  }

  interface Ref {
    isOpen: boolean
    options: Option[]
    values: Option[]
    toggleOpen: () => void
  }

  interface Props extends FieldTypes.Props<HTMLDivElement, Classes> {
    /**
     * Content to be appear in the form control when the form control is empty
     */
    placeholder?: string
    /**
     * Items contained in Select
     */
    options: Option[]
    /**
     * Allow selecting multiple options
     */
    multiselect?: boolean
    /**
     * Allow search values
     */
    searchable?: boolean
    /**
     * Select's drop will not close after select option
     */
    keepOpen?: boolean
    /**
     * Select's drop will appear only when start typing
     */
    openOnFocus?: boolean
    /**
     * Selected options
     */
    values?: Option[]
    /**
     * Options selected by default
     */
    defaultValues?: Option[]
    /**
     * Max size of scroll area at select's drop
     * @default 16rem
     */
    maxScrollHeight?: string
    /**
     * Animation of drop
     * @default { type: 'collapse' }
     */
    animation?: DropTypes.Props['animation']
    /**
     * Event is fired when user change value
     */
    onChange?: (values: Option[], changedValue?: Option) => void
    /**
     * Event is fired when user types in input
     */
    onSearch?: (value: string) => void
    /**
     * Display when empty
     */
    emptyText?: React.ReactNode
  }

  type State = {
    selectedOptions: Option[]
    open: boolean
    searchValue: string
    empty: boolean
    cursor: number
  }

  type ClassState = {
    shape: Props['shape']
    size: Props['size']
    decoration: Props['decoration']
    isOpen: boolean
  }

  type StyleStateItem = ClassState & {
    selected: boolean
  }

  type Classes = {
    /**
     * Container for selected items
     */
    selected: void
    /**
     * Select's input
     */
    input: {
      searchMode: boolean
      multiselect: boolean
      disableEvents: boolean
    }
    /**
     * Container of selected option in multiselect
     */
    tag: ClassState
    /**
     * Close button for selected option in multiselect
     */
    tagRemove: ClassState
    /**
     * Select's drop container
     */
    drop: ClassState
    /**
     * Container of every item in drop
     */
    dropItem: StyleStateItem
    /**
     * Container view when list is empty
     */
    emptyConteiner: ClassState

    /**
     * Container text when list is empty
     */
    emptyText: ClassState
  }
}

export default SelectTypes
