import { Block, Text, Flexbox } from '@flow-ui/core'
import React from 'react'
import Types, { Property, OType } from '@flow-ui/docs/utils/types'

// import { ValueDefinition } from '@flow-ui/docs/components/Page/Types/Interface'
// interface ValueProps {
//     type: ValueDefinition,
// }

const LightText = (props: { children: string }) => (
    <Text
        size="xs"
        color={c => c.hard}
        children={props.children}
    />
)

const Value = (props: { property: Property }) => {
    const { property } = props

    let values: JSX.Element[] = []

    let Badge = (props: { text: string }) => (
        <Text
            h="fit-content"
            size="xs"
            p=".125rem 0.25rem"
            mx=".125rem"
            mb=".25rem"
            backgroundColor={c => {
                switch (props.text) {
                    case 'string': return c.error.alpha(0.2)
                    case 'number': return c.success.alpha(0.2)
                    case 'boolean': return c.primary.alpha(0.2)
                    case 'function': return c.primary.alpha(0.3)
                    default: return c.error.alpha(0.1)
                }
            }}
            css={{ borderRadius: '.25rem' }}
            children={`${props.text}`}
        />
    )

    const { value } = property

    let val = value

    const push = (val: OType) => {
        let isArray = false
        let ret = <span />

        if (val.type === 'array') {
            val = val.elementType
            isArray = true
        }
        if (val.type === 'reflection') {
            if (val.declaration.signatures) {
                ret = (
                    <Badge text={'function'} />
                )
            }
        }
        if (val.type === 'intrinsic') {
            ret = (
                <Badge text={val.name} />
            )
        }
        if (val.type === 'stringLiteral') {
            ret = (
                <Badge text={val.value} />
            )
        }
        if (val.type === 'reference') {
            ret = (
                <span children={val.name} />
            )
        }
        
        values.push(isArray
            ? <span key={Math.random()}>{`Array<`}{ret}{`>`}</span>
            : <span key={Math.random()}>{ret}</span>
        )
    }

    if (val.type === 'union') {
        val.types.map(val => push(val))
    } else {
        push(val)
    }
    
    if (values.length === 0) {
        values.push(
            <LightText key={Math.random()}>Not documented yet</LightText>
        )
    }

    return (
        <Flexbox wrap="wrap">
            {values}
        </Flexbox>
    )
}

export default Value