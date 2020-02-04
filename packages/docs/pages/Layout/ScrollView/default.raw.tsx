import { ScrollView } from '@flow-ui/core'
import React from 'react'

export default () => {
    return (
        <ScrollView 
            mode="always"
            size="m"
            shape="round"
            children={'Text '.repeat(200)}
        />
    )
}