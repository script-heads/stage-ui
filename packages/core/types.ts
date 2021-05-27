/**
 * Content
 */
import DividerTypes from './components/content/Divider/types'
import SpinnerTypes from './components/content/Spinner/types'
import HeaderTypes from './components/content/Header/types'
import ParagraphTypes from './components/content/Paragraph/types'
import TextTypes from './components/content/Text/types'
import LinkTypes from './components/content/Link/types'
/**
 * Control
 */
import ButtonTypes from './components/control/Button/types'
import Calendar from './components/control/Calendar/types'
import CheckboxTypes from './components/control/Checkbox/types'
import DatePickerTypes from './components/control/DatePicker/types'
import MenuTypes from './components/control/Menu/types'
import RadioTypes from './components/control/Radio/types'
import RangeTypes from './components/control/Range/types'
import SelectTypes from './components/control/Select/types'
import SwitchTypes from './components/control/Switch/types'
import TextFieldTypes from './components/control/TextField/types'
/**
 * Data
 */
import MeterTypes from './components/data/Meter/types'
import TableTypes from './components/data/Table/types'
/**
 * Layout
 */
import BadgeTypes from './components/layout/Badge/types'
import BlockTypes from './components/layout/Block/types'
import DropTypes from './components/layout/Drop/types'
import FlexboxTypes from './components/layout/Flexbox/types'
import GridTypes from './components/layout/Grid/types'
import ModalTypes from './components/layout/Modal/types'
import NotificationTypes from './components/layout/Notification/types'
import PopoverTypes from './components/layout/Popover/types'
import TreeTypes from './components/layout/Tree/types'
import ScrollView from './components/layout/ScrollView/types'

declare namespace FlowTypes {
    type LayoutDecoration = 'surface' | 'minorShadow' | 'mediumShadow' | 'majorShadow' | 'neumorphism'

    interface Overrides {
        Divider?: DividerTypes.Styles
        Spinner?: SpinnerTypes.Styles
        Header?: HeaderTypes.Styles
        Paragraph?: ParagraphTypes.Styles
        Text?: TextTypes.Styles
        Link?: LinkTypes.Styles
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