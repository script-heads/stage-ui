import SystemTypes from '@stage-ui/system/types'

declare namespace PageswitchTypes {

    interface Props extends Omit<SystemTypes.AllProps<HTMLDivElement, Styles>, 'onChange'> {
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
    interface Styles {
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
    }
}

export default PageswitchTypes