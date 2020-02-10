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
}

type Margin = {
    margin: CSS.Properties['margin']
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

type Resolver = (resolverParams: {
    propValue: any
    propName: string
    theme: WhaleTypes.Theme
    ctx: ResolverContext
}) => string | void

type ResolverContext = {
    padding: [string, string, string, string],
    margin: [string, string, string, string]
}

type InjectedStylesNames = keyof InjectedStyles

const colorResolver: Resolver = (params) => {
    const { propValue, theme } = params
    return colorProp(propValue, theme.color)?.rgb().string()
}

const spacingResolver: Resolver = (params) => {
    const { propValue, propName, ctx } = params
    const k = propName[0] === 'p' ? 'padding' : 'margin'
    const x = propName[1] === 'x'
    const y = propName[1] === 'y'
    const t = propName[1] === 't'
    const b = propName[1] === 'b'
    const l = propName[1] === 'l'
    const r = propName[1] === 'r'
    const v = propValue.split(' ')
    if (propName.length === 1) {
        ctx[k][0] = v[0]
        ctx[k][1] = v[2] ? v[1] : v[0]
        ctx[k][2] = v[2] || v[0]
        ctx[k][3] = v[3] || v[0]
    } else {
        if (t || y) ctx[k][0] = v[0]
        if (r || x) ctx[k][1] = v[0]
        if (b) ctx[k][2] = v[0]
        if (l) ctx[k][3] = v[0]
        if (y) ctx[k][2] = v[1] || v[0]
        if (x) ctx[k][3] = v[1] || v[0]
    }
    return ctx[k].join(' ')
}

const animatedResolver: Resolver = (params) => {
    return params.propValue ? 'all .15s' : undefined
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
    p: ['padding', 'padding', spacingResolver],
    px: ['padding', 'padding', spacingResolver],
    py: ['padding', 'padding', spacingResolver],
    pt: ['padding', 'padding', spacingResolver],
    pr: ['padding', 'padding', spacingResolver],
    pb: ['padding', 'padding', spacingResolver],
    pl: ['padding', 'padding', spacingResolver],

    //Margin
    m: ['margin', 'margin', spacingResolver],
    mx: ['margin', 'margin', spacingResolver],
    my: ['margin', 'margin', spacingResolver],
    mt: ['margin', 'margin', spacingResolver],
    mr: ['margin', 'margin', spacingResolver],
    mb: ['margin', 'margin', spacingResolver],
    ml: ['margin', 'margin', spacingResolver],

    //Layout
    display: ['layout', 'display'],
    visibility: ['layout', 'visibility'],
    w: ['layout', 'width'],
    h: ['layout', 'height'],
    animated: ['layout', 'transition', animatedResolver],

    //Flex
    flex: ['flex', 'flex'],
    flexBasis: ['flex', 'flexBasis'],
    flexGrow: ['flex', 'flexGrow'],
    flexShrink: ['flex', 'flexShrink'],
    alignSelf: ['flex', 'alignSelf'],
    justifySelf: ['flex', 'justifySelf'],

    //Grid
    gridColumnStart: ['grid', 'gridColumnStart'],
    gridColumnEnd: ['grid', 'gridColumnEnd'],
    gridRowStart: ['grid', 'gridRowStart'],
    gridRowEnd: ['grid', 'gridRowEnd'],
    gridColumn: ['grid', 'gridColumn'],
    gridRow: ['grid', 'gridRow'],
    gridArea: ['grid', 'gridArea'],
    placeSelf: ['grid', 'placeSelf'],
}

export const useStyleProps = (props: Props, theme, queries) => {

    const styles = {} as InjectedStyles
    const ctx: ResolverContext = {
        margin: ['0', '0', '0', '0'],
        padding: ['0', '0', '0', '0'],
    }

    Object.keys(props).forEach(propName => {
        if (nameResolver[propName]) {
            const value = props[propName]
            const section = nameResolver[propName][0]
            const styleName = nameResolver[propName][1]
            const resolver = nameResolver[propName][2] as Resolver
            if (!styles[section]) styles[section] = {}
            if (Array.isArray(value)) {
                value.forEach((point, index) => {
                    styles[section][index ? queries[index] : styleName] = resolver
                        ? resolver({ propValue: point, propName, theme, ctx })
                        : point
                })
            } else {
                styles[section][styleName] = resolver
                    ? resolver({ propValue: value, propName, theme, ctx })
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