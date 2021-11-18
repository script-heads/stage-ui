import IMask from 'imask'
import moment, { Moment } from 'moment'

export default (format: string, min: Moment) =>
  ({
    mask: Date,
    pattern: format,
    lazy: false,
    min: min.toDate(),
    max: min.toDate(),

    format(date: Date) {
      return moment(date).format(format)
    },

    parse(value: string) {
      return moment(value, format)
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
