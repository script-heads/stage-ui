import { Flexbox, Text } from '@flow-ui/core'
import React from 'react'
import {ValueDefinition} from './Value'

interface ParamsProps { 
    type: ValueDefinition, 
}

const Params = (props: ParamsProps) => {
    const { type } = props

    const Label = (props) =>
        <Text
            mr=".5rem"
            css={{ whiteSpace: 'nowrap' }}>
            {props.children}
        </Text>

    return (
        <Flexbox css={{ overflow: 'hidden' }}>
            {type.deprecated && 
                <Label>Deprecated</Label>
            }
            {type.isOptional 
                ? <Label>Optional</Label> 
                : <Label>Required</Label>
            }
            {type.breakpointify && 
                <Label>Support breakpoints</Label>
            }
        </Flexbox>
    )
}

export default Params