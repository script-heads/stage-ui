import callProp from "../../misc/utils/callProp";
import useFlow from "../../misc/hooks/useFlow";
import { css } from "@emotion/core";
import useStyleProps from "../../misc/hooks/useStyleProps";

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
            props.animated && {
                transition: "all .15s"
            }
        ),
        icon: css({
            display: "inline-block",
            verticalAlign: "middle",
        })
    }
}