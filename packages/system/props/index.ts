import breakpointify from './breakpoint'
import resolveColor from './color'
import resolveSpacing from './spacing'
import isFunction from '../utils/isFunction'
import { ComponentData, Options, StyleProps } from '../hooks/useSystem'

export type Resolver = <ClassesSchema>(
    props: Record<string, any>, 
    componentData: Record<keyof ComponentData<any, ClassesSchema>, any>, 
    styleProps: StyleProps, 
    theme: Stage.Theme, 
    focus: Options['focus']) => void

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

    attributes: (props, componentData) => componentData.attributes = Object.assign(componentData.attributes, props['attributes']),
    id: (props, componentData) => componentData.attributes['id'] = props['id'],
    className: (props, componentData) => componentData.attributes['className'] = props['className'],
    draggable: (props, componentData) => componentData.attributes['draggable'] = props['draggable'],
    inlineStyle: (props, componentData) => componentData.attributes['style'] = props['inlineStyle'],
    tabIndex: (props, componentData) => componentData.attributes['tabIndex'] = props['tabIndex'],
    role: (props, componentData) => componentData.attributes['role'] = props['role'],

    // Style
    style: (props, componentData, styleProps, theme) => styleProps.style.push(isFunction(props['style']) ? props['style'](theme) : props['style']),

    //Color
    backgroundColor: (props, componentData, styleProps, theme) => styleProps.color.push(breakpointify('backgroundColor', props['backgroundColor'], resolveColor, theme)),
    textColor: (props, componentData, styleProps, theme) => styleProps.color.push(breakpointify('color', props['textColor'], resolveColor, theme)),

    //Border
    borderWidth: (props, componentData, styleProps, theme) => styleProps.border.push(breakpointify('borderWidth', props['borderWidth'], v => v, theme)),
    borderStyle: (props, componentData, styleProps, theme) => styleProps.border.push(breakpointify('borderStyle', props['borderStyle'], v => v, theme)),
    borderColor: (props, componentData, styleProps, theme) => styleProps.border.push(breakpointify('borderColor', props['borderColor'], resolveColor, theme)),
    borderRadius: (props, componentData, styleProps, theme) => styleProps.border.push(breakpointify('borderRadius', props['borderRadius'], v => v, theme)),

    //Padding
    p: (props, componentData, styleProps, theme) => styleProps.padding.push(breakpointify('padding', props['p'], resolveSpacing(props['p'], 'p', theme), theme)),
    px: (props, componentData, styleProps, theme) => styleProps.padding.push(breakpointify('padding', props['px'], resolveSpacing(props['px'], 'px', theme), theme)),
    py: (props, componentData, styleProps, theme) => styleProps.padding.push(breakpointify('padding', props['py'], resolveSpacing(props['py'], 'py', theme), theme)),
    pt: (props, componentData, styleProps, theme) => styleProps.padding.push(breakpointify('padding', props['pt'], resolveSpacing(props['pt'], 'pt', theme), theme)),
    pr: (props, componentData, styleProps, theme) => styleProps.padding.push(breakpointify('padding', props['pr'], resolveSpacing(props['pr'], 'pr', theme), theme)),
    pb: (props, componentData, styleProps, theme) => styleProps.padding.push(breakpointify('padding', props['pb'], resolveSpacing(props['pb'], 'pb', theme), theme)),
    pl: (props, componentData, styleProps, theme) => styleProps.padding.push(breakpointify('padding', props['pl'], resolveSpacing(props['pl'], 'pl', theme), theme)),
    
    //Margin
    m: (props, componentData, styleProps, theme) => styleProps.margin.push(breakpointify('margin', props['m'], resolveSpacing(props['m'], 'm', theme), theme)),
    mx: (props, componentData, styleProps, theme) => styleProps.margin.push(breakpointify('margin', props['mx'], resolveSpacing(props['mx'], 'mx', theme), theme)),
    my: (props, componentData, styleProps, theme) => styleProps.margin.push(breakpointify('margin', props['my'], resolveSpacing(props['my'], 'my', theme), theme)),
    mt: (props, componentData, styleProps, theme) => styleProps.margin.push(breakpointify('margin', props['mt'], resolveSpacing(props['mt'], 'mt', theme), theme)),
    mr: (props, componentData, styleProps, theme) => styleProps.margin.push(breakpointify('margin', props['mr'], resolveSpacing(props['mr'], 'mr', theme), theme)),
    mb: (props, componentData, styleProps, theme) => styleProps.margin.push(breakpointify('margin', props['mb'], resolveSpacing(props['mb'], 'mb', theme), theme)),
    ml: (props, componentData, styleProps, theme) => styleProps.margin.push(breakpointify('margin', props['ml'], resolveSpacing(props['ml'], 'ml', theme), theme)),

    //Layout    
    display: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('display', props['display'], v => v, theme)),
    position: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('position', props['position'], v => v, theme)),
    fontSize: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('fontSize', props['fontSize'], v => v, theme)),
    lineHeight: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('lineHeight', props['lineHeight'], v => v, theme)),
    letterSpacing: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('letterSpacing', props['letterSpacing'], v => v, theme)),
    textAlign: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('textAlign', props['textAlign'], v => v, theme)),
    visibility: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('visibility', props['visibility'], v => v, theme)),
    w: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('width', props['w'], v => v, theme)),
    h: (props, componentData, styleProps, theme) => styleProps.layout.push(breakpointify('height', props['h'], v => v, theme)),

    //Flex
    flex: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('flex', props['flex'], v => v, theme)),
    wrap: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('flexWrap', props['wrap'], v => v, theme)),
    flow: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('flowflow', props['flow'], v => v, theme)),
    direction: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('flexDirection', props['direction'], v => v, theme)),
    flexBasis: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('flexBasis', props['flexBasis'], v => v, theme)),
    flexGrow: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('flexGrow', props['flexGrow'], v => v, theme)),
    flexShrink: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('flexShrink', props['flexShrink'], v => v, theme)),
    alignSelf: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('alignSelf', props['alignSelf'], v => v, theme)),
    justifySelf: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('justifySelf', props['justifySelf'], v => v, theme)),
    alignItems: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('alignItems', props['alignItems'], v => v, theme)),
    alignContent: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('alignContent', props['alignContent'], v => v, theme)),
    justifyContent: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('justifyContent', props['justifyContent'], v => v, theme)),
    justifyItems: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('justifyItems', props['justifyItems'], v => v, theme)),
    placeContent: (props, componentData, styleProps, theme) => styleProps.flex.push(breakpointify('placeContent', props['placeContent'], v => v, theme)),

    //Grid children
    gridColumnStart: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('gridColumnStart', props['gridColumnStart'], v => v, theme)),
    gridColumnEnd: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('gridColumnEnd', props['gridColumnEnd'], v => v, theme)),
    gridRowStart: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('gridRowStart', props['gridRowStart'], v => v, theme)),
    gridRowEnd: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('gridRowEnd', props['gridRowEnd'], v => v, theme)),
    gridColumn: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('gridColumn', props['gridColumn'], v => v, theme)),
    gridRow: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('gridRow', props['gridRow'], v => v, theme)),
    gridArea: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('gridArea', props['gridArea'], v => v, theme)),
    placeSelf: (props, componentData, styleProps, theme) => styleProps.grid.push(breakpointify('placeSelf', props['placeSelf'], v => v, theme)),

    //Override default focus styles
    onFocus: (props, componentData, styleProps, theme, f) => componentData.events.onFocus = (e: React.FocusEvent) => {
        e.stopPropagation()
            if (!PAGE_FOCUS) {
                if (!(f === 'tabOnly' && !IS_MOUSE_DOWN)) {
                    e.target.className += ' focused'
                }
            }
            PAGE_FOCUS = false

            props.onFocus && props.onFocus(e)
    },
    onBlur: (props, componentData) => componentData.events.onBlur = (e: React.FocusEvent) => {
        e.stopPropagation()
        e.target.className = e.target.className.replace(' focused', '')
        props.onBlur && props.onBlur(e)
    },

    //Add action styles
    onClick: (props, componentData, styleProps) => styleProps.container.push({
        cursor: 'pointer',
        userSelect: 'none'
    }),

    //Additinal key handlers
    onKeyDown: (props, componentData) => componentData.events.onKeyDown = (e: React.KeyboardEvent) => {
        props.onKeyPress && props.onKeyPress(e)
        if (e.key === 'Enter' && props.onEnter) {
            props.onEnter(e)
        }
        if (e.key === 'Esc' && props.onEsc) {
            props.onEsc(e)
        }
        props.onKeyDown && props.onKeyDown(e)
    }
}

export default resolvers