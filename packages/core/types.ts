import WhaleTypes from '@flow-ui/whale/types'
/**
 * Content
 */
import DividerTypes from './content/Divider/types'
import SpinnerTypes from './content/Spinner/types'
/**
 * Control
 */
import ButtonTypes from './control/Button/types'
import CheckboxTypes from './control/Checkbox/types'
import DatePickerTypes from './control/DatePicker/types'
import MenuTypes from './control/Menu/types'
import RadioTypes from './control/Radio/types'
import RangeTypes from './control/Range/types'
import SelectTypes from './control/Select/types'
import SwitchTypes from './control/Switch/types'
import TextFieldTypes from './control/TextField/types'
/**
 * Data
 */
import MeterTypes from './data/Meter/types'
import TableTypes from './data/Table/types'
/**
 * Layout
 */
import BadgeTypes from './layout/Badge/types'
import BlockTypes from './layout/Block/types'
import DropTypes from './layout/Drop/types'
import FlexboxTypes from './layout/Flexbox/types'
import GridTypes from './layout/Grid/types'
import ModalTypes from './layout/Modal/types'
import NotificationTypes from './layout/Notification/types'
import PopoverTypes from './layout/Popover/types'
import TreeTypes from './layout/Tree/types'

declare namespace FlowTypes {
    type LayoutDecoration = 'surface' | 'minorShadow' | 'mediumShadow' | 'majorShadow' |  'neumorphism'

    interface Overrides {
        Divider?: Partial<WhaleTypes.Styles<DividerTypes.Overrides>>
        Spinner?: Partial<WhaleTypes.Styles<SpinnerTypes.Overrides>>
        Button?: Partial<WhaleTypes.Styles<ButtonTypes.Overrides>>
        Checkbox?: Partial<WhaleTypes.Styles<CheckboxTypes.Overrides>>
        DatePicker?: Partial<WhaleTypes.Styles<DatePickerTypes.Overrides>>
        Menu?: Partial<WhaleTypes.Styles<MenuTypes.Overrides>>
        Radio?: Partial<WhaleTypes.Styles<RadioTypes.Overrides>>
        Range?: Partial<WhaleTypes.Styles<RangeTypes.Overrides>>
        Select?: Partial<WhaleTypes.Styles<SelectTypes.Overrides>>
        Switch?: Partial<WhaleTypes.Styles<SwitchTypes.Overrides>>
        TextField?: Partial<WhaleTypes.Styles<TextFieldTypes.Overrides>>
        Meter?: Partial<WhaleTypes.Styles<MeterTypes.Overrides>>
        Table?: Partial<WhaleTypes.Styles<TableTypes.Overrides>>
        Badge?: Partial<WhaleTypes.Styles<BadgeTypes.Overrides>>
        Block?: Partial<WhaleTypes.Styles<BlockTypes.Overrides>>
        Drop?: Partial<WhaleTypes.Styles<DropTypes.Overrides>>
        Flexbox?: Partial<WhaleTypes.Styles<FlexboxTypes.Overrides>>
        Grid?: Partial<WhaleTypes.Styles<GridTypes.Overrides>>
        Modal?: Partial<WhaleTypes.Styles<ModalTypes.Overrides>>
        Notification?: Partial<WhaleTypes.Styles<NotificationTypes.Overrides>>
        Popover?: Partial<WhaleTypes.Styles<PopoverTypes.Overrides>>
        Tree?: Partial<WhaleTypes.Styles<TreeTypes.Overrides>>
    }

    type Theme = WhaleTypes.Theme<Overrides>

}

export default FlowTypes