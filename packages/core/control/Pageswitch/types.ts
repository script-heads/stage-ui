declare namespace PageswitchTypes {
  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
    /**
     * Total count of records
     */
    length: number
    /**
     * Calls on page changed
     */
    onChange?: (pageNumber: number, startIndex: number) => void
    /**
     * Records on page
     * @default 20
     */
    pageSize?: number
    /**
     * Current page number, for controlled component
     */
    value?: number
    /**
     * Default page number
     */
    defaultValue?: number
  }
  type Classes = {
    /**
     * Root container
     */
    container: void
    /**
     * Left/Right buttons
     */
    arrowButton: {
      disabled: boolean
    }
    /**
     * Dots
     */
    separator: void
    /**
     * Pagination button
     */
    pageButton: {
      current: boolean
    }
    /**
     * Pagination button text
     */
    pageButtonText: {
      current: boolean
    }
  }
}

export default PageswitchTypes
