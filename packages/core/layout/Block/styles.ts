import BlockTypes from "./types";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import callProp from "../../misc/utils/callProp";
import componentStyles from '../../misc/utils/componentStyles';

export default (props: BlockTypes.Props) => {
    const styleProps = useStyleProps(props);
    const { theme } = useFlow();
    const overrides = theme.overrides.block;
    const background = callProp(props.background, theme.color);
    const color = callProp(props.color, theme.color);

    const surfaceVariants = {
        'minor': [{
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.short
        }],
        'medium': [{
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.default
        }],
        'major': [{
            borderWidth: theme.assets.border.width,
            borderStyle: theme.assets.border.style,
            borderColor: theme.assets.border.color,
            borderRadius: theme.radius.default,
            background: theme.color.surface.css(),
            boxShadow: theme.assets.shadow.long
        }]
    }

    return componentStyles({
        props,
        overrides,
        styles: {
            container: (variant) => [
                {
                    position: props.position,
                    background: background && background,
                    color: color,
                    '&:hover': variant('hoverSurface', surfaceVariants),
                    overflow: props.overflow
                },
                props.animated && {
                    transition: "all .15s"
                },
                variant('surface', surfaceVariants),
                styleProps.all,
            ]
        }
    })
}