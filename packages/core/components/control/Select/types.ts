import React from 'react'
import FieldTypes from '../../basic/Field/types'
import DropTypes from '../../layout/Drop/types'

declare namespace SelectTypes {
  interface Option {
    text: string
    value: any
  }

  interface Ref {
    isOpen: boolean
    options: Option[]
    values: Option[]
    toggleOpen: () => void
  }

  interface Props extends Omit<FieldTypes.Props<Styles>, 'onChange'> {
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

  interface StyleState extends StyleParams {
    shape: Props['shape']
    size: Props['size']
    decoration: Props['decoration']
    focus: boolean
  }

  interface StyleStateItem extends StyleState {
    selected: boolean
  }

  interface StyleParams {
    isOpen: boolean
  }

  interface Styles
    extends FieldTypes.Styles<{
      container: StyleState
    }> {
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
    tag: StyleState
    /**
     * Close button for selected option in multiselect
     */
    tagRemove: StyleState
    /**
     * Select's drop container
     */
    drop: StyleState
    /**
     * Container of every item in drop
     */
    dropItem: StyleStateItem
    /**
     * Container view when list is empty
     */
    emptyConteiner: StyleState

    /**
     * Container text when list is empty
     */
    emptyText: StyleState
  }
}

export default SelectTypes
