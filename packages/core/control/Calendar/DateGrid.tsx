/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from 'react'

import { Button, Divider, Flexbox, Grid, Text } from '@stage-ui/core'

import dayjs, { Dayjs } from 'dayjs'

import weekday from 'dayjs/plugin/weekday'

import DateGridMonth from './DateGridMonth'
import DateGridTitle from './DateGridTitle'
import DateGridWeek from './DateGridWeek'
import DateGridYear from './DateGridYear'
import T from './types'

const getCalendarWord = (dt: Dayjs) => {
  const words = dt.format('MMMM DD, YYYY h:mm A')
  if (/,/.exec(words)) {
    return words.split(',')[0].trim()
  }
  return words.split(' at ')[0].trim()
}

const DateGrid = (props: T.DateGridProps) => {
  const { value } = props
  dayjs.extend(weekday)
  const now = dayjs()
  const yesterday = dayjs().add(-1, 'day')
  const tomorrow = dayjs().add(1, 'day')

  const [gridType, setGridType] = useState<T.GridType>(props.type)
  const [viewDate, setViewDate] = useState(dayjs())
  const [tmpDate, setTmpDate] = useState<[Dayjs, Dayjs | undefined]>([dayjs(), undefined])
  const [rangeSwitch, setRangeSwitch] = useState(false)

  const monthOffset = gridType === 'day' ? 1 : 9

  const grid: Dayjs[][] = []
  const start = viewDate
    .clone()
    .startOf('month')
    .startOf('week')
    .startOf('day')
    .add(-1, 'day')
  const end = viewDate.clone().endOf('month').endOf('week').startOf('day').add(-1, 'day')

  useEffect(() => {
    setGridType(props.type)
  }, [props.type])

  for (let i = 0; i < end.diff(start, 'week') + 1; i++) {
    grid.push(
      Array(7)
        .fill(null)
        .map((_, index) => start.add(1 + index + 7 * i, 'day')),
    )
  }

  useEffect(() => {
    if (typeof value !== 'undefined' && typeof value[0] !== 'undefined') {
      // @ts-expect-error
      setTmpDate(value)
      setViewDate(value[0])
    }
  }, [value])

  const onNextTitle = () => {
    let dtClone = viewDate.clone()
    if (gridType === 'day' || gridType === 'week') {
      dtClone = dtClone.add(1, 'month')
    }
    if (gridType === 'month') {
      dtClone = dtClone.add(1, 'year')
    }
    if (gridType === 'year') {
      dtClone = dtClone.add(monthOffset, 'year')
    }
    setViewDate(dtClone)

    props.onViewChange?.(dtClone)
  }

  const onPreviousTitle = () => {
    let dtClone = viewDate.clone()
    if (gridType === 'day' || gridType === 'week') {
      dtClone = dtClone.add(-1, 'month')
    }
    if (gridType === 'month') {
      dtClone = dtClone.add(-1, 'year')
    }
    if (gridType === 'year') {
      dtClone = dtClone.add(-monthOffset, 'year')
    }
    setViewDate(dtClone)
    props.onViewChange?.(dtClone)
  }

  return (
    <Flexbox
      column
      css={[props.styleProps.all, props.classes.dateGrid]}
      {...props.attributes}
    >
      <Flexbox column mb="l">
        <DateGridTitle
          size={props.size}
          classes={props.classes}
          gridType={gridType}
          onGridTypeChange={setGridType}
          value={viewDate}
          minValue={props.minValue}
          maxValue={props.maxValue}
          onPrevious={onPreviousTitle}
          onNext={onNextTitle}
        />
        {props.header}
      </Flexbox>
      {(gridType === 'day' || gridType === 'week') && (
        <Flexbox>
          {props.type === 'day' && !props.hideToday && (
            <>
              <Flexbox column>
                {props.shortcuts ? (
                  props.shortcuts.map((s) => {
                    return (
                      <Button
                        placeSelf="flex-start"
                        size={props.size}
                        decoration="text"
                        disabled={!!s.disabled}
                        onClick={() => {
                          const value = dayjs(s.value)
                          if (props.range) {
                            props.onChange(value, value)
                          } else {
                            props.onChange(value, undefined)
                          }

                          s.onClick?.()
                        }}
                        alignSelf="center"
                        label={s.label}
                      />
                    )
                  })
                ) : (
                  <>
                    <Button
                      placeSelf="flex-start"
                      size={props.size}
                      decoration="text"
                      onClick={() => {
                        if (props.range) {
                          props.onChange(yesterday, yesterday)
                        } else {
                          props.onChange(yesterday, undefined)
                        }
                      }}
                      alignSelf="center"
                      label={getCalendarWord(yesterday)}
                    />
                    <Button
                      placeSelf="flex-start"
                      size={props.size}
                      decoration="text"
                      onClick={() => {
                        if (props.range) {
                          props.onChange(now, now)
                        } else {
                          props.onChange(now, undefined)
                        }
                      }}
                      alignSelf="center"
                      label={getCalendarWord(now)}
                    />
                    <Button
                      placeSelf="flex-start"
                      size={props.size}
                      decoration="text"
                      onClick={() => {
                        if (props.range) {
                          props.onChange(tomorrow, tomorrow)
                        } else {
                          props.onChange(tomorrow, undefined)
                        }
                      }}
                      alignSelf="center"
                      label={getCalendarWord(tomorrow)}
                    />
                  </>
                )}
              </Flexbox>
              <Divider color="lightest" vertical m="s" />
            </>
          )}
          <Grid templateColumns="repeat(7, 1fr)" flexShrink={0} flex={1}>
            {Array(7)
              .fill(null)
              .map((_, i) => dayjs().weekday(i).format('dd'))
              .map((day, i) => {
                const isWeekend = [5, 6].indexOf(i) !== -1
                return (
                  <Text
                    size="s"
                    key={day}
                    css={props.classes.weekDay}
                    color={(c) => (isWeekend ? c.error : c.onSurface.alpha(0.5))}
                    capitalize
                  >
                    {day.slice(0, 2)}
                  </Text>
                )
              })}
            {grid.map((week: Dayjs[], i) => (
              <DateGridWeek
                key={week[i].valueOf()}
                viewDate={viewDate}
                size={props.size}
                hideNeighborMonths={props.hideNeighborMonths}
                classes={props.classes}
                week={week}
                tmp={tmpDate}
                active={value}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onClick={(dt) => {
                  if (props.range) {
                    if (rangeSwitch) {
                      props.onChange(tmpDate[0], dt)
                      setRangeSwitch(false)
                      return
                    }
                    setRangeSwitch(true)
                  }
                  props.onChange(dt)
                }}
                type={props.type}
                onDayRender={props.onDayRender}
              />
            ))}
          </Grid>
        </Flexbox>
      )}
      {gridType === 'month' && (
        <Grid gap="2px" templateRows="1fr 1fr 1fr" templateColumns="1fr 1fr 1fr">
          {Array(12)
            .fill(null)
            .map((_, index) => {
              const clone = viewDate.clone().month(index)
              return (
                <DateGridMonth
                  classes={props.classes}
                  key={index}
                  size={props.size}
                  value={clone}
                  tmp={tmpDate[0]}
                  style={{ padding: '0 0.5rem' }}
                  active={value[0]}
                  minValue={props.minValue}
                  maxValue={props.maxValue}
                  onClick={() => {
                    if (props.type === 'month') {
                      props.onChange(clone, clone)
                    } else {
                      setViewDate(clone)
                      props.onViewChange?.(clone)
                      setGridType('day')
                    }
                  }}
                  type={props.type}
                  onMonthRender={props.onMonthRender}
                />
              )
            })}
        </Grid>
      )}
      {gridType === 'year' && (
        <Grid gap="2px" key={1} templateRows="1fr 1fr 1fr" templateColumns="1fr 1fr 1fr">
          {Array(monthOffset)
            .fill(null)
            .map((_, index) => {
              const clone = viewDate.clone().add(index - 4, 'year')
              return (
                <DateGridYear
                  classes={props.classes}
                  key={index}
                  size={props.size}
                  value={clone}
                  tmp={tmpDate[0]}
                  style={{ padding: '0 1rem' }}
                  active={value[0]}
                  minValue={props.minValue}
                  maxValue={props.maxValue}
                  onClick={() => {
                    if (props.type === 'year') {
                      props.onChange(clone, clone)
                    } else {
                      setViewDate(viewDate)
                      props.onViewChange?.(clone)
                      setGridType('month')
                    }
                  }}
                  type={props.type}
                  onYearRender={props.onYearRender}
                />
              )
            })}
        </Grid>
      )}
      {props.footer}
    </Flexbox>
  )
}

export default DateGrid
