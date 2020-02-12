import WhaleTypes, {EmotionStyles} from '@flow-ui/whale/types'
import resolveColor from './resolvers/color'
import resolvePaddingMargin from './resolvers/paddingMargin'
import WhalePropsTypes from '../types'

const resolvers: WhalePropsTypes.StyleResolverObject = {
    //Color
    backgroundColor: ['color', 'backgroundColor', resolveColor],
    textColor: ['color', 'color', resolveColor],

    //Border
    borderWidth: ['border', 'borderWidth'],
    borderStyle: ['border', 'borderStyle'],
    borderColor: ['border', 'borderColor', resolveColor],
    borderRadius: ['border', 'borderRadius'],

    //Padding
    p: ['padding', 'padding', resolvePaddingMargin],
    px: ['padding', 'padding', resolvePaddingMargin],
    py: ['padding', 'padding', resolvePaddingMargin],
    pt: ['padding', 'padding', resolvePaddingMargin],
    pr: ['padding', 'padding', resolvePaddingMargin],
    pb: ['padding', 'padding', resolvePaddingMargin],
    pl: ['padding', 'padding', resolvePaddingMargin],

    //Margin
    m: ['margin', 'margin', resolvePaddingMargin],
    mx: ['margin', 'margin', resolvePaddingMargin],
    my: ['margin', 'margin', resolvePaddingMargin],
    mt: ['margin', 'margin', resolvePaddingMargin],
    mr: ['margin', 'margin', resolvePaddingMargin],
    mb: ['margin', 'margin', resolvePaddingMargin],
    ml: ['margin', 'margin', resolvePaddingMargin],

    //Layout
    display: ['layout', 'display'],
    visibility: ['layout', 'visibility'],
    w: ['layout', 'width'],
    h: ['layout', 'height'],
    // animated: ['layout', 'transition'],

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

const createPropStyles = <Props, StyleProps>(
    props: Props, 
    theme: WhaleTypes.Theme, 
    styleProps: StyleProps) => {

    const queries = theme.breakpoints.map(bp => `@media (min-width: ${bp})`)

    const propStyles = {} as Record<keyof StyleProps, EmotionStyles>
    const styles = {} as WhalePropsTypes.InjectedStyles
        
    const ctx: WhalePropsTypes.StyleResolverContext = {
        margin: ['0', '0', '0', '0'],
        padding: ['0', '0', '0', '0'],
    }

    for (let propName of Object.keys(props)) {
        if (!resolvers[propName]) continue
        let values = props[propName] as string | string[]
        const sectionName = resolvers[propName][0]
        const styleName = resolvers[propName][1]
        const resolver = resolvers[propName][2]

        if (!styles[sectionName]) styles[sectionName] = {}
        if (!Array.isArray(values)) values = [values]

        values.forEach((value, i) => {
            styles[sectionName][i ? queries[i] : styleName] = resolver
                ? resolver({ propValue: value, propName, theme, ctx })
                : value
        })
    }

    const flow = Object.assign({}, styles.margin, styles.flex, styles.grid)
    const self = Object.assign({}, styles.color, styles.border, styles.padding, styles.layout)
    const all = Object.assign({}, flow, self)
    const combined = Object.assign({ flow, self, all }, styles)

    Object.keys(styleProps).forEach(className => {
        if (!propStyles[className]) {
            propStyles[className] = {}
        }
        (styleProps[className] || []).forEach(styleType =>
            Object.assign(
                propStyles[className],
                combined[styleType]
            )
        )
    })

    return propStyles
}

export default createPropStyles