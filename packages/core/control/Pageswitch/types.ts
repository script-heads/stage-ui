import WhaleTypes from '@flow-ui/whale/types'

declare namespace PageswitchTypes {

    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
        length: number
        onChange?: (pageNumber: number, startIndex: number) => void
        options?: Options
        value?: number
        defaultValue?: number
    }
    interface Options {
        pageSize?: number
    }
    interface Overrides {
        container: void
        arrowButton: {
            disabled: boolean
        }
    }
}

export default PageswitchTypes