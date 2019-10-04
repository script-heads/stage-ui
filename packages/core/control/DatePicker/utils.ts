import { DateTime } from "luxon";
import DatePickerTypes from './types';

export const useDateFormat = (dt: DateTime, locale: DatePickerTypes.Locale = 'ru') =>
    (format: string) =>
        dt
            .setLocale(locale)
            .toFormat(format)
