import { css } from "@emotion/core";
import useFlow from "../../misc/hooks/useFlow";
import RangeTypes from './types';
import useStyleProps from "../../misc/hooks/useStyleProps";

export default (props: RangeTypes.Props) => {
    const { theme } = useFlow();
    const overrides = theme.overrides.range;
    const stylesProps = useStyleProps(props);

    return {
        conatiner: css(
            {
                position: 'relative',
                minWidth: '4rem',
                height: 'calc(1rem + 4px)',
                cursor: 'pointer',
            }, stylesProps.all,
            overrides && overrides.container
        ),
        rail: css({
            position: 'absolute',
            top: 'calc(50% - 2px)',
            height: '4px',
            background: theme.color.lightest.css(),
            width: '100%',
            zIndex: 1,
            borderRadius: '2px',
        }, overrides && overrides.rail),
        track: css({
            position: 'absolute',
            top: 'calc(50% - 2px)',
            height: '4px',
            background: theme.color.primary.css(),
            zIndex: 2,
            borderRadius: '2px',
        }, overrides && overrides.track),
        handle: css({
            position: 'absolute',
            width: '1rem',
            height: '1rem',
            borderRadius: '1rem',
            marginLeft: 'calc(-.5rem - 2px)',
            background: theme.color.surface.css(),
            borderColor: theme.assets.border.color,
            borderStyle: theme.assets.border.style,
            borderWidth: theme.assets.border.width,
            boxShadow: theme.assets.shadow.short,
            border: "2px solid " + theme.color.primary.css(),
            zIndex: 3,
        }, overrides && overrides.handle),
    }
}