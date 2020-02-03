import { Block, Drop } from '@flow-ui/core'
import React from 'react'

export default () => {
    return (
        <Drop followCursor>
            <Block
                surface="major"
                children="Let me go!"
                p=".5rem 1rem"
            />
        </Drop>
    )
}