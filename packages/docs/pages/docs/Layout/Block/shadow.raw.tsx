import React from 'react'
import { Block } from '@stage-ui/core'

export default () => {
    return (
        <React.Fragment>
            <Block
                p="1rem"
                mb="1rem"
                decoration="surface"
                children="Simple surface"
            />
            <Block
                p="1rem"
                mb="1rem"
                decoration="minorShadow"
                children="Minor shadow surface"
            />
            <Block
                p="1rem"
                mb="1rem"
                decoration="mediumShadow"
                children="Medium shadow surface"
            />
            <Block
                p="1rem"
                mb="1rem"
                decoration="majorShadow"
                children="Major shadow surface"
            />
        </React.Fragment>
    )
}