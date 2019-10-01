import BlockTypes from "./types";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import { css } from "@emotion/core";
import callProp from "../../misc/utils/callProp";

export default (props: BlockTypes.Props) => {
    const styleProps = useStyleProps(props);
    const { theme } = useFlow();
    const overrides = theme.overrides.block;
    const background = callProp(props.background, theme.color);
    const color = callProp(props.color, theme.color);

    const decoration = {
        minor: Object.assign({
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.short
        }, overrides && overrides.decoration && overrides.decoration.minor),
        medium: Object.assign({
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.default
        }, overrides && overrides.decoration && overrides.decoration.medium),
        major: Object.assign({
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.long
        }, overrides && overrides.decoration && overrides.decoration.major),
    }


    function getDecoration(type) {
        switch (type) {
            case 'minor':
                return decoration.minor
            case 'medium':
                return decoration.medium
            case 'major':
                return decoration.major
            default:
                return null
        }
    }

    return {
        container: css(
            getDecoration(props.surface),
            {
                position: props.position,
                background: background && background,
                color: color,
                '&:hover': getDecoration(props.hoverSurface),
                overflow: props.overflow
            },
            styleProps.all,
            overrides && overrides.containter,
            props.animated && {
                transition: "all .15s"
            }
        )
    }
}