import {Header, Text, Divider, Icon, Flexbox, Block, Paragraph} from '@flow-ui/core'
import React, { Fragment, useState } from 'react'
import {TypeInterfaceChild, TypeInterface} from '../API'

const toggleArrayItem = (a, v): any[] => {
    let i = a.indexOf(v)
    if (i === -1) return a.concat([v])
    else return a.filter(k => k != v)
}

const sortTypes = (data: TypeInterface, cutTypes?: string[]) => {
    const main: TypeInterface = Object.assign({},data)
    const cut: TypeInterface[] = []

    const getExtendedTypes = (type: TypeInterface, cutted?: boolean) => {
        type.extendedTypes.map(innerType => {
            if (cutTypes && cutTypes.includes(innerType.name) || cutted) {
                innerType.children.length > 0 && cut.push(innerType)
                getExtendedTypes(innerType, true)
            } else {
                main.children = main.children.concat(innerType.children)
                getExtendedTypes(innerType)
            }
        })
    }
    
    getExtendedTypes(data)

    return {main,cut}
}

const Interface = (props: {data: TypeInterface, separatedTypes?: string[]}) => {

    if (!props.data) return null
    const {main, cut} = sortTypes(props.data, props.separatedTypes)
    const [openedCuts, setOpenedCuts] = useState<string[]>([])
    
    const renderTypes = (data: TypeInterfaceChild[]) => 
        data.map((type:TypeInterfaceChild, index: number ) =>
            <Type type={type} last={index === data.length} key={'type'+index}/>
    )
    
    return (
        <Block flex={1} mr="2rem">
            <Header>{main.name}</Header>
            {renderTypes(main.children)}
            {cut.map((cutInterface, index) => (
                <Fragment key={cutInterface.name+index}>
                    <Flexbox
                        py="1rem" 
                        alignItems="center"
                        justifyContent="space-between"
                        css={{cursor: 'pointer'}}
                        onClick={() => setOpenedCuts(toggleArrayItem(openedCuts,cutInterface.name))}>
                        <Text 
                            weight="bold" 
                            children={cutInterface.name}
                        />
                        <Icon 
                            type={i => openedCuts.includes(cutInterface.name)
                                ? i.filled.minus
                                : i.filled.plus
                            }
                        />
                    </Flexbox>
                    <Divider/>
                    {openedCuts.includes(cutInterface.name) && renderTypes(cutInterface.children)}
                </Fragment>
            ))}
        </Block>
    )
}

const Type = (props: { type: TypeInterfaceChild, last: boolean} ) => {
    const {type, last} = props
    
    return (
        <Block>
            <Block mt="1rem" mb=".75rem" ml=".5rem">
                <Flexbox>
                    <Text
                        mr=".5rem"
                        css={{whiteSpace: 'nowrap'}} 
                        flex={1}>
                        &bull;&ensp;
                        {type.deprecated !== void 0 && '[Deprecated] '}
                        {type.name}
                        {(type.isOptional ? '?' : '')}
                    </Text>
                    <Flexbox wrap="wrap" justifyContent="flex-end">
                        {Array.isArray(type.values)
                            ? type.values.map(value =>
                                <Text
                                    h="fit-content"
                                    size={2}
                                    key={value}
                                    p=".125rem 0.25rem"
                                    mx=".125rem"
                                    mb=".25rem"
                                    backgroundColor={c => c.lightest.css()}
                                    css={{borderRadius: '.25rem'}}
                                    children={`${value}`}
                                />
                            )
                            : (
                                <Text
                                    size={2}
                                    color={c => c.hard.css()}
                                    children="Not documented yet"
                                />
                            )
                        }
                    </Flexbox>                        
                </Flexbox>
                <Paragraph
                    ml="1rem"
                    mb=".25rem"
                    display="block"
                    size={2} 
                    color={c => c.hard.css()} 
                    children={JSON.stringify(type.comment)}
                />
            </Block>
            {!last && <Divider />}
        </Block>
    )
}

export default Interface