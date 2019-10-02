import CSS from 'csstype';
import Global from '../../../types';

declare namespace FieldTypes {

    interface Props extends Global.FieldProps, Global.Props {
        name?: string
        children?: React.ReactNode
        cursor?: CSS.Properties['cursor']
        onLabelOverlay?: (state: boolean) => void
        fieldStyles?: any
        overlayLabelAlign?: 'top' | 'bottom'
        insideLabelStyles?: any
        onClear?: () => void
        manyLines?: boolean
        onEnter?: () => void
        isEmpty?: boolean
    }
}

export default FieldTypes