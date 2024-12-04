import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'

import { useSystem } from '@stage-ui/system'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ru'

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
    shortcuts,
    range,
  } = props

  dayjs.locale(locale)
  const now = dayjs()

  const [value, setValue] = useState<[Dayjs | undefined, Dayjs | undefined]>([
    undefined,
    undefined,
  ])
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    setRefresh((old) => old + 1)
  }, [locale])

  const { classes, attributes, styleProps } = useSystem('Calendar', props, createClasses)

  const minValue = props.minValue
    ? dayjs(props.minValue).startOf('day')
    : now.add(-500, 'year')
  const maxValue = props.maxValue
    ? dayjs(props.maxValue).startOf('day')
    : now.add(500, 'year')

  useLayoutEffect(() => {
    if (typeof props.value !== 'undefined') {
      if (Array.isArray(props.value)) {
        const dtStart = dayjs(props.value[0])
        const dtEnd = props.value[1] ? dayjs(props.value[1]) : undefined
        setValue([dtStart, dtEnd])
      } else {
        setValue([dayjs(props.value), undefined])
      }
    }
  }, [props.value])

  function onChange(dtStart: Dayjs, dtEnd?: Dayjs): void {
    if (dtEnd && dtEnd < dtStart) {
      setValue([dtEnd, dtStart])
      props.onChange?.(dtEnd.toDate(), dtStart.toDate())
    } else {
      setValue([dtStart, dtEnd])
      props.onChange?.(dtStart.toDate(), dtEnd ? dtEnd.toDate() : undefined)
    }
  }

  function onViewChange(dt: Dayjs): void {
    props.onViewChange?.(dt.toDate())
  }
  return (
    <DateGrid
      shortcuts={shortcuts}
      key={refresh}
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
