import chroma from 'chroma-js'
import { ObjectInterpolation } from '@emotion/core'
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
import PanelTypes from '../../layout/Panel/types'
import PopoverTypes from '../../layout/Popover/types'
import TreeTypes from '../../layout/Tree/types'
import Shared from '../../types'

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
        Divider?: Shared.OverridesStyle<DividerTypes.Styles>
        Icon?: Shared.OverridesStyle<IconTypes.Styles>
        Spinner?: Shared.OverridesStyle<SpinnerTypes.Styles>
        Button?: Shared.OverridesStyle<ButtonTypes.Styles>
        Checkbox?: Shared.OverridesStyle<CheckboxTypes.Styles>
        DatePicker?: Shared.OverridesStyle<DatePickerTypes.Styles>
        Menu?: Shared.OverridesStyle<MenuTypes.Styles>
        Radio?: Shared.OverridesStyle<RadioTypes.Styles>
        Range?: Shared.OverridesStyle<RangeTypes.Styles>
        Select?: Shared.OverridesStyle<SelectTypes.Styles>
        Switch?: Shared.OverridesStyle<SwitchTypes.Styles>
        TextField?: Shared.OverridesStyle<TextFieldTypes.Styles>
        Meter?: Shared.OverridesStyle<MeterTypes.Styles>
        Table?: Shared.OverridesStyle<TableTypes.Styles>
        Badge?: Shared.OverridesStyle<BadgeTypes.Styles>
        Block?: Shared.OverridesStyle<BlockTypes.Styles>
        Drop?: Shared.OverridesStyle<DropTypes.Styles>
        Flexbox?: Shared.OverridesStyle<FlexboxTypes.Styles>
        Grid?: Shared.OverridesStyle<GridTypes.Styles>
        Modal?: Shared.OverridesStyle<ModalTypes.Styles>
        Notification?: Shared.OverridesStyle<NotificationTypes.Styles>
        Panel?: Shared.OverridesStyle<PanelTypes.Styles>
        Popover?: Shared.OverridesStyle<PopoverTypes.Styles>
        Tree?: Shared.OverridesStyle<TreeTypes.Styles>
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