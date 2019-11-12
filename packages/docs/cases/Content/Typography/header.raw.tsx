import React, { Fragment } from 'react'
import { Header } from '@flow-ui/core'

export default () => {
    return (
        <Fragment>
            <Header>Header</Header>
            <Header size={2}>Header</Header>
            <Header size={3}>Header</Header>
            <Header size={4}>Header</Header>
        </Fragment>
    )
}