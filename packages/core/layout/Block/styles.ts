import BlockTypes from "./types";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import createStyles from '../../misc/utils/createStyles';

export default (props: BlockTypes.Props) => {
    const styleProps = useStyleProps(props);
    const { theme } = useFlow();

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

    return createStyles({
        props,
        overrides: theme.overrides.block,
        styles: {
            container: (variant) => [
                {
                    position: props.position,
                    '&:hover': variant('hoverSurface', surfaceVariants),
                    overflow: props.overflow
                },
                variant('surface', surfaceVariants),
                styleProps.color,
                styleProps.flex,
                styleProps.grid,
                styleProps.layout,
                styleProps.padding,
                styleProps.margin,
            ]
        }
    })
}