import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import BlockTypes from "./types";

const BlockStyles: BlockTypes.Styles = (props: BlockTypes.Props, theme) => {
    const styleProps = useStyleProps(props);
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

    return {
        container: (variant) => [
            {
                position: props.position,
                '&:hover': variant({hoverSurface: surfaceVariants}),
                overflow: props.overflow
            },
            variant({surface: surfaceVariants}),
            styleProps.all
        ]
    }
}

export default BlockStyles