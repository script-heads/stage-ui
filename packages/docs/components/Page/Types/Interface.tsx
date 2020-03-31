import React, { useState, useMemo } from 'react'
import { Block, Header, Flexbox, Table, ScrollView } from '@flow-ui/core'
import TableTypes from '@flow-ui/core/data/Table/types'
import { Interface as InterfaceType } from '../../../system/types'

interface InterfaceProps {
    data: InterfaceType,
    separatedTypes?: string[]
    columns: TableTypes.TableColumn[]
}

const sortTypes = (data: InterfaceType, separatedTypes?: string[]) => {
    const self: InterfaceType = Object.assign({}, data)
    const separated: Record<string, InterfaceType> = {}

    const getExtendedTypes = (type: InterfaceType, parent?: string) => {
        type.extendedProps.map(innerType => {
            if (separatedTypes && separatedTypes.includes(innerType.name) || parent) {
                if (parent) {
                    separated[parent].props = separated[parent].props.concat(innerType.props)
                } else {
                    separated[innerType.name] = innerType
                }
                getExtendedTypes(innerType, parent || innerType.name)
            } else {
                self.props = self.props.concat(innerType.props)
                getExtendedTypes(innerType)
            }
        })
    }

    getExtendedTypes(self)

    return { self, separated }
}

const Interface = (props: InterfaceProps) => {

    const [activeName, setActiveName] = useState(props.data.name)
    const { self, separated } = useMemo(() => {
        setActiveName(props.data.name)
        return sortTypes(props.data, props.separatedTypes)
    }, [props])

    const types = activeName === props.data.name
        ? self.props
        : separated[activeName]?.props

    const extendedNames = [props.data.name, ...Object.keys(separated)]

    return (
        <Block>
            <div style={{ position: 'relative', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                <ScrollView size="xs">
                    <Flexbox>
                        {extendedNames.map(name => (
                            <Header
                                key={name}
                                mr="1.5rem"
                                children={name}
                                color={name === activeName ? 'onBackground' : 'light'}
                                onClick={() => setActiveName(name)}
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