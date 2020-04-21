import { Flexbox, Text } from '@stage-ui/core'
import TextTypes from '@stage-ui/core/content/Text/types'
import React from 'react'
import { Property } from '@stage-ui/docs/utils/types'
import BreakpointifyFeature from './Features/Breakpointify'

const Params = (props: { property: Property }) => {
    const { property } = props

    const Label = (props: TextTypes.Props) =>
        <Text
            mr=".5rem"
            css={{ whiteSpace: 'nowrap' }}
            {...props}
        />

    return (
        <Flexbox css={{ overflow: 'hidden' }} wrap="wrap">
            {property.tags?.hasOwnProperty('depricated') &&
                <Label>Deprecated</Label>
            }
         
        </Flexbox>
    )
}

export default Params