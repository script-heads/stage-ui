import Flexbox from '@flow-ui/core/layout/Flexbox'
import { Config } from '../../core'
import React from 'react'
import Interface from './Interface'
import typedoc from '../../definitions/types.json'

export interface TypeInterface {
    name: string
    comment?: string
    children: TypeInterfaceChild[]
    extendedTypes: TypeInterface[]
}

export interface TypeInterfaceChild {
    id: number
    isOptional: boolean
    name: string
    comment?: string
    tags?: { [key: string]: string }
    deprecated?: string | true
    type: 'stringLiteral' | 'intrinsic' | 'reference' | 'reflection'
    values: string[]
}

const API = (props: { name: string, config: Config }) => {

    let nameSpace = typedoc[props.name] || []

    if (!Array.isArray(nameSpace) || nameSpace.length === 0) {
        console.warn(`Render docs: There is no props for ${props.name}`)
        return null
    }
    
    if (props.config.pages?.types) {
        nameSpace = props.config.pages.types.map(typeName => {
            return nameSpace.find(type => type.name === typeName)
        })
    }

    return (
        <Flexbox wrap="wrap">
            {nameSpace.map((data, index) => (
                <Interface data={data} separatedTypes={props.config.pages?.separatedTypes} key={'inteface'+index}/>
            ))}
        </Flexbox>
    )
}

export default API