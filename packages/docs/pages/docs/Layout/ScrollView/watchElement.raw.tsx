import { Block, notify, ScrollView } from '@stage-ui/core'
import T from '@stage-ui/core/layout/ScrollView/types'
import React, { useRef } from 'react'

export default () => {
    const ref = useRef<T.Ref>(null)
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const watchElement: T.Props['watchElement'] = (id, element) => {
        notify({
            title:'Element',
            message: id,
            timeout: 250
        })
    }

    return (
        <ScrollView shape="round" ref={ref} watchElement={watchElement}>
            {items.map((i) => (
                <Block data-id={`item_${i}`} key={i} decoration="surface" p="m" mb="xs">Element {i}</Block>
            ))}
        </ScrollView>
    )
}