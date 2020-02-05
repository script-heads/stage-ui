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
import Calendar from './control/Calendar/types'
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
import ScrollView from './layout/ScrollView/types'

declare namespace FlowTypes {
    type LayoutDecoration = 'surface' | 'minorShadow' | 'mediumShadow' | 'majorShadow' |  'neumorphism'
    type Override<T> = Partial<WhaleTypes.Styles<T>>
    
    interface Overrides {
        Divider?: Override<DividerTypes.Overrides>
        Spinner?: Override<SpinnerTypes.Overrides>
        Button?: Override<ButtonTypes.Overrides>
        Calendar?: Override<Calendar.Overrides>
        Checkbox?: Override<CheckboxTypes.Overrides>
        DatePicker?: Override<DatePickerTypes.Overrides>
        Menu?: Override<MenuTypes.Overrides>
        Radio?: Override<RadioTypes.Overrides>
        Range?: Override<RangeTypes.Overrides>
        Select?: Override<SelectTypes.Overrides>
        Switch?: Override<SwitchTypes.Overrides>
        TextField?: Override<TextFieldTypes.Overrides>
        Meter?: Override<MeterTypes.Overrides>
        Table?: Override<TableTypes.Overrides>
        Badge?: Override<BadgeTypes.Overrides>
        Block?: Override<BlockTypes.Overrides>
        Drop?: Override<DropTypes.Overrides>
        Flexbox?: Override<FlexboxTypes.Overrides>
        Grid?: Override<GridTypes.Overrides>
        Modal?: Override<ModalTypes.Overrides>
        Notification?: Override<NotificationTypes.Overrides>
        Popover?: Override<PopoverTypes.Overrides>
        Tree?: Override<TreeTypes.Overrides>
        ScrollView?: Override<ScrollView.Overrides>
    }

    type Theme = WhaleTypes.Theme<Overrides>

}

export default FlowTypes