import IMask from 'imask'
import dayjs, { Dayjs } from 'dayjs'

export default (format: string, min: Dayjs) =>
  ({
    mask: Date,
    pattern: format,
    lazy: false,
    min: min.toDate(),
    max: min.toDate(),

    format(date: Date) {
      return dayjs(date).format(format)
    },

    parse(value: string) {
      return dayjs(value, format)
    },

    blocks: {
      YYYY: {
        mask: IMask.MaskedRange,
        from: 1800,
        to: 3000,
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      DD: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
      },
      HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 23,
      },
      mm: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59,
      },
    },
  } as any)
