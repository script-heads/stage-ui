/**
 * DateGridTitle.tsx
 * author: I.Trikoz
 */
import React, { Fragment } from 'react'
import Icon from '../../content/Icon'
import Text from '../../content/Text'
import Flexbox from '../../layout/Flexbox'
import DatePickerTypes from './types'

const Arrow = (props: { onClick: () => void, icon: 'chevronLeft' | 'chevronRight', disabled: boolean }) => (
    <Flexbox
        flexBasis="1.5rem"
        alignItems="center"
        onClick={!props.disabled ? props.onClick : undefined}
        css={{
            cursor: props.disabled ? 'not-allowed' : 'pointer'
        }}
        children={(
            <Icon
                size={'2rem'}
                type={i => i.outline[props.icon]}
                color={c => props.disabled ? c.light.css() : c.primary.css()}
            />
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

const DateGridTitle = (props: DatePickerTypes.DateGridTitleProps) => {

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