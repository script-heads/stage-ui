import React, { forwardRef, Fragment, RefForwardingComponent, useState } from 'react'
import createID from '@flow-ui/whale/utils/createID'
import Item from './Item'
import styles from './styles'
import Types from './types'
import { useComponent } from '@flow-ui/whale'

const Menu: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const {
        size = 'm',
        flip = false,
        border = 'none',
        items, 
        defaultValue = '', 
        separator, 
    } = props
    const { cs, attributes, events } = useComponent('Menu', { props, styles, styleProps: { container: ['all']} })
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
            {...events.all}
            ref={ref}
            css={cs.container({size, flip, border})}
        >
            {items.map((item, i) => {
                return (
                    <Fragment key={createID()}>
                        <Item
                            {...item}
                            active={item.value === currentValue}
                            onClick={() => handleSwitch(item)}
                            styles={cs}
                        />
                        {separator && i + 1 < items.length && (
                            <div css={cs.separator}>
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