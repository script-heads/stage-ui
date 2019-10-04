/**
 * DateGridTitle.tsx
 * author: I.Trikoz
 */
import React, { Fragment } from 'react';
import Icon from '../../content/Icon';
import { T1 } from '../../content/Typography';
import Flexbox from '../../layout/Flexbox';
import DatePickerTypes from './types';

const Arrow = (props: { onClick: () => void, icon: "chevronLeft" | "chevronRight" }) => (
    <Flexbox
        flexBasis='1.5rem'
        alignItems="center"
        onClick={props.onClick}
        children={(
            <Icon  size={"2rem"} type={i => i.outline[props.icon]} />
        )}
    />
);

const DateGridTitle = (props: DatePickerTypes.DateGridTitleProps) => {

    const { date, gridType } = props;
    
    return (
        <Fragment>
            <Flexbox css={props.styles.title}>
                <Arrow onClick={props.onPrevious} icon="chevronLeft" />
                <Flexbox column flex={1} alignItems="center" justifyContent="center">
                    {gridType === "day" && (
                        <T1 weight={500} css={{ cursor: "pointer" }} onClick={() => props.onGridTypeChange("month")}>
                            {date.format('MMMM')}
                        </T1>
                    )}
                    {gridType === "month" && (
                        <T1 weight={500} css={{ cursor: "pointer" }} onClick={() => props.onGridTypeChange("year")}>
                            {date.format('YYYY')}
                        </T1>
                    )}
                    {gridType === "year" && (
                        <T1 weight={500}>
                            {""}
                        </T1>
                    )}
                </Flexbox>
                <Arrow onClick={props.onNext} icon="chevronRight" />
            </Flexbox>
        </Fragment>
    )
};

export default DateGridTitle;