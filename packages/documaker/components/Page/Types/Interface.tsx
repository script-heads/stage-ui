import React, { useState, useMemo } from 'react'
import { Block, Header, Flexbox, Table, ScrollView } from '@flow-ui/core'
import TableTypes from '@flow-ui/core/data/Table/types'

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

export interface ValueDefinition {
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
interface InterfaceDefinition {
    name: string
    comment?: string
    children: ValueDefinition[]
    extendedTypes: InterfaceDefinition[]
}

interface InterfaceProps {
    data: InterfaceDefinition,
    separatedTypes?: string[]
    columns: TableTypes.TableColumn[]
}

const sortTypes = (data: InterfaceDefinition, separatedTypes?: string[]) => {
    const self: InterfaceDefinition = Object.assign({}, data)
    const separated: Record<string,InterfaceDefinition> = {}

    const getExtendedTypes = (type: InterfaceDefinition, parent?: string) => {
        type.extendedTypes.map(innerType => {
            if (separatedTypes && separatedTypes.includes(innerType.name) || parent) {
                if (parent) {
                    separated[parent].children = separated[parent].children.concat(innerType.children)
                } else {
                    separated[innerType.name] = innerType
                } 
                getExtendedTypes(innerType, parent || innerType.name)
            } else {
                self.children = self.children.concat(innerType.children)
                getExtendedTypes(innerType)
            }
        })
    }

    getExtendedTypes(data)

    return { self, separated }
}

const Interface = (props: InterfaceProps) => {

    const [ activeName, setActiveName ] = useState(props.data.name) 
    const { self, separated } = useMemo(() => {
        setActiveName(props.data.name)
        return sortTypes(props.data, props.separatedTypes)
    }, [props])

    const types = activeName === props.data.name 
        ? self.children 
        : separated[activeName]?.children

    const extendedNames = [props.data.name, ...Object.keys(separated)]
    
    return (
        <Block>
            <div style={{ position: 'relative', paddingBottom: '0.5rem', marginBottom: '0.5rem'}}>
                <ScrollView size="xs">
                    <Flexbox>
                        {extendedNames.map(name => (
                            <Header
                                key={name}
                                mr="1.5rem"
                                children={name}
                                color={name === activeName ? 'onBackground' : 'light'}
                                onClick={()=>setActiveName(name)}
                            />
                        ))}
                    </Flexbox>
                </ScrollView>
            </div>
            <Table
                columns={props.columns}
                data={types}
            />
        </Block>
    )
}

export default Interface