/**
 * DateGridTitle.tsx
 * author: I.Trikoz
 */
import React, { Fragment } from 'react';
import Icon from '../../content/Icon';
import { T1 } from '../../content/Typography';
import Flexbox from '../../layout/Flexbox';
import createStyles from './styles';
import DatePickerTypes from './types';
import { useDateFormat } from './utils';

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

    const { locale, date, gridType } = props;
    
    const format = useDateFormat(date, locale);

    const styles = createStyles();

    return (
        <Fragment>
            <Flexbox css={styles.title}>
                <Arrow onClick={props.onPrevious} icon="chevronLeft" />
                <Flexbox column flex={1} alignItems="center" justifyContent="center">
                    {gridType === "day" && (
                        <T1 weight={500} css={{ cursor: "pointer" }} onClick={() => props.onGridTypeChange("month")}>
                            {format('LLLL')}
                        </T1>
                    )}
                    {gridType === "month" && (
                        <T1 weight={500} css={{ cursor: "pointer" }} onClick={() => props.onGridTypeChange("year")}>
                            {format('yyyy')}
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