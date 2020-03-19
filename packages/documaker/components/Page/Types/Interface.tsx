import React, { useState, useMemo } from 'react'
import { Block, Header, Text, Flexbox, Table, ScrollView } from '@flow-ui/core'
import Value, { ValueDefinition } from './Value'
import Params from './Params'

interface InterfaceDefinition {
    name: string
    comment?: string
    children: ValueDefinition[]
    extendedTypes: InterfaceDefinition[]
}

interface InterfaceProps {
    data: InterfaceDefinition,
    separatedTypes?: string[]
}

const sortTypes = (data: InterfaceDefinition, separatedTypes?: string[]) => {
    const self: InterfaceDefinition = Object.assign({}, data)
    const extended: Record<string,InterfaceDefinition> = {}

    const getExtendedTypes = (type: InterfaceDefinition, cutted?: boolean) => {
        type.extendedTypes.map(innerType => {
            if (separatedTypes && separatedTypes.includes(innerType.name) || cutted) {
                if (innerType.children.length > 0) {
                    extended[innerType.name] = innerType
                } 
                getExtendedTypes(innerType, true)
            } else {
                self.children = self.children.concat(innerType.children)
                getExtendedTypes(innerType)
            }
        })
    }

    getExtendedTypes(data)

    return { self, extended }
}

const Interface = (props: InterfaceProps) => {

    const [ activeName, setActiveName ] = useState(props.data.name) 
    const { self, extended } = useMemo(() =>
        sortTypes(props.data, props.separatedTypes)
    ,[props])

    const types = activeName === props.data.name 
        ? self.children 
        : extended[activeName].children

    const extendedNames = [props.data.name, ...Object.keys(extended)]
    console.log(types)
    
    return (
        <Block>
            <ScrollView mb="1rem">
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
            <Table
                columns={[
                    {
                        key: 'name',
                        title: 'Name'
                    },
                    {
                        key: 'values',
                        title: 'Type',
                        render: (c) => <Value type={c.row as ValueDefinition}/>
                    },
                    {
                        key: 'comment',
                        title: 'Description',
                        render: (c) => <Text children={(c.row as ValueDefinition).comment?.toString()}/>
                    },
                    {
                        key: 'isOptional',
                        title: 'Parameters',
                        render: (c) => <Params type={c.row as ValueDefinition}/>
                    },
                    {
                        key: 'tags',
                        title: 'Default',
                        render: (c) => <Text children={(c.row as ValueDefinition).tags?.default} />
                    },
                ]}
                data={types}
            />
        </Block>
    )
}

export default Interface