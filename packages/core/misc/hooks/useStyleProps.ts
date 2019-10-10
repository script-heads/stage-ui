import Global from "../../types";
import { Interpolation } from "@emotion/core";
import callProp from "../utils/callProp";
import useFlow  from './useFlow';

interface Props extends Global.SelfProps, Global.FlowProps {
    [key: string]: any
}

interface InjectedStyleProps {
    color: Interpolation 
    border: Interpolation
    padding: Interpolation
    margin: Interpolation
    layout: Interpolation
    flex: Interpolation
    grid: Interpolation
    flow: Interpolation
    self: Interpolation
    all: Interpolation
}

const useStyleProps = (props: Props): InjectedStyleProps => {
    const {theme} = useFlow();

    const color = {
        background: callProp(props.backgroundColor, theme.color),
        color: callProp(props.textColor, theme.color)
    }

    const border = {
        borderWidth: props.borderWidth,
        borderStyle: props.borderStyle,
        borderColor: props.borderColor,
        borderRadius: props.borderRadius
    }

    const padding = {
        padding: props.p || props.px && `0 ${props.px}` || props.py && `${props.py} 0`,
        paddingTop: props.pt,
        paddingLeft: props.pl,
        paddingRight: props.pr,
        paddingBottom: props.pb,
    }

    const margin = {
        margin: props.m || props.mx && `0 ${props.mx}` || props.my && `${props.my} 0`,
        marginTop: props.mt,
        marginLeft: props.ml,
        marginRight: props.mr,
        marginBottom: props.mb,
    }

    const layout = {
        display: props.display,
        visibility: props.visibility,
        width: props.w,
        height: props.h,
        ...props.animated && {
            transition: "all .15s"
        }
    }

    const flex = {
        flex: props.flex,
        flexBasis: props.flexBasis,
        flexGrow: props.flexGrow,
        flexShrink: props.flexShrink,
        alignSelf: props.alignSelf,
        justifySelf: props.justifySelf,
    }

    const grid = {
        gridColumnStart: props.gridColumnStart,
        gridColumnEnd: props.gridColumnEnd,
        gridRowStart: props.gridRowStart,
        gridRowEnd: props.gridRowEnd,
        gridColumn: props.gridColumn,
        gridRow: props.gridRow,
        gridArea: props.gridArea,
        placeSelf: props.placeSelf,
    }

    return {
        color,
        border,
        padding,
        margin,
        layout,
        flex,
        grid,
        flow: {
            ...margin,
            ...flex,
            ...grid,
        },
        self: {
            ...color,
            ...border,
            ...padding,
            ...layout,
        },
        all: {
            ...color,
            ...border,
            ...padding,
            ...margin,
            ...layout,
            ...flex,
            ...grid,
        }
    }
}

export default useStyleProps