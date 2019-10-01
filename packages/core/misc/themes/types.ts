import chroma from 'chroma-js';
import BlockTypes from '../../layout/Block/types';
import BageTypes from '../../layout/Badge/types';
import TableTypes from '../../data/Table/types';
import ModalTypes from '../../layout/Modal/types';
import PanelTypes from '../../layout/Panel/types';
import PopoverTypes from '../../layout/Popover/types';
import CheckboxTypes from '../../input/Checkbox/types';
import DatePickerTypes from '../../input/DatePicker/types'
import SelectTypes from '../../input/Select/types';
import ButtonTypes from '../../action/Button/types';
import IconTypes from '../../content/Icon/types';
import RangeTypes from '../../input/Range/types';
import { ObjectInterpolation } from '@emotion/core';

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
        button: ButtonTypes.Overrides
        block: BlockTypes.Overrides
        bage: BageTypes.Overrides
        table: TableTypes.Overrides
        modal: ModalTypes.Overrides
        panel: PanelTypes.Overrides
        popover: PopoverTypes.Overrides
        checkbox: CheckboxTypes.Overrides
        datePicker: DatePickerTypes.Overrides
        select: SelectTypes.Overrides
        icon: IconTypes.Overrides
        range: RangeTypes.Overrides
    }

    export type Replace = (
        variables: DeepPartial<Variables<[number, number, number]>>,
        assets?: (variables: DeepPartial<Variables<[number, number, number]>>) => DeepPartial<Assets>,
        overrides?: DeepPartial<Overrides>
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