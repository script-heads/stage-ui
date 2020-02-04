import { Block, Menu } from '@flow-ui/core'
import React, { Fragment, useState } from 'react'

export default () => {
    const [value, setValue] = useState(0)
    return (
        <Fragment>
            <Menu
                ml={'0.5rem'}
                mr={'0.5rem'}
                mb={'-1px'}
                decoration="tab"
                value={value}
                items={[
                    { value: 0, content: 'Zero' },
                    { value: 1, content: 'One' },
                    { value: 2, content: 'Two' },
                ]}
                onChange={(e: number) => setValue(e)}
            />
            <Block decoration="majorShadow"  p="1rem">
                Active tab: {value}
            </Block>
        </Fragment>
    )
}