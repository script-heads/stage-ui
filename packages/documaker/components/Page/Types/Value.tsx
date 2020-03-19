import { Block, Divider, Flexbox, Paragraph, Text } from '@flow-ui/core'
import React from 'react'

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

interface ValueProps { 
    type: ValueDefinition, 
}

const LightText = (props: { children: string }) => (
    <Text
        size="xs"
        color={c => c.hard}
            children={props.children}
    />
)

const Value = (props: ValueProps) => {
    const { type } = props

    let rightSide: JSX.Element | JSX.Element[] = (
        <LightText>Not documented yet</LightText>
    )

    if (Array.isArray(type.values)) {
        rightSide = type.values.map(value =>
            <Text
                h="fit-content"
                size="xs"
                key={value}
                p=".125rem 0.25rem"
                mx=".125rem"
                mb=".25rem"
                backgroundColor={c => {
                    if (value === 'string') {
                        return c.error.alpha(0.2)
                    }
                    if (value === 'number') {
                        return c.success.alpha(0.2)
                    }
                    if (value === 'Boolean') {
                        return c.primary.alpha(0.2)
                    }
                    return c.onSurface.alpha(0.1)
                }}
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
                                    size="xs"
                                    p=".125rem 0.25rem"
                                    mx=".125rem"
                                    mb=".25rem"
                                    backgroundColor={c => c.primary.alpha(0.2)}
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

    return (
        <Block>
            {rightSide}
        </Block>
    )
}

export default Value