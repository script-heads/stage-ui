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
      Divider?: Stage.ComponentThemeOverrides<DividerTypes.Props, DividerTypes.Classes>
      Spinner?: Stage.ComponentThemeOverrides<SpinnerTypes.Props, SpinnerTypes.Classes>
      Header?: Stage.ComponentThemeOverrides<HeaderTypes.Props, HeaderTypes.Classes>
      Paragraph?: Stage.ComponentThemeOverrides<ParagraphTypes.Props, ParagraphTypes.Classes>
      Text?: Stage.ComponentThemeOverrides<TextTypes.Props, TextTypes.Classes>
      Link?: Stage.ComponentThemeOverrides<LinkTypes.Props, LinkTypes.Classes>
      Button?: Stage.ComponentThemeOverrides<ButtonTypes.Props, ButtonTypes.Classes>
      Calendar?: Stage.ComponentThemeOverrides<Calendar.Props, Calendar.Classes>
      Checkbox?: Stage.ComponentThemeOverrides<CheckboxTypes.Props, CheckboxTypes.Classes>
      DatePicker?: Stage.ComponentThemeOverrides<DatePickerTypes.Props, DatePickerTypes.Classes>
      Menu?: Stage.ComponentThemeOverrides<MenuTypes.Props, MenuTypes.Classes>
      Radio?: Stage.ComponentThemeOverrides<RadioTypes.Props, RadioTypes.Classes>
      Range?: Stage.ComponentThemeOverrides<RangeTypes.Props, RangeTypes.Classes>
      Select?: Stage.ComponentThemeOverrides<SelectTypes.Props, SelectTypes.Classes>
      Switch?: Stage.ComponentThemeOverrides<SwitchTypes.Props, SwitchTypes.Classes>
      TextField?: Stage.ComponentThemeOverrides<TextFieldTypes.Props, TextFieldTypes.Classes>
      Meter?: Stage.ComponentThemeOverrides<MeterTypes.Props, MeterTypes.Classes>
      Table?: Stage.ComponentThemeOverrides<TableTypes.Props<any>, TableTypes.Classes>
      Badge?: Stage.ComponentThemeOverrides<BadgeTypes.Props, BadgeTypes.Classes>
      Block?: Stage.ComponentThemeOverrides<BlockTypes.Props, BlockTypes.Classes>
      Drop?: Stage.ComponentThemeOverrides<DropTypes.Props, DropTypes.Classes>
      Flexbox?: Stage.ComponentThemeOverrides<FlexboxTypes.Props, FlexboxTypes.Classes>
      Grid?: Stage.ComponentThemeOverrides<GridTypes.Props, GridTypes.Classes>
      Modal?: Stage.ComponentThemeOverrides<ModalTypes.Props, ModalTypes.Classes>
      Notification?: Stage.ComponentThemeOverrides<NotificationTypes.Props, NotificationTypes.Classes>
      Popover?: Stage.ComponentThemeOverrides<PopoverTypes.Props, PopoverTypes.Classes>
      Tree?: Stage.ComponentThemeOverrides<TreeTypes.Props, TreeTypes.Classes>
      ScrollView?: Stage.ComponentThemeOverrides<ScrollView.Props, ScrollView.Classes>
    }
  }
}

declare module '@emotion/react' {
  export interface Theme extends Stage.Theme {}
}

export { default as light } from './light'
export { default as dark } from './dark'
