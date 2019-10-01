import BadgeTypes from "./types";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import css from "@emotion/css";
import callProp from "../../misc/utils/callProp";
import typography from "../../misc/typography";

export default (props: BadgeTypes.Props) => {
    const styleProps = useStyleProps(props);
    const { theme } = useFlow();
    const overrides = theme.overrides.bage;
    const background = callProp(props.background, theme.color) || theme.color.primary.css();
    const color = callProp(props.color, theme.color) || theme.color.onPrimary.css();

    return {
        container: css(
            styleProps.flow,
            {
                position: 'relative',
                width: 'fit-content',
            },
            overrides && overrides.container,
            props.animated && {
                transition: "all .15s"
            },
        ),
        holder: (isElement: boolean) => css(
            {
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                position: 'absolute',
                background: background,
                color: color,
                borderRadius: '1rem',
                padding: theme.distance.xsmall + ' ' + theme.distance.small,
                fontSize: typography.caption[1].fontSize,
                lineHeight: typography.caption[1].lineHeight,
                minWidth: `calc(${typography.caption[1].lineHeight} - ${theme.distance.small})`
            },
            getPosition(props.align),
            styleProps.self,
            !isElement && overrides && overrides.holder,
        )
    }
}

function getPosition(align: BadgeTypes.Props["align"]) {
    switch (align) {
        case 'top-right':
            return {
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%)',
            }
        case 'top-left':
            return {
                top: 0,
                left: 0,
                transform: 'translate(-50%, -50%)',
            }
        case 'bottom-right':
            return {
                bottom: 0,
                right: 0,
                transform: 'translate(50%, 50%)',
            }
        case 'bottom-left':
            return {
                bottom: 0,
                left: 0,
                transform: 'translate(-50%, 50%)',
            }
        case 'top':
            return {
                top: 0,
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }
        case 'bottom':
            return {
                bottom: 0,
                left: '50%',
                transform: 'translate(-50%, 50%)',
            }
        case 'right':
            return {
                top: '50%',
                right: 0,
                transform: 'translate(50%, -50%)',
            }
        case 'left':
            return {
                top: '50%',
                left: 0,
                transform: 'translate(-50%, -50%)',
            }
        default:
            return {
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%)',
            }
    }
}