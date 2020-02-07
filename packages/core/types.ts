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
    
    interface Overrides {
        Divider?: DividerTypes.Overrides
        Spinner?: SpinnerTypes.Overrides
        Button?: ButtonTypes.Overrides
        Calendar?: Calendar.Overrides
        Checkbox?: CheckboxTypes.Overrides
        DatePicker?: DatePickerTypes.Overrides
        Menu?: MenuTypes.Overrides
        Radio?: RadioTypes.Overrides
        Range?: RangeTypes.Overrides
        Select?: SelectTypes.Overrides
        Switch?: SwitchTypes.Overrides
        TextField?: TextFieldTypes.Overrides
        Meter?: MeterTypes.Overrides
        Table?: TableTypes.Overrides
        Badge?: BadgeTypes.Overrides
        Block?: BlockTypes.Overrides
        Drop?: DropTypes.Overrides
        Flexbox?: FlexboxTypes.Overrides
        Grid?: GridTypes.Overrides
        Modal?: ModalTypes.Overrides
        Notification?: NotificationTypes.Overrides
        Popover?: PopoverTypes.Overrides
        Tree?: TreeTypes.Overrides
        ScrollView?: ScrollView.Overrides
    }
}

export default FlowTypes