import React, { Fragment } from 'react'
import { Header } from '@flow-ui/core'

export default () => {
    return (
        <Fragment>
            <Header size="xl">Extra large</Header>
            <Header size="l">Large</Header>
            <Header size="m">Medium</Header>
            <Header size="s">Small</Header>
            <Header size="xs">Extra small</Header>
        </Fragment>
    )
}