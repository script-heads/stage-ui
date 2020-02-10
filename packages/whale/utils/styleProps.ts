import WhaleTypes from '@flow-ui/whale/types'
import colorProp from './colorProp'
import CSS from 'csstype'

interface Props extends 
    WhaleTypes.ColorProps, 
    WhaleTypes.BorderProps,
    WhaleTypes.PaddingProps,
    WhaleTypes.MarginProps,
    WhaleTypes.LayoutProps,
    WhaleTypes.FlexProps,
    WhaleTypes.GridProps {
        [key: string]: unknown
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

export interface InjectedStyles {
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

type InjectedStylesNames = keyof InjectedStyles

const colorResolver = (propValue, propName, theme) => {
    return colorProp(propValue, theme.color)?.rgb().string()
}

const pmResolver = (propValue, propName: 'px' | 'mx' | 'py' | 'my', theme) => {
    switch (propName) {
        case 'px':
        case 'mx':
            return `0 ${propValue}`
        case 'py':
        case 'my':
            return `${propValue} 0`
    }
}

const animatedResolver = (propValue, propName, theme) => {
    return propValue ? 'all .15s' : undefined
}

const nameResolver = {
    //Color
    backgroundColor: ['color', 'backgroundColor', colorResolver],
    textColor: ['color', 'color', colorResolver],

    //Border
    borderWidth: ['border', 'borderWidth'],
    borderStyle: ['border', 'borderStyle'],
    borderColor: ['border', 'borderColor', colorResolver],
    borderRadius: ['border', 'borderRadius'],

    //Padding
    p: ['padding', 'padding'],
    px: ['padding', 'padding', pmResolver],
    py: ['padding', 'padding', pmResolver],
    pt: ['padding', 'paddingTop'],
    pr: ['padding', 'paddingRight'],
    pb: ['padding', 'paddingBottom'],
    pl: ['padding', 'paddingLeft'],        

    //Margin
    m: ['margin', 'margin'],
    mx: ['margin', 'margin', pmResolver],
    my: ['margin', 'margin', pmResolver],
    mt: ['margin', 'marginTop'],
    mr: ['margin', 'marginRight'],
    mb: ['margin', 'marginBottom'],
    ml: ['margin', 'marginLeft'],

    //Layout
    display: ['layout', 'display'],
    visibility: ['layout', 'visibility'],
    w: ['layout', 'width'],
    h: ['layout', 'height'],
    animated: ['layout', 'transition', animatedResolver],

    //Flex
    flex: ['flex','flex'],
    flexBasis: ['flex','flexBasis'],
    flexGrow: ['flex','flexGrow'],
    flexShrink: ['flex','flexShrink'],
    alignSelf: ['flex','alignSelf'],
    justifySelf: ['flex','justifySelf'],

    //Grid
    gridColumnStart: ['grid','gridColumnStart'],
    gridColumnEnd: ['grid','gridColumnEnd'],
    gridRowStart: ['grid','gridRowStart'],
    gridRowEnd: ['grid','gridRowEnd'],
    gridColumn: ['grid','gridColumn'],
    gridRow: ['grid','gridRow'],
    gridArea: ['grid','gridArea'],
    placeSelf: ['grid','placeSelf'],
}

export const useStyleProps = (props: Props, theme, queries) => {
    
    const styles = {} as InjectedStyles
    
    Object.keys(props).forEach(propName => {
        if (nameResolver[propName]) {
            const value = props[propName]
            const section = nameResolver[propName][0]
            const styleName = nameResolver[propName][1]
            const resolver = nameResolver[propName][2]
            if (!styles[section]) styles[section] = {}
            if (Array.isArray(value)) {
                value.forEach((point, index) => { 
                    styles[section][index ? queries[index] : styleName] = resolver 
                        ? resolver(point,propName,theme) 
                        : point
                })
            } else {
                styles[section][styleName] = resolver 
                    ? resolver(value,propName,theme) 
                    : value
            }
        }
    })
    
    const flow = Object.assign({}, styles.margin, styles.flex, styles.grid)
    const self = Object.assign({}, styles.color, styles.border, styles.padding, styles.layout)
    const all = Object.assign({}, flow, self)
    
    return {
        ...styles,
        flow,
        self,
        all
    }
}

const getStyleProps = (props: Props, theme, queries, styleProps?: InjectedStylesNames[]) => {
    if (!styleProps) return []
    
    const styles = [] as InjectedStyles[InjectedStylesNames][]
    
    styleProps.forEach(value => {
        styles.push(useStyleProps(props, theme, queries)[value])
    })

    return styles
}

export default getStyleProps