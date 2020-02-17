import { Button, ScrollView } from '@flow-ui/core'
import ScrollViewTypes from '@flow-ui/core/layout/ScrollView/types'
import React, { useRef } from 'react'

export default () => {
    const ref = useRef<ScrollViewTypes.Ref>(null)

    return (
        <ScrollView
            mode="always"
            size="xs"
            shape="round"
            ref={ref}>
            {'˚ •'.repeat(1000)}
            <Button
                onClick={() => {
                    ref.current?.scrollTop()
                }}
                children="Scroll top"
            />
        </ScrollView>
    )
}