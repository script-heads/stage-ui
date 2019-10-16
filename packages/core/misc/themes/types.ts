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
import ViewportTypes from '../../layout/Viewport/types'

declare namespace ThemeTypes {

    export interface Index extends Variables<chroma.Color> {
        assets: Assets
        overrides: Overrides
        replace: Replace
    }

    export interface Variables<T> {
        name: string
        color: Colors<T>
        radius: Radius
        distance: Distance
        typography: Typography
    }

    export interface Assets {
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

    export interface Overrides {
        Divider?: DividerTypes.Styles
        Icon?: IconTypes.Styles
        Spinner?: SpinnerTypes.Styles
        Typography?: TypographyTypes.Styles
        Button?: ButtonTypes.Styles
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
        Panel?: PanelTypes.Styles
        Popover?: PopoverTypes.Styles
        Tree?: TreeTypes.Styles
        ViewportTypes?: ViewportTypes.Styles
    }

    export type Replace = (
        variables: DeepPartial<Variables<[number, number, number]>>,
        assets?: (variables: DeepPartial<Variables<[number, number, number]>>) => DeepPartial<Assets>,
        Styles?: DeepPartial<Overrides>
    ) => Index;

    export type Colors<T> = {
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

    export type Radius = {
        default: string
        narrow: string
        wide: string
    }

    export interface Distance {
        xsmall: string,
        small: string,
        medium: string,
        large: string,
        xlarge: string,
    }

    export interface Typography {
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