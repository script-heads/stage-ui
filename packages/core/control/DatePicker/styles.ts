/**
 * styles.tsx
 * author: I.Trikoz
 */
import { css } from '@emotion/core';
import useFlow from '@flow-ui/core/misc/hooks/useFlow';

export default () => {

    const { theme } = useFlow();
    const overrides = theme.overrides.DatePicker;

    return {
        dateGrind: css({
            position: "relative",
            background: theme.color.surface.css(),
            color: theme.color.onSurface.css(),
        }, overrides && overrides.dateGrind),

        weekDay: css({
            userSelect: "none",
            ...theme.typography.caption[2],
            marginTop: "0.25rem",
            marginBottom: "0.5rem",
            fontWeight: 400,
        }, overrides && overrides.weekDay),

        title: css({
            color: theme.color.onSurface.css(),
            padding: '0.25rem'
        }, overrides && overrides.title),

        /**
         * Styles for day/month/year squire
         */
        gridBlock: (isActive: Boolean, isCurrent: boolean, isDisabled: boolean, isCurrentMonth: boolean) => {
            const st = {
                transition: 'all 0.2s',
                fontWeight: 500,
                minWidth: '2rem',
                height: '2rem',
                cursor: "pointer",
                margin:"0.125rem",
                opacity: 1,
                background: theme.color.background.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.color.surface.css(),
                borderRadius: theme.radius.narrow,
                color: theme.color.onSurface.css(),
                userSelect: "none" as "none",
                ...theme.typography.text[1],
                ':hover': {
                    background: theme.color.lightest.css()
                }
            };
            /**
             * This block is from current month
             */
            if (!isCurrentMonth) {
                st.color = theme.color.hardest.css()
                st.background = theme.color.surface.css()
            }
            /**
             * It is current block
             */
            if (isCurrent) {
                st.borderColor = theme.color.primary.css();
            }
            /**
             * This block is selected
             */
            if (isActive) {
                st.background = theme.color.primary.css();
                st.color = theme.color.onPrimary.css();
                delete st[':hover']
            }
            /**
             * This block is disabled to select
             */
            if (isDisabled) {
                st.opacity = 0.3;
                delete st[':hover']
            }
            return css(st, overrides && overrides.gridBlock);
        },

        drop: (isActive: boolean) => css({
            transition: 'all 0.2s',
            transform: `translateY(${isActive ? 0 : '-1rem'}) scale(${isActive ? 1 : 0.9})`,
            opacity: isActive ? 1 : 0,
            visibility: isActive ? "visible" : "hidden"
        })
    }
}