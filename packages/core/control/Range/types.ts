import { CSSProperties, ReactElement } from 'react';
import { Interpolation } from '@emotion/css';

declare namespace RangeTypes {
    export interface Props {
        min?: number
        max?: number
        defaultValue?: number
        value?: number
        onChange?: (value: number) => void
        mode?: 'single' | 'range'
        style?: CSSProperties
        className?: string
    }

    export interface Styles {
        container: Interpolation
        rail: Interpolation
        track: Interpolation
        thumb: Interpolation
    }
}

export default RangeTypes