import { Flexbox, Text } from '@stage-ui/core'
import { ChevronLeft, ChevronRight } from '@stage-ui/icons'
import React from 'react'
import CalendarTypes from './types'

const Arrow = (props: {
  onClick: () => void
  icon: 'chevronLeft' | 'chevronRight'
  disabled: boolean
}) => (
  <Flexbox
    flexBasis="1.5rem"
    alignItems="center"
    onClick={!props.disabled ? props.onClick : undefined}
    css={{
      cursor: props.disabled ? 'not-allowed' : 'pointer',
    }}
  >
    {props.icon === 'chevronLeft' ? (
      <ChevronLeft size="1.5rem" color={(c) => (props.disabled ? c.light : c.hard)} />
    ) : (
      <ChevronRight size="1.5rem" color={(c) => (props.disabled ? c.light : c.hard)} />
    )}
  </Flexbox>
)

const Title = (props: { value: string; onClick?: () => void }) => (
  <Text
    weight={700}
    css={{
      userSelect: 'none',
      cursor: props.onClick !== undefined ? 'pointer' : 'default',
    }}
    onClick={props.onClick}
    capitalize
  >
    {props.value}
  </Text>
)

const DateGridTitle = (props: CalendarTypes.DateGridTitleProps) => {
  const { value, minValue, maxValue, gridType } = props

  return (
    <Flexbox flex={1}>
      <Flexbox flex={1} alignItems="center">
        {(gridType === 'day' || gridType === 'week') && (
          <Flexbox>
            <Title
              onClick={() => props.onGridTypeChange('month')}
              value={value.format('MMMM')}
            />
            <Text>{`\u00A0`}</Text>
            <Title onClick={() => props.onGridTypeChange('year')} value={value.format('YYYY')} />
          </Flexbox>
        )}
        {gridType === 'month' && (
          <Title onClick={() => props.onGridTypeChange('year')} value={value.format('YYYY')} />
        )}
        {gridType === 'year' && (
          <Title
            value={`${value.clone().add(-4, 'year').format('YYYY')} - ${value
              .clone()
              .add(4, 'year')
              .format('YYYY')}`}
          />
        )}
      </Flexbox>
      <Flexbox alignItems="center">
        <Arrow
          onClick={props.onPrevious}
          icon="chevronLeft"
          disabled={minValue.valueOf() > value.valueOf()}
        />
        <Arrow
          onClick={props.onNext}
          icon="chevronRight"
          disabled={maxValue.valueOf() < value.valueOf()}
        />
      </Flexbox>
    </Flexbox>
  )
}

export default DateGridTitle
