/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox, Text } from '@stage-ui/core'
import { ChevronLeft, ChevronRight } from '@stage-ui/core/icons'
import { Fragment } from 'react'
import CalendarTypes from './types'

const Arrow = (props: { onClick: () => void, icon: 'chevronLeft' | 'chevronRight', disabled: boolean }) => (
    <Flexbox
        flexBasis="1.5rem"
        alignItems="center"
        onClick={!props.disabled ? props.onClick : undefined}
        css={{
            cursor: props.disabled ? 'not-allowed' : 'pointer'
        }}
        children={(
            props.icon === 'chevronLeft'
                ? <ChevronLeft size={'2rem'} color={c => props.disabled ? c.light : c.primary} />
                : <ChevronRight size={'2rem'} color={c => props.disabled ? c.light : c.primary} />
        )}
    />
)

const Title = (props: {value: string, onClick?: () => void}) => (
    <Text 
        weight={700} 
        css={{ 
            userSelect: 'none', 
            cursor: props.onClick !== void 0 ? 'pointer' : 'default' 
        }} 
        onClick={props.onClick}
        children={props.value}
    />
)

const DateGridTitle = (props: CalendarTypes.DateGridTitleProps) => {

    const { value, minValue, maxValue, gridType } = props

    return (
        <Fragment>
            <Flexbox css={props.styles.title}>
                <Arrow onClick={props.onPrevious} icon="chevronLeft" disabled={minValue.valueOf() > value.valueOf()} />
                <Flexbox column flex={1} alignItems="center" justifyContent="center">
                    {gridType === 'day' && (
                        <Flexbox>
                            <Title 
                                onClick={() => props.onGridTypeChange('month')}
                                value={value.format('MMMM')}
                            />
                            <Text>{`\u00A0`}</Text>
                            <Title 
                                onClick={() => props.onGridTypeChange('year')}
                                value={value.format('YYYY')}
                            />
                        </Flexbox>
                    )}
                    {gridType === 'month' && (
                        <Title 
                            onClick={() => props.onGridTypeChange('year')}
                            value={value.format('YYYY')}
                        />
                    )}
                    {gridType === 'year' && (
                        <Title 
                            value={`${value.clone().add(-4, 'year').format('YYYY')} - ${value.clone().add(4, 'year').format('YYYY')}`}
                        />
                    )}
                </Flexbox>
                <Arrow onClick={props.onNext} icon="chevronRight" disabled={maxValue.valueOf() < value.valueOf()} />
            </Flexbox>
        </Fragment>
    )
}

export default DateGridTitle