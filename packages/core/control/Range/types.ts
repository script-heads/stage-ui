import WhaleTypes from '@flow-ui/whale/types'

declare namespace RangeTypes {
    interface Props extends Omit<WhaleTypes.AllProps<HTMLDivElement, Overrides>, 'onChange'> {
        min?: number
        max?: number
        defaultValue?: number
        value?: number
        onChange?: (value: number) => void
        mode?: 'single' | 'range'
        className?: string
    }

    interface Ref {
        container: HTMLDivElement
        setValue: (value: number) => void
    }
    interface Overrides {
        container: void
        rail: void
        track: void
        thumb: void
    }
}

export default RangeTypes