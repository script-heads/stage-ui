import css from '@emotion/css';
import useFlow from '../../misc/hooks/useFlow';
import variant from '../../misc/utils/variant';
import Global from '../../types';
import SwitchTypes from './types';

export default (props: SwitchTypes.Props, checked: boolean) => {
    const { theme } = useFlow();
    const { animated, disabled, size = 'medium' } = props;

    return {
        check: css(
            {
                transition: 'all 0.2s',
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: 
                    checked 
                    ? disabled
                        ? theme.color.lightest.css()
                        : theme.color.primary.css() 
                    : theme.color.lightest.css(),
            },
            variant<Global.Size>(size, {
                xsmall: {
                    width: "1.125rem",
                    height: "0.25rem",
                    borderRadius: '0.75rem',
                },
                small: {
                    width: "1.5rem",
                    height: "0.5rem",
                    borderRadius: '1rem',
                },
                medium: {
                    width: "1.825rem",
                    height: "0.625rem",
                    borderRadius: '1.25rem',
                },
                large: {
                    width: "2.25rem",
                    height: "0.75rem",
                    borderRadius: '1.5rem',
                },
                xlarge: {
                    width: "3rem",
                    height: "1rem",
                    borderRadius: '2rem',
                },
            }),
            animated && {
                transition: "all .15s"
            }
        ),
        switch: css(
            {
                transition: 'all 0.2s',
                position: "relative",
                boxSizing: "border-box",
                borderRadius: "50%",
                borderStyle: "solid",
                borderColor: disabled
                    ? theme.color.lightest.css()
                    : theme.color.primary.css(),
                background: theme.color.surface.css(),
                boxShadow: theme.assets.shadow.default,
            },
            variant<Global.Size>(size, {
                xsmall: {
                    borderWidth: "0.1rem",
                    width: "0.75rem",
                    height: "0.75rem",
                    left: checked ? "0.1875rem" : "-0.1875rem"
                },
                small: {
                    borderWidth: "0.1rem",
                    width: "1rem",
                    height: "1rem",
                    left: checked ? "0.25rem" : "-0.25rem",

                },
                medium: {
                    borderWidth: "0.125rem",
                    width: "1.25rem",
                    height: "1.25rem",
                    left: checked ? "0.3125rem" : "-0.3125rem",
                },
                large: {
                    borderWidth: "0.175rem",
                    width: "1.5rem",
                    height: "1.5rem",
                    left: checked ? "0.375rem" : "-0.375rem",
                },
                xlarge: {
                    borderWidth: "0.25rem",
                    width: "2rem",
                    height: "2rem",
                    left: checked ? "0.5rem" : "-0.5rem",

                }
            }),
            animated && {
                transition: "all .15s"
            }
        )
    }
}