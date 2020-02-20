import { ScrollView } from '@flow-ui/core'
import React from 'react'

export default () => {
    return (
        <ScrollView 
            shape="round"
            children={'˚ •'.repeat(1000)}
        />
    )
}