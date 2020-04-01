import { Block, Text, Flexbox } from '@flow-ui/core'
import React from 'react'
import Types, { Property } from '@flow-ui/docs/system/types'

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

    let rightSide: JSX.Element | JSX.Element[] = (
        <LightText>Not documented yet</LightText>
    )

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
                    default: return c.error.alpha(0.1)
                }
            }}
            css={{ borderRadius: '.25rem' }}
            children={`${props.text}`}
        />
    )

    const { value } = property

    rightSide = value.map((item, index) => {
        let isArray = false
        let ret =  <span />
        let val = item

        if (val.type === 'array') {
            val = val.elementType
            isArray = true
        }
        if (val.type === 'intrinsic') {
            ret = <Badge text={val.name} />
        }
        if (val.type === 'stringLiteral') {
            ret = <Badge text={val.value} />
        }
        if (val.type === 'reference') {
            if (val.id) {
                // как найти референс
                const reference = Types.find(val.id)
            }
            ret = <span children={val.name} />
        }
        if (isArray) {
            return (
            <span key={index}>{`Array<`}{ret}{`>`}</span>
            )
        }
        return (
            <span key={index}>{ret}</span>
        )
    })

    // if (Array.isArray(type.values)) {
    //     rightSide = type.values.map(value =>
    //         <Text
    //             h="fit-content"
    //             size="xs"
    //             key={value}
    //             p=".125rem 0.25rem"
    //             mx=".125rem"
    //             mb=".25rem"
    //             backgroundColor={c => {
    //                 if (value === 'string') {
    //                     return c.error.alpha(0.2)
    //                 }
    //                 if (value === 'number') {
    //                     return c.success.alpha(0.2)
    //                 }
    //                 if (value === 'Boolean') {
    //                     return c.primary.alpha(0.2)
    //                 }
    //                 return c.onSurface.alpha(0.1)
    //             }}
    //             css={{ borderRadius: '.25rem' }}
    //             children={`${value}`}
    //         />
    //     )
    // } else {
    //     if (typeof type.type !== 'string') {
    //         if (type.type.type === 'reflection') {
    //             if (type.type.declaration.signatures) {
    //                 const signature = type.type.declaration.signatures[0]
    //                 if (signature.name === '__call') {
    //                     rightSide = (
    //                         <span>
    //                             <LightText children="(" />
    //                             {signature.parameters?.map((param, index) =>
    //                                 <LightText
    //                                     key={param.id}
    //                                     children={`${param.name}${signature.parameters.length - 1 > index ? ',' : ''}`}
    //                                 />
    //                             )}
    //                             <LightText children=") => " />
    //                             <Text
    //                                 h="fit-content"
    //                                 size="xs"
    //                                 p=".125rem 0.25rem"
    //                                 mx=".125rem"
    //                                 mb=".25rem"
    //                                 backgroundColor={c => c.primary.alpha(0.2)}
    //                                 css={{ borderRadius: '.25rem' }}
    //                                 children={`${signature.type.name}`}
    //                             />
    //                         </span>
    //                     )
    //                 }
    //             }
    //         }
    //     }
    // }

    return (
        <Flexbox wrap="wrap">
            {rightSide}
        </Flexbox>
    )
}

export default Value