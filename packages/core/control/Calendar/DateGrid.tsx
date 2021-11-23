import { Button, Divider, Flexbox, Grid, Text } from '@stage-ui/core'
import moment, { Moment } from 'moment'
import React, { useEffect, useState } from 'react'
import DateGridMonth from './DateGridMonth'
import DateGridTitle from './DateGridTitle'
import DateGridWeek from './DateGridWeek'
import DateGridYear from './DateGridYear'
import T from './types'

let toDayWord = ''

const DateGrid = (props: T.DateGridProps) => {
  const { value } = props
  const now = moment()

  if (!toDayWord) {
    for (const char of now.calendar()) {
      if (char === ' ' || char === ',') {
        break
      }
      toDayWord += char
    }
  }

  const [gridType, setGridType] = useState<T.GridType>(props.type)
  const [tmpDate, setTmpDate] = useState(value)

  const monthOffset = gridType === 'day' ? 1 : 9

  const grid: Moment[][] = []
  const start = tmpDate.clone().startOf('month').startOf('isoWeek').startOf('day').add(-1, 'day')
  const end = tmpDate.clone().endOf('month').endOf('isoWeek').startOf('day').add(-1, 'day')

  useEffect(() => {
    setGridType(props.type)
  }, [props.type])

  while (start.valueOf() < end.valueOf()) {
    grid.push(
      Array(7)
        .fill(null)
        .map(() => start.add(1, 'day').clone()),
    )
  }

  useEffect(() => setTmpDate(value), [value])

  const onNextTitle = () => {
    const clone = tmpDate.clone()
    if (gridType === 'day' || gridType === 'week') {
      clone.add(1, 'month')
    }
    if (gridType === 'month') {
      clone.add(1, 'year')
    }
    if (gridType === 'year') {
      clone.add(monthOffset, 'year')
    }
    setTmpDate(clone)
    props.onViewChange?.(clone)
  }

  const onPreviousTitle = () => {
    const clone = tmpDate.clone()
    if (gridType === 'day' || gridType === 'week') {
      clone.add(-1, 'month')
    }
    if (gridType === 'month') {
      clone.add(-1, 'year')
    }
    if (gridType === 'year') {
      clone.add(-monthOffset, 'year')
    }
    setTmpDate(clone)
    props.onViewChange?.(clone)
  }

  return (
    <Flexbox column css={[props.classes.dateGrid, props.styleProps.all]} {...props.attributes}>
      <Flexbox column mb="l">
        <DateGridTitle
          classes={props.classes}
          gridType={gridType}
          onGridTypeChange={setGridType}
          value={tmpDate}
          minValue={props.minValue}
          maxValue={props.maxValue}
          onPrevious={onPreviousTitle}
          onNext={onNextTitle}
        />
        {props.header}
      </Flexbox>
      {(gridType === 'day' || gridType === 'week') && (
        <>
          <Grid gap="1px" templateColumns="repeat(7, 1fr)">
            {moment.weekdaysShort(true).map((day, i) => {
              const isWeekend = [5, 6].indexOf(i) !== -1
              return (
                <Text
                  key={day}
                  css={props.classes.weekDay}
                  color={(c) => (isWeekend ? c.error.alpha(0.75) : c.gray[700])}
                  capitalize
                >
                  {day}
                </Text>
              )
            })}
            {grid.map((week: Moment[], i) => (
              <DateGridWeek
                key={week[i].valueOf()}
                hideNeighborMonths={props.hideNeighborMonths}
                classes={props.classes}
                week={week}
                tmp={tmpDate}
                active={value}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onClick={props.onChange}
                type={props.type}
                onDayRender={props.onDayRender}
              />
            ))}
          </Grid>
          {props.type === 'day' && !props.hideToday && (
            <>
              <Divider color="lightest" m="1rem 0" />
              <Button
                size="s"
                decoration="plain"
                onClick={() => {
                  props.onChange(now)
                }}
                alignSelf="center"
                label={toDayWord}
              />
            </>
          )}
        </>
      )}
      {gridType === 'month' && (
        <Grid gap="2px" templateRows="1fr 1fr 1fr" templateColumns="1fr 1fr 1fr">
          {Array(12)
            .fill(null)
            .map((_, index) => {
              const clone = tmpDate.clone().month(index)
              return (
                <DateGridMonth
                  classes={props.classes}
                  key={index}
                  value={clone}
                  tmp={tmpDate}
                  style={{ padding: '0 0.5rem' }}
                  active={value}
                  minValue={props.minValue}
                  maxValue={props.maxValue}
                  onClick={() => {
                    if (props.type === 'month') {
                      props.onChange(clone)
                    } else {
                      setTmpDate(clone)
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
              const clone = tmpDate.clone().add(index - 4, 'year')
              return (
                <DateGridYear
                  classes={props.classes}
                  key={index}
                  value={clone}
                  tmp={tmpDate}
                  style={{ padding: '0 1rem' }}
                  active={value}
                  minValue={props.minValue}
                  maxValue={props.maxValue}
                  onClick={() => {
                    if (props.type === 'year') {
                      props.onChange(clone)
                    } else {
                      setTmpDate(clone)
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
