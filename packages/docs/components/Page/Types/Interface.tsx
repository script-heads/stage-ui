import React, { useState, useMemo } from 'react'
import { Block, Header, Flexbox, Table, ScrollView } from '@flow-ui/core'
import TableTypes from '@flow-ui/core/data/Table/types'
import { Interface as InterfaceType, Property } from '../../../system/types'

interface InterfaceProps {
    data: InterfaceType,
    separatedTypes?: string[]
    columns: TableTypes.TableColumn<Property>[]
}

// const sortTypes = (data: InterfaceType, separatedTypes?: string[]) => {
//     const self: InterfaceType = Object.assign({}, data)
//     const separated: Record<string, InterfaceType> = {}

//     const getExtendedTypes = (type: InterfaceType, parent?: string) => {
//         type.extendedProps.map(innerType => {
//             if (separatedTypes && separatedTypes.includes(innerType.name) || parent) {
//                 if (parent) {
//                     separated[parent].props = separated[parent].props.concat(innerType.props)
//                 } else {
//                     separated[innerType.name] = innerType
//                 }
//                 getExtendedTypes(innerType, parent || innerType.name)
//             } else {
//                 self.props = self.props.concat(innerType.props)
//                 getExtendedTypes(innerType)
//             }
//         })
//     }

//     getExtendedTypes(self)

//     return { self, separated }
// }

const getAllInterfaces = (types: InterfaceType) => {
    const extendedInterfaces: InterfaceType[] = [types]
    const fillExtendedTypes = (types: InterfaceType[]) => {
        for (const extendedType of types) {
            if (extendedType.extendedTypes.length === 0) {
                extendedInterfaces.push(extendedType)
            }
            fillExtendedTypes(extendedType.extendedTypes)
        }
    }
    fillExtendedTypes(types.extendedTypes)
    return extendedInterfaces
}

const Interface = (props: InterfaceProps) => {
    
    const [active, setActive] = useState(props.data.id)

    // const { self, separated } = useMemo(() => {
    //     setActive(props.data.name)
    //     return sortTypes(props.data, props.separatedTypes)
    // }, [props])

    // const extendedNames = [props.data.name, ...Object.keys(separated)]

    const allInterfaces = getAllInterfaces(props.data)
    const types = allInterfaces.find(item => item.id === active)

    return (
        <Block>
            <div style={{ position: 'relative', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                <ScrollView size="xs">
                    <Flexbox>
                        {allInterfaces.map(item => (
                            <Header
                                key={item.id}
                                mr="1.5rem"
                                children={item.name}
                                color={item.id === active ? 'onBackground' : 'light'}
                                onClick={() => setActive(item.id)}
                            />
                        ))}
                    </Flexbox>
                </ScrollView>
            </div>
            <Table
                columns={props.columns}
                data={types?.types || []}
            />
        </Block>
    )
}

export default Interface