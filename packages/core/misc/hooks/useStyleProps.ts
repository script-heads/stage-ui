import Global from "../../types";
import { Interpolation } from "@emotion/core";

interface Props extends Global.StyleSelfProps, Global.StyleFlowProps {
    [key: string]: any
}

export default (props: Props) => {

    const self = {
        padding: props.p,
        paddingTop: props.pt,
        paddingLeft: props.pl,
        paddingRight: props.pr,
        paddingBottom: props.pb,
        width: props.w,
        height: props.h,
        visibility: props.visibility,
        overflow: props.overflow,
        outline: 'none',
    } as Interpolation

    const flow = {
        margin: props.m,
        marginTop: props.mt,
        marginLeft: props.ml,
        marginRight: props.mr,
        marginBottom: props.mb,
        display: props.display,
        position: props.position,
        flex: props.flex,
        flexBasis: props.flexBasis,
        flexGrow: props.flexGrow,
        flexShrink: props.flexShrink,
        alignSelf: props.alignSelf,
        justifySelf: props.justifySelf,
        gridColumnStart: props.gridColumnStart,
        gridColumnEnd: props.gridColumnEnd,
        gridRowStart: props.gridRowStart,
        gridRowEnd: props.gridRowEnd,
        gridColumn: props.gridColumn,
        gridRow: props.gridRow,
        gridArea: props.gridArea,
        placeSelf: props.placeSelf,
    } as Interpolation

    if (props.onClick && self) {
        self['cursor'] = 'pointer';
    }

    return { self, flow, all: [self, flow] }
}