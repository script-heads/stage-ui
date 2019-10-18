import css from '@emotion/css';
import useFlow from '@flow-ui/core/misc/hooks/useFlow';
import variant from '@flow-ui/core/misc/utils/variant';
import Global from '@flow-ui/core/types';
import CheckboxTypes from './types';

export default (props: CheckboxTypes.Props, checked: boolean, focus: boolean) => {
    const { theme } = useFlow();
    const { animated, disabled, size = 'medium' } = props;

    return {
        check: css(
            {
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: disabled
                    ? theme.color.hardest.css()
                    : theme.color.primary.css(),
                borderColor: disabled
                    ? theme.color.lightest.css()
                    : (
                        focus
                            ? theme.color.primary.alpha(0.5).css()
                            : theme.color.lightest.css()
                    ),
                backgroundColor: disabled
                    ? theme.color.lightest.css()
                    : theme.color.surface.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderRadius: theme.radius.narrow,
            },
            variant<Global.Size>(size, {
                xsmall: {
                    width: "0.75rem",
                    height: "0.75rem"
                },
                small: {
                    width: "1rem",
                    height: "1rem"
                },
                medium: {
                    width: "1.25rem",
                    height: "1.25rem"
                },
                large: {
                    width: "1.5rem",
                    height: "1.5rem"
                },
                xlarge: {
                    width: "2rem",
                    height: "2rem"
                },
            }),
            animated && {
                transition: "all .15s"
            }
        ),
        icon: css(
            {
                transition: 'all 0.2s',
                opacity: checked ? 1 : 0,
                transform: `scale(${checked ? 1 : 0.5})`,
            },
            variant<Global.Size>(size, {
                xsmall: {
                    fontSize: "0.5rem"
                },
                small: {
                    fontSize: "0.75rem"
                },
                medium: {
                    fontSize: "1rem"
                },
                large: {
                    fontSize: "1.45rem"
                },
                xlarge: {
                    fontSize: "1.9rem"
                },
            }),
            animated && {
                transition: "all .15s"
            }
        )
    }
}