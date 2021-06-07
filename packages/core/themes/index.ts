/**
 * Content
 */
import DividerTypes from '../components/content/Divider/types'
import SpinnerTypes from '../components/content/Spinner/types'
import HeaderTypes from '../components/content/Header/types'
import ParagraphTypes from '../components/content/Paragraph/types'
import TextTypes from '../components/content/Text/types'
import LinkTypes from '../components/content/Link/types'
/**
 * Control
 */
import ButtonTypes from '../components/control/Button/types'
import Calendar from '../components/control/Calendar/types'
import CheckboxTypes from '../components/control/Checkbox/types'
import DatePickerTypes from '../components/control/DatePicker/types'
import MenuTypes from '../components/control/Menu/types'
import RadioTypes from '../components/control/Radio/types'
import RangeTypes from '../components/control/Range/types'
import SelectTypes from '../components/control/Select/types'
import SwitchTypes from '../components/control/Switch/types'
import TextFieldTypes from '../components/control/TextField/types'
/**
 * Data
 */
import MeterTypes from '../components/data/Meter/types'
import TableTypes from '../components/data/Table/types'
/**
 * Layout
 */
import BadgeTypes from '../components/layout/Badge/types'
import BlockTypes from '../components/layout/Block/types'
import DropTypes from '../components/layout/Drop/types'
import FlexboxTypes from '../components/layout/Flexbox/types'
import GridTypes from '../components/layout/Grid/types'
import ModalTypes from '../components/layout/Modal/types'
import NotificationTypes from '../components/layout/Notification/types'
import PopoverTypes from '../components/layout/Popover/types'
import TreeTypes from '../components/layout/Tree/types'
import ScrollView from '../components/layout/ScrollView/types'

declare global {
  namespace Stage {
    interface ThemeOverrides {
      Divider?: DividerTypes.Classes
      Spinner?: SpinnerTypes.Classes
      Header?: HeaderTypes.Classes
      Paragraph?: ParagraphTypes.Classes
      Text?: TextTypes.Classes
      Link?: LinkTypes.Classes
      Button?: ButtonTypes.Classes
      Calendar?: Calendar.Classes
      Checkbox?: CheckboxTypes.Classes
      DatePicker?: DatePickerTypes.Classes
      Menu?: MenuTypes.Classes
      Radio?: RadioTypes.Classes
      Range?: RangeTypes.Classes
      Select?: SelectTypes.Classes
      Switch?: SwitchTypes.Classes
      TextField?: TextFieldTypes.Classes
      Meter?: MeterTypes.Classes
      Table?: TableTypes.Classes
      Badge?: BadgeTypes.Classes
      Block?: BlockTypes.Classes
      Drop?: DropTypes.Classes
      Flexbox?: FlexboxTypes.Classes
      Grid?: GridTypes.Classes
      Modal?: ModalTypes.Classes
      Notification?: NotificationTypes.Classes
      Popover?: PopoverTypes.Classes
      Tree?: TreeTypes.Classes
      ScrollView?: ScrollView.Classes
    }
  }
}

declare module '@emotion/react' {
  export interface Theme extends Stage.Theme {}
}

export { default as light } from './light'
export { default as dark } from './dark'
