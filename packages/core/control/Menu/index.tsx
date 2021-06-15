import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useLayoutEffect, useState } from 'react'
import MenuItem from './MenuItem'
import MenuItemTypes from './MenuItem/types'
import MenuGroup from './MenuGroup'
import MenuGroupTypes from './MenuGroup/types'
import createClasses from './styles'
import Submenu from './Submenu'
import SubmenuTypes from './Submenu/types'
import Types from './types'

const Context = React.createContext<Types.Context>({ values: {} })

/**
 * Hook used in every Menu.Item
 * most optimized method to change item value
 */
export const useValue = (value?: Types.MenuValue): [boolean, () => void, Types.Context] => {
  const [updateValue, forceUpdate] = React.useState(false)
  const ctx = React.useContext(Context)

  if (ctx === undefined) {
    throw Error('Hook useValue could be used only within Menu component!')
  }

  if (value !== undefined) {
    ctx.values[value] = () => forceUpdate(!updateValue)
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

  const {
    classes,
    attributes,
    events: { onChange, ...events },
  } = useSystem('Menu', props, createClasses, {
    label: 'Menu',
  })

  const classState: Types.ClassState = {
    decoration,
  }

  const css = [
    classes.container(classState),
    {
      '[data-flow=menu-item]': classes.item(classState),
      '[data-flow=menu-group]': classes.group(classState),
      '[data-flow=menu-group-title]': classes.groupTitle(classState),
      '[data-flow=sub-menu]': classes.subMenu(classState),
      '[data-flow=sub-menu-arrow]': classes.subMenuArrow(classState),
      '[data-flow=sub-menu-content]': classes.subMenuContent(classState),
      '[data-flow=left]': classes.leftChild(classState),
      '[data-flow=middle]': classes.middleChild(classState),
      '[data-flow=right]': classes.rightChild(classState),
    },
  ]
  let { children } = props

  if (props.data) {
    children = props.data.map((item, index) => (
      <MenuItem value={index} key={index} title={item} as={ctx.itemAs} />
    ))
  }

  return (
    <div data-flow="menu" {...attributes} {...events} ref={ref} css={css}>
      <Context.Provider value={ctx}>{children}</Context.Provider>
    </div>
  )
}

const Default = forwardRef(Menu)

type ComplexMenu = React.ForwardRefExoticComponent<
  Types.Props & React.RefAttributes<HTMLDivElement>
> & {
  Item: React.ForwardRefExoticComponent<MenuItemTypes.Props & React.RefAttributes<HTMLDivElement>>
  Group: React.ForwardRefExoticComponent<MenuGroupTypes.Props & React.RefAttributes<HTMLDivElement>>
  Submenu: React.ForwardRefExoticComponent<SubmenuTypes.Props & React.RefAttributes<HTMLDivElement>>
}

export default {
  ...Default,
  Item: MenuItem,
  Group: MenuGroup,
  Submenu,
} as ComplexMenu
