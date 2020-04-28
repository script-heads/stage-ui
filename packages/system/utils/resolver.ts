import breakpointify from './breakpointify'
import resolveColor from '../resolvers/color'
import resolvePM from '../resolvers/paddingMargin'

const isFunction = (a) => typeof a === 'function'

export default {
    // System
    att: (d, v) => d.attributes = Object.assign(d.attributes, v),
    qs: (d, v, t) => d.styles.qs.push(isFunction(v) ? v(t) : v),

    // Attributes
    id: (d, v) => d.attributes['id'] = v,
    className: (d, v) => d.attributes['className'] = v,
    draggable: (d, v) => d.attributes['draggable'] = v,
    style: (d, v) => d.attributes['style'] = v,
    tabIndex: (d, v) => d.attributes['tabIndex'] = v,
    role: (d, v) => d.attributes['role'] = v,

    //Color
    backgroundColor: (d, v, t) => d.styles.color.push(breakpointify('backgroundColor', v, resolveColor, t)),
    textColor: (d, v, t) => d.styles.color.push(breakpointify('color', v, resolveColor, t)),

    //Border
    borderWidth: (d, v, t) => d.styles.border.push(breakpointify('borderWidth', v, v => v, t)),
    borderStyle: (d, v, t) => d.styles.border.push(breakpointify('borderStyle', v, v => v, t)),
    borderColor: (d, v, t) => d.styles.border.push(breakpointify('borderColor', v, resolveColor, t)),
    borderRadius: (d, v, t) => d.styles.border.push(breakpointify('borderRadius', v, v => v, t)),

    //Padding
    p: (d, v, t) => d.styles.padding.push(breakpointify('padding', v, resolvePM(v, 'p', t), t)),
    px: (d, v, t) => d.styles.padding.push(breakpointify('padding', v, resolvePM(v, 'px', t), t)),
    py: (d, v, t) => d.styles.padding.push(breakpointify('padding', v, resolvePM(v, 'py', t), t)),
    pt: (d, v, t) => d.styles.padding.push(breakpointify('padding', v, resolvePM(v, 'pt', t), t)),
    pr: (d, v, t) => d.styles.padding.push(breakpointify('padding', v, resolvePM(v, 'pr', t), t)),
    pb: (d, v, t) => d.styles.padding.push(breakpointify('padding', v, resolvePM(v, 'pb', t), t)),
    pl: (d, v, t) => d.styles.padding.push(breakpointify('padding', v, resolvePM(v, 'pl', t), t)),

    //Margin
    m: (d, v, t) => d.styles.margin.push(breakpointify('margin', v, resolvePM(v, 'm', t), t)),
    mx: (d, v, t) => d.styles.margin.push(breakpointify('margin', v, resolvePM(v, 'mx', t), t)),
    my: (d, v, t) => d.styles.margin.push(breakpointify('margin', v, resolvePM(v, 'my', t), t)),
    mt: (d, v, t) => d.styles.margin.push(breakpointify('margin', v, resolvePM(v, 'mt', t), t)),
    mr: (d, v, t) => d.styles.margin.push(breakpointify('margin', v, resolvePM(v, 'mr', t), t)),
    mb: (d, v, t) => d.styles.margin.push(breakpointify('margin', v, resolvePM(v, 'mb', t), t)),
    ml: (d, v, t) => d.styles.margin.push(breakpointify('margin', v, resolvePM(v, 'ml', t), t)),

    //Layout
    display: (d, v, t) => d.styles.layout.push(breakpointify('display', v, v => v, t)),
    position: (d, v, t) => d.styles.layout.push(breakpointify('position', v, v => v, t)),
    fontSize: (d, v, t) => d.styles.layout.push(breakpointify('fontSize', v, v => v, t)),
    lineHeight: (d, v, t) => d.styles.layout.push(breakpointify('lineHeight', v, v => v, t)),
    letterSpacing: (d, v, t) => d.styles.layout.push(breakpointify('letterSpacing', v, v => v, t)),
    textAlign: (d, v, t) => d.styles.layout.push(breakpointify('textAlign', v, v => v, t)),
    visibility: (d, v, t) => d.styles.layout.push(breakpointify('visibility', v, v => v, t)),
    w: (d, v, t) => d.styles.layout.push(breakpointify('width', v, v => v, t)),
    h: (d, v, t) => d.styles.layout.push(breakpointify('height', v, v => v, t)),

    //Flex
    flex: (d, v, t) => d.styles.flex.push(breakpointify('flex', v, v => v, t)),
    wrap: (d, v, t) => d.styles.flex.push(breakpointify('flexWrap', v, v => v, t)),
    flow: (d, v, t) => d.styles.flex.push(breakpointify('flowflow', v, v => v, t)),
    direction: (d, v, t) => d.styles.flex.push(breakpointify('flexDirection', v, v => v, t)),
    flexBasis: (d, v, t) => d.styles.flex.push(breakpointify('flexBasis', v, v => v, t)),
    flexGrow: (d, v, t) => d.styles.flex.push(breakpointify('flexGrow', v, v => v, t)),
    flexShrink: (d, v, t) => d.styles.flex.push(breakpointify('flexShrink', v, v => v, t)),
    alignSelf: (d, v, t) => d.styles.flex.push(breakpointify('alignSelf', v, v => v, t)),
    justifySelf: (d, v, t) => d.styles.flex.push(breakpointify('justifySelf', v, v => v, t)),
    alignItems: (d, v, t) => d.styles.flex.push(breakpointify('alignItems', v, v => v, t)),
    alignContent: (d, v, t) => d.styles.flex.push(breakpointify('alignContent', v, v => v, t)),
    justifyContent: (d, v, t) => d.styles.flex.push(breakpointify('justifyContent', v, v => v, t)),
    justifyItems: (d, v, t) => d.styles.flex.push(breakpointify('justifyItems', v, v => v, t)),
    placeContent: (d, v, t) => d.styles.flex.push(breakpointify('placeContent', v, v => v, t)),

    //Grid children
    gridColumnStart: (d, v, t) => d.styles.grid.push(breakpointify('gridColumnStart', v, v => v, t)),
    gridColumnEnd: (d, v, t) => d.styles.grid.push(breakpointify('gridColumnEnd', v, v => v, t)),
    gridRowStart: (d, v, t) => d.styles.grid.push(breakpointify('gridRowStart', v, v => v, t)),
    gridRowEnd: (d, v, t) => d.styles.grid.push(breakpointify('gridRowEnd', v, v => v, t)),
    gridColumn: (d, v, t) => d.styles.grid.push(breakpointify('gridColumn', v, v => v, t)),
    gridRow: (d, v, t) => d.styles.grid.push(breakpointify('gridRow', v, v => v, t)),
    gridArea: (d, v, t) => d.styles.grid.push(breakpointify('gridArea', v, v => v, t)),
    placeSelf: (d, v, t) => d.styles.grid.push(breakpointify('placeSelf', v, v => v, t)),

    //Override default focus styles
    onFocus: (d, v, t) => d.events.onFocus = (e: React.FocusEvent) => {
        e.target.className += ' focused'
    },
    onBlur: (d, v, t) => d.events.onFocus = (e: React.FocusEvent) => {
        e.target.className = e.target.className.replace(' focused', '')
    },

    //Add action styles
    onClick: (d, v, t) => d.qs.push({
        cursor: 'pointer',
        userSelect: 'none'
    })
}