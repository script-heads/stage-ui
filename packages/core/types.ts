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
    
    interface Styles {
        Divider?: DividerTypes.Styles
        Spinner?: SpinnerTypes.Styles
        Button?: ButtonTypes.Styles
        Calendar?: Calendar.Styles
        Checkbox?: CheckboxTypes.Styles
        DatePicker?: DatePickerTypes.Styles
        Menu?: MenuTypes.Styles
        Radio?: RadioTypes.Styles
        Range?: RangeTypes.Styles
        Select?: SelectTypes.Styles
        Switch?: SwitchTypes.Styles
        TextField?: TextFieldTypes.Styles
        Meter?: MeterTypes.Styles
        Table?: TableTypes.Styles
        Badge?: BadgeTypes.Styles
        Block?: BlockTypes.Styles
        Drop?: DropTypes.Styles
        Flexbox?: FlexboxTypes.Styles
        Grid?: GridTypes.Styles
        Modal?: ModalTypes.Styles
        Notification?: NotificationTypes.Styles
        Popover?: PopoverTypes.Styles
        Tree?: TreeTypes.Styles
        ScrollView?: ScrollView.Styles
    }
}

export default FlowTypes