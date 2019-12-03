import Shared from '../../types'

declare namespace RangeTypes {
    interface Props extends Shared.AllProps {
        min?: number
        max?: number
        defaultValue?: number
        value?: number
        onChange?: (value: number) => void
        mode?: 'single' | 'range'
        className?: string
    }

    interface Styles {
        container: void
        rail: void
        track: void
        thumb: void
    }
}

export default RangeTypes