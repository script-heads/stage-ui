import { css } from "@emotion/core";
import useFlow from "@flow-ui/core/misc/hooks/useFlow";
import useStyleProps from "@flow-ui/core/misc/hooks/useStyleProps";
import callProp from "@flow-ui/core/misc/utils/callProp";

export default (props) => {
    const { theme } = useFlow();
    const styleProps = useStyleProps(props);
    const background = callProp(props.background, theme.color);
    const color = callProp(props.color, theme.color);

    return {
        container: css(
            {
                height: "min-content",
                width: "min-content",
                fontSize: props.size,
                display: 'flex',
                color,
                background
            },
            props.onClick && {
                cursor: "pointer"
            },
            props.shape === 'oval' && {
                borderRadius: "50%",
                padding: "0.4em",
            },
            props.shape === 'circle' && {
                borderRadius: "50%",
                border: '1px solid ' + color,
                padding: "0.4em",
            },
            styleProps.all,
        ),
        icon: css({
            display: "inline-block",
            verticalAlign: "middle",
        })
    }
}