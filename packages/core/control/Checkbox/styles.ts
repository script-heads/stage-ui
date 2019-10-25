import Types from './types';
import Global from '../../types';
import checkStyles from "@flow-ui/core/misc/hocs/Check/styles";

const checkboxStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props, theme) => {
    
    return {
        ...checkStyles(props, theme),
        
        check: (variant) => [
            {
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: theme.color.primary.css(),
                borderColor: theme.color.lightest.css(),
                backgroundColor: theme.color.surface.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderRadius: theme.radius.narrow,
            },
            variant({
                focus: [{
                    borderColor: theme.color.primary.alpha(0.5).css()
                }]
            }),
            variant({
                size: {
                    xsmall: [{
                        width: "0.75rem",
                        height: "0.75rem"
                    }],
                    small: [{
                        width: "1rem",
                        height: "1rem"
                    }],
                    medium: [{
                        width: "1.25rem",
                        height: "1.25rem"
                    }],
                    large: [{
                        width: "1.5rem",
                        height: "1.5rem"
                    }],
                    xlarge: [{
                        width: "2rem",
                        height: "2rem"
                    }],
                },
                animated: [{
                    transition: "all .15s"
                }],
                disabled: [{
                    color: theme.color.hardest.css(),
                    borderColor: theme.color.lightest.css(),
                    backgroundColor: theme.color.lightest.css(),
                }],
            }),
        ],
        icon: (variant) => [
            {
                transition: 'all 0.2s',
                opacity: 0,
                transform: `scale(0.5)`,
            },
            variant({
                size: {
                    xsmall: [{
                        fontSize: "0.5rem"
                    }],
                    small: [{
                        fontSize: "0.75rem"
                    }],
                    medium: [{
                        fontSize: "1rem"
                    }],
                    large: [{
                        fontSize: "1.45rem"
                    }],
                    xlarge: [{
                        fontSize: "1.9rem"
                    }],
                },
                animated: [{
                    transition: "all .15s"
                }],
                checked: [{
                    opacity: 1,
                    transform: `scale(1)`,
                }]
            }),
        ]
    }
}

export default checkboxStyles