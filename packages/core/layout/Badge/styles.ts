import BadgeTypes from "./types";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import typography from "../../misc/typography";
import createStyles from '../../misc/utils/createStyles';

export default (props: BadgeTypes.Props) => {
    const { theme } = useFlow();
    const styleProps = useStyleProps(props);

    return createStyles({
        props,
        overrides: theme.overrides.Bage,
        styles: {
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
                variant('align', {
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
                }),
                styleProps.self
            ]
        }
    })
}