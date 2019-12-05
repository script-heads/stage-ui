import Flexbox from '@flow-ui/core/layout/Flexbox'
import { IConfig } from '../../core'
import React from 'react'
import Interface from './Interface'

export const typedoc = require('../../../generated/types.json')

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

const UIDocumentation = (props: { ns: string, config: IConfig }) => {

    let nameSpaceDocumentation = typedoc[props.ns] || []

    if (!Array.isArray(nameSpaceDocumentation) || nameSpaceDocumentation.length === 0) {
        console.warn(`Render docs: There is no props for ${props.ns}`)
        return null
    }
    
    if (props.config.types) {
        nameSpaceDocumentation = props.config.types.map(typeName => {
            return nameSpaceDocumentation.find(type => type.name === typeName)
        })
    }

    return (
        <Flexbox wrap="wrap">
            {nameSpaceDocumentation.map((data, index) => (
                <Interface data={data} cutTypes={props.config.cutTypes} key={'inteface'+index}/>
            ))}
        </Flexbox>
    )
}

export default UIDocumentation