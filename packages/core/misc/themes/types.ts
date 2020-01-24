import { ObjectInterpolation } from '@emotion/core'
import Shared from '@flow-ui/whale/types'
import chroma from 'chroma-js'
/**
 * Content
 */
import DividerTypes from '../../content/Divider/types'
import IconTypes from '../../content/Icon/types'
import SpinnerTypes from '../../content/Spinner/types'
/**
 * Control
 */
import ButtonTypes from '../../control/Button/types'
import CheckboxTypes from '../../control/Checkbox/types'
import DatePickerTypes from '../../control/DatePicker/types'
import MenuTypes from '../../control/Menu/types'
import RadioTypes from '../../control/Radio/types'
import RangeTypes from '../../control/Range/types'
import SelectTypes from '../../control/Select/types'
import SwitchTypes from '../../control/Switch/types'
import TextFieldTypes from '../../control/TextField/types'
/**
 * Data
 */
import MeterTypes from '../../data/Meter/types'
import TableTypes from '../../data/Table/types'
/**
 * Layout
 */
import BadgeTypes from '../../layout/Badge/types'
import BlockTypes from '../../layout/Block/types'
import DropTypes from '../../layout/Drop/types'
import FlexboxTypes from '../../layout/Flexbox/types'
import GridTypes from '../../layout/Grid/types'
import ModalTypes from '../../layout/Modal/types'
import NotificationTypes from '../../layout/Notification/types'
import PopoverTypes from '../../layout/Popover/types'
import TreeTypes from '../../layout/Tree/types'

declare namespace ThemeTypes {

    type SourceColor = [number, number, number, number?]
    interface Index extends Variables<chroma.Color> {
        assets: Assets
        overrides: Overrides
        replace: Replace
    }

    interface SourceTheme {
        main: Variables<SourceColor>
        assets: (theme: ThemeTypes.Index) => ThemeTypes.Assets
        overrides: Overrides
    }

    type Replace = (theme: ReplaceTheme) => Index
    interface ReplaceTheme {
        main: DeepPartial<Variables<SourceColor>>
        assets?: (theme: ThemeTypes.Index) => DeepPartial<ThemeTypes.Assets>
        overrides?: Overrides
    }
    interface Variables<T = SourceColor> {
        name: string
        color: Colors<T>
        radius: Radius
        distance: Distance
        typography: Typography
    }

    interface Assets {
        global?: ObjectInterpolation<undefined>
        border: {
            width: string
            style: string
            color: string
        }
        shadow: {
            default: string
            short: string
            long: string
        }
        focus: ObjectInterpolation<undefined>
        fieldHeight: {
            xsmall: string
            small: string
            medium: string
            large: string
            xlarge: string
        }
    }

    interface Overrides {
        Divider?: Shared.OverridesStyle<DividerTypes.Overrides>
        Icon?: Shared.OverridesStyle<IconTypes.Overrides>
        Spinner?: Shared.OverridesStyle<SpinnerTypes.Overrides>
        Button?: Shared.OverridesStyle<ButtonTypes.Overrides>
        Checkbox?: Shared.OverridesStyle<CheckboxTypes.Overrides>
        DatePicker?: Shared.OverridesStyle<DatePickerTypes.Overrides>
        Menu?: Shared.OverridesStyle<MenuTypes.Overrides>
        Radio?: Shared.OverridesStyle<RadioTypes.Overrides>
        Range?: Shared.OverridesStyle<RangeTypes.Overrides>
        Select?: Shared.OverridesStyle<SelectTypes.Overrides>
        Switch?: Shared.OverridesStyle<SwitchTypes.Overrides>
        TextField?: Shared.OverridesStyle<TextFieldTypes.Overrides>
        Meter?: Shared.OverridesStyle<MeterTypes.Overrides>
        Table?: Shared.OverridesStyle<TableTypes.Overrides>
        Badge?: Shared.OverridesStyle<BadgeTypes.Overrides>
        Block?: Shared.OverridesStyle<BlockTypes.Overrides>
        Drop?: Shared.OverridesStyle<DropTypes.Overrides>
        Flexbox?: Shared.OverridesStyle<FlexboxTypes.Overrides>
        Grid?: Shared.OverridesStyle<GridTypes.Overrides>
        Modal?: Shared.OverridesStyle<ModalTypes.Overrides>
        Notification?: Shared.OverridesStyle<NotificationTypes.Overrides>
        Popover?: Shared.OverridesStyle<PopoverTypes.Overrides>
        Tree?: Shared.OverridesStyle<TreeTypes.Overrides>
    }

    type Colors<T> = {
        background: T
        backgroundVariant: T
        surface: T
        surfaceVariant: T
        primary: T
        secondary: T

        onBackground: T
        onSurface: T
        onPrimary: T
        onSecondary: T

        lightest: T
        light: T
        hard: T
        hardest: T

        accent: {
            red: T
            green: T
            blue: T
            orange: T
        }
    }

    type Radius = {
        default: string
        narrow: string
        wide: string
    }

    interface Distance {
        xsmall: string,
        small: string,
        medium: string,
        large: string,
        xlarge: string,
    }

    interface Typography {
        header: {
            1: ObjectInterpolation<undefined>
            2: ObjectInterpolation<undefined>
            3: ObjectInterpolation<undefined>
            4: ObjectInterpolation<undefined>
        },
        text: {
            1: ObjectInterpolation<undefined>
            2: ObjectInterpolation<undefined>
            3: ObjectInterpolation<undefined>
            4: ObjectInterpolation<undefined>
        },
        display: {
            1: ObjectInterpolation<undefined>
            2: ObjectInterpolation<undefined>
            3: ObjectInterpolation<undefined>
            4: ObjectInterpolation<undefined>
        },
        paragraph: {
            1: ObjectInterpolation<undefined>
            2: ObjectInterpolation<undefined>
            3: ObjectInterpolation<undefined>
            4: ObjectInterpolation<undefined>
        }
    }

    type DeepPartial<T> = {
        [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>
    }
}

export default ThemeTypes