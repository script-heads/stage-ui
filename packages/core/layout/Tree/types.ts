import { Interpolation } from '@emotion/css';
import Global from '../../types';

declare namespace TreeTypes {
    type TreeDecoration = 'flat' | 'drop' | "inline"

    export interface Props extends Global.Props {
        label?: React.ReactNode | string
        children?: React.ReactNode
        decoration?: TreeDecoration
        overrides?: Overrides
        alwaysOpen?: boolean
        defaultOpen?: boolean
        indent?: boolean
    }

    export interface Overrides {
        containter?: Interpolation
    }
}

export default TreeTypes