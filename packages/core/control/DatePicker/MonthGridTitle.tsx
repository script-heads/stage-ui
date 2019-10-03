/**
 * MonthGridTitle.tsx
 * author: I.Trikoz
 */
import React, { Fragment } from 'react';
import moment from 'moment';
import DatePickerTypes from './types';
import Flexbox from '../../layout/Flexbox';
import Icon from '../../content/Icon';

const MonthGridTitle = (props: DatePickerTypes.MonthGridTitleProps) => {

    const styles = props.styles;

    const Action = (actionProps: { next?: true, previous?: true }) => (
        <Flexbox
            flexBasis='1.5rem'
            alignItems="center"
            onClick={() => {
                props.onChange && props.onChange(
                    props.date.clone().add(actionProps.previous ? -1 : 1, "month")
                )
            }}
            children={<Icon type={i => actionProps.previous ? i.outline.chevronLeft : i.outline.chevronRight} />}
        />
    );

    return (
        <Fragment>
            <Flexbox css={styles.title}>
                <Action previous />
                <Flexbox column flex={1} alignItems="center" justifyContent="center">
                    <div css={styles.monthTitle}>{props.date.format("MMMM")}</div>
                    <div css={styles.yearTitle}>{props.date.format("YYYY")}</div>
                </Flexbox>
                <Action next />
            </Flexbox>
            {props.disaplayWeeks && (
                <Flexbox>
                    {moment.weekdaysShort(true).map(day => (
                        <Flexbox
                            key={day}
                            flex={1}
                            css={styles.weekDay}
                            justifyContent="center"
                            alignItems="center"
                            children={day.slice(0, 2)}
                        />
                    ))}
                </Flexbox>
            )}
        </Fragment>
    )
};

export default MonthGridTitle;