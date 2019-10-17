import Types from "./types";
import chroma from 'chroma-js';
import callProp from "@flow-ui/core/misc/utils/callProp";
// import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';

const ScrollViewStyles: Types.Styles = (props: Types.Props, theme) => {

    let color = chroma(
        callProp(props.color, theme.color) || theme.color.onBackground.css()
    )

    return {
        container: [{
            overflow: 'hidden',
            width: '100%',
            height: '100%',
        }],
        content: [{
            position: 'relative',
            width: 'fit-content',
            height: 'fit-content',
            minWidth: "100%",
            minHeight: "100%",
        }],
        yBar: (variant) => [
            {
                position: "absolute",
                top: 0,
                right: 0,
                width: '0.5rem',
                borderRadius: '1rem',
                backgroundColor: color.alpha(0.2).css(),
                transition: 'opacity 0.5s',
                opacity: 0,
                ':hover': {
                    opacity: 1,
                    '> span': { opacity: 0.5 }
                }
            },
            variant({
                active: [{ opacity: 1 }]
            })
        ],
        yThumb: (variant) => [
            {
                display: "block",
                width: '0.5rem',
                height: "100%",
                borderRadius: '1rem',
                backgroundColor: color.css(),
                opacity: 0,
                transition: 'opacity 0.5s'
            },
            variant({
                active: [{ opacity: 0.5 }]
            })
        ],
        xBar: (variant) => [
            {
                position: "absolute",
                left: 0,
                bottom: 0,
                height: '0.5rem',
                width:'100%',
                borderRadius: '1rem',
                backgroundColor: color.alpha(0.2).css(),
                transition: 'opacity 0.5s',
                opacity: 0,
                ':hover': {
                    opacity: 1,
                    '> span': { opacity: 0.5 }
                }
            },
            variant({
                active: [{ opacity: 1 }]
            })
        ],
        xThumb: (variant) => [
            {
                display: "block",
                height: '0.5rem',
                width: "100%",
                borderRadius: '1rem',
                backgroundColor: color.css(),
                opacity: 0,
                transition: 'opacity 0.5s'
            },
            variant({
                active: [{ opacity: 0.5 }]
            })
        ],
    }
}

export default ScrollViewStyles