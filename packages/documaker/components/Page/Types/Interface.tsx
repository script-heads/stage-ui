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
    console.log(separated)
    const types = activeName === props.data.name 
        ? self.children 
        : separated[activeName].children

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