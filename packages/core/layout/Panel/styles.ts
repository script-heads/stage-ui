import PanelTypes from "./types";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import css, { Interpolation } from "@emotion/css";

export default (props: PanelTypes.Props) => {
    const styleProps = useStyleProps(props);
    const { theme } = useFlow();
    const overrides = theme.overrides.panel;

    return {
        container: css(
            {
                background: theme.color.surface.css(),
                color: theme.color.onPrimary.css(),
                padding: theme.distance.medium,
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                boxSizing: "border-box",
            },
            getPosition(props.align || "top"),
            styleProps.all,
            overrides && overrides.container,
        )
    }
}

function getPosition(align: PanelTypes.Props["align"]): Interpolation {

    switch (align) {
        case 'top':
            return {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
            }
        case 'bottom':
            return {
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }
        case 'right':
            return {
                position: 'fixed',
                right: 0,
                top: 0,
                bottom: 0,
            }
        case 'left':
            return {
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }
        default:
            return {}
    }
}