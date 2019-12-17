import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { FC, forwardRef, Fragment, useState } from 'react'
import createID from '../../misc/utils/createID'
import Item from './Item'
import menuStyles from './styles'
import Types from './types'

const Menu: FC<Types.Props> = (props, ref) => {
    
    const {
        size = 'medium',
        flip = false,
        border = 'none',
        items, 
        defaultValue = '', 
        separator, 
    } = props
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Overrides>(props,menuStyles,'Menu')
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
            css={styles.container({size, flip, border})}
        >
            {items.map((item, i) => {
                return (
                    <Fragment key={createID()}>
                        <Item
                            {...item}
                            active={item.value === currentValue}
                            onClick={() => handleSwitch(item)}
                            onEnter={() => handleSwitch(item)}
                            styles={styles}
                        />
                        {separator && i + 1 < items.length && (
                            <div css={styles.separator}>
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