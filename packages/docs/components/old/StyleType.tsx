import { Block, Text, Flexbox, Paragraph } from '@flow-ui/core'
import React from 'react'
import { ValueDefinition } from '@flow-ui/docs/components/Page/Types/Interface'

interface StyleTypeProps {
    type: ValueDefinition,
}

function getRefelections(type) {
    return Object.values(type.declaration.children).map(value => {
        let show = value.name

        if (value.type.type === 'indexedAccess') {
            show += ': ' + value.type.indexType.value + ' from ' + value.type.objectType.name
        }

        if (value.type.type === 'reference' || value.type.type === 'intrinsic') {
            show += ': ' + value.type.name
        }

        if (value.type.type === 'union') {
            show += ': ' + value.type.types.map(v => v.value).join(' | ')
        }

        return show
    })
}

const StyleType = (props: StyleTypeProps) => {
    const { type } = props

    if (type.values && type.values.includes('void')) {
        return 'No states'
    }

    if (type.type.type === 'reflection') {
        return getRefelections(type.type).map(show => {
            return (
                <Paragraph key={show} m="0">{show}</Paragraph>
            )
        })
    }

    if (type.type === 'reference') {
        return (
            <Flexbox>
                {type.values.map(v => (
                    <Text mr=".5rem" key={v}>{v}</Text>
                ))}
            </Flexbox>
        )
    }

    if (type.type.type === 'intersection') {
        let show = []

        type.type.types.forEach(value => {
            if (value.type === 'indexedAccess') {
                show.push(value.indexType?.value + ' from ' + value.objectType?.name)
            }

            if (value.type === 'reference') {
                show.push(value.name)
            }

            if (value.type === 'reflection') {
                show = show.concat(getRefelections(value))
            }
        })

        return (
            <Text mr=".5rem">{show.join(' & ')}</Text>
        )
    }

    return (
        <Flexbox wrap="wrap">
        </Flexbox>
    )
}

export default StyleType