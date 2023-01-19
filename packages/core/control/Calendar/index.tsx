import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useLayoutEffect,
  useState,
} from 'react'

import { useSystem } from '@stage-ui/system'
import moment, { Moment } from 'moment'
import 'moment/dist/locale/ru'
import 'moment/dist/locale/it'
import 'moment/dist/locale/fr'
import 'moment/dist/locale/de'

import DateGrid from './DateGrid'
import createClasses from './styles'
import Types from './types'

const Calendar: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const {
    locale = 'ru',
    hideToday = false,
    hideNeighborMonths = false,
    type,
    header,
    footer,
    onYearRender,
    onMonthRender,
    onDayRender,
    size,
    range,
  } = props

  moment.locale(locale)

  const now = moment()
  const [value, setValue] = useState<[Moment | undefined, Moment | undefined]>([
    undefined,
    undefined,
  ])

  const { classes, attributes, styleProps } = useSystem('Calendar', props, createClasses)

  const minValue = props.minValue
    ? moment(props.minValue).startOf('day')
    : now.clone().add(-500, 'year')
  const maxValue = props.maxValue
    ? moment(props.maxValue).startOf('day')
    : now.clone().add(500, 'year')

  useLayoutEffect(() => {
    if (typeof props.value !== 'undefined') {
      if (Array.isArray(props.value)) {
        const dtStart = moment(props.value[0])
        const dtEnd = props.value[1] ? moment(props.value[1]) : undefined
        setValue([dtStart, dtEnd])
      } else {
        setValue([moment(props.value), undefined])
      }
    }
  }, [props.value])

  function onChange(dtStart: Moment, dtEnd?: Moment): void {
    if (dtEnd && dtEnd < dtStart) {
      setValue([dtEnd, dtStart])
      props.onChange?.(dtEnd.toDate(), dtStart.toDate())
    } else {
      setValue([dtStart, dtEnd])
      props.onChange?.(dtStart.toDate(), dtEnd ? dtEnd.toDate() : undefined)
    }
  }

  function onViewChange(dt: Moment): void {
    props.onViewChange?.(dt.toDate())
  }
  return (
    <DateGrid
      attributes={attributes}
      classes={classes}
      styleProps={styleProps}
      value={value}
      minValue={minValue}
      maxValue={maxValue}
      onChange={onChange}
      onViewChange={onViewChange}
      hideToday={hideToday}
      hideNeighborMonths={hideNeighborMonths}
      type={type || 'day'}
      onYearRender={onYearRender}
      onMonthRender={onMonthRender}
      onDayRender={onDayRender}
      header={header}
      footer={footer}
      size={size}
      range={range}
    />
  )
}

export default forwardRef(Calendar)
