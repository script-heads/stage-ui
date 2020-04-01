import { Flexbox, Text } from '@flow-ui/core'
import React from 'react'
import { Property } from '@flow-ui/docs/system/types'

const Params = (props: { property: Property }) => {
    const { property } = props

    const Label = (props: { children: string }) =>
        <Text
            mr=".5rem"
            css={{ whiteSpace: 'nowrap' }}>
            {props.children}
        </Text>

    return (
        <Flexbox css={{ overflow: 'hidden' }} wrap="wrap">
            {property.tags?.depricated &&
                <Label>Deprecated</Label>
            }
            {property.flags?.isOptional
                ? <Label>Optional</Label>
                : <Label>Required</Label>
            }
            {property.tags?.breakpointify &&
                <Label>Support breakpoints</Label>
            }
        </Flexbox>
    )
}

export default Params