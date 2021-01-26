/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useLayoutEffect, useState } from 'react'
import MenuGroup from './MenuGroup'
import MenuItem from './MenuItem'
import styles from './styles'
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
    if (ctx === void 0) {
        throw Error('Hook useValue could be used only within Menu component!')
    }
    if (value !== void 0) {
        ctx.values[value] = () => update(!_)
    }
    return [value !== void 0 ? ctx.current === value : false, () => {
        if (value === void 0 || ctx.controlled) {
            return
        }
        const valuePrevious = ctx.current
        ctx.current = value
        if (valuePrevious !== void 0 && ctx.values[valuePrevious]) {
            ctx.values[valuePrevious]()
        }
        if (ctx.current !== void 0 && ctx.values[ctx.current]) {
            ctx.values[ctx.current]()
        }
    }, ctx]
}

const Menu: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const {
        decoration = 'filled',
    } = props

    const [ctx, setCtx] = useState({
        values: {},
        controlled: props.value !== void 0,
        current: props.value,
        onChange: props.onChange
    })
    
    useLayoutEffect(() => {
        if (ctx.current === void 0 && props.defaultValue !== void 0) {
            setCtx({
                ...ctx,
                current: props.defaultValue
            })
        }
    }, [])

    const { cs, attributes, events } = useComponent('Menu', { 
        props, 
        styles, 
        styleProps: { 
            container: ['all'],
        },
        styleLabel: 'Menu'
    })
    
    const styleState: Types.StyleState = { 
        decoration
    }
    const css = [
        cs.container(styleState), 
        `
            [data-flow=menu-item] { ${cs.item(styleState).styles} };
            [data-flow=menu-group] { ${cs.group(styleState).styles} };
            [data-flow=menu-group-title] { ${cs.groupTitle(styleState).styles} };
            [data-flow=sub-menu] { ${cs.subMenu(styleState).styles} };
            [data-flow=sub-menu-arrow] { ${cs.subMenuArrow(styleState).styles} };
            [data-flow=sub-menu-content] { ${cs.subMenuContent(styleState).styles} };
            [data-flow=left] { ${cs.leftChild(styleState).styles} };
            [data-flow=middle] { ${cs.middleChild(styleState).styles} };
            [data-flow=right] { ${cs.rightChild(styleState).styles} };
        `
    ]

    let children = props.children
    if (props.data) {
        children = props.data.map((item, index) => (
            <MenuItem
                value={index}
                key={index}
                title={item}
            />
        ))
    }

    return (
        <div
            data-flow="menu"
            {...attributes}
            {...events.all}
            ref={ref}
            onChange={undefined}
            css={css}
            children={(
                <Context.Provider
                    value={ctx}
                    children={children}
                />
            )}
        />
    )
}

const Default = forwardRef(Menu)

export default {
    ...Default,
    Item: MenuItem,
    Group: MenuGroup,
    Submenu: Submenu
} as typeof Default & {
    Item: typeof MenuItem
    Group: typeof MenuGroup
    Submenu: typeof Submenu
}
