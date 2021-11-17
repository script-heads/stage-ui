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
      primary: 'rgb(255, 204, 0)',
      secondary: 'rgb(124, 58, 237)',

      surface: 'rgb(255, 255, 255)',
      background: 'rgb(249, 250, 251)',

      border: 'rgb(209, 213, 219)',
      text: 'rgb(16, 16, 17)',

      error: 'rgb(239, 68, 68)',
      success: 'rgb(52, 211, 153)',
      warning: 'rgb(251, 146, 60)',
      info: 'rgb(56, 189, 248)',

      black: 'rgb(16, 16, 17)',
      white: 'rgb(255, 255, 255)',

      gray: {
        '50': 'rgb(249, 250, 251)',
        '100': 'rgb(243, 244, 246)',
        '200': 'rgb(229, 231, 235)',
        '300': 'rgb(209, 213, 219)',
        '400': 'rgb(156, 163, 175)',
        '500': 'rgb(107, 114, 128)',
        '600': 'rgb(75, 85, 99)',
        '700': 'rgb(55, 65, 81)',
        '800': 'rgb(31, 41, 55)',
        '900': 'rgb(17, 24, 39)',
      },
      yellow: {
        '50': 'rgb(255, 251, 235)',
        '100': 'rgb(254, 243, 199)',
        '200': 'rgb(253, 230, 138)',
        '300': 'rgb(252, 211, 77)',
        '400': 'rgb(251, 191, 36)',
        '500': 'rgb(245, 158, 11)',
        '600': 'rgb(217, 119, 6)',
        '700': 'rgb(180, 83, 9)',
        '800': 'rgb(146, 64, 14)',
        '900': 'rgb(120, 53, 15)',
        A100: 'rgb(255, 255, 141)',
        A200: 'rgb(255, 255, 0)',
        A400: 'rgb(255, 234, 0)',
        A700: 'rgb(255, 214, 0)',
      },
      orange: {
        '50': 'rgb(255, 247, 237)',
        '100': 'rgb(255, 237, 213)',
        '200': 'rgb(254, 215, 170)',
        '300': 'rgb(253, 186, 116)',
        '400': 'rgb(251, 146, 60)',
        '500': 'rgb(249, 115, 22)',
        '600': 'rgb(234, 88, 12)',
        '700': 'rgb(194, 65, 12)',
        '800': 'rgb(154, 52, 18)',
        '900': 'rgb(124, 45, 18)',
        A100: 'rgb(255, 229, 127)',
        A200: 'rgb(255, 215, 64)',
        A400: 'rgb(255, 196, 0)',
        A700: 'rgb(255, 171, 0)',
      },
      red: {
        '50': 'rgb(254, 242, 242)',
        '100': 'rgb(254, 226, 226)',
        '200': 'rgb(254, 202, 202)',
        '300': 'rgb(252, 165, 165)',
        '400': 'rgb(248, 113, 113)',
        '500': 'rgb(239, 68, 68)',
        '600': 'rgb(220, 38, 38)',
        '700': 'rgb(185, 28, 28)',
        '800': 'rgb(153, 27, 27)',
        '900': 'rgb(127, 29, 29)',
      },

      rose: {
        '50': 'rgb(255, 241, 242)',
        '100': 'rgb(255, 228, 230)',
        '200': 'rgb(254, 205, 211)',
        '300': 'rgb(253, 164, 175)',
        '400': 'rgb(251, 113, 133)',
        '500': 'rgb(244, 63, 94)',
        '600': 'rgb(225, 29, 72)',
        '700': 'rgb(190, 18, 60)',
        '800': 'rgb(159, 18, 57)',
        '900': 'rgb(136, 19, 55)',
      },

      pink: {
        '50': 'rgb(253, 242, 248)',
        '100': 'rgb(252, 231, 243)',
        '200': 'rgb(251, 207, 232)',
        '300': 'rgb(249, 168, 212)',
        '400': 'rgb(244, 114, 182)',
        '500': 'rgb(236, 72, 153)',
        '600': 'rgb(219, 39, 119)',
        '700': 'rgb(190, 24, 93)',
        '800': 'rgb(157, 23, 77)',
        '900': 'rgb(131, 24, 67)',
      },

      green: {
        '50': 'rgb(236, 253, 245)',
        '100': 'rgb(209, 250, 229)',
        '200': 'rgb(167, 243, 208)',
        '300': 'rgb(110, 231, 183)',
        '400': 'rgb(52, 211, 153)',
        '500': 'rgb(16, 185, 129)',
        '600': 'rgb(5, 150, 105)',
        '700': 'rgb(4, 120, 87)',
        '800': 'rgb(6, 95, 70)',
        '900': 'rgb(6, 78, 59)',
      },

      lightGreen: {
        '50': 'rgb(241, 248, 233)',
        '100': 'rgb(220, 237, 200)',
        '200': 'rgb(197, 225, 165)',
        '300': 'rgb(174, 213, 129)',
        '400': 'rgb(156, 204, 101)',
        '500': 'rgb(139, 195, 74)',
        '600': 'rgb(124, 179, 66)',
        '700': 'rgb(104, 159, 56)',
        '800': 'rgb(85, 139, 47)',
        '900': 'rgb(51, 105, 30)',
        A100: 'rgb(204, 255, 144)',
        A200: 'rgb(178, 255, 89)',
        A400: 'rgb(118, 255, 3)',
        A700: 'rgb(100, 221, 23)',
      },

      lime: {
        A100: 'rgb(244, 255, 129)',
        A200: 'rgb(238, 255, 65)',
        A400: 'rgb(198, 255, 0)',
        A700: 'rgb(174, 234, 0)',
      },

      teal: {
        '50': 'rgb(240, 253, 250)',
        '100': 'rgb(204, 251, 241)',
        '200': 'rgb(153, 246, 228)',
        '300': 'rgb(94, 234, 212)',
        '400': 'rgb(45, 212, 191)',
        '500': 'rgb(20, 184, 166)',
        '600': 'rgb(13, 148, 136)',
        '700': 'rgb(15, 118, 110)',
        '800': 'rgb(17, 94, 89)',
        '900': 'rgb(19, 78, 74)',
      },

      cyan: {
        '50': 'rgb(236, 254, 255)',
        '100': 'rgb(207, 250, 254)',
        '200': 'rgb(165, 243, 252)',
        '300': 'rgb(103, 232, 249)',
        '400': 'rgb(34, 211, 238)',
        '500': 'rgb(6, 182, 212)',
        '600': 'rgb(8, 145, 178)',
        '700': 'rgb(14, 116, 144)',
        '800': 'rgb(21, 94, 117)',
        '900': 'rgb(22, 78, 99)',
        A100: 'rgb(132, 255, 255)',
        A200: 'rgb(24, 255, 255)',
        A400: 'rgb(0, 229, 255)',
        A700: 'rgb(0, 184, 212)',
      },

      lightBlue: {
        '50': 'rgb(240, 249, 255)',
        '100': 'rgb(224, 242, 254)',
        '200': 'rgb(186, 230, 253)',
        '300': 'rgb(125, 211, 252)',
        '400': 'rgb(56, 189, 248)',
        '500': 'rgb(14, 165, 233)',
        '600': 'rgb(2, 132, 199)',
        '700': 'rgb(3, 105, 161)',
        '800': 'rgb(7, 89, 133)',
        '900': 'rgb(12, 74, 110)',
        A100: 'rgb(128, 216, 255)',
        A200: 'rgb(64, 196, 255)',
        A400: 'rgb(0, 176, 255)',
        A700: 'rgb(0, 145, 234)',
      },

      blue: {
        '50': 'rgb(239, 246, 255)',
        '100': 'rgb(219, 234, 254)',
        '200': 'rgb(191, 219, 254)',
        '300': 'rgb(191, 219, 254)',
        '400': 'rgb(96, 165, 250)',
        '500': 'rgb(59, 130, 246)',
        '600': 'rgb(37, 99, 235)',
        '700': 'rgb(29, 78, 216)',
        '800': 'rgb(30, 64, 175)',
        '900': 'rgb(30, 58, 138)',
        A100: 'rgb(130, 177, 255)',
        A200: 'rgb(68, 138, 255)',
        A400: 'rgb(41, 121, 255)',
        A700: 'rgb(41, 98, 255)',
      },

      indigo: {
        '50': 'rgb(238, 242, 255)',
        '100': 'rgb(224, 231, 255)',
        '200': 'rgb(199, 210, 254)',
        '300': 'rgb(165, 180, 252)',
        '400': 'rgb(129, 140, 248)',
        '500': 'rgb(99, 102, 241)',
        '600': 'rgb(79, 70, 229)',
        '700': 'rgb(67, 56, 202)',
        '800': 'rgb(55, 48, 163)',
        '900': 'rgb(49, 46, 129)',
      },

      purple: {
        '50': 'rgb(245, 243, 255)',
        '100': 'rgb(237, 233, 254)',
        '200': 'rgb(237, 233, 254)',
        '300': 'rgb(196, 181, 253)',
        '400': 'rgb(167, 139, 250)',
        '500': 'rgb(139, 92, 246)',
        '600': 'rgb(124, 58, 237)',
        '700': 'rgb(109, 40, 217)',
        '800': 'rgb(91, 33, 182)',
        '900': 'rgb(76, 29, 149)',
      },
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
      color: theme.color.border.hex(),
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
      // background: [22, 22, 24],
      // surface: [28, 28, 30],
      // error: [188, 0, 0],
      // success: [0, 120, 0],
      // warning: [255, 149, 0],
    },
  },
})
