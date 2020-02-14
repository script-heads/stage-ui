import { ScrollView } from '@flow-ui/core'
import React from 'react'

export default () => {
    return (
        <ScrollView 
            mode="always"
            size="xs"
            shape="round"
            children={'˚ •'.repeat(1000)}
        />
    )
}