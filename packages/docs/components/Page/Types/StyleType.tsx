import { Text, Flexbox, Paragraph } from '@stage-ui/core'
import React from 'react'
import { Property, OTypeIntrinsic, OTypeReflection } from '@stage-ui/docs/utils/types'

function getRefelections(value: OTypeReflection) {
    return Object.values(value.declaration.children).map(child => {
        let show = child.name

        if (child.type.type === 'indexedAccess') {
            show += ': ' + child.type.indexType.value + ' from ' + child.type.objectType.name
        }

        if (child.type.type === 'reference' || child.type.type === 'intrinsic') {
            show += ': ' + child.type.name
        }

        if (child.type.type === 'union') {
            show += ': ' + child.type.types.map(v => v.value).join(' | ')
        }

        return show
    })
}

const StyleType = (props: { property: Property }) => {
    const { property } = props

    if ((property.value as OTypeIntrinsic)?.name === 'void') {
        return 'No states'
    }

    if (property.value.type === 'reflection') {
        return getRefelections(property.value).map(show => {
            return (
                <Paragraph key={show} m="0">{show}</Paragraph>
            )
        })
    }

    if (property.value.type === 'reference') {
        return (
            <Text>{property.value.name}</Text>
        )
    }

    if (property.value.type === 'intersection') {
        let show: string[] = []

        property.value.types.forEach(innerType => {
            if (innerType.type === 'indexedAccess') {
                show.push(innerType.indexType?.value + ' from ' + innerType.objectType?.name)
            }

            if (innerType.type === 'reference') {
                show.push(innerType.name)
            }

            if (innerType.type === 'reflection') {
                show = show.concat(getRefelections(innerType))
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