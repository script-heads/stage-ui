import createTheme from '@stage-ui/system/utils/createTheme'

/**
 * Content
 */
import DividerTypes from '../content/Divider/types'
import SpinnerTypes from '../content/Spinner/types'
import HeaderTypes from '../content/Header/types'
import ParagraphTypes from '../content/Paragraph/types'
import TextTypes from '../content/Text/types'
import LinkTypes from '../content/Link/types'
/**
 * Control
 */
import ButtonTypes from '../control/Button/types'
import Calendar from '../control/Calendar/types'
import CheckboxTypes from '../control/Checkbox/types'
import DatePickerTypes from '../control/DatePicker/types'
import MenuTypes from '../control/Menu/types'
import RadioTypes from '../control/Radio/types'
import RangeTypes from '../control/Range/types'
import SelectTypes from '../control/Select/types'
import StepperTypes from '../control/Stepper/types'
import SwitchTypes from '../control/Switch/types'
import TextFieldTypes from '../control/TextField/types'
import ToggleTypes from '../control/Toggle/types'
/**
 * Data
 */
import MeterTypes from '../data/Meter/types'
import TableTypes from '../data/Table/types'
/**
 * Layout
 */
import BadgeTypes from '../layout/Badge/types'
import BlockTypes from '../layout/Block/types'
import DropTypes from '../layout/Drop/types'
import FlexboxTypes from '../layout/Flexbox/types'
import GridTypes from '../layout/Grid/types'
import ModalTypes from '../layout/Modal/types'
import NotificationTypes from '../layout/Notification/types'
import PopoverTypes from '../layout/Popover/types'
import TreeTypes from '../layout/Tree/types'
import ScrollView from '../layout/ScrollView/types'

import { darkTheme } from './dark'
import { lightTheme } from './light'

declare global {
  namespace Stage {
    interface ThemeOverrides {
      Divider?: Stage.ComponentThemeOverrides<DividerTypes.Props, DividerTypes.Classes>
      Spinner?: Stage.ComponentThemeOverrides<SpinnerTypes.Props, SpinnerTypes.Classes>
      Header?: Stage.ComponentThemeOverrides<HeaderTypes.Props, HeaderTypes.Classes>
      Paragraph?: Stage.ComponentThemeOverrides<
        ParagraphTypes.Props,
        ParagraphTypes.Classes
      >
      Text?: Stage.ComponentThemeOverrides<TextTypes.Props, TextTypes.Classes>
      Link?: Stage.ComponentThemeOverrides<LinkTypes.Props, LinkTypes.Classes>
      Button?: Stage.ComponentThemeOverrides<ButtonTypes.Props, ButtonTypes.Classes>
      Calendar?: Stage.ComponentThemeOverrides<Calendar.Props, Calendar.Classes>
      Checkbox?: Stage.ComponentThemeOverrides<CheckboxTypes.Props, CheckboxTypes.Classes>
      DatePicker?: Stage.ComponentThemeOverrides<
        DatePickerTypes.Props,
        DatePickerTypes.Classes
      >
      Menu?: Stage.ComponentThemeOverrides<MenuTypes.Props, MenuTypes.Classes>
      Radio?: Stage.ComponentThemeOverrides<RadioTypes.Props, RadioTypes.Classes>
      Range?: Stage.ComponentThemeOverrides<RangeTypes.Props, RangeTypes.Classes>
      Select?: Stage.ComponentThemeOverrides<SelectTypes.Props, SelectTypes.Classes>
      Stepper?: Stage.ComponentThemeOverrides<StepperTypes.Props, StepperTypes.Classes>
      Switch?: Stage.ComponentThemeOverrides<SwitchTypes.Props, SwitchTypes.Classes>
      TextField?: Stage.ComponentThemeOverrides<
        TextFieldTypes.Props,
        TextFieldTypes.Classes
      >
      Meter?: Stage.ComponentThemeOverrides<MeterTypes.Props, MeterTypes.Classes>
      Table?: Stage.ComponentThemeOverrides<TableTypes.Props<any>, TableTypes.Classes>
      Badge?: Stage.ComponentThemeOverrides<BadgeTypes.Props, BadgeTypes.Classes>
      Block?: Stage.ComponentThemeOverrides<BlockTypes.Props, BlockTypes.Classes>
      Drop?: Stage.ComponentThemeOverrides<DropTypes.Props, DropTypes.Classes>
      Flexbox?: Stage.ComponentThemeOverrides<FlexboxTypes.Props, FlexboxTypes.Classes>
      Grid?: Stage.ComponentThemeOverrides<GridTypes.Props, GridTypes.Classes>
      Modal?: Stage.ComponentThemeOverrides<ModalTypes.Props, ModalTypes.Classes>
      Notification?: Stage.ComponentThemeOverrides<
        NotificationTypes.Props,
        NotificationTypes.Classes
      >
      Popover?: Stage.ComponentThemeOverrides<PopoverTypes.Props, PopoverTypes.Classes>
      Tree?: Stage.ComponentThemeOverrides<TreeTypes.Props, TreeTypes.Classes>
      ScrollView?: Stage.ComponentThemeOverrides<ScrollView.Props, ScrollView.Classes>
      Toggle?: Stage.ComponentThemeOverrides<ToggleTypes.Props, ToggleTypes.Classes>
    }
  }
}

declare module '@emotion/react' {
  export interface Theme extends Stage.Theme {}
}

export const light = createTheme(lightTheme)

export const dark = light.replace(darkTheme)
