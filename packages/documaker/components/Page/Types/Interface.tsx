import React, { Fragment, useMemo } from 'react'
import { Block, Divider, Header, Text, Tree } from '@flow-ui/core'
import Value, { ValueDefinition } from './Value'

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
    const extended: InterfaceDefinition[] = []
    let extendedCode = ''

    const getExtendedTypes = (type: InterfaceDefinition, cutted?: boolean) => {
        type.extendedTypes.map(innerType => {
            if (separatedTypes && separatedTypes.includes(innerType.name) || cutted) {
                innerType.children.length > 0 && extended.push(innerType)
                extendedCode += innerType.name
                getExtendedTypes(innerType, true)
            } else {
                self.children = self.children.concat(innerType.children)
                getExtendedTypes(innerType)
            }
        })
    }

    getExtendedTypes(data)

    return { self, extended, extendedCode }
}

const Interface = (props: InterfaceProps) => {

    const { self, extended, extendedCode } = sortTypes(props.data, props.separatedTypes)

    const renderTypes = (data: ValueDefinition[]) =>
        data.map((type: ValueDefinition, index: number) =>
            <Value type={type} last={index === data.length - 1} key={'type' + index} />
        )
    
    const extendedTypes = useMemo(()=> {
        return extended.map((type, index) => (
            <Fragment key={type.name + index}>
                <Tree
                    py="1rem" 
                    label={
                        <Text
                            weight="bold"
                            children={type.name}
                        />
                    } 
                    children={<Block>{renderTypes(type.children)}</Block>}
                />
                <Divider />
            </Fragment>


        ))
    },[extendedCode])

    return (
        <Block>
            <Header>{props.data.name}</Header>
            {renderTypes(self.children)}
            {extendedTypes}
        </Block>
    )
}

export default Interface