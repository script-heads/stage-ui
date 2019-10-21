import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import Types from "./types";
import Global from "../../types";

const panelStyles: Global.ComponentStyles<Types.Styles> = (props: Types.Props, theme) => {
    const styleProps = useStyleProps(props);

    return {
        container: (variant) => [
            {
                position: 'fixed',
                background: theme.color.surface.css(),
                color: theme.color.onPrimary.css(),
                padding: theme.distance.medium,
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                boxSizing: "border-box",
            },
            variant({
                align: {
                    'top': [{
                        top: 0,
                        left: 0,
                        right: 0,
                    }],
                    'bottom': [{
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }],
                    'right': [{
                        right: 0,
                        top: 0,
                        bottom: 0,
                    }],
                    'left': [{
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }]
                }
            }),
            styleProps.all
        ]
    }
}

export default panelStyles