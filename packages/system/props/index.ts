/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import resolveBreakpoints from './breakpoint'
import resolveColor from './color'
import resolveSpace from './space'
import isFunction from '../utils/isFunction'
import { ClassesSchemaDefinition, ComponentData } from '../hooks/useSystem'
import sizeProp from './size'

export type Resolver = <Props, ClassesSchema extends ClassesSchemaDefinition>(
  props: Record<string, any>,
  componentData: ComponentData<Props, ClassesSchema>,
  theme: Stage.Theme,
) => void

const resolvers: Record<string, Resolver> = {
  attributes: (p, cd) => {
    cd.attributes = Object.assign(cd.attributes, p.attributes)
  },
  id: (p, cd) => {
    cd.attributes.id = p.id
  },
  className: (p, cd) => {
    cd.attributes.className = p.className
  },
  draggable: (p, cd) => {
    cd.attributes.draggable = p.draggable
  },
  inlineStyle: (p, cd) => {
    cd.attributes.style = p.inlineStyle
  },
  tabIndex: (p, cd) => {
    cd.attributes.tabIndex = p.tabIndex
  },
  role: (p, cd) => {
    cd.attributes.role = p.role
  },

  // Style
  style: (p, cd, t) =>
    cd.styleProps.style.push(
      isFunction(p.style)
        ? resolveBreakpoints(p.style(t), t, (v) => v)
        : resolveBreakpoints(p.style, t, (v) => v),
    ),

  // Color
  backgroundColor: (p, cd, t) =>
    cd.styleProps.color.push(
      resolveBreakpoints(p.backgroundColor, t, (v) => ({
        backgroundColor: resolveColor(v, t)?.rgb().string(),
      })),
    ),
  textColor: (p, cd, t) =>
    cd.styleProps.color.push(
      resolveBreakpoints(p.textColor, t, (v) => ({
        color: resolveColor(v, t)?.rgb().string(),
      })),
    ),

  // Border
  borderWidth: (p, cd, t) =>
    cd.styleProps.border.push(resolveBreakpoints(p.borderWidth, t, (v) => ({ borderWidth: v }))),
  borderStyle: (p, cd, t) =>
    cd.styleProps.border.push(resolveBreakpoints(p.borderStyle, t, (v) => ({ borderStyle: v }))),
  borderColor: (p, cd, t) =>
    cd.styleProps.border.push(
      resolveBreakpoints(p.borderColor, t, (v) => ({
        borderColor: resolveColor(v, t)?.rgb().string(),
      })),
    ),
  borderRadius: (p, cd, t) =>
    cd.styleProps.border.push(
      resolveBreakpoints(p.borderRadius, t, (v) => ({
        borderRadius: sizeProp(v, t.radius, (ov) => ov),
      })),
    ),

  p: (p, cd, t) =>
    cd.styleProps.padding.push(
      resolveBreakpoints(p.p, t, (v) => ({ padding: resolveSpace(v, t) })),
    ),
  px: (p, cd, t) =>
    cd.styleProps.padding.push(
      resolveBreakpoints(p.px, t, (v) => ({
        paddingRight: resolveSpace(v, t),
        paddingLeft: resolveSpace(v, t),
      })),
    ),
  py: (p, cd, t) =>
    cd.styleProps.padding.push(
      resolveBreakpoints(p.py, t, (v) => ({
        paddingTop: resolveSpace(v, t),
        paddingBottom: resolveSpace(v, t),
      })),
    ),
  pt: (p, cd, t) =>
    cd.styleProps.padding.push(
      resolveBreakpoints(p.pt, t, (v) => ({ paddingTop: resolveSpace(v, t) })),
    ),
  pr: (p, cd, t) =>
    cd.styleProps.padding.push(
      resolveBreakpoints(p.pr, t, (v) => ({ paddingRight: resolveSpace(v, t) })),
    ),
  pb: (p, cd, t) =>
    cd.styleProps.padding.push(
      resolveBreakpoints(p.pb, t, (v) => ({
        paddingBottom: resolveSpace(v, t),
      })),
    ),
  pl: (p, cd, t) =>
    cd.styleProps.padding.push(
      resolveBreakpoints(p.pl, t, (v) => ({ paddingLeft: resolveSpace(v, t) })),
    ),

  // Margin
  m: (p, cd, t) =>
    cd.styleProps.margin.push(resolveBreakpoints(p.m, t, (v) => ({ margin: resolveSpace(v, t) }))),
  mx: (p, cd, t) =>
    cd.styleProps.margin.push(
      resolveBreakpoints(p.mx, t, (v) => ({
        marginRight: resolveSpace(v, t),
        marginLeft: resolveSpace(v, t),
      })),
    ),
  my: (p, cd, t) =>
    cd.styleProps.margin.push(
      resolveBreakpoints(p.my, t, (v) => ({
        marginTop: resolveSpace(v, t),
        marginBottom: resolveSpace(v, t),
      })),
    ),
  mt: (p, cd, t) =>
    cd.styleProps.margin.push(
      resolveBreakpoints(p.mt, t, (v) => ({ marginTop: resolveSpace(v, t) })),
    ),
  mr: (p, cd, t) =>
    cd.styleProps.margin.push(
      resolveBreakpoints(p.mr, t, (v) => ({ marginRight: resolveSpace(v, t) })),
    ),
  mb: (p, cd, t) =>
    cd.styleProps.margin.push(
      resolveBreakpoints(p.mb, t, (v) => ({ marginBottom: resolveSpace(v, t) })),
    ),
  ml: (p, cd, t) =>
    cd.styleProps.margin.push(
      resolveBreakpoints(p.ml, t, (v) => ({ marginLeft: resolveSpace(v, t) })),
    ),

  // Layout
  display: (p, cd, t) =>
    cd.styleProps.layout.push(resolveBreakpoints(p.display, t, (v) => ({ display: v }))),
  position: (p, cd, t) =>
    cd.styleProps.layout.push(resolveBreakpoints(p.position, t, (v) => ({ position: v }))),
  fontSize: (p, cd, t) =>
    cd.styleProps.layout.push(resolveBreakpoints(p.fontSize, t, (v) => ({ fontSize: v }))),
  lineHeight: (p, cd, t) =>
    cd.styleProps.layout.push(resolveBreakpoints(p.lineHeight, t, (v) => ({ lineHeight: v }))),
  letterSpacing: (p, cd, t) =>
    cd.styleProps.layout.push(
      resolveBreakpoints(p.letterSpacing, t, (v) => ({ letterSpacing: v })),
    ),
  textAlign: (p, cd, t) =>
    cd.styleProps.layout.push(resolveBreakpoints(p.textAlign, t, (v) => ({ textAlign: v }))),
  visibility: (p, cd, t) =>
    cd.styleProps.layout.push(resolveBreakpoints(p.visibility, t, (v) => ({ visibility: v }))),
  w: (p, cd, t) => cd.styleProps.layout.push(resolveBreakpoints(p.w, t, (v) => ({ width: v }))),
  h: (p, cd, t) => cd.styleProps.layout.push(resolveBreakpoints(p.h, t, (v) => ({ height: v }))),

  // Flex
  flex: (p, cd, t) => cd.styleProps.flex.push(resolveBreakpoints(p.flex, t, (v) => ({ flex: v }))),
  wrap: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.wrap, t, (v) => ({ flexWrap: v }))),
  flow: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.flow, t, (v) => ({ flowflow: v }))),
  direction: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.direction, t, (v) => ({ flexDirection: v }))),
  flexBasis: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.flexBasis, t, (v) => ({ flexBasis: v }))),
  flexGrow: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.flexGrow, t, (v) => ({ flexGrow: v }))),
  flexShrink: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.flexShrink, t, (v) => ({ flexShrink: v }))),
  alignSelf: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.alignSelf, t, (v) => ({ alignSelf: v }))),
  justifySelf: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.justifySelf, t, (v) => ({ justifySelf: v }))),
  alignItems: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.alignItems, t, (v) => ({ alignItems: v }))),
  alignContent: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.alignContent, t, (v) => ({ alignContent: v }))),
  justifyContent: (p, cd, t) =>
    cd.styleProps.flex.push(
      resolveBreakpoints(p.justifyContent, t, (v) => ({ justifyContent: v })),
    ),
  justifyItems: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.justifyItems, t, (v) => ({ justifyItems: v }))),
  placeContent: (p, cd, t) =>
    cd.styleProps.flex.push(resolveBreakpoints(p.placeContent, t, (v) => ({ placeContent: v }))),

  // Grid children
  gridColumnStart: (p, cd, t) =>
    cd.styleProps.grid.push(
      resolveBreakpoints(p.gridColumnStart, t, (v) => ({ gridColumnStart: v })),
    ),
  gridColumnEnd: (p, cd, t) =>
    cd.styleProps.grid.push(resolveBreakpoints(p.gridColumnEnd, t, (v) => ({ gridColumnEnd: v }))),
  gridRowStart: (p, cd, t) =>
    cd.styleProps.grid.push(resolveBreakpoints(p.gridRowStart, t, (v) => ({ gridRowStart: v }))),
  gridRowEnd: (p, cd, t) =>
    cd.styleProps.grid.push(resolveBreakpoints(p.gridRowEnd, t, (v) => ({ gridRowEnd: v }))),
  gridColumn: (p, cd, t) =>
    cd.styleProps.grid.push(resolveBreakpoints(p.gridColumn, t, (v) => ({ gridColumn: v }))),
  gridRow: (p, cd, t) =>
    cd.styleProps.grid.push(resolveBreakpoints(p.gridRow, t, (v) => ({ gridRow: v }))),
  gridArea: (p, cd, t) =>
    cd.styleProps.grid.push(resolveBreakpoints(p.gridArea, t, (v) => ({ gridArea: v }))),
  placeSelf: (p, cd, t) =>
    cd.styleProps.grid.push(resolveBreakpoints(p.placeSelf, t, (v) => ({ placeSelf: v }))),
}

export default resolvers
