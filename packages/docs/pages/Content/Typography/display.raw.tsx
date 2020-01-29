import React, { Fragment } from 'react'
import { Display } from '@flow-ui/core'

export default () => {
    return (
        <Fragment>
            <Display size="xl">Extra large</Display>
            <Display size="l">Large</Display>
            <Display size="m">Medium</Display>
            <Display size="s">Small</Display>
            <Display size="xs">Extra small</Display>
        </Fragment>
    )
}