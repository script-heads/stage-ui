import { Grid } from '@flow-ui/core'
import React from 'react'
import Interface from './Interface'
import typedoc from '../../../definitions/types.json'

export interface TypeInterface {
    name: string
    comment?: string
    children: TypeInterfaceChild[]
    extendedTypes: TypeInterface[]
}

type Reflection = {
    type: 'reflection'
    declaration: {
        id: number
        children?: any[]
        groups?: any[],
        signatures?: {
            name: '__call'
            parameters: {
                id: number
                name: string
            }[]
            type: {
                name: string
                type: 'stringLiteral' | 'intrinsic'
            }
        }[]
    }
}

type Intersection = {
    type: 'intersection'
    types: any[]
}

export interface TypeInterfaceChild {
    id: number
    isOptional: boolean
    name: string
    comment?: string
    tags?: { [key: string]: string }
    deprecated?: string | true
    breakpointify?: true
    type: 'stringLiteral' | 'intrinsic' | 'reference' | Reflection | Intersection
    values: string[]
}

interface APIProps { 
    name: string, 
    types?: string[], 
    separatedTypes?: string[]
}

const API = (props: APIProps) => {

    const {name, types, separatedTypes} = props
    let nameSpace = typedoc[name] || []

    if (!Array.isArray(nameSpace) || nameSpace.length === 0) {
        console.warn(`Render docs: There is no props for ${name}`)
        return null
    }
    
    if (types) {
        nameSpace = types.map(typeName => {
            return nameSpace.find(type => type.name === typeName)
        })
    }

    return (
        <Grid templateColumns="repeat(auto-fit, minmax(18rem, 1fr))" mt="2rem" gap="2rem" css={{overflow: 'hidden'}}>
            {nameSpace.map((data, index) => (
                <Interface data={data} separatedTypes={separatedTypes} key={'inteface-'+index}/>
            ))}
        </Grid>
    )
}

export default API