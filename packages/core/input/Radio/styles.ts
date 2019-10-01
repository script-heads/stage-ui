import css from '@emotion/css';
import useFlow from '../../misc/hooks/useFlow';
import variant from '../../misc/utils/variant';
import Global from '../../types';
import RadioTypes from './types';

export default (props: RadioTypes.Props, checked: boolean) => {
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
                borderRadius: '50%',
                opacity: disabled
                    ? 0.7
                    : 1,
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
        radio: css(
            {
                opacity: checked ? 1 : 0,
                boxSizing: "border-box",
                height: "100%",
                width: "100%",
                borderRadius: "50%",
                borderWidth: variant<Global.Size>(size, {
                    xsmall: "0.1rem",
                    small: "0.125rem",
                    medium: "0.25rem",
                    large: "0.25rem",
                    xlarge: "0.375rem",
                }),
                borderStyle: "solid",
                borderColor: theme.color.backgroundVariant.css(),
                background: theme.color.primary.css(),
            },
            animated && {
                transition: "all .15s"
            }
        )
    }
}