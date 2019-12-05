import Divider from '@flow-ui/core/content/Divider'
import Icon from '@flow-ui/core/content/Icon'
import { Header, Text } from '@flow-ui/core'
import Block from '@flow-ui/core/layout/Block'
import Flexbox from '@flow-ui/core/layout/Flexbox'
import React, { Fragment, useState } from 'react'
import {TypeInterfaceChild, TypeInterface} from '.'
export const typedoc = require('../../../generated/types.json')

const toggleArrayItem = (a, v): any[] => {
    let i = a.indexOf(v)
    if (i === -1) return a.concat([v])
    else return a.filter(k => k != v)
}

const sortTypes = (data: TypeInterface, cutTypes?: string[]) => {
    const main: TypeInterface = data
    const cut: TypeInterface[] = []

    if (cutTypes) {
        const getExtendedTypes = (type: TypeInterface, cutted?: boolean) => {
            type.extendedTypes.map(innerType => {
                if (cutTypes.includes(innerType.name) || cutted) {
                    innerType.children.length > 0
                    && cut.push(innerType),
                    getExtendedTypes(innerType, true)
                } else {
                    innerType.children.length > 0
                    && (main.children = main.children.concat(innerType.children))
                    getExtendedTypes(innerType)
                }
            })
        }
        getExtendedTypes(data)
    }

    return {main,cut}
}

const Interface = (props: {data: TypeInterface, cutTypes?: string[]}) => {

    const {main, cut} = sortTypes(props.data, props.cutTypes)
    const [openedCuts, setOpenedCuts] = useState<string[]>([])
    
    const renderInterface = (data: TypeInterfaceChild[]) => 
        data.map((type:TypeInterfaceChild, index: number ) =>
            <Type type={type} last={index === data.length} key={type.id}/>
    )

    return (
        <Block flex={1} mr="2rem">
            <Header>{main.name}</Header>
            {renderInterface(main.children)}
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
                    {openedCuts.includes(cutInterface.name) && renderInterface(cutInterface.children)}
                </Fragment>
            ))}
        </Block>
    )
}

const Type = (props: { type: TypeInterfaceChild, last: boolean} ) => {
    const {type, last} = props
    let color = '#f3f3f3'
    if (type.type === 'reference') {
        color = '#fadeff'
    }
    if (type.type === 'stringLiteral') {
        color = '#ffdede'
    }
    if (type.type === 'intrinsic') {
        color = '#deffe4'
    }
    if (type.type === 'reflection') {
        color = '#fdffde'
    }
    return (
        <Block key={type.id}>
            <Block mt="1rem" mb="1rem" ml=".5rem">
                <Flexbox>
                    <Text 
                        flex={1}>
                        &#8226;&ensp;{type.name+(type.isOptional ? '?' : '')}
                    </Text>
                    {Array.isArray(type.values)
                        && type.values.map(value =>
                            <Text 
                                size={2}
                                key={value}
                                // background={color}
                                p={'0.125rem'}
                                pl={'0.35rem'}
                                pr={'0.35rem'}
                                textColor={c => c.light.css()}
                                // css={{
                                //     color: '#000', margin: '0 2px',
                                //     borderRadius: '4px'
                                // }}
                                children={`${value}`}
                            />
                        )}
                    {!Array.isArray(type.values) && (
                        <Text 
                            size={2}
                            color={c => c.hard.css()}
                            children="Not documented yet"
                        />
                    )}
                    {type.deprecated !== void 0 && (
                        <Text 
                            size={2}
                            p={'0.125rem'}
                            pl={'0.35rem'}
                            pr={'0.35rem'}
                            mr={'0.25rem'}
                            children={'Deprecated'}
                            background={'#000'}
                            color={'#fff'}
                            css={{ borderRadius: '0.35rem' }}
                        />
                    )}
                </Flexbox>
            </Block>
            {typeof type.comment === 'string' && (
                <Fragment>
                    <Block m="1rem" mt="0">
                        {type.comment.split('\n').map((text, index) => (
                            <Text size={2} color={c => c.hard.css()} key={index}>{text}</Text>
                        ))}
                    </Block>
                </Fragment>
            )}
            {
                !last && (
                    <Divider />
                )
            }
        </Block>
    )
}

export default Interface