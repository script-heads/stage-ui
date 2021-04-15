import breakpointify from './breakpoint'
import resolveColor from './color'
import resolveSpacing from './spacing'
import isFunction from '../utils/isFunction'
import { ComponentData, Options, StyleProps } from '../hooks/useComponent'

export type Resolver = <ClassesSchema, Props = Record<string, any>>(p: Props, d: ComponentData<Props, ClassesSchema>, sp: StyleProps, t: Stage.Theme, f: Options['focus']) => void

let IS_MOUSE_DOWN = false
let PAGE_FOCUS = false

window.addEventListener('mousedown', () => {
    IS_MOUSE_DOWN = true
})
window.addEventListener('mouseup', () => {
    IS_MOUSE_DOWN = false
})
window.addEventListener('focus', () => {
    PAGE_FOCUS= true
})

const resolvers: Record<string, Resolver> = {

    attributes: (p, d) => d.attributes = Object.assign(d.attributes, p['attributes']),
    id: (p, d) => d.attributes['id'] = p['id'],
    className: (p, d) => d.attributes['className'] = p['className'],
    draggable: (p, d) => d.attributes['draggable'] = p['draggable'],
    inlineStyle: (p, d) => d.attributes['style'] = p['inlineStyle'],
    tabIndex: (p, d) => d.attributes['tabIndex'] = p['tabIndex'],
    role: (p, d) => d.attributes['role'] = p['role'],

    // Style
    style: (p, d, sp, t) => sp.style.push(isFunction(p['style']) ? p['style'](t) : p['style']),

    //Color
    backgroundColor: (p, d, sp, t) => sp.color.push(breakpointify('backgroundColor', p['backgroundColor'], resolveColor, t)),
    textColor: (p, d, sp, t) => sp.color.push(breakpointify('color', p['textColor'], resolveColor, t)),

    //Border
    borderWidth: (p, d, sp, t) => sp.border.push(breakpointify('borderWidth', p['borderWidth'], v => v, t)),
    borderStyle: (p, d, sp, t) => sp.border.push(breakpointify('borderStyle', p['borderStyle'], v => v, t)),
    borderColor: (p, d, sp, t) => sp.border.push(breakpointify('borderColor', p['borderColor'], resolveColor, t)),
    borderRadius: (p, d, sp, t) => sp.border.push(breakpointify('borderRadius', p['borderRadius'], v => v, t)),

    //Padding
    p: (p, d, sp, t) => sp.padding.push(breakpointify('padding', p['p'], resolveSpacing(p['p'], 'p', t), t)),
    px: (p, d, sp, t) => sp.padding.push(breakpointify('padding', p['px'], resolveSpacing(p['px'], 'px', t), t)),
    py: (p, d, sp, t) => sp.padding.push(breakpointify('padding', p['py'], resolveSpacing(p['py'], 'py', t), t)),
    pt: (p, d, sp, t) => sp.padding.push(breakpointify('padding', p['pt'], resolveSpacing(p['pt'], 'pt', t), t)),
    pr: (p, d, sp, t) => sp.padding.push(breakpointify('padding', p['pr'], resolveSpacing(p['pr'], 'pr', t), t)),
    pb: (p, d, sp, t) => sp.padding.push(breakpointify('padding', p['pb'], resolveSpacing(p['pb'], 'pb', t), t)),
    pl: (p, d, sp, t) => sp.padding.push(breakpointify('padding', p['pl'], resolveSpacing(p['pl'], 'pl', t), t)),
    
    //Margin
    m: (p, d, sp, t) => sp.margin.push(breakpointify('margin', p['m'], resolveSpacing(p['m'], 'm', t), t)),
    mx: (p, d, sp, t) => sp.margin.push(breakpointify('margin', p['mx'], resolveSpacing(p['mx'], 'mx', t), t)),
    my: (p, d, sp, t) => sp.margin.push(breakpointify('margin', p['my'], resolveSpacing(p['my'], 'my', t), t)),
    mt: (p, d, sp, t) => sp.margin.push(breakpointify('margin', p['mt'], resolveSpacing(p['mt'], 'mt', t), t)),
    mr: (p, d, sp, t) => sp.margin.push(breakpointify('margin', p['mr'], resolveSpacing(p['mr'], 'mr', t), t)),
    mb: (p, d, sp, t) => sp.margin.push(breakpointify('margin', p['mb'], resolveSpacing(p['mb'], 'mb', t), t)),
    ml: (p, d, sp, t) => sp.margin.push(breakpointify('margin', p['ml'], resolveSpacing(p['ml'], 'ml', t), t)),

    //Layout    
    display: (p, d, sp, t) => sp.layout.push(breakpointify('display', p['display'], v => v, t)),
    position: (p, d, sp, t) => sp.layout.push(breakpointify('position', p['position'], v => v, t)),
    fontSize: (p, d, sp, t) => sp.layout.push(breakpointify('fontSize', p['fontSize'], v => v, t)),
    lineHeight: (p, d, sp, t) => sp.layout.push(breakpointify('lineHeight', p['lineHeight'], v => v, t)),
    letterSpacing: (p, d, sp, t) => sp.layout.push(breakpointify('letterSpacing', p['letterSpacing'], v => v, t)),
    textAlign: (p, d, sp, t) => sp.layout.push(breakpointify('textAlign', p['textAlign'], v => v, t)),
    visibility: (p, d, sp, t) => sp.layout.push(breakpointify('visibility', p['visibility'], v => v, t)),
    w: (p, d, sp, t) => sp.layout.push(breakpointify('width', p['w'], v => v, t)),
    h: (p, d, sp, t) => sp.layout.push(breakpointify('height', p['h'], v => v, t)),

    //Flex
    flex: (p, d, sp, t) => sp.flex.push(breakpointify('flex', p['flex'], v => v, t)),
    wrap: (p, d, sp, t) => sp.flex.push(breakpointify('flexWrap', p['wrap'], v => v, t)),
    flow: (p, d, sp, t) => sp.flex.push(breakpointify('flowflow', p['flow'], v => v, t)),
    direction: (p, d, sp, t) => sp.flex.push(breakpointify('flexDirection', p['direction'], v => v, t)),
    flexBasis: (p, d, sp, t) => sp.flex.push(breakpointify('flexBasis', p['flexBasis'], v => v, t)),
    flexGrow: (p, d, sp, t) => sp.flex.push(breakpointify('flexGrow', p['flexGrow'], v => v, t)),
    flexShrink: (p, d, sp, t) => sp.flex.push(breakpointify('flexShrink', p['flexShrink'], v => v, t)),
    alignSelf: (p, d, sp, t) => sp.flex.push(breakpointify('alignSelf', p['alignSelf'], v => v, t)),
    justifySelf: (p, d, sp, t) => sp.flex.push(breakpointify('justifySelf', p['justifySelf'], v => v, t)),
    alignItems: (p, d, sp, t) => sp.flex.push(breakpointify('alignItems', p['alignItems'], v => v, t)),
    alignContent: (p, d, sp, t) => sp.flex.push(breakpointify('alignContent', p['alignContent'], v => v, t)),
    justifyContent: (p, d, sp, t) => sp.flex.push(breakpointify('justifyContent', p['justifyContent'], v => v, t)),
    justifyItems: (p, d, sp, t) => sp.flex.push(breakpointify('justifyItems', p['justifyItems'], v => v, t)),
    placeContent: (p, d, sp, t) => sp.flex.push(breakpointify('placeContent', p['placeContent'], v => v, t)),

    //Grid children
    gridColumnStart: (p, d, sp, t) => sp.grid.push(breakpointify('gridColumnStart', p['gridColumnStart'], v => v, t)),
    gridColumnEnd: (p, d, sp, t) => sp.grid.push(breakpointify('gridColumnEnd', p['gridColumnEnd'], v => v, t)),
    gridRowStart: (p, d, sp, t) => sp.grid.push(breakpointify('gridRowStart', p['gridRowStart'], v => v, t)),
    gridRowEnd: (p, d, sp, t) => sp.grid.push(breakpointify('gridRowEnd', p['gridRowEnd'], v => v, t)),
    gridColumn: (p, d, sp, t) => sp.grid.push(breakpointify('gridColumn', p['gridColumn'], v => v, t)),
    gridRow: (p, d, sp, t) => sp.grid.push(breakpointify('gridRow', p['gridRow'], v => v, t)),
    gridArea: (p, d, sp, t) => sp.grid.push(breakpointify('gridArea', p['gridArea'], v => v, t)),
    placeSelf: (p, d, sp, t) => sp.grid.push(breakpointify('placeSelf', p['placeSelf'], v => v, t)),

    //Override default focus styles
    onFocus: (p, d, sp, t, f) => d.events.onFocus = (e: React.FocusEvent) => {
        e.stopPropagation()
            if (!PAGE_FOCUS) {
                if (!(f === 'tabOnly' && !IS_MOUSE_DOWN)) {
                    e.target.className += ' focused'
                }
            }
            PAGE_FOCUS = false

            p.onFocus && p.onFocus(e)
    },
    onBlur: (p, d) => d.events.onBlur = (e: React.FocusEvent) => {
        e.stopPropagation()
        e.target.className = e.target.className.replace(' focused', '')
        p.onBlur && p.onBlur(e)
    },

    //Add action styles
    onClick: (p, d, sp) => sp.style.push({
        cursor: 'pointer',
        userSelect: 'none'
    }),

    //Additinal key handlers
    onKeyDown: (p, d, sp, t) => d.events.onKeyDown = (e: React.KeyboardEvent) => {
        p.onKeyPress && p.onKeyPress(e)
        if (e.key === 'Enter' && p.onEnter) {
            p.onEnter(e)
        }
        if (e.key === 'Esc' && p.onEsc) {
            p.onEsc(e)
        }
        p.onKeyDown && p.onKeyDown(e)
    }
}

// const set = (dataKey: string, arrayOfProps: string[], cssName?: string, customResolver?: any) => {
//     for (const propName of arrayOfProps) {
//         resolvers[propName] = (p, d, sp, t) => sp[dataKey].push(breakpointify(cssName || propName, p[''], customResolver || (v => v), t))
//     }
// }

// set('border', ['borderWidth', 'borderStyle', 'borderRadius'])
// set('border', ['borderColor'], undefined, resolveColor)

// set('padding', ['p', 'px', 'py', 'pl', 'pr', 'pt', 'pb'], 'padding', resolveSpacing)
// set('margin', ['m', 'mx', 'my', 'ml', 'mr', 'mt', 'mb'], 'margin', resolveSpacing)

// set('color', ['backgroundColor', 'textColor'], undefined, resolveColor)

// set('layout', ['display', 'position', 'fontSize', 'lineHeight', 'letterSpacing', 'textAlign', 'visibility'])
// set('layout', ['w'], 'weight')
// set('layout', ['h'], 'height')

// set('flex', [
//     'flex', 
//     'wrap', 
//     'flow', 
//     'direction', 
//     'flexBasis', 
//     'flexGrow', 
//     'flexShrink', 
//     'alignSelf', 
//     'justifySelf', 
//     'alignItems', 
//     'alignContent', 
//     'justifyContent', 
//     'justifyItems', 
//     'placeContent'
// ])

// set('grid', [
//     'gridColumnStart', 
//     'gridColumnEnd', 
//     'gridRowStart', 
//     'gridRowEnd', 
//     'gridColumn', 
//     'gridRow', 
//     'gridArea', 
//     'placeSelf'
// ])

export default resolvers