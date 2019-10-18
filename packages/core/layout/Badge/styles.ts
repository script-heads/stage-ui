import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import typography from "../../misc/typography";
import BadgeTypes from "./types";

const BadgeStyles: BadgeTypes.Styles = (props: BadgeTypes.Props, theme) => {
    const styleProps = useStyleProps(props);

    return {
        container: [
            {
                position: 'relative',
                width: 'fit-content',
            },
            styleProps.flow
        ],
        holder: (variant) => [
            {
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                position: 'absolute',
                borderRadius: '1rem',
                padding: theme.distance.xsmall + ' ' + theme.distance.small,
                ...typography.caption[1],
                minWidth: `calc(${typography.caption[1].lineHeight} - ${theme.distance.small})`,
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%)',
            },
            variant({
                align: {
                'top-right': [{
                    top: 0,
                    right: 0,
                    transform: 'translate(50%, -50%)',
                }],
                'top-left': [{
                    top: 0,
                    left: 0,
                    transform: 'translate(-50%, -50%)',
                }],
                'bottom-right': [{
                    bottom: 0,
                    right: 0,
                    transform: 'translate(50%, 50%)',
                }],
                'bottom-left': [{
                    bottom: 0,
                    left: 0,
                    transform: 'translate(-50%, 50%)',
                }],
                'top': [{
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }],
                'bottom': [{
                    bottom: 0,
                    left: '50%',
                    transform: 'translate(-50%, 50%)',
                }],
                'right': [{
                    top: '50%',
                    right: 0,
                    transform: 'translate(50%, -50%)',
                }],
                'left': [{
                    top: '50%',
                    left: 0,
                    transform: 'translate(-50%, -50%)',
                }]
            }}),
            styleProps.self
        ]
    }
}

export default BadgeStyles