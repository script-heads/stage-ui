import Global from '@flow-ui/core/types';
import Types from './types';
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import callProp from '@flow-ui/core/misc/utils/callProp';

const dividerStyles: Global.ComponentStyles<Types.Styles> = (props: Types.Props, theme) => {
    const styleProps = useStyleProps(props);
    let { gap = 0, dash = 0, vertical } = props;
    const color = callProp(props.color, theme.color) || theme.assets.border.color;
    
    if (gap && !dash) {
        dash = 1
    }

    if (dash && !gap) {
        gap = dash
    }
    
    return {
        container: [
            vertical
                ? {
                    height: '100%',
                    width: '1px',
                    ...(gap || dash)
                        ? {
                            backgroundImage: `linear-gradient(
                            to bottom,
                            ${color},
                            ${color} ${dash}px,
                            transparent ${dash}px, 
                            transparent ${gap}px 
                        )`,
                            backgroundPosition: 'right top',
                            backgroundSize: `${props.w || '1px'} ${gap + dash}px`,
                            backgroundRepeat: 'repeat-y',
                        }
                        : {
                            background: color
                        }
                }
                : {
                    width: '100%',
                    height: '1px',
                    ...(gap || dash)
                        ? {
                            backgroundImage: `linear-gradient(
                            to right,
                            ${color},
                            ${color} ${dash}px,
                            transparent ${dash}px, 
                            transparent ${gap}px 
                        )`,
                            backgroundPosition: 'left bottom',
                            backgroundSize: `${gap + dash}px`,
                            backgroundRepeat: 'repeat-x',
                        }
                        : {
                            background: color
                        }
                },
            styleProps.all
        ]
    }
}

export default dividerStyles;