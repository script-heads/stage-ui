import { Block, Divider, Flexbox, Header, Paragraph, Text } from '@flow-ui/core'
import { Minus, Plus } from '@flow-ui/core/icons'
import React, { Fragment, useState } from 'react'
import { TypeInterface, TypeInterfaceChild } from '../API'

const toggleArrayItem = (a, v): any[] => {
    let i = a.indexOf(v)
    if (i === -1) return a.concat([v])
    else return a.filter(k => k != v)
}

const sortTypes = (data: TypeInterface, cutTypes?: string[]) => {
    const main: TypeInterface = Object.assign({}, data)
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

    return { main, cut }
}

const Interface = (props: { data: TypeInterface, separatedTypes?: string[] }) => {

    if (!props.data) return null
    const { main, cut } = sortTypes(props.data, props.separatedTypes)
    const [openedCuts, setOpenedCuts] = useState<string[]>([])

    const renderTypes = (data: TypeInterfaceChild[]) =>
        data.map((type: TypeInterfaceChild, index: number) =>
            <Type type={type} last={index === data.length} key={'type' + index} />
        )

    return (
        <Block>
            <Header>{main.name}</Header>
            {renderTypes(main.children)}
            {cut.map((cutInterface, index) => {
                const PlusMinusIcon = openedCuts.includes(cutInterface.name)
                    ? Minus
                    : Plus
                return (
                    <Fragment key={cutInterface.name + index}>
                        <Flexbox
                            py="1rem"
                            alignItems="center"
                            justifyContent="space-between"
                            css={{ cursor: 'pointer' }}
                            onClick={() => setOpenedCuts(toggleArrayItem(openedCuts, cutInterface.name))}>
                            <Text
                                weight="bold"
                                children={cutInterface.name}
                            />
                            <PlusMinusIcon />
                        </Flexbox>
                        <Divider />
                        {openedCuts.includes(cutInterface.name) && renderTypes(cutInterface.children)}
                    </Fragment>
                )
            })}
        </Block>
    )
}

const Type = (props: { type: TypeInterfaceChild, last: boolean }) => {
    const { type, last } = props

    const LightText = (props: { children: string }) => (
        <Text
        size="s"
        color={c => c.hard.css()}
            children={props.children}
        />
    )

    let rightSide: JSX.Element | JSX.Element[] = (
        <LightText>Not documented yet</LightText>
    )

    if (Array.isArray(type.values)) {
        rightSide = type.values.map(value =>
            <Text
                h="fit-content"
                size="s"
                key={value}
                p=".125rem 0.25rem"
                mx=".125rem"
                mb=".25rem"
                backgroundColor={c => c.lightest.css()}
                css={{ borderRadius: '.25rem' }}
                children={`${value}`}
            />
        )
    } else {
        if (typeof type.type !== 'string') {
            if (type.type.type === 'reflection') {
                if (type.type.declaration.signatures) {
                    const signature = type.type.declaration.signatures[0]
                    if (signature.name === '__call') {
                        rightSide = (
                            <span>
                                <LightText children="("/>
                                {signature.parameters?.map((param, index) =>
                                    <LightText
                                        key={param.id}
                                        children={`${param.name}${signature.parameters.length - 1 > index ? ',' : ''}`}
                                    />
                                )}
                                <LightText children=") => "/>
                                <Text
                                    h="fit-content"
                                    size="s"
                                    p=".125rem 0.25rem"
                                    mx=".125rem"
                                    mb=".25rem"
                                    backgroundColor={c => c.lightest.css()}
                                    css={{ borderRadius: '.25rem' }}
                                    children={`${signature.type.name}`}
                                />
                            </span>
                        )
                    }
                }
            }
        }
    }

    let comment = ''

    if (typeof type.comment === 'string') {
        comment = type.comment
    }

    return (
        <Block>
            <Block mt="1rem" mb=".75rem" ml=".5rem">
                <Flexbox css={{ overflow: 'hidden' }}>
                    <Text
                        mr=".5rem"
                        css={{ whiteSpace: 'nowrap' }}
                        flex={1}>
                        &bull;&ensp;
                        {type.deprecated !== void 0 && '[Deprecated] '}
                        {type.name}
                        {(type.isOptional ? '?' : '')}
                    </Text>
                    <Flexbox wrap="wrap" justifyContent="flex-end">
                        {rightSide}
                    </Flexbox>
                </Flexbox>
                <Paragraph
                    ml="1rem"
                    mb=".25rem"
                    display="block"
                    size="s"
                    color={c => c.hard.css()}
                    children={comment}
                />
            </Block>
            {!last && <Divider />}
        </Block>
    )
}

export default Interface