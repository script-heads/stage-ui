import { StyleObject } from '@flow-ui/whale/types'
import colorProp from './colorProp'
import CSS from 'csstype'

interface Props extends Shared.SelfProps, Shared.FlowProps {
    [key: string]: any
}

type Color = {
    background: CSS.Properties['background']
    color: CSS.Properties['color']
}
type Border = {
    borderWidth: CSS.Properties['borderWidth']
    borderStyle: CSS.Properties['borderStyle']
    borderColor: CSS.Properties['borderColor']
    borderRadius: CSS.Properties['borderRadius']
}
type Padding = {
    padding: CSS.Properties['padding']
    paddingTop: CSS.Properties['paddingTop']
    paddingLeft: CSS.Properties['paddingLeft']
    paddingRight: CSS.Properties['paddingRight']
    paddingBottom: CSS.Properties['paddingBottom']
}
type Margin = {
    margin: CSS.Properties['margin']
    marginTop: CSS.Properties['marginTop']
    marginLeft: CSS.Properties['marginLeft']
    marginRight: CSS.Properties['marginRight']
    marginBottom: CSS.Properties['marginBottom']
}
type Layout = {
    display: CSS.Properties['display']
    visibility: CSS.Properties['visibility']
    width: CSS.Properties['width']
    height: CSS.Properties['height']
    transition: CSS.Properties['transition']
}
type Flex = {
    flex: CSS.Properties['flex']
    flexBasis: CSS.Properties['flexBasis']
    flexGrow: CSS.Properties['flexGrow']
    flexShrink: CSS.Properties['flexShrink']
    alignSelf: CSS.Properties['alignSelf']
    justifySelf: CSS.Properties['justifySelf']
}
type Grid = {
    gridColumnStart: CSS.Properties['gridColumnStart']
    gridColumnEnd: CSS.Properties['gridColumnEnd']
    gridRowStart: CSS.Properties['gridRowStart']
    gridRowEnd: CSS.Properties['gridRowEnd']
    gridColumn: CSS.Properties['gridColumn']
    gridRow: CSS.Properties['gridRow']
    gridArea: CSS.Properties['gridArea']
    placeSelf: CSS.Properties['placeSelf']
}

export interface InjectedStyleProps {
    color: Color
    border: Border
    padding: Padding
    margin: Margin
    layout: Layout
    flex: Flex
    grid: Grid
    flow: Margin & Flex & Grid
    self: Padding & Layout & Color & Border
    all: Margin & Flex & Grid & Padding & Layout & Color & Border
}

const useStyleProps = (props: Props, theme): InjectedStyleProps => {

    const color = {
        background: colorProp(props.backgroundColor, theme.color),
        color: colorProp(props.textColor, theme.color)
    }

    const border = {
        borderWidth: props.borderWidth,
        borderStyle: props.borderStyle,
        borderColor: colorProp(props.borderColor, theme.color),
        borderRadius: props.borderRadius
    }

    const padding = {
        padding: props.p || (props.px || props.py) && `${props.py || '0'} ${props.px || '0'}`,
        paddingTop: props.pt,
        paddingLeft: props.pl,
        paddingRight: props.pr,
        paddingBottom: props.pb,
    }

    const margin = {
        margin: props.m || (props.mx || props.my) && `${props.my || '0'} ${props.mx || '0'}`,
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
        transition: props.animated ? 'all .15s' : undefined
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