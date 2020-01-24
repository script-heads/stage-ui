import React, { forwardRef, Fragment, RefForwardingComponent, useState } from 'react'
import createID from '../../misc/utils/createID'
import Item from './Item'
import styles from './styles'
import Types from './types'
import { useComponent } from '@flow-ui/whale'

const Menu: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const {
        size = 'medium',
        flip = false,
        border = 'none',
        items, 
        defaultValue = '', 
        separator, 
    } = props
    const { css, attributes } = useComponent('Menu', { props, styles })
    const [value, setValue] = useState<Types.Value>(defaultValue)
    const currentValue = (typeof props.value === 'undefined' || props.value === '')
        ? value
        : props.value
        
    function handleSwitch(item: Types.Item) {
        if (!item.disabled) {
            if (!props.value) {
                setValue(item.value)
            }
            props.onChange && props.onChange(item.value)
        }
    }

    if (!items || !Array.isArray(items)) return null

    return (
        <div
            {...attributes}
            ref={ref}
            css={css.container({size, flip, border})}
        >
            {items.map((item, i) => {
                return (
                    <Fragment key={createID()}>
                        <Item
                            {...item}
                            active={item.value === currentValue}
                            onClick={() => handleSwitch(item)}
                            onEnter={() => handleSwitch(item)}
                            styles={css}
                        />
                        {separator && i + 1 < items.length && (
                            <div css={css.separator}>
                                {separator}
                            </div>
                        )}
                    </Fragment>
                )
            })}
        </div>
    )
}

export default forwardRef(Menu)