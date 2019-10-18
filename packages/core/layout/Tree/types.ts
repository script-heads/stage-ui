import { Interpolation } from '@emotion/css';
import Global from '@flow-ui/core/types';

declare namespace TreeTypes {
    type TreeDecoration = 'flat' | 'drop' | "inline"

    export interface Props extends Global.Props {
        label?: React.ReactNode | string
        children?: React.ReactNode
        decoration?: TreeDecoration
        alwaysOpen?: boolean
        defaultOpen?: boolean
        indent?: boolean
    }

    export interface Styles {
        containter?: Interpolation
    }
}

export default TreeTypes