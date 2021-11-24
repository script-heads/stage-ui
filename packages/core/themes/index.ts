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
      Stepper?: Stage.ComponentThemeOverrides<StepperTypes.Props, StepperTypes.Classes>
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

export const light = createTheme({
  main: {
    name: 'Light',
    breakpoints: ['100rem', '80rem', '64rem', '50rem', '40rem'],
    color: {
      background: [245, 245, 245],
      backgroundVariant: [235, 235, 235],
      surface: [255, 255, 255],
      surfaceVariant: [230, 230, 230],
      primary: [74, 139, 252],
      secondary: [252, 148, 74],

      onBackground: [0, 0, 0],
      onSurface: [0, 0, 0],
      onPrimary: [255, 255, 255],
      onSecondary: [255, 255, 255],

      lightest: [230, 230, 230],
      light: [150, 150, 150],
      hard: [120, 120, 120],
      hardest: [100, 100, 100],

      error: [224, 32, 32],
      success: [109, 212, 0],
      warning: [250, 100, 0],
      info: [0, 145, 255],
    },
    radius: {
      xs: '0.125rem',
      s: '0.25rem',
      m: '0.5rem',
      l: '0.75rem',
      xl: '1rem',
    },
    spacing: {
      xs: '.25rem',
      s: '.5rem',
      m: '1rem',
      l: '1.5rem',
      xl: '1.75rem',
    },
  },
  assets: (theme) => ({
    border: {
      width: '1px',
      style: 'solid',
      color: theme.color.lightest.rgb().string(),
    },
    shadow: {
      xs: '0px 0px 9px rgba(0, 0, 0, 0.09), 0px 0px 3.03027px rgba(0, 0, 0, 0.0534838), 0px 0px 1.31328px rgba(0, 0, 0, 0.0417053), 0px 0px 0.445327px rgba(0, 0, 0, 0.0337542), 0px 0px 0.0493852px rgba(0, 0, 0, 0.0248326)',
      s: '0px 6px 7px rgba(0, 0, 0, 0.09), 0px 0.287374px 3.5294px rgba(0, 0, 0, 0.0534838), 0px -0.434029px 2.25515px rgba(0, 0, 0, 0.0417053), 0px -0.219386px 1.3565px rgba(0, 0, 0, 0.0337542), 0px 0.267283px 0.635625px rgba(0, 0, 0, 0.0248326)',
      m: '0px 24px 58px rgba(0, 0, 0, 0.09), 0px 7.7756px 19.55px rgba(0, 0, 0, 0.0534838), 0px 4.13855px 10.6433px rgba(0, 0, 0, 0.0417053), 0px 2.38694px 6.55259px rgba(0, 0, 0, 0.0337542), 0px 1.1744px 3.75697px rgba(0, 0, 0, 0.0248326)',
      l: '0px 45px 85px rgba(0, 0, 0, 0.09), 0px 16.8299px 36.6996px rgba(0, 0, 0, 0.0534838), 0px 9.09173px 20.3938px rgba(0, 0, 0, 0.0417053), 0px 5.0881px 12.016px rgba(0, 0, 0, 0.0337542), 0px 2.35997px 6.25509px rgba(0, 0, 0, 0.0248326)',
      xl: '0px 45px 121px rgba(0, 0, 0, 0.09), 0px 16.8299px 52.243px rgba(0, 0, 0, 0.0534838), 0px 9.09173px 29.0311px rgba(0, 0, 0, 0.0417053), 0px 5.0881px 17.1052px rgba(0, 0, 0, 0.0337542), 0px 2.35997px 8.90431px rgba(0, 0, 0, 0.0248326)',
    },
    innerShadow: {
      xs: 'inset 0px 1px 1px rgba(0,0,0,0.075)',
      s: 'inset 0px 2px 4px rgba(0,0,0,0.1)',
      m: 'inset 0px 4px 8px rgba(0,0,0,0.1)',
      l: 'inset 0 16px 18px rgba(0,0,0,0.1)',
      xl: 'inset 0 24px 26px rgba(0,0,0,0.1)',
    },
    focus: {
      outline: 'none !important',
      boxShadow: `0 0 0 3px ${theme.color.primary.alpha(0.3).rgb().string()} !important`,
    },
    field: {
      xs: {
        indent: '0.25rem',
        height: '1.5rem',
      },
      s: {
        indent: '0.5rem',
        height: '2rem',
      },
      m: {
        indent: '0.75rem',
        height: '2.5rem',
      },
      l: {
        indent: '1rem',
        height: '3rem',
      },
      xl: {
        indent: '1.25rem',
        height: '3.5rem',
      },
    },
    typography: {
      header: {
        xl: {
          fontSize: '2.5rem',
          lineHeight: '3.5rem',
        },
        l: {
          fontSize: '2rem',
          lineHeight: '3rem',
        },
        m: {
          fontSize: '1.5rem',
          lineHeight: '2rem',
        },
        s: {
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
        },
        xs: {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
        },
      },
      paragraph: {
        xl: {
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
        },
        l: {
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
        },
        m: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
        },
        s: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
        },
        xs: {
          fontSize: '0.75rem',
          lineHeight: '1rem',
        },
      },
      text: {
        xl: {
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
        },
        l: {
          fontSize: '1.25rem',
          lineHeight: '1.5rem',
        },
        m: {
          fontSize: '1rem',
          lineHeight: '1.25rem',
        },
        s: {
          fontSize: '0.875rem',
          lineHeight: '1rem',
        },
        xs: {
          fontSize: '0.75rem',
          lineHeight: '0.875rem',
        },
      },
    },
  }),
})

export const dark = light.replace({
  main: {
    name: 'Dark',
    color: {
      background: [22, 22, 24],
      backgroundVariant: [50, 50, 60],
      surface: [28, 28, 30],
      surfaceVariant: [75, 75, 85],

      onBackground: [255, 255, 255],
      onSurface: [255, 255, 255],
      onPrimary: [255, 255, 255],
      onSecondary: [255, 255, 255],

      lightest: [57, 57, 67],
      light: [110, 110, 120],
      hard: [180, 180, 200],
      hardest: [230, 230, 250],

      error: [188, 0, 0],
      success: [0, 120, 0],
      warning: [255, 149, 0],
    },
  },
})
