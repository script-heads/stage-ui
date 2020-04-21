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
            {!property.flags?.hasOwnProperty('isOptional') && (
                <Text 
                    size="s"
                    backgroundColor={c => c.warning.alpha(0.2)}
                    borderRadius={'0.125rem'}
                    p="0.125rem 0.25rem"
                    children="Required"
                />
            )}
            {property.tags?.hasOwnProperty('breakpointify') &&
                <BreakpointifyFeature />
            }
        </Flexbox>
    )
}

export default Params