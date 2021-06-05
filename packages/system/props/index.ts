/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import resolveBreakpoints from './breakpoint'
import resolveColor from './color'
import resolveSpace from './space'
import isFunction from '../utils/isFunction'
import { ComponentData, StyleProps } from '../hooks/useSystem'

export type Resolver = <ClassesSchema>(
  props: Record<string, any>,
  componentData: Record<keyof ComponentData<any, ClassesSchema>, any>,
  styleProps: StyleProps,
  t: Stage.Theme,
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
  style: (p, cd, sp, t) => sp.style.push(isFunction(p.style) ? p.style(t) : p.style),

  // Color
  backgroundColor: (p, cd, sp, t) =>
    sp.color.push(
      resolveBreakpoints(p.backgroundColor, t, (v) => ({
        backgroundColor: resolveColor(v, t)?.rgb().string(),
      })),
    ),
  textColor: (p, cd, sp, t) =>
    sp.color.push(
      resolveBreakpoints(p.textColor, t, (v) => ({
        color: resolveColor(v, t)?.rgb().string(),
      })),
    ),

  // Border
  borderWidth: (p, cd, sp, t) => sp.border.push(resolveBreakpoints(p.borderWidth, t, (v) => ({ borderWidth: v }))),
  borderStyle: (p, cd, sp, t) => sp.border.push(resolveBreakpoints(p.borderStyle, t, (v) => ({ borderStyle: v }))),
  borderColor: (p, cd, sp, t) =>
    sp.border.push(resolveBreakpoints(p.borderColor, t, (v) => ({ borderColor: resolveColor(v, t)?.rgb().string() }))),
  borderRadius: (p, cd, sp, t) => sp.border.push(resolveBreakpoints(p.borderRadius, t, (v) => ({ borderRadius: v }))),

  p: (p, cd, sp, t) => sp.padding.push(resolveBreakpoints(p.p, t, (v) => ({ padding: resolveSpace(v, t) }))),
  px: (p, cd, sp, t) =>
    sp.padding.push(
      resolveBreakpoints(p.px, t, (v) => ({ paddingRight: resolveSpace(v, t), paddingLeft: resolveSpace(v, t) })),
    ),
  py: (p, cd, sp, t) =>
    sp.padding.push(
      resolveBreakpoints(p.py, t, (v) => ({ paddingTop: resolveSpace(v, t), paddingBottom: resolveSpace(v, t) })),
    ),
  pt: (p, cd, sp, t) => sp.padding.push(resolveBreakpoints(p.pt, t, (v) => ({ paddingTop: resolveSpace(v, t) }))),
  pr: (p, cd, sp, t) => sp.padding.push(resolveBreakpoints(p.pr, t, (v) => ({ paddingRight: resolveSpace(v, t) }))),
  pb: (p, cd, sp, t) => sp.padding.push(resolveBreakpoints(p.pb, t, (v) => ({ paddingBottom: resolveSpace(v, t) }))),
  pl: (p, cd, sp, t) => sp.padding.push(resolveBreakpoints(p.pl, t, (v) => ({ paddingLeft: resolveSpace(v, t) }))),

  // Margin
  m: (p, cd, sp, t) => sp.margin.push(resolveBreakpoints(p.m, t, (v) => ({ margin: resolveSpace(v, t) }))),
  mx: (p, cd, sp, t) =>
    sp.margin.push(
      resolveBreakpoints(p.mx, t, (v) => ({ marginRight: resolveSpace(v, t), marginLeft: resolveSpace(v, t) })),
    ),
  my: (p, cd, sp, t) =>
    sp.margin.push(
      resolveBreakpoints(p.my, t, (v) => ({ marginTop: resolveSpace(v, t), marginBottom: resolveSpace(v, t) })),
    ),
  mt: (p, cd, sp, t) => sp.margin.push(resolveBreakpoints(p.mt, t, (v) => ({ marginTop: resolveSpace(v, t) }))),
  mr: (p, cd, sp, t) => sp.margin.push(resolveBreakpoints(p.mr, t, (v) => ({ marginRight: resolveSpace(v, t) }))),
  mb: (p, cd, sp, t) => sp.margin.push(resolveBreakpoints(p.mb, t, (v) => ({ marginBottom: resolveSpace(v, t) }))),
  ml: (p, cd, sp, t) => sp.margin.push(resolveBreakpoints(p.ml, t, (v) => ({ marginLeft: resolveSpace(v, t) }))),

  // Layout
  display: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.display, t, (v) => ({ display: v }))),
  position: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.position, t, (v) => ({ position: v }))),
  fontSize: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.fontSize, t, (v) => ({ fontSize: v }))),
  lineHeight: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.lineHeight, t, (v) => ({ lineHeight: v }))),
  letterSpacing: (p, cd, sp, t) =>
    sp.layout.push(resolveBreakpoints(p.letterSpacing, t, (v) => ({ letterSpacing: v }))),
  textAlign: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.textAlign, t, (v) => ({ textAlign: v }))),
  visibility: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.visibility, t, (v) => ({ visibility: v }))),
  w: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.w, t, (v) => ({ width: v }))),
  h: (p, cd, sp, t) => sp.layout.push(resolveBreakpoints(p.h, t, (v) => ({ height: v }))),

  // Flex
  flex: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.flex, t, (v) => ({ flex: v }))),
  wrap: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.wrap, t, (v) => ({ flexWrap: v }))),
  flow: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.flow, t, (v) => ({ flowflow: v }))),
  direction: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.direction, t, (v) => ({ flexDirection: v }))),
  flexBasis: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.flexBasis, t, (v) => ({ flexBasis: v }))),
  flexGrow: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.flexGrow, t, (v) => ({ flexGrow: v }))),
  flexShrink: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.flexShrink, t, (v) => ({ flexShrink: v }))),
  alignSelf: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.alignSelf, t, (v) => ({ alignSelf: v }))),
  justifySelf: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.justifySelf, t, (v) => ({ justifySelf: v }))),
  alignItems: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.alignItems, t, (v) => ({ alignItems: v }))),
  alignContent: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.alignContent, t, (v) => ({ alignContent: v }))),
  justifyContent: (p, cd, sp, t) =>
    sp.flex.push(resolveBreakpoints(p.justifyContent, t, (v) => ({ justifyContent: v }))),
  justifyItems: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.justifyItems, t, (v) => ({ justifyItems: v }))),
  placeContent: (p, cd, sp, t) => sp.flex.push(resolveBreakpoints(p.placeContent, t, (v) => ({ placeContent: v }))),

  // Grid children
  gridColumnStart: (p, cd, sp, t) =>
    sp.grid.push(resolveBreakpoints(p.gridColumnStart, t, (v) => ({ gridColumnStart: v }))),
  gridColumnEnd: (p, cd, sp, t) => sp.grid.push(resolveBreakpoints(p.gridColumnEnd, t, (v) => ({ gridColumnEnd: v }))),
  gridRowStart: (p, cd, sp, t) => sp.grid.push(resolveBreakpoints(p.gridRowStart, t, (v) => ({ gridRowStart: v }))),
  gridRowEnd: (p, cd, sp, t) => sp.grid.push(resolveBreakpoints(p.gridRowEnd, t, (v) => ({ gridRowEnd: v }))),
  gridColumn: (p, cd, sp, t) => sp.grid.push(resolveBreakpoints(p.gridColumn, t, (v) => ({ gridColumn: v }))),
  gridRow: (p, cd, sp, t) => sp.grid.push(resolveBreakpoints(p.gridRow, t, (v) => ({ gridRow: v }))),
  gridArea: (p, cd, sp, t) => sp.grid.push(resolveBreakpoints(p.gridArea, t, (v) => ({ gridArea: v }))),
  placeSelf: (p, cd, sp, t) => sp.grid.push(resolveBreakpoints(p.placeSelf, t, (v) => ({ placeSelf: v }))),
}

export default resolvers
