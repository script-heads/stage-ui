/**
 * styles.tsx
 * author: I.Trikoz
 */
import { css } from '@emotion/core';
import useFlow from '../../misc/hooks/useFlow';
import DatePickerTypes from './types';
import useStyleProps from '../../misc/hooks/useStyleProps';

export default (props: DatePickerTypes.Props) => {

    const { theme } = useFlow();
    const overrides = theme.overrides.datePicker;
    const styleProps = useStyleProps(props);

    return {

        monthGrid: css({
            position: "relative",
            background: theme.color.surface.css(),
            color: theme.color.onSurface.css(),
        }, overrides && overrides.monthGrid),

        weekDay: css({
            userSelect: "none",
            ...theme.typography.caption[2],
            fontWeight: 500,
        }, overrides && overrides.weekDay),

        title: css({
            color: theme.color.onSurface.css(),
            padding: '0.25rem'
        }, overrides && overrides.title),

        monthTitle: css({
            userSelect: "none",
            ...theme.typography.caption[1],
            fontWeight: 500,
        }, overrides && overrides.monthTitle),

        yearTitle: css({
            userSelect: "none",
            ...theme.typography.caption[2],
        }, overrides && overrides.yearTitle),

        /**
         * Styles for day squire
         */
        day: (isActive: Boolean, isCurrent: boolean, isDisabled: boolean, isCurrentMonth: boolean) => {
            const st = {
                transition: "all 0.3s",
                fontWeight: 500,
                width: '2rem',
                height: '2rem',
                cursor: "pointer",
                opacity: 1,
                background: theme.color.background.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.color.surface.css(),
                borderRadius: theme.radius.narrow,
                color: theme.color.onSurface.css(),
                userSelect: "none" as "none",
                ...theme.typography.text[1]
            };
            /**
             * This day is from current month
             */
            if (!isCurrentMonth) {
                st.background = theme.color.background.alpha(0.5).css()
            }
            /**
             * It is current day
             */
            if (isCurrent) {
                st.borderColor = theme.color.primary.css();
            }
            /**
             * This day is selected
             */
            if (isActive) {
                st.background = theme.color.primary.css();
                st.color = theme.color.onPrimary.css();
            }
            /**
             * This day is disabled to select
             */
            if (isDisabled) {
                st.opacity = 0.3;
            }
            return css(st, overrides && overrides.day);
        },

        drop: (isActive: boolean) => css({
            opacity: isActive ? 1 : 0,
            visibility: isActive ? "visible" : "hidden"
        })
    }
}