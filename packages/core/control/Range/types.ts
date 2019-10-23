import Global from "../../types";

declare namespace RangeTypes {
    interface Props extends Global.Props {
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