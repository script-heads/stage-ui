import css from '@emotion/css';
import useFlow from '../../misc/hooks/useFlow';
import variant from '../../misc/utils/variant';
import Global from '../../types';
import CheckboxTypes from './types';

export default (props: CheckboxTypes.Props, checked: boolean) => {
    const { theme } = useFlow();
    const { animated, disabled, size = 'medium' } = props;

    return {
        check: css(
            {
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: theme.color.primary.css(),
                backgroundColor: theme.color.backgroundVariant.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                borderRadius: theme.radius.narrow,
                opacity: disabled
                    ? 0.7
                    : 1
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
                opacity: checked ? 1 : 0
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