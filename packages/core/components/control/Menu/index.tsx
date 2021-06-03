import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useLayoutEffect, useState } from 'react'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import createClasses from './styles'
import Submenu from './Submenu'
import Types from './types'

const Context = React.createContext<Types.Context>({ values: {} })

/**
 * Hook used in every Menu.Item
 * most optimized method to change item value
 */
export const useValue = (value?: Types.MenuValue): [boolean, () => void, Types.Context] => {
  const [_, update] = React.useState(false)
  const ctx = React.useContext(Context)

  if (ctx === undefined) {
    throw Error('Hook useValue could be used only within Menu component!')
  }

  if (value !== undefined) {
    ctx.values[value] = () => update(!_)
  }

  return [
    value !== undefined ? ctx.current === value : false,
    () => {
      if (value === undefined || ctx.controlled) {
        return
      }
      const valuePrevious = ctx.current
      ctx.current = value
      if (valuePrevious !== undefined && ctx.values[valuePrevious]) {
        ctx.values[valuePrevious]()
      }
      if (ctx.current !== undefined && ctx.values[ctx.current]) {
        ctx.values[ctx.current]()
      }
    },
    ctx,
  ]
}

const Menu: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { decoration = 'filled' } = props

  const [ctx, setCtx] = useState({
    values: {},
    controlled: props.value !== undefined,
    current: props.value,
    onChange: props.onChange,
    itemAs: props.itemAs,
  })

  useLayoutEffect(() => {
    if (props.defaultValue !== undefined && ctx.current === undefined) {
      setCtx({
        ...ctx,
        current: props.defaultValue,
      })
    }
  }, [])

  useLayoutEffect(() => {
    if (props.value !== undefined) {
      setCtx({
        ...ctx,
        current: props.value,
      })
    }
  }, [props.value])

  useLayoutEffect(() => {
    if (props.itemAs !== undefined) {
      setCtx({
        ...ctx,
        itemAs: props.itemAs,
      })
    }
  }, [props.itemAs])

  const { classes, attributes, events } = useSystem('Menu', props, createClasses, {
    label: 'Menu',
  })

  const styleState: Types.StyleState = {
    decoration,
  }

  const css = [
    classes.container(styleState),
    {
      '[data-flow=menu-item]': classes.item(styleState),
      '[data-flow=menu-group]': classes.group(styleState),
      '[data-flow=menu-group-title]': classes.groupTitle(styleState),
      '[data-flow=sub-menu]': classes.subMenu(styleState),
      '[data-flow=sub-menu-arrow]': classes.subMenuArrow(styleState),
      '[data-flow=sub-menu-content]': classes.subMenuContent(styleState),
      '[data-flow=left]': classes.leftChild(styleState),
      '[data-flow=middle]': classes.middleChild(styleState),
      '[data-flow=right]': classes.rightChild(styleState),
    },
  ]
  let { children } = props

  if (props.data) {
    children = props.data.map((item, index) => <MenuItem value={index} key={index} title={item} as={ctx.itemAs} />)
  }

  return (
    <div data-flow="menu" {...attributes} {...events} ref={ref} css={css}>
      <Context.Provider value={ctx}>{children}</Context.Provider>
    </div>
  )
}

const Default = forwardRef(Menu)

export default {
  ...Default,
  Item: MenuItem,
  Group: MenuGroup,
  Submenu,
}
