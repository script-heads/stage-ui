import WhaleTypes, {EmotionStyles} from '@flow-ui/whale/types'
import resolveEvent from './resolvers/event'
import resolveColor from './resolvers/color'
import resolvePaddingMargin from './resolvers/paddingMargin'
import WhalePropsTypes from '../types'
import mergeObjects from '../../mergeObjects'

const resolvers: WhalePropsTypes.StyleResolverObject = {
    //Event
    onClick: ['event', '', resolveEvent],

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
    position: ['layout', 'position'],
    fontSize: ['layout', 'fontSize'],
    visibility: ['layout', 'visibility'],
    w: ['layout', 'width'],
    h: ['layout', 'height'],
        
    //Flex
    wrap: ['flex', 'wrap'],
    flow: ['flex', 'flow'],
    flex: ['flex', 'flex'],
    direction: ['flex', 'direction'],
    flexBasis: ['flex', 'flexBasis'],
    flexGrow: ['flex', 'flexGrow'],
    flexShrink: ['flex', 'flexShrink'],
    alignSelf: ['flex', 'alignSelf'],
    justifySelf: ['flex', 'justifySelf'],
    alignItems: ['flex', 'alignItems'],
    alignContent: ['flex', 'alignContent'],
    justifyContent: ['flex', 'justifyContent'],
    justifyItems: ['flex', 'justifyItems'],
    placeContent: ['flex', 'placeContent'],

    //Grid
    gridColumnStart: ['grid', 'gridColumnStart'],
    gridColumnEnd: ['grid', 'gridColumnEnd'],
    gridRowStart: ['grid', 'gridRowStart'],
    gridRowEnd: ['grid', 'gridRowEnd'],
    gridColumn: ['grid', 'gridColumn'],
    gridRow: ['grid', 'gridRow'],
    gridArea: ['grid', 'gridArea'],
    gridTemplateColumns: ['grid', 'gridTemplateColumns'],
    gridTemplateRows: ['grid', 'gridTemplateRows'],
    gridTemplateAreas: ['grid', 'gridTemplateAreas'],
    gridColumnGap: ['grid', 'gridColumnGap'],
    gridRowGap: ['grid', 'gridRowGap'],
    gridGap: ['grid', 'gridGap'],
    gridAutoColumns: ['grid', 'gridAutoColumns'],
    gridAutoRows: ['grid', 'gridAutoRows'],
    gridAutoFlow: ['grid', 'gridAutoFlow'],

    placeSelf: ['grid', 'placeSelf'],
}

const createPropStyles = <Props, StyleProps>(
    props: Props, 
    theme: WhaleTypes.Theme, 
    styleProps: StyleProps) => {

    const queries = theme.breakpoints.map(bp => `@media (max-width: ${bp})`)

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
            const cssValue = resolver ? resolver({ 
                propValue: value, 
                propName, 
                styleName,
                theme, 
                ctx 
            }) : value

            if (i) {
                if (!styles[sectionName][queries[i]]) {
                    styles[sectionName][queries[i]] = {}
                }
                if (typeof cssValue === 'object') {
                    Object.assign(styles[sectionName][queries[i]], cssValue)
                } else {
                    styles[sectionName][queries[i]][styleName] = cssValue
                }
            } else {
                if (typeof cssValue === 'object') {
                    Object.assign(styles[sectionName], cssValue)
                } else {
                    styles[sectionName][styleName] = cssValue
                }
            }
        })
    }
    
    let flow = {}, self = {}, all = {}

    flow = mergeObjects(flow, styles.margin)
    flow = mergeObjects(flow, styles.flex)
    flow = mergeObjects(flow, styles.grid)

    self = mergeObjects(self, styles.color)
    self = mergeObjects(self, styles.border)
    self = mergeObjects(self, styles.padding)
    self = mergeObjects(self, styles.layout)

    all = mergeObjects(all, flow)
    all = mergeObjects(all, self)
    all = mergeObjects(all, styles.event)

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