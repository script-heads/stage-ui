import chroma from 'chroma-js';
import { ObjectInterpolation } from '@emotion/core';
/**
 * Content
 */
import DividerTypes from '../../content/Divider/types'
import IconTypes from '../../content/Icon/types'
import SpinnerTypes from '../../content/Spinner/types'
import TypographyTypes from '../../content/Typography/types'
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
import Global from '../../types';

declare namespace ThemeTypes {

    interface Index extends Variables<chroma.Color> {
        assets: Assets
        overrides: Overrides
        replace: Replace
    }

    interface Variables<T = [number, number, number, number?]> {
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
        gradient: {
            linear: string
            linearVariant: string
            radial: string
            radialVariant: string
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
        Divider?: Global.OverridesStyle<DividerTypes.Styles>
        Icon?: Global.OverridesStyle<IconTypes.Styles>
        Spinner?: Global.OverridesStyle<SpinnerTypes.Styles>
        Typography?: Global.OverridesStyle<TypographyTypes.Styles>
        Button?: Global.OverridesStyle<ButtonTypes.Styles>
        Checkbox?: Global.OverridesStyle<CheckboxTypes.Styles>
        DatePicker?: Global.OverridesStyle<DatePickerTypes.Styles>
        Menu?: Global.OverridesStyle<MenuTypes.Styles>
        Radio?: Global.OverridesStyle<RadioTypes.Styles>
        Range?: Global.OverridesStyle<RangeTypes.Styles>
        Select?: Global.OverridesStyle<SelectTypes.Styles>
        Switch?: Global.OverridesStyle<SwitchTypes.Styles>
        TextField?: Global.OverridesStyle<TextFieldTypes.Styles>
        Meter?: Global.OverridesStyle<MeterTypes.Styles>
        Table?: Global.OverridesStyle<TableTypes.Styles>
        Badge?: Global.OverridesStyle<BadgeTypes.Styles>
        Block?: Global.OverridesStyle<BlockTypes.Styles>
        Drop?: Global.OverridesStyle<DropTypes.Styles>
        Flexbox?: Global.OverridesStyle<FlexboxTypes.Styles>
        Grid?: Global.OverridesStyle<GridTypes.Styles>
        Modal?: Global.OverridesStyle<ModalTypes.Styles>
        Notification?: Global.OverridesStyle<NotificationTypes.Styles>
        Panel?: Global.OverridesStyle<PanelTypes.Styles>
        Popover?: Global.OverridesStyle<PopoverTypes.Styles>
        Tree?: Global.OverridesStyle<TreeTypes.Styles>
    }

    type Replace = (
        variables: DeepPartial<Variables>,
        assets?: (variables: Variables<chroma.Color>) => DeepPartial<Assets>,
        overrides?: Overrides
    ) => Index;

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
        paragraph: ObjectInterpolation<undefined>
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
        caption: {
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
    };
}

export default ThemeTypes